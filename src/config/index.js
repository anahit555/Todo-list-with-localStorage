export const STATUS_ALL = 'all';
export const STATUS_DONE = 'completed';
export const STATUS_UNDONE = 'uncompleted';
export const TODO_ITEMS_STORAGE_KEY = 'todoItems';

export const TODO_STATUSES = [
  {
    label: STATUS_ALL.toUpperCase(),
    value: STATUS_ALL,
    path: '/'
  },
  {
    label: STATUS_DONE.toUpperCase(),
    value: STATUS_DONE,
    path: STATUS_DONE
  },
  {
    label: STATUS_UNDONE.toUpperCase(),
    value: STATUS_UNDONE,
    path: STATUS_UNDONE,
  }
];