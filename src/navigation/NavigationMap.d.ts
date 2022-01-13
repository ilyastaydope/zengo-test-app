import { Route } from './RouteNames';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [Route.Main]: undefined;
      [Route.Info]: undefined;
    }
  }
}
