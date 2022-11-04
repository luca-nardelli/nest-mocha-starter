import { config as loadDotenv } from 'dotenv';

export function loadEnvironment(){
  const envs = [
    `.env.${process.env.APP_ENV}.local`,
    `.env.${process.env.APP_ENV}`,
    '.env.local',
    '.env',
  ];
  for (const env of envs) {
    loadDotenv({ path: env });
  }
}
