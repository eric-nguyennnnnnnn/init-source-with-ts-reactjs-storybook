import axiosInstance from 'services/common/instance';

const getContactAllUserMessageServices = async (id: number) => {
  const response = await axiosInstance.get(`message/get-contacts-all/${id}`);
  return response.data.content;
};

export const getContactUserChatServices = async (id: number, id_receive: number) => {
  const response = await axiosInstance.get(`message/get-contacts/${id}/${id_receive}`,);
  return response.data.content;
};

export const postMessageTextService = async (id: number, data: any) => {
  const response = await axiosInstance.post(`message/send-mess/${id}`, data);
  return response.data;
};

export const postMessageImageService = async (id: number) => {
  const response = await axiosInstance.post(`message/send-image/${id}`);
  return response.data;
};

export const putSeenMessage = async (id: number) => {
  const response = await axiosInstance.put(`message/send-status/${id}`);
  return response;
};

export default getContactAllUserMessageServices;
