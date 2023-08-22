import * as AuthorizationService from '../src/services/authorization.service';
import { env } from './common/env';

describe('AuthorizationService', () => {
  describe('AuthorizationService.getAuthorizedUser', () => {
    const args: AuthorizationService.GetAuthorizedUserArgs = {
      config: {
        apiKey: env.CLICKUP_API_KEY,
      },
    };
    it(`Should return ok`, async () => {
      const res = await AuthorizationService.getAuthorizedUser(args);
      expect(res.isOk()).toBeTruthy();
    });

    it(`Should return error`, async () => {
      const args: AuthorizationService.GetAuthorizedUserArgs = {
        config: {
          apiKey: '',
        },
      };
      const res = await AuthorizationService.getAuthorizedUser(args);
      expect(res.isErr()).toBeTruthy();
    });
  });

  describe('AuthorizationService.getAuthorizedTeams', () => {
    const args: AuthorizationService.GetAuthorizedTeamsArgs = {
      config: {
        apiKey: env.CLICKUP_API_KEY,
      },
    };
    it(`Should return ok`, async () => {
      const res = await AuthorizationService.getAuthorizedTeams(args);
      expect(res.isOk()).toBeTruthy();
    });

    it(`Should return error`, async () => {
      const args: AuthorizationService.GetAuthorizedUserArgs = {
        config: {
          apiKey: '',
        },
      };
      const res = await AuthorizationService.getAuthorizedTeams(args);
      expect(res.isErr()).toBeTruthy();
    });
  });
});
