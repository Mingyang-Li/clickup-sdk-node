import * as CommentService from '../src/services/comment.service';
import { env } from './common/env';

describe('CommentService', () => {
  describe('CommentService.getTaskComments', () => {
    it(`Should return ok`, async () => {
      const args: CommentService.GetTaskCommentsArgs = {
        config: {
          apiKey: env.CLICKUP_API_KEY,
        },
        query: { taskId: env.CLIENTUP_TASK_ID },
      };
      const res = await CommentService.getTaskComments(args);
      expect(res.isOk()).toBeTruthy();
    });
    it(`Should return error - given an invalid taskId`, async () => {
      const args: CommentService.GetTaskCommentsArgs = {
        config: {
          apiKey: env.CLICKUP_API_KEY,
        },
        query: { taskId: '' },
      };
      const res = await CommentService.getTaskComments(args);
      expect(res.isErr()).toBeTruthy();
    });
  });
});
