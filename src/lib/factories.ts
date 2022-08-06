import type { Id, Descriptor, Dated, DueDate, Owner, Title, User, Project, Column, Card } from "$lib/types";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const newId = ({ id }: { id: string }): Id => {
  return { id };
};

const newTitle = ({ title }: { title: string }): Title => {
  return { title };
};

const newDescriptor = ({ name, description }: { name: string, description: string }): Descriptor => {
  return { name, description };
};

const newDated = ({ createdAt, updatedAt }: { createdAt: string, updatedAt: string | undefined }): Dated => {
  return { createdAt, updatedAt };
};

const newDueDate = ({ dueDate }: { dueDate: number | null }): DueDate => {
  return { dueDate };
};

const newOwner = ({ ownerId }: { ownerId: string }): Owner => {
  return { ownerId };
};

///////////////////////////////////

export const newUser = (user: SupabaseUser): User => ({
  ...newId({ id: user.id }),
  ...newDescriptor({ name: "", description: "" }),
  ...newDated({ createdAt: user.created_at, updatedAt: user.updated_at }),
  email: user.email,
  phone: user.phone,
  isNewUser: true,
  role: user.role,
  projects: [],
  memberOf: [],
  lastLogInAt: user.last_sign_in_at,
  lastLogInIp: null,
  isUser: true,
});

export const newProject = ({ ownerId }: { ownerId: string }): Project => ({
  ...newId({ id: "" }),
  ...newDescriptor({ name: '', description: '' }),
  ...newDated({ createdAt: new Date().toString(), updatedAt: new Date().toString() }),
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
  isProject: true,
});

export const newColumn = ({ title, color, projectId }: { title: string, color: string, projectId: string }): Column => ({
  ...newId({ id: "" }),
  ...newTitle({ title }),
  color,
  cards: [],
  projectId,
  isColumn: true,
});

export const newCard = ({ ownerId, columnId }: { ownerId: string, columnId: string }): Card => ({
  ...newId({ id: "" }),
  ...newDescriptor({ name: '', description: '' }),
  ...newDated({ createdAt: new Date().toString(), updatedAt: new Date().toString() }),
  ...newDueDate({ dueDate: null }),
  ...newOwner({ ownerId }),
  priority: 0,
  weight: 0,
  tags: [],
  comments: [],
  attachments: [],
  columnId,
  isCard: true,
});