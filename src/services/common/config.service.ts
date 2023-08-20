import { AxiosRequestConfig } from 'axios';

export type ClickUpConfig = {
  apiKey: string;
};

export const buildClickUpConfigs = (apiKey: string): AxiosRequestConfig => ({
  headers: {
    Authorization: apiKey,
  },
});
