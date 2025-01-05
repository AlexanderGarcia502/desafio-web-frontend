export function handleError(error: unknown) {
  if (typeof error === "object" && error !== null && "response" in error) {
    return (error as any).response?.data?.message || "Error desconocido";
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Error desconocido";
}
