export type LoginResponse = {
  access_token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type PasswordReset = {
  email: string;
}

export type PasswordResetConfirm = {
  password: string;
}
