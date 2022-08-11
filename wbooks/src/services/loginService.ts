import { signIn } from '@constants/loginAPI';

export const login = () =>
  Promise.resolve({ ok: true, problem: null, originalError: null, data: signIn }) as Promise<any>;
