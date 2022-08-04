import type { Id, Descriptor, Dated, DueDate, Owner, Title, User, Project, Column, Card } from "$lib/types";

export const newId = ({ id }: { id: string }): Id => {
  return { id };
};

export const newTitle = ({ title }: { title: string }): Title => {
  return { title };
};

export const newDescriptor = ({ name, description }: { name: string, description: string }): Descriptor => {
  return { name, description }
};

export const newDated = ({ createdAt, updatedAt }: { createdAt: number | null, updatedAt: number | null }): Dated => {
  return { createdAt, updatedAt }
};

export const newDueDate = ({ dueDate }: { dueDate: number | null }): DueDate => {
  return { dueDate };
};

export const newOwner = ({ ownerId }: { ownerId: string }): Owner => {
  return { ownerId };
};

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