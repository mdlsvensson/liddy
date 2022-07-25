import { writable, type Writable } from "svelte/store";

export const state: Writable<Object> = writable({
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  isDatabaseConnected: false,
});

export const user: Writable<Object> = writable({
  id: "",
  createdAt: "",
  updatedAt: "",
  name: "",
  email: "",
  isAdmin: false,
});

export const projects: Writable<Array<Object>> = writable([
  {
    id: "",
    createdAt: "",
    updatedAt: "",
    name: "",
    description: "",
    isActive: false,
    isArchived: false,
    isDeleted: false,
    isPublic: false,
    isLocked: false,
  }
]);

interface Modal {
  isVisible: boolean;
  type: string;
}

export const modal: Writable<Modal> = writable({
  isVisible: false,
  type: "",
});