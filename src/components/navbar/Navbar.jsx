// import { FaBars } from "react-icons/fa";
import "./navbar.css"
import { useState } from "react"
// import { FiAlignLeft } from "react-icons/fi"
import { Link, Outlet } from "react-router-dom"


const Navbar = () => {


    return (<>

      













        <div className="container-fluid d-none d-sm-block fix_top " style={{ backgroundColor: "lightgreen" ,zIndex:"10000!important"}}>
            <div className="row">
                <div className="col-4">
                    <h2>InformativeGuru</h2>
                </div>
                <div className="col-8 d-flex justify-content-end align-items-center" style={{ fontFamily: "cursive", fontSize: "1.3rem" }}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/registration" className="nav-link">Registration</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link">Aboutus</Link>
                    </li>
                </div>
                
            </div>
        </div>



        {/* <Outlet></Outlet>   */}





    </>)
}

export default Navbar