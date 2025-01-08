import { useState } from "react";

function useFileToBinary() {
  const [error, setError] = useState<string | null>(null);

  const convertFileToBinary = (
    file: File,
    onSuccess: (binaryData: Uint8Array) => void
  ) => {
    const reader = new FileReader();

    // Cuando el archivo se haya cargado correctamente
    reader.onloadend = () => {
      if (reader.result) {
        const arrayBuffer = reader.result as ArrayBuffer;
        const binaryData = new Uint8Array(arrayBuffer);
        onSuccess(binaryData); // Llama al callback con el binario
      }
    };

    // En caso de error durante la conversión
    reader.onerror = () => {
      setError("Error al leer el archivo.");
    };

    // Leer el archivo como ArrayBuffer
    reader.readAsArrayBuffer(file);
  };

  return { convertFileToBinary, error };
}

export default useFileToBinary;
