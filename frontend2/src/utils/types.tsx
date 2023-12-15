export interface ILoginFormInput {
  email: string;
  password: string;
}

export interface ILoginInput {
  name: keyof ILoginFormInput;
  placeholder: string;
  type: string;
}

export interface IErrorResponse {
  error: {
    details?: {
      errors: {
        message: string;
      }[];
    };
    message?: string;
  };
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage?: string;
  role: UserRole;
}

export interface IAnouncement {
  message: string;
  poster: IUser;
  dateTime: string;
}

export enum UserRole {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  STUFF = "STUFF",
}

export interface IAnnomaly {
  _id: string;
  reportedBy: IUser;
  message: string;
  dateTime: Date;
  solvedBy?: IUser;
}

export interface IChat {
  _id: string;
  teachers: IUser[];
  responsable: IUser;
}

export interface IMessage {
  _id: string;
  sender: IUser;
  message: string;
  roomdId: string;
  createdAt: string;
}
