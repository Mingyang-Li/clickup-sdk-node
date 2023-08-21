import { CreateTaskAttachmentArgs } from '../services/attachment.service';

const baseUrl = `https://api.clickup.com/api/v2`;

export const Routes = {
  // Authorizarion
  GET_AUTHORIZED_USER: `${baseUrl}/user`,
  GET_AUTHORISED_TEAMS: `${baseUrl}/team`,

  // Attachment
  CREATE_TASK_ATTACHMENT: (args: CreateTaskAttachmentArgs) => {
    if (!args.params) {
      return `${baseUrl}/task/${args.query.taskId}/attachment`;
    } else {
      const query = new URLSearchParams(args.params).toString();
      return `${baseUrl}/task/${args.query.taskId}/attachment?${query}`;
    }
  },
};
