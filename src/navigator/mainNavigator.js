import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile188853Navigator from '../features/UserProfile188853/navigator';
import Tutorial188852Navigator from '../features/Tutorial188852/navigator';
import NotificationList188824Navigator from '../features/NotificationList188824/navigator';
import Settings188823Navigator from '../features/Settings188823/navigator';
import Settings188815Navigator from '../features/Settings188815/navigator';
import UserProfile188813Navigator from '../features/UserProfile188813/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile188853: { screen: UserProfile188853Navigator },
Tutorial188852: { screen: Tutorial188852Navigator },
NotificationList188824: { screen: NotificationList188824Navigator },
Settings188823: { screen: Settings188823Navigator },
Settings188815: { screen: Settings188815Navigator },
UserProfile188813: { screen: UserProfile188813Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
