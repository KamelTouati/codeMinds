import { ILoginInput } from "../components/utils/types";

export const LOGIN_FORM: ILoginInput[] = [
  {
    name: "email",
    placeholder: "Email address",
    type: "text",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
  },
];

export const TOKEN_KEY = "token";
