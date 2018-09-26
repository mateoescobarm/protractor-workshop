import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

const firefoxConfig = {
  browserName: 'firefox',
  name: 'firefox-test',
  shardTestFiles: true,
  maxInstances: 1,
};

const chromeConfig = {
  browserName: 'chrome',
  name: 'chrome-test',
  shardTestFiles: true,
  maxInstances: 1,
};

const multiCapabilities = [chromeConfig, firefoxConfig];

export const config: Config = {
  multiCapabilities,
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/*.spec.js'],
  noGlobals: true,
  getPageTimeout: 50000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 200000
  },
  onPrepare: () => {
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
    reporter();
  }
};
