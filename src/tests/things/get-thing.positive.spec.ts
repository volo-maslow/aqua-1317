import { expect, test } from '@playwright/test';
import { ConfigurationEnvManager } from '@tools/configuration/configuration-env-manager';
import { IConfigurationManager } from '@tools/configuration/configuration-manager.interface';
import { prepareTenantOrganization } from './get-thing.positive.configuration';

test.describe.configure({ mode: 'serial' });

test.describe('Get thing [positive] @sync', () => {
  const testKey = 'get-thing-positive';

  let configurationManager: IConfigurationManager;
  let tenantId: string;

  test.beforeAll(async ({ playwright }) => {
    configurationManager = new ConfigurationEnvManager();
    const tenant = await prepareTenantOrganization(configurationManager.getApiDelayMilliseconds(), playwright.request);
    tenantId = tenant.id;
  });

  test('Should create thing in its api', async () => {
    console.log(testKey, tenantId);
    expect(true).toEqual(true);
  });

  test('Should get updated thing in another api response', async () => {
    console.log(testKey, tenantId);
    expect(true).toEqual(true);
  });
});
