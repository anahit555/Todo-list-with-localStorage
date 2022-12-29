import All from "../pages/All";
import Completed from "../pages/Completed";
import Uncompleted from "../pages/Uncompleted";
import {
  TODO_STATUSES,
  STATUS_ALL,
  STATUS_DONE,
  STATUS_UNDONE,
} from './';

const PAGES = {
  [STATUS_ALL]: All,
  [STATUS_DONE]: Completed,
  [STATUS_UNDONE]: Uncompleted,
};

export default TODO_STATUSES.map(status => ({
  ...status,
  component: PAGES[status.value],
}));