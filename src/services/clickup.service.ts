import axios, { AxiosRequestConfig } from 'axios';
import { Routes } from '@/constants/routes';

type ClickUpConfig = {
  apiKey: string;
};

type GetAuthorizedUserArgs = {
  config: ClickUpConfig;
};

export const buildClickUpConfigs = (apiKey: string): AxiosRequestConfig => ({
  headers: {
    Authorization: apiKey,
  },
});

export const getAuthorizedUser = async (args: GetAuthorizedUserArgs) => {
  const url = Routes.GET_AUTHORIZED_USER;
  const config = buildClickUpConfigs(args.config.apiKey);
  return await axios
    .get(url, config)
    .then(res => res)
    .catch(e => {
      throw e;
    });
};

// export const getAuthorizedTeams = () => { }
