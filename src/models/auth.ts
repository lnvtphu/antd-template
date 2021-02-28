import { routerRedux } from 'dva/router';
import { parse, stringify } from 'qs';
import { history } from 'umi';
import type { Effect, Reducer } from 'umi';
import { reloadAuthorized } from '@/utils/Authorized';
import {
  loginServices,
  logoutServices,
} from '@/services/auth';
import UserStorage from '../storage/user.storage';

export type AuthModelState = {
  currentUser?: any;
};

export type AuthModelType = {
  namespace: 'auth';
  state: AuthModelState;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<AuthModelState>;
    changeNotifyCount: Reducer<AuthModelState>;
  };
};

const UserModel: AuthModelType = {
  namespace: 'auth',

  state: {
    currentUser: {},
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(loginServices.login, payload);
      if (response.ok) {
        const {
          data: {
            token = null,
            accessRoles = [],
            accessRights = [],
          } = {},
          data,
        } = response;
        UserStorage.setUserInfo(data);
        UserStorage.setToken(token);
        UserStorage.setAccessRoles(accessRoles);
        UserStorage.setAccessRights(accessRights);
        reloadAuthorized();
        yield put({
          type: 'saveCurrentUser',
          payload: response.data,
        });
        yield put({
          type: 'spinner/loading',
          payload: false,
        });
        history.replace('/');
      }
    },

    *logout({ payload }, { call, put }) {
      yield put({
        type: 'spinner/loading',
        payload: true,
      });
      yield call(logoutServices.logout, payload);
      yield put({
        type: 'spinner/loading',
        payload: false,
      });
      UserStorage.removeUserInfo();
      UserStorage.removeToken();
      UserStorage.removeAccessRights();
      UserStorage.removeAccessRoles();
      // redirect
      if (window.location.pathname !== '/user/login') {
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          }),
        );
      }
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
  },
};

export default UserModel;
