import { Config } from '../src/constants/config';

describe('AuthorizationService.getAuthorizedUser', () => {
  it('ClickUp API Key is provided', () => {
    expect(Config.CLICKUP_API_KEY).not.toEqual(undefined);
  });
});
