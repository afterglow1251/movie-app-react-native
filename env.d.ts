declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly EXPO_PUBLIC_MOVIES_BASE_URL: string;
      readonly EXPO_PUBLIC_MOVIES_API_KEY: string;
      readonly EXPO_PUBLIC_APPWRITE_PROJECT_ID: string;
      readonly EXPO_PUBLIC_APPWRITE_DATABASE_ID: string;
      readonly EXPO_PUBLIC_APPWRITE_COLLECTION_ID: string;
      readonly EXPO_PUBLIC_APPWRITE_ENDPOINT: string;
    }
  }
}

export {};
