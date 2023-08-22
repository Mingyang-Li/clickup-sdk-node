import axios, { AxiosError, AxiosResponse } from 'axios';
import { ResultAsync, fromPromise } from 'neverthrow';
import { Routes } from '../constants/routes';
import * as ConfigService from '../services/common/config.service';

export type GetTaskCommentsArgs = {
  config: ConfigService.ClickUpConfig;
  query: { taskId: string };
  params?: {
    custom_task_ids?: 'true' | 'false';
    team_id?: string;
    start?: string;
    start_id?: string;
  };
};
export type Comment = {
  id: string;
  [key: string]: unknown;
};
export type GetTaskCommentsResBody = {
  comments: Array<Comment>;
};
export const getTaskComments = async (
  args: GetTaskCommentsArgs,
): Promise<ResultAsync<AxiosResponse<GetTaskCommentsResBody>, AxiosError>> => {
  const url = Routes.GET_TASK_COMMENTS(args);
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.get<GetTaskCommentsResBody>(url, config).then(d => d),
    (error: AxiosError) => error,
  );
};

export type CreateTaskCommentArgs = {
  config: ConfigService.ClickUpConfig;
  query: { taskId: string };
  body: {
    comment_text: string;
    assignee: number;
    notify_all: boolean;
  };
  params?: {
    custom_task_ids?: 'true' | 'false';
    team_id?: string;
  };
};
export type CreateTaskCommentResBody = {
  id: number;
  hist_id: string;
  date: number;
};
export const createTaskComment = async (
  args: CreateTaskCommentArgs,
): Promise<
  ResultAsync<AxiosResponse<CreateTaskCommentResBody>, AxiosError>
> => {
  const url = Routes.CREATE_TASK_COMMENT(args);
  const { body } = args;
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.post<CreateTaskCommentResBody>(url, body, config).then(d => d),
    (error: AxiosError) => error,
  );
};
