import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './store/users'
import coursesReducer from './store/courses'
import articleReducer from './store/articles'
export default configureStore({
    reducer:{
        users:usersReducer,
        courses:coursesReducer,
        articles:articleReducer
    }
})