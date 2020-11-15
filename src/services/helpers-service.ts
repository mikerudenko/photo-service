export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(true), ms));

export const getFileExtension = (file: File) => file.name.split('.').pop();
