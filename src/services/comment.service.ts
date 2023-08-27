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
    axios.get<GetTaskCommentsResBody>(url, config).then(res => res),
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
    axios.post<CreateTaskCommentResBody>(url, body, config).then(res => res),
    (error: AxiosError) => error,
  );
};

export type GetChatViewCommentsArgs = {
  config: ConfigService.ClickUpConfig;
  query: { viewId: string };
  params?: {
    start?: string;
    start_id?: string;
  };
};
export type GetChatViewCommentsResBody = {
  comments: Array<Comment>;
};
export const getChatViewComments = async (
  args: GetChatViewCommentsArgs,
): Promise<
  ResultAsync<AxiosResponse<GetChatViewCommentsResBody>, AxiosError>
> => {
  const url = Routes.GET_CHAT_VIEW_COMMENTS(args);
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.get<GetChatViewCommentsResBody>(url, config).then(res => res),
    (error: AxiosError) => error,
  );
};

export type CreateChatViewCommentArgs = {
  config: ConfigService.ClickUpConfig;
  query: { viewId: string };
  body: {
    comment_text: string;
    notify_all: boolean;
  };
};
export type CreateChatViewCommentResBody = {
  id: string;
  hist_id: string;
  date: number;
};
export const createChatViewComment = async (
  args: CreateChatViewCommentArgs,
): Promise<
  ResultAsync<AxiosResponse<CreateChatViewCommentResBody>, AxiosError>
> => {
  const url = Routes.CREATE_CHAT_VIEW_COMMENT(args);
  const { body } = args;
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios
      .post<CreateChatViewCommentResBody>(url, body, config)
      .then(res => res),
    (error: AxiosError) => error,
  );
};

export type GetListCommentsArgs = {
  config: ConfigService.ClickUpConfig;
  query: {
    listId: string;
  };
  params?: {
    start?: string;
    start_id?: string;
  };
};
export type GetListCommentsResBody = {
  comments: Array<Comment>;
};

export const getListComments = async (
  args: GetListCommentsArgs,
): Promise<ResultAsync<AxiosResponse<GetListCommentsResBody>, AxiosError>> => {
  const url = Routes.GET_LIST_COMMENTS(args);
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.get<GetListCommentsResBody>(url, config).then(res => res),
    (error: AxiosError) => error,
  );
};

export type CreateListCommentArgs = {
  config: ConfigService.ClickUpConfig;
  query: {
    listId: string;
  };
  body: {
    comment_text: string;
    assignee: number;
    notify_all: boolean;
  };
};
export type CreateListCommentResBody = {
  id: string;
  hist_id: string;
  date: number;
};
export const createListComment = async (
  args: CreateListCommentArgs,
): Promise<
  ResultAsync<AxiosResponse<CreateListCommentResBody>, AxiosError>
> => {
  const url = Routes.CREATE_LIST_COMMENT(args);
  const { body } = args;
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.post<CreateListCommentResBody>(url, body, config).then(res => res),
    (error: AxiosError) => error,
  );
};

export type UpdateCommentArgs = {
  config: ConfigService.ClickUpConfig;
  query: {
    commentId: string;
  };
  body: {
    comment_text: string;
    assignee: number;
    resolved: boolean;
  };
};
export type UpdateCommentResBody = {
  [key: string]: unknown;
};
export const updateComment = async (
  args: UpdateCommentArgs,
): Promise<ResultAsync<AxiosResponse<UpdateCommentResBody>, AxiosError>> => {
  const url = Routes.UPDATE_COMMENT(args);
  const { body } = args;
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.post<UpdateCommentResBody>(url, body, config).then(res => res),
    (error: AxiosError) => error,
  );
};

export type DeleteCommentArgs = {
  config: ConfigService.ClickUpConfig;
  query: {
    commentId: string;
  };
};
export type DeleteCommentResBody = {
  [key: string]: unknown;
};
export const deleteComment = async (
  args: DeleteCommentArgs,
): Promise<ResultAsync<AxiosResponse<DeleteCommentResBody>, AxiosError>> => {
  const url = Routes.DELETE_COMMENT(args);
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.delete<DeleteCommentResBody>(url, config).then(res => res),
    (error: AxiosError) => error,
  );
};
