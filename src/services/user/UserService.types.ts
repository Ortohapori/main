export type LoginResponse = {
  access_token: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  status: "Ativo" | "Inativo";
};

export type UserCreate = {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
  access_system: string;
  startDate: string;
  endDate: string;
};

export type UserResponse = {
  items: User[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};
