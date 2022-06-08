import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer =()=>{
   const date = new Date().toLocaleDateString();

    return(
        <>
       <div class="footer text-center bg-dark text-light">
        <p className="mt-2">copyRight <CopyrightIcon/> {date}  </p>
        <div className="space"><FacebookIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
        </div>
        </div>

        </>
    )
}
export default Footer;