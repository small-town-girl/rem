const devBaseURL = 'http://crm.cimns.com/'
const proBaseURL = ''

export const BASE_URL = process.env.NODE_EVN === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;

