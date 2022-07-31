import { writable, type Writable } from "svelte/store";
import type { Modal, State, Column, Project, User } from "./types";

export const state: Writable<State> = writable({
  isNewUser: true,
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  isDatabaseConnected: false,
});

export const user: Writable<User> = writable({
  id: "",
  name: "",
  email: "",
  isAdmin: false,
  projects: [],
  createdAt: "",
  updatedAt: "",
  lastLogin: "",
  lastLoginIp: "",
});

export const project: Writable<Project> = writable(
  {
    id: "",
    name: "",
    description: "",
    columns: [],
    members: [],
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

export const column: Writable<Column> = writable({
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
