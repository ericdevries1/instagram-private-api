export import EXPERIMENTS = require('./experiments.json');
export import LOGIN_EXPERIMENTS = require('./login-experiments.json');
export import SUPPORTED_CAPABILITIES = require('./supported-capabilities.json');

export const APP_CREDENTIALS = {
  SIG_KEY: 'e0767f8a7ae9f6c1f9d3674be35d96117f0589960bf3dbd2921f020b33ca4b9f',
  SIG_VERSION: '4',
  VERSION: '100.0.0.17.129',
  VERSION_CODE: '161478673',
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
  X_IG_Capabilities: '3brTvw==',
};
