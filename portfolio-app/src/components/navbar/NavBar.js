import React, {useState} from "react";
import "./NavBar.css"
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';


function NavBar(){

    const [showLinks, setShowLinks] = useState(false);

    function getLinks(){
        setShowLinks(!showLinks);
    }

    return( 
    <div className="NavBar">
        <div className="leftside">
            <a href="/home"><HomeIcon /></a>
            <div className="links" id={showLinks ? "hidden" : ""}>
            
                <a href="/About">About</a>
                <a href="/Projects">Projects</a>
                <a href="/travels">Travels</a>
                <a href="/HmongHistory">Hmong History</a>
            </div>
            <button onClick={getLinks}><MenuRoundedIcon style={{backgroundColor: '#3d84a8', boxShadow: 'none', border: 0}}/></button>
        </div>
        <div className="rightside">
            <input type="text" placeholder="Search..." />
            <button><SearchIcon /></button>
        </div>
    </div> 
    );
}

export default NavBar;
