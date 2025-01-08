export const convertToHexString = (uint8Array: Uint8Array): string => {
    return '0x' + Array.from(uint8Array)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  };
  