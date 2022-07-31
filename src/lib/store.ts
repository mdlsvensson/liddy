import { writable, type Writable } from "svelte/store";
import type { Modal, State, Column, Project, User } from "./types";

export const state: Writable<State> = writable({
  isNewUser: true,
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  isDatabaseConnected: false,
});

export const user: Writable<User> = writable();

export const project: Writable<Project> = writable();

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
