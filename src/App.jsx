// import React from "react";
import { Component } from "react";
import {  Outlet } from "react-router-dom"


import Socialicons from "./components/topbar/Socialicons"
// import BasicGrid from "./materialUI/components/fabIcons/BasicGrid"
import SimpleContainer from "./materialUI/components/fabIcons/BasicGrid22"
import Navbar from "./components/navbar/Navbar"



export default function App() {
  return (
    <>
     <Navbar/>
     <Outlet></Outlet>

    {/* <SimpleContainer/> */}
    </>
  )
}





