import { Config } from '../../src/constants/config';

export const validateApiKey = () => {
  if (Config.CLICKUP_API_KEY === undefined) {
    throw new Error(`Please provide an API key for ClickUp`);
  } else {
    return `CLICKUP_API_KEY is loaded`;
  }
};
