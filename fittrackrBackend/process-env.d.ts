declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        PORT: string;
        DATABASE_URL: string;
        FIREBASE_PROJECT_ID: string;
        // add more environment variables and their types here
      }
    }
  }