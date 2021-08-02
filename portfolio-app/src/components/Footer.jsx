import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(<footer>
        <p>Copyright <CopyrightIcon /> {currentYear} Pa Her</p>
        </footer>)
}

export default Footer;
