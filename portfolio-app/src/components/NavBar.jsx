import React, {useState} from "react";
import "../App.css"
import ReorderIcon from '@material-ui/icons/Reorder';
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
            <button onClick={getLinks}><ReorderIcon /></button>
        </div>
        <div className="rightside">
            <input type="text" placeholder="Search..." />
            <button><SearchIcon /></button>
        </div>
    </div> 
    );
}

export default NavBar;
