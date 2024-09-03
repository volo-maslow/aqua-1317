import { APIRequest } from '@playwright/test';
export const prepareTenantOrganization = async function (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  apiDelay: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request: APIRequest,
): Promise<{ id: string }> {
  return { id: 'tenant-12345' };
};
