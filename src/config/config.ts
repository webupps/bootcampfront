import { RoutePath } from '../helpers/types/enums/route-path';

export interface AppConfig {
    defaultUnauthorizedRedirect: string;
    defaultAuthorizedRedirect: string | RoutePath;
    addFormRouteKeyword: string;
    apiBaseUrl: string;
    authTokenName: string;
    authRemember: string;
    idleTimeout: number;
    usaId: number;
    wsBaseUrl: string;
    wsBaseUrlTrace: string;
    wsBaseUrlRuntime: string;
    test: string;
}



const config: AppConfig = {
    defaultUnauthorizedRedirect: '/',
    defaultAuthorizedRedirect: RoutePath.Dashboard,
    addFormRouteKeyword: 'add',
    authTokenName: 'PFP_DEV_AUTH_TOKEN',
    authRemember: 'PFP_DEV_AUTH_REMEMBER',
    apiBaseUrl: "https://"+process.env.DEPLOY_MODE+"-api.pfpcyber.com",
    test: process.env.DEPLOY_MODE,
    idleTimeout: 1000 * 60 * 60 * 12,
    usaId: 2,
    wsBaseUrl: "wss://"+process.env.DEPLOY_MODE+"-api.pfpcyber.com/trainingAlerts",
    wsBaseUrlTrace: "wss://"+process.env.DEPLOY_MODE+"-api.pfpcyber.com/traceResult",
    wsBaseUrlRuntime: "wss://"+process.env.DEPLOY_MODE+"-api.pfpcyber.com/runtimeResult"
    // idleTimeout: 2000
};

export const Config = config;