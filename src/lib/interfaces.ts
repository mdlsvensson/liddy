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
  projectId: string,
  createdAt: string,
  updatedAt: string,
  dueAt: string,
}

export interface Column {
  id: string;
  title: string;
  color: string;
  cards: Array<Card>;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  columns: Array<Column>;
  isActive: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  isPublic: boolean;
  isLocked: boolean;
  createdAt: string;
  updatedAt: string;
  dueAt: string;
}

export interface Modal {
  isVisible: boolean;
  type: string;
  data: object;
}

export interface State {
  isNewUser: boolean;
  isLoading: boolean;
  isError: boolean;
  isLoggedIn: boolean;
  isDatabaseConnected: boolean;
  project: object;
}

