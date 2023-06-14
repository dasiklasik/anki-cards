import { authInstance } from "features/auth/auth.instance";

export const authAPI = {
  authMe: () => {
    return authInstance.post<UserInfoType>("me");
  },
  register: (params: { email: string; password: string }) => {
    return authInstance.post<RegisterResponseType>("register", params);
  },
  login: (params: { email: string; password: string; rememberMe?: boolean }) => {
    return authInstance.post<UserInfoType>("login", params);
  },
  logout: () => {
    return authInstance.delete<ResponseType>("me");
  },
  updateUser: (params: { name?: string; avatar?: string }) => {
    return authInstance.put<UpdateResponseType>("me", params);
  },
  resetPassword: (email: string) => {
    const params = {
      email,
      message: `<div style="background-color: lime; padding: 15px">password recovery link: <a href="http://localhost:3000/#/set-new-password/$token$">link</a></div>`,
    };
    return authInstance.post<ResponseType>("forgot", params);
  },
  setNewPassword: (params: { password: string; resetPasswordToken: string }) => {
    return authInstance.post<ResponseType>("set-new-password", params);
  },
};

type UserInfoType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
};

type RegisterResponseType = {
  addedUser: {};
  error?: string;
};

type UpdateResponseType = {
  updatedUser: UserInfoType;
  error?: string;
};

type ResponseType = {
  info: string;
  error: string;
};
