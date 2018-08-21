import { browser, Config } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../test/Google.spec.ts'],
  noGlobals: true,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
}

import { reporter } from './helpers/reporter';
reporter();
