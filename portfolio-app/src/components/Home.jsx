import React from "react";

function Home() {



    return ( 
        <div>
            <div className="top-container">
                <h1>I'm Pa</h1>
                <h3>a software developer</h3>
                <img className="cloud-1 clouds-animate-1" src="images/cloud1.png" alt="cloud img" />
                <img className="cloud-2 clouds-animate-2" src="images/cloud1.png" alt="cloud img" />
                <img className="cloud-3 clouds-animate-3" src="images/cloud1.png" alt="cloud img" />
                <img className="cloud-4 clouds-animate-4" src="images/cloud1.png" alt="cloud img" />
                <img className="cloud-5 clouds-animate-5" src="images/cloud1.png" alt="cloud img" />
                <img className="island" src="images/whaleIslandVacay.gif" alt="whale island cartoon" />
            </div>
            <div className="middle-container">
                <div className="self-box">
                    <img className="self" src="images/stackedPolaroidWithSelfie.svg" alt="Pa's profile picture" />
                </div>

                <div className="hello">
                    <h1 className="font1">Hello.</h1>
                    <h2 className="my-interests">I'm a lover of Pho, Bloody Marys, and Korean Fried Chicken.</h2>
                </div>
            </div>
            
        </div>
 
    );
}






export default Home;