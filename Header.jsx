import React from 'react'
import { BiSolidBinoculars } from "react-icons/bi";
import { IoDesktopSharp } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { PiChatCenteredFill } from "react-icons/pi";
function Header() {
  return (
    <div className='container'>
       <div className='container_head'>
       <button>Contact</button>
        <h1>Questions? Meet Answer</h1>
        <p>Startups thrive with AccuPay. Their flexible payroll solutions have been instrumental in our journey, providing the support</p>
       </div>
        <div className='contact'>
   <div>
   <BiSolidBinoculars  className='icons'/>
   <h4>Compare Accupay</h4>
   <p>Explore how AccuPay stands out. Check our comparison.</p>
   <a href="#">Compare Accupay</a>
   </div>
   <div>
   <IoDesktopSharp className='icons' />
   <h4>Explore The Demo</h4>
   <p>Curious about our services? Request a demo to experience firsthand</p>
   <a href="#">See Demo</a>
   </div>
   <div>
   <FaHeadphones className='icons' />
   <h4>Give Us a Ring</h4>
   <p>Monday through Friday from 6AM - 6PM MST</p>
   <a href="https://google.com">Contact</a>
   </div>
   <div>
   <PiChatCenteredFill  className='icons'/>
   <h4>Help Centre</h4>
   <p>Looking for answers? Visit our Help Center for detailed guides</p>
   <a href="#">Help Center</a>
   </div>
        </div>
    </div>
  
  )
}

export default Header