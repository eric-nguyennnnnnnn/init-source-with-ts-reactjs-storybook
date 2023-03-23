/* eslint-disable import/no-cycle */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import {
  LoginTypes, SignUpTypes
} from './types';

import axiosInstance from 'services/common/instance';

export const loginService = async (data: LoginTypes) => {
  const response = await axiosInstance.post('user/login', data);
  return response.data;
};

export const signupService = async (data: SignUpTypes) => {
  const response = await axiosInstance.post('user/sigup-user', data);
  return response.data;
};
