import { Routes } from '../src/constants/routes';
import { CreateTaskAttachmentArgs } from '../src/services/attachment.service';
import { GetTaskCommentsArgs } from '../src/services/comment.service';
import { ClickUpConfig } from '../src/services/common/config.service';

describe('Testing URL path mappers', () => {
  const config: ClickUpConfig = {
    apiKey: '',
  };
  describe('Routes.CREATE_TASK_ATTACHMENT()', () => {
    it(`Should return URL without query parameters - args doesn't include params`, () => {
      const args: CreateTaskAttachmentArgs = {
        config,
        query: {
          taskId: 'taskId',
        },
      };
      const url = Routes.CREATE_TASK_ATTACHMENT(args);
      expect(url).not.toContain(`?`);
    });
    it(`Should return URL with query parameters`, () => {
      const args: CreateTaskAttachmentArgs = {
        config,
        query: {
          taskId: 'taskId',
        },
        params: {
          custom_task_ids: 'true',
          team_id: 'team_id',
        },
      };
      const url = Routes.CREATE_TASK_ATTACHMENT(args);
      console.log({ url });
      expect(url).toContain(`?`);
    });
  });

  describe(`Routes.GET_TASK_COMMENTS()`, () => {
    it(`Should return URL without query parameters`, () => {
      const args: GetTaskCommentsArgs = {
        config,
        query: { taskId: `taskId` },
      };
      const url = Routes.GET_TASK_COMMENTS(args);
      expect(url).not.toContain(`?`);
    });
    it(`Should return URL with query parameters`, () => {
      const args: GetTaskCommentsArgs = {
        config,
        query: { taskId: `taskId` },
        params: { custom_task_ids: 'false' },
      };
      const url = Routes.GET_TASK_COMMENTS(args);
      console.log({ url });
      expect(url).toContain(`?`);
    });
  });
});
