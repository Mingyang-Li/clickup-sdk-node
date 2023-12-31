import axios, { AxiosError, AxiosResponse } from 'axios';
import { Routes } from '../constants/routes';
import { ResultAsync, fromPromise } from 'neverthrow';
import * as ConfigService from './common/config.service';

export type GetAuthorizedUserArgs = {
  config: ConfigService.ClickUpConfig;
};
export type GetAuthorizedUserResBody = {
  user: {
    id: number;
    username: string;
    email: string;
    color: string;
    profilePicture: string;
    initials: string;
    week_start_day: unknown;
    global_font_support: boolean;
    timezone: string;
  };
};
export const getAuthorizedUser = async (
  args: GetAuthorizedUserArgs,
): Promise<
  ResultAsync<AxiosResponse<GetAuthorizedUserResBody>, AxiosError>
> => {
  const url = Routes.GET_AUTHORIZED_USER;
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.get<GetAuthorizedUserResBody>(url, config).then(res => res),
    (error: AxiosError) => error,
  );
};

export type GetAuthorizedTeamsArgs = {
  config: ConfigService.ClickUpConfig;
};
export type GetAuthorizedTeamsResBody = { teams: Array<unknown> };
export const getAuthorizedTeams = async (
  args: GetAuthorizedTeamsArgs,
): Promise<
  ResultAsync<AxiosResponse<GetAuthorizedTeamsResBody>, AxiosError>
> => {
  const url = Routes.GET_AUTHORISED_TEAMS;
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.get<GetAuthorizedTeamsResBody>(url, config).then(res => res),
    (error: AxiosError) => error,
  );
};
