import {
  GetTaskCommentsArgs,
  CreateTaskCommentArgs,
  GetChatViewCommentsArgs,
} from '../services/comment.service';
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

  // Comments
  GET_TASK_COMMENTS: (args: GetTaskCommentsArgs) => {
    if (args.params === undefined) {
      return `${baseUrl}/task/${args.query.taskId}/comment`;
    } else {
      const query = new URLSearchParams(args.params).toString();
      return `${baseUrl}/task/${args.query.taskId}/comment?${query}`;
    }
  },
  CREATE_TASK_COMMENT: (args: CreateTaskCommentArgs) => {
    if (args.params === undefined) {
      return `${baseUrl}/task/${args.query.taskId}/comment`;
    } else {
      const query = new URLSearchParams(args.params).toString();
      return `${baseUrl}/task/${args.query.taskId}/comment?${query}`;
    }
  },
  GET_CHAT_VIEW_COMMENTS: (args: GetChatViewCommentsArgs) => {
    if (args.params === undefined) {
      return `${baseUrl}/task/${args.query.viewId}/comment`;
    } else {
      const query = new URLSearchParams(args.params).toString();
      return `${baseUrl}/task/${args.query.viewId}/comment?${query}`;
    }
  },
};
