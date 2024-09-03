import type { PlaywrightTestConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
dotenv.config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './.',
  /* Maximum time one test can run for. */
  timeout: 5 * 60 * 1000, // 5 minutes
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 30000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 5 : 3,
  /* Limit workers ideally to CPU+4 for CI, locally we don't care that much */
  workers: process.env.CI ? 8 : 64,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? 'blob' : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). Applies to apiRequestContext timeout too. */
    actionTimeout: 30000,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'things',
      testDir: './src/tests/things',
      use: {
        extraHTTPHeaders: {
          Accept: 'application/json',
        },
      },
    },
    {
      name: 'things-2',
      testDir: './src/tests/things-2',
      use: {
        extraHTTPHeaders: {
          Accept: 'application/json',
        },
      },
      retries: 2,
    },
  ],
};

export default config;
