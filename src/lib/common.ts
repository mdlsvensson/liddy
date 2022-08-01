import type { Card, User, Project, Column } from "$lib/types";
import { newId, newDescriptor, newDated, newDueDate, newOwner, newTitle } from "$lib/factories";

export const newUser = (): User => ({
  ...newId({ id: "" }),
  ...newDescriptor({ name: "", description: "" }),
  ...newDated({ createdAt: new Date().getTime(), updatedAt: new Date().getTime() }),
  email: "",
  isNewUser: true,
  isAdmin: false,
  projects: [],
  memberOf: [],
  lastLogin: new Date().getTime(),
  lastLoginIp: null,
});

export const newProject = ({ ownerId }: { ownerId: string }): Project => ({
  ...newId({ id: "" }),
  ...newDescriptor({ name: '', description: '' }),
  ...newDated({ createdAt: new Date().getTime(), updatedAt: new Date().getTime() }),
  ...newDueDate({ dueDate: null }),
  ...newOwner({ ownerId }),
  members: [],
  columns: [],
  isNewProject: true,
  isActive: true,
  isArchived: false,
  isDeleted: false,
  isPublic: false,
  isLocked: false,
});

export const newColumn = ({ title, color, projectId }: { title: string, color: string, projectId: string }): Column => ({
  ...newId({ id: "" }),
  ...newTitle({ title }),
  color,
  cards: [],
  projectId,
});

export const newCard = ({ ownerId, columnId }: { ownerId: string, columnId: string }): Card => ({
  ...newId({ id: "" }),
  ...newDescriptor({ name: '', description: '' }),
  ...newDated({ createdAt: new Date().getTime(), updatedAt: new Date().getTime() }),
  ...newDueDate({ dueDate: null }),
  ...newOwner({ ownerId }),
  priority: 0,
  weight: 0,
  tags: [],
  comments: [],
  attachments: [],
  columnId,
});

export enum ModalType {
  PROJECT,
  COLUMN,
  CARD,
};

export enum ModalMode {
  CREATE,
  EDIT,
};