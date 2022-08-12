import { signIn } from '@constants/loginAPI';
import { loginInfo } from '@interfaces/loginInfo';

export const login = (data: loginInfo) => {
  const isValid = data.email === signIn.email && data.password === signIn.password;
  return Promise.resolve({
    ok: isValid,
    problem: isValid ? null : true,
    originalError: isValid ? null : 'Email or password are wrong',
    data: isValid ? signIn : null
  }) as Promise<any>;
};
