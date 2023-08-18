import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Routes } from '../constants/routes';
import { ResultAsync, fromPromise } from 'neverthrow';

type ClickUpConfig = {
  apiKey: string;
};

export const buildClickUpConfigs = (apiKey: string): AxiosRequestConfig => ({
  headers: {
    Authorization: apiKey,
  },
});

export type GetAuthorizedUserArgs = {
  config: ClickUpConfig;
};
export type GetAuthorizedUserResBody = {
  user: {
    id: number
    username: string
    email: string
    color: string
    profilePicture: string
    initials: string
    week_start_day: unknown
    global_font_support: boolean
    timezone: string
  }
};
export const getAuthorizedUser = async (args: GetAuthorizedUserArgs): Promise<
  ResultAsync<AxiosResponse<GetAuthorizedUserResBody>, AxiosError>
> => {
  const url = Routes.GET_AUTHORIZED_USER;
  const config = buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.get<GetAuthorizedUserResBody>(url, config).then(d => d),
    (error: AxiosError) => error,
  );
};

type GetAuthorizedTeamsArgs = {
  config: ClickUpConfig;
};
export type GetAuthorizedTeamsResBody = { teams: Array<unknown> };
export const getAuthorizedTeams = async (
  args: GetAuthorizedTeamsArgs,
): Promise<
  ResultAsync<AxiosResponse<GetAuthorizedTeamsResBody>, AxiosError>
> => {
  const url = Routes.GET_AUTHORISED_TEAMS;
  const config = buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.get<GetAuthorizedTeamsResBody>(url, config).then(d => d),
    (error: AxiosError) => error,
  );
};
