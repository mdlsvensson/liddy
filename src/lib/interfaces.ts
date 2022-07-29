export interface Card {
  id: string;
  name: string,
  description: string,
  userId: string,
  createdAt: string,
  updatedAt: string,
  dueAt: string,
  priority: number,
  weight: number,
  column: string,
  tags: Array<number>,
  comments: Array<string>,
  attachments: Array<string>,
  projectId: string,
}

export interface Modal {
  isVisible: boolean;
  type: string;
  data: object;
}