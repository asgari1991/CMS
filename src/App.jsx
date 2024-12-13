import React from "react";
import Header from "./components/Header/Header";
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
export default function App() {
  return <>
  <div class="container px-0">
  <Header/>
        <main class="main">
          <div class="row justify-content-between mx-0">
           <Sidebar/>
          </div>
        </main>
      </div>
    
  </>;
}
