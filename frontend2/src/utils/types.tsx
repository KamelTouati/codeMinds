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
  _id: string;
  title: string;
  announcementType: string;
  message: string;
  announcedby: IUser;
  createdAt: string;
}

export enum UserRole {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  STUFF = "STUFF",
}

export interface IAnomaly {
  _id: string;
  reportedBy: IUser;
  message: string;
  createdAt: string;
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
  content: string;
  roomdId: string;
  createdAt: string;
}

export interface IAddAnnouncement {
  announcementType: string;
  title: string;
  message: string;
}

export interface ISideBarItem {
  title: string;
  link: string;
  image: string;
}
