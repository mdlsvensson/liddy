import type { Id, Descriptor, Dated, DueDate, Owner, Title } from "$lib/types";

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