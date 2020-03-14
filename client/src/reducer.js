import equipment from './reducers/equipment';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import admin from './reducers/admin';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  equipment,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  admin,
  router: routerReducer
});