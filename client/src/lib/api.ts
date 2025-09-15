const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1`;

// Define the API routes in a structured way
export const API_ROUTES = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    ME: `${BASE_URL}/auth/me`,
  },
  ADMIN: {

  }
} as const;

export const localKey = {
  token: `store-app-token`,
}

