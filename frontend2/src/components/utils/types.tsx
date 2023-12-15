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
