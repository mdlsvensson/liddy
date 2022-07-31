export type Id = {
  id: string;
};

export type Title = {
  title: string;
};

export type Descriptor = {
  name: string;
  description: string;
};

export type Dated = {
  createdAt: number | null;
  updatedAt: number | null;
};

export type DueDate = {
  dueDate: number | null;
};

export type Owner = {
  ownerId: string;
};

export interface State {
  isNewUser: boolean;
  isLoading: boolean;
  isError: boolean;
  isLoggedIn: boolean;
}

export interface Db {
  isConnected: boolean;
  isConnecting: boolean;
}

export type User = {
  email: string;
  isNewUser: boolean;
  isAdmin: boolean;
  projects: Project[];
  lastLogin: number | null;
  lastLoginIp: number | null;
} & Id & Descriptor & Dated;

export type Project = {
  members: User[];
  columns: Column[];
  isActive: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  isPublic: boolean;
  isLocked: boolean;
} & Id & Descriptor & Dated & DueDate & Owner;

export type Column = {
  color: string;
  cards: Card[];
} & Id & Descriptor;

export type Card = {
  priority: number,
  weight: number,
  tags: number[],
  comments: string[],
  attachments: string[],
} & Id & Descriptor & Dated & DueDate & Owner;

export interface Modal {
  isVisible: boolean;
  type: string;
  data: Record<string, any>;
}