declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        MONGODB_CONNECTION_URL: string;
      }
    }
  }