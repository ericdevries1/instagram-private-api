export import EXPERIMENTS = require('./experiments.json');
export import LOGIN_EXPERIMENTS = require('./login-experiments.json');
export import SUPPORTED_CAPABILITIES = require('./supported-capabilities.json');

export const APP_CREDENTIALS = {
  SIG_KEY: '937463b5272b5d60e9d20f0f8d7d192193dd95095a3ad43725d494300a5ea5fc',
  SIG_VERSION: '4',
  VERSION: '85.0.0.21.100',
  VERSION_CODE: '146536611',
  FB_ANALYTICS_APPLICATION_ID: '567067343352427',
  LANGUAGE: 'en_US',
};

export const TLD = 'instagram.com';
export const HOSTNAME = 'i.instagram.com';
export const WEB_HOSTNAME = 'www.instagram.com';
export const HOST = `https://${HOSTNAME}/`;
export const WEBHOST = `https://${WEB_HOSTNAME}/`;
export const API_ENDPOINT = `${HOST}api/v1/`;

export const HEADERS = {
  X_IG_Connection_Type: 'WIFI',
  X_IG_Capabilities: '3brTPw==',
};
