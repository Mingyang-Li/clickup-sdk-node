import { Config } from '../src/constants/config';
import * as AuthorizationService from '../src/services/authorization.service';
import { validateApiKey } from './common/config';

describe('AuthorizationService', () => {
  beforeAll(() => {
    validateApiKey();
  });

  describe('AuthorizationService.getAuthorizedUser', () => {
    const args: AuthorizationService.GetAuthorizedUserArgs = {
      config: {
        apiKey: Config.CLICKUP_API_KEY || '',
      },
    };
    it(`Should return ok`, async () => {
      const res = await AuthorizationService.getAuthorizedUser(args);
      expect(res.isOk()).toBeTruthy();
    });
  });
});
