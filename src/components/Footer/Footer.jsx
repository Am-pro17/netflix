import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { purple } from '@mui/material/colors';

const color = purple[50];
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className='icon_Wrapper container'> <span><FacebookIcon/></span> <span><YouTubeIcon/></span> <span><InstagramIcon/></span> </div>
        <div className='container row list_of_link'>
            <div className='col-sm-6 col-md-3 just'>
                <div>Audio</div>
                <div>Description</div>
                <div>Investor Relation</div>
                <div>Legal Notice</div>
                <div>Service Code</div>
                <div>1997-2024 Netflix Inc ©</div>
             </div>
            <div className='col-sm-6 col-md-3'>
                <div>Help Center</div>
                <div>Jobs</div>
                <div>Cookie</div>
                <div>Preferences</div>
            </div>
            <div className='col-sm-6 col-md-3'>
                <div>Gift card</div>
                <div>Term of use</div>
                <div>Cooporate</div>
                <div>Information</div>
            </div>
            <div className='col-sm-6 col-md-3'>
                <div>Media Center</div>
                <div>Privacy</div>
                <div>Contact Us</div>
            </div>
        </div>
    </div>
  )
}

export default Footer