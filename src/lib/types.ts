import type { ApiError } from '@supabase/supabase-js';

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
  createdAt: string;
  updatedAt: string | undefined;
};

export type DueDate = {
  dueDate: number | null;
};

export type Owner = {
  ownerId: string;
};

export type Visibility = {
  isVisible: boolean;
};

/////////////////////////////////////

export interface State {
  isNewUser: boolean;
  isLoading: boolean;
  isError: boolean;
  isLoggedIn: boolean;
};

export interface Db {
  isConnected: boolean;
  isConnecting: boolean;
};

export type User = {
  email: string | undefined;
  phone: string | undefined;
  isNewUser: boolean;
  role: string | undefined;
  projects: Project[];
  memberOf: Project[];
  lastLogInAt: string | undefined;
  lastLogInIp: number | null;
  isUser: true;
} & Id & Descriptor & Dated;

export type Project = {
  members: User[];
  columns: Column[];
  isNewProject: boolean;
  isActive: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  isPublic: boolean;
  isLocked: boolean;
  isProject: true;
} & Id & Descriptor & Dated & DueDate & Owner;

export type Column = {
  color: string;
  cards: Card[];
  projectId: string;
  isColumn: true;
} & Id & Title;

export type Card = {
  priority: number,
  weight: number,
  tags: number[],
  comments: string[],
  attachments: string[],
  columnId: string,
  isCard: true;
} & Id & Descriptor & Dated & DueDate & Owner;

export type Modal = {
  type: number | null;
  mode: number | null;
  data: Card | User | Project | Column | null;
  isModal: true;
} & Visibility;

export type Tooltip = {
  text?: string;
  isTooltip: true;
} & Visibility;

// Predicates ///////////////////////

export const isUser = (data: any): data is User => {
  return data.isUser;
};

export const isProject = (data: any): data is Project => {
  return data.isProject;
};

export const isColumn = (data: any): data is Column => {
  return data.isColumn;
};

export const isCard = (data: any): data is Card => {
  return data.isCard;
};

export const isModal = (data: any): data is Modal => {
  return data.isModal;
};

export const isTooltip = (data: any): data is Tooltip => {
  return data.isTooltip;
};

export const isApiError = (data: any): data is ApiError => {
  return 'message' in data;
};

