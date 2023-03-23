/* eslint-disable react-hooks/rules-of-hooks */
import axiosInstance from 'services/common/instance';
import { TOKEN } from 'utils/constants';

export const slug = localStorage.getItem(TOKEN);

export const AddBookingService = async (data: Event) => {
  const response = await axiosInstance.post(`booking/add-booking/${slug} `, data);
  return response;
};

export const idUpdate = localStorage.getItem('idUpdate');

export const UpdateBookingService = async (data: Event) => {
  const response = await axiosInstance.put(`booking/update-booking/${idUpdate} `, data);
  return response;
};
