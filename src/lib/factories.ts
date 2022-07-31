import type { Id, Descriptor, Dated, DueDate, Owner, Card } from "$lib/types";

export const id = ({ id }: { id: string }): Id => {
  return { id };
};

export const descriptor = ({ name, description }: { name: string, description: string }): Descriptor => {
  return { name, description }
};

export const dated = ({ createdAt, updatedAt }: { createdAt: number | null, updatedAt: number | null }): Dated => {
  return { createdAt, updatedAt }
};

export const dueDate = ({ dueDate }: { dueDate: number | null }): DueDate => {
  return { dueDate };
};

export const owner = ({ ownerId }: { ownerId: string }): Owner => {
  return { ownerId };
};