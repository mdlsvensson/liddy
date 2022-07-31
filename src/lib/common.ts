import type { Card, User, Project } from "$lib/types";
import { id, descriptor, dated, dueDate, owner } from "$lib/factories";

export const newUser = (): User => ({
  ...id({ id: "" }),
  ...descriptor({ name: "", description: "" }),
  ...dated({ createdAt: new Date().getTime(), updatedAt: new Date().getTime() }),
  email: "",
  isNewUser: true,
  isAdmin: false,
  projects: [],
  lastLogin: new Date().getTime(),
  lastLoginIp: null,
});

export const newProject = ({ ownerId }: { ownerId: string }): Project => ({
  ...id({ id: "" }),
  ...descriptor({ name: '', description: '' }),
  ...dated({ createdAt: new Date().getTime(), updatedAt: new Date().getTime() }),
  ...dueDate({ dueDate: null }),
  ...owner({ ownerId }),
  members: [],
  columns: [],
  isActive: false,
  isArchived: false,
  isDeleted: false,
  isPublic: false,
  isLocked: false,
});

export const newCard = ({ ownerId }: { ownerId: string }): Card => ({
  ...id({ id: "" }),
  ...descriptor({ name: '', description: '' }),
  ...dated({ createdAt: new Date().getTime(), updatedAt: new Date().getTime() }),
  ...dueDate({ dueDate: null }),
  ...owner({ ownerId }),
  priority: 0,
  weight: 0,
  tags: [],
  comments: [],
  attachments: [],
});