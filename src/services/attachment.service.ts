import axios, { AxiosError, AxiosResponse } from 'axios';
import { Routes } from '../constants/routes';
import { ResultAsync, fromPromise } from 'neverthrow';
import * as ConfigService from './common/config.service';

export type CreateTaskAttachmentArgs = {
  config: ConfigService.ClickUpConfig;
  query: {
    taskId: string;
  };
  params?: {
    custom_task_ids: 'true' | 'false';
    team_id: string;
  };
};
export type CreateTaskAttachmentResBody = {
  id: string;
  [key: string]: unknown;
};
export const createTaskAttachment = async (
  args: CreateTaskAttachmentArgs,
): Promise<
  ResultAsync<AxiosResponse<CreateTaskAttachmentResBody>, AxiosError>
> => {
  const url = Routes.CREATE_TASK_ATTACHMENT(args);
  const config = ConfigService.buildClickUpConfigs(args.config.apiKey);
  return fromPromise(
    axios.post<CreateTaskAttachmentResBody>(url, config).then(res => res),
    (error: AxiosError) => error,
  );
};
