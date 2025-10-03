// Configuration for the DiabeFree Life application
export const config = {
  // Rails API backend URL - change this if running on different ports
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1',
  
  // App configuration
  app: {
    name: 'DiabeFree Life',
    description: 'India\'s Best Type 2 Diabetes Reversal Program',
  }
};

export default config;
