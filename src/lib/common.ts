import type { Card } from "$lib/types";
import { id, descriptor, dated, dueDate, owner } from "$lib/factories";

export const newCard = ({ ownerId }: { ownerId: string }): Card => {
  return <Card>{
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
  }
};