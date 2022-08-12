import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import { loginInfo } from '@interfaces/loginInfo';
import { login } from '@services/loginService';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['LOGIN']
  }),
  '@@LOGIN'
);

export const actionCreators = {
  login: (data: loginInfo, homeNavegation) => ({
    type: actions.LOGIN,
    target: 'loginData',
    service: login,
    payload: data,
    injections: [
      withPostSuccess(() => {
        homeNavegation();
      })
    ]
  })
};
