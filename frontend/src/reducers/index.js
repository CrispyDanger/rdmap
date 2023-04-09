import { combineReducers } from "redux";
import auth from './auth'
import projects from './projects'
import tasks from "./tasks";

export default combineReducers({
    auth,
    projects,
    tasks
});
