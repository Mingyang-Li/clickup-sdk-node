// import { Config } from '../src/constants/config';
import * as AttachmentService from '../src/services/attachment.service';
import { env } from './common/env';

describe('AttachmentService', () => {
  describe('AttachmentService.createTaskAttachment', () => {
    it(`Should return error`, async () => {
      const args: AttachmentService.CreateTaskAttachmentArgs = {
        config: {
          apiKey: env.CLICKUP_API_KEY,
        },
        query: { taskId: '' },
      };
      const res = await AttachmentService.createTaskAttachment(args);
      expect(res.isErr()).toBeTruthy();
    });
  });
});
