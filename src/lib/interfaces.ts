export interface Card {
  id: string;
  name: string,
  description: string,
  assignee: string,
  createdAt: string,
  updatedAt: string,
  dueDate: string,
  priority: number,
  weight: number,
  column: string,
  tags: [],
  comments: [],
  attachments: [],
  projects: [],
}

export interface Modal {
  isVisible: boolean;
  type: string;
  data: Object;
}