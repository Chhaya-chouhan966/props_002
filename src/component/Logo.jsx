import React from 'react'
import './logo.css'



const Logo = (props) => {
    return (
        <>
            <div className='main_cards'
                style={{
                    backgroundImage: ` linear-gradient(90deg,rgb(0, 0, 0)40%,rgba(255, 255, 255, 0.12)),
                    url(${props.img})`, backgroundRepeat: "no-repeat"
                }}>
                <div className="logoDiv">
                    <img src={props.imgLogo} alt="" height="200px" />
                    <div className="logoContainDiv">
                        <h2>Bright</h2>
                        <p style={{ color: "skyblue" }}>2017, David Ayer</p>
                        <span style={{ border: "1px solid white", width: "50px", borderRadius: "5px" }}>117 min</span>&nbsp;&nbsp;
                        &nbsp;<span style={{ color: "skyblue" }}>Action, Crime, Fantasy</span>
                    </div>

                </div>
                <div className="containtDiv">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor blanditiis eos commodi, debitis quam quos in accusantium recusandae voluptatem praesentium explicabo nemo magnam enim modi voluptate libero quisquam at dignissimos minima unde accusamus cum.
                    <span>
                        <i className="fa-solid fa-share-nodes">&nbsp;&nbsp;&nbsp;&nbsp;</i>
                        <i className="fa-solid fa-heart">&nbsp;&nbsp;&nbsp;&nbsp;</i>
                        <i className="fa-solid fa-message"></i>
                    </span>

                </div>
            </div>
        </>
    )
}

export default Logo;