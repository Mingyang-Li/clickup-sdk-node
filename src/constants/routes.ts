const baseUrl = `https://api.clickup.com/api/v2`;

export const Routes = {
  GET_AUTHORIZED_USER: `${baseUrl}/user`,
  GET_AUTHORISED_TEAMS: `${baseUrl}/team`,
  CREATE_TASK_ATTACHMENT: (taskId: string) =>
    `${baseUrl}/task/${taskId}/attachment`,
};
