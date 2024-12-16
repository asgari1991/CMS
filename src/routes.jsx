import React from "react";
import Users from "./pages/Users/Users";
import Infos from "./pages/Infos";
import Courses from "./pages/Courses/Courses";
import Articles from "./pages/Articles";

export default [
    {path:'/',element:<Users/>},
    {path:'/users',element:<Users/>},
    {path:'/infos',element:<Infos/>},
    {path:'/courses',element:<Courses/>},
    {path:'/articles',element:<Articles/>}
]