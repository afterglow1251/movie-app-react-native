import axios from "axios";

export const handleApiError = (error: unknown): never => {
  const errorMessage = axios.isAxiosError(error)
    ? `API Error: ${error.response?.data?.status_message || error.message}`
    : `Unexpected error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;

  throw new Error(errorMessage);
};
