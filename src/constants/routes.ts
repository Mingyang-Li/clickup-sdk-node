const baseUrl = `https://api.clickup.com/api/v2`;

export enum Routes {
  GET_AUTHORIZED_USER = `${baseUrl}/user`,
  GET_AUTHORISED_TEAMS = `${baseUrl}/team`,
}
