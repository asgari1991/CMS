import React from "react";
import Header from "./components/Header/Header";
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
export default function App() {
  const router=useRoutes(routes)
  return <>
  <div class="container px-0">
  <Header/>
        <main class="main">
          <div class="row justify-content-between mx-0">
           <Sidebar/>
           {router}
          </div>
        </main>
      </div>
    
  </>;
}
