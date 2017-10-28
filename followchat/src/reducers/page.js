import { THEME_CHANAGE, DRAWER_STATUS,SELECTED_MENU_ITEM,SELECTED_PROFILE, PAGE_LOGIN, PAGE_HOME, PAGE_SPAM, PAGE_FORUMS, PAGE_UPDATES, PAGE_SOCIAL } from '../constants/PageActionTypes'
import {drawerMenuOptions,selctMenuOptions,profileMenu} from '../data/data'
const initialPageState = {
  	path: '/',
    drawerStatus: true,
    drawerWidth : 240,
    drawerMenuOptions : drawerMenuOptions,
    selctMenuOptions : selctMenuOptions,
    profileMenu:profileMenu,
    selectedMenuItem : "Dashboard",
    selectedProfile:"Homepage",
    themeChange: localStorage.getItem('theme-change-event') ? true : false,
};


// Page Path
export default function reducer(state = initialPageState, action) {
  	switch (action.type) {
        case THEME_CHANAGE: {
            if (action.payload.status) {
                localStorage.setItem('theme-change-event', true);
            } else {
                localStorage.removeItem('theme-change-event');
            }
            return {...state, themeChange: action.payload.status}
        }
        case DRAWER_STATUS: {
            return {...state, drawerStatus: action.payload.status}
        }
        case SELECTED_MENU_ITEM: {
            return {...state, selectedMenuItem: action.payload.selected}
        }
        case SELECTED_PROFILE: {
            return {...state, selectedProfile: action.payload.selected}
        }
        case PAGE_LOGIN:
            return {...state, path: action.payload}
        case PAGE_HOME:
            return {...state, path: action.payload}
        case PAGE_SPAM:
            return {...state, path: action.payload}
        case PAGE_FORUMS:
           return {...state, path: action.payload}
        case PAGE_UPDATES:
            return {...state, path: action.payload}
        case PAGE_SOCIAL:
            return {...state, path: action.payload}
        default:
          return state
    }
}



