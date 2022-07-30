import { writable, type Writable } from "svelte/store";
import type { Modal, State, Column, Project } from "./interfaces";

export const state: Writable<State> = writable({
  isNewUser: true,
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  isDatabaseConnected: false,
  project: {
    id: "",
    name: "First Project",
  },
});

export const user: Writable<Object> = writable({
  id: "",
  createdAt: "",
  updatedAt: "",
  name: "",
  email: "",
  isAdmin: false,
});

export const project: Writable<Project> = writable(
  {
    id: "",
    name: "",
    description: "",
    columns: [],
    isActive: false,
    isArchived: false,
    isDeleted: false,
    isPublic: false,
    isLocked: false,
    createdAt: "",
    updatedAt: "",
    dueAt: "",
  }
);

export const columns: Writable<Column> = writable({
  id: "",
  title: "",
  color: "",
  cards: [],
});

export const modal: Writable<Modal> = writable({
  isVisible: false,
  type: "",
  data: {},
});
