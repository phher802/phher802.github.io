import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer(){


    const currentYear = new Date().getFullYear();

    return(<footer>
        <a class="footer-link" href="https://www.linkedin.com/in/pa-houa-her-2a896885">LinkedIn</a>
        <a class="footer-link" href="https://github.com/phher802">GitHub</a>
        <p>Copyright <CopyrightIcon /> {currentYear} </p>
        </footer>)
}


export default Footer;