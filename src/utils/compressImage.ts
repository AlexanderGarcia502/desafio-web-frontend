export const compressImage = (
  file: File,
  callback: (compressedFile: File) => void
) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target?.result as string;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width / 2;
      canvas.height = img.height / 2;
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, {
              type: file.type,
            });
            callback(compressedFile);
          }
        },
        file.type,
        0.7
      ); // Calidad al 70%
    };
  };
};
