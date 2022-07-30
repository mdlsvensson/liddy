export interface State {
  isNewUser: boolean;
  isLoading: boolean;
  isError: boolean;
  isLoggedIn: boolean;
  isDatabaseConnected: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  projects: Project[];
  createdAt: number;
  updatedAt: number;
  lastLogin: number;
  lastLoginIp: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  members: User[];
  columns: Column[];
  isActive: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  isPublic: boolean;
  isLocked: boolean;
  createdAt: number;
  updatedAt: number;
  dueAt: number | null;
}

export interface Column {
  id: string;
  title: string;
  color: string;
  cards: Array<Card>;
}

export interface Card {
  id: string;
  name: string,
  description: string,
  userId: string,
  priority: number,
  weight: number,
  column: string,
  tags: Array<number>,
  comments: Array<string>,
  attachments: Array<string>,
  createdAt: number,
  updatedAt: number,
  dueAt: number | null,
}

export interface Modal {
  isVisible: boolean;
  type: string;
  data: Record<string, any>;
}
