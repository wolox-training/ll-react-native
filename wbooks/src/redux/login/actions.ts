import { createTypes, completeTypes } from 'redux-recompose';
import { login } from '@services/loginService';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['LOGIN']
  }),
  '@@LOGIN'
);

export const actionCreators = {
  login: () => ({
    type: actions.LOGIN,
    target: 'loginData',
    service: login
  })
};
