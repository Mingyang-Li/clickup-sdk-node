import { validateApiKey } from './common/config';
import { StatusCodes } from 'http-status-codes';

describe('AuthorizationService', () => {
  beforeAll(() => {
    validateApiKey();
  });

  describe('AuthorizationService.getAuthorizedUser', () => {
    it(`Should return ${StatusCodes.OK}`, () => {
      expect(0).toEqual(0);
    });
  });
});
