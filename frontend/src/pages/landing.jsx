import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader' style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src="/logoNow.png"
                        alt="Callify Logo"
                        style={{ width: "64px", height: "64px", marginRight: "4px" }}
                    />

                    <h1 style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        color: "#2563eb",
                        letterSpacing: "1px"
                    }}>
                        Callify
                    </h1>

                </div>

                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by Soul Connect</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/Video.png" alt="" />

                </div>
            </div>



        </div>
    )
}
