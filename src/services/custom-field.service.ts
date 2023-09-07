import * as ConfigService from '@/services/common/config.service';

export type GetAccessibleCustomFieldsArgs = {
  config: ConfigService.ClickUpConfig;
  query: {
    listId: string;
  };
};

export const getAccessibleCustomFields = () => {
  return;
};
