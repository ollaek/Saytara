export type UserSignInModel = {
  Email: string;
  Password: string;
};

export type TAuthState = {
  isLoading: boolean;
  signInError: string;
  success: string;
};
