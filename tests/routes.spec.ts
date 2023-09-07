import { Routes } from '../src/constants/routes';
import { CreateTaskAttachmentArgs } from '../src/services/attachment.service';
import {
  CreateTaskCommentArgs,
  GetChatViewCommentsArgs,
  GetTaskCommentsArgs,
} from '../src/services/comment.service';
import { ClickUpConfig } from '../src/services/common/config.service';

describe('Testing URL path mappers', () => {
  const config: ClickUpConfig = {
    apiKey: '',
  };
  describe(`Routes.CREATE_TASK_ATTACHMENT()`, () => {
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
      expect(url).toContain(`?`);
    });
  });

  describe(`Routes.CREATE_TASK_COMMENTS()`, () => {
    it('should return the correct URL when params are provided', () => {
      const args: CreateTaskCommentArgs = {
        config,
        query: { taskId: '123' },
        body: {
          comment_text: 'Test comment',
          assignee: 456,
          notify_all: true,
        },
        params: {
          custom_task_ids: 'true',
          team_id: '456',
        },
      };
      const expectedUrl =
        'https://api.clickup.com/api/v2/task/123/comment?custom_task_ids=true&team_id=456';
      expect(Routes.CREATE_TASK_COMMENT(args)).toBe(expectedUrl);
    });
    it('should return the correct URL when no params are provided', () => {
      const args: GetChatViewCommentsArgs = {
        config,
        query: { viewId: '123' },
      };
      const expectedUrl = 'https://api.clickup.com/api/v2/task/123/comment';
      expect(Routes.GET_CHAT_VIEW_COMMENTS(args)).toBe(expectedUrl);
    });
  });
});
