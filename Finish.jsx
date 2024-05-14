import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { PiHandHeartFill } from "react-icons/pi";
import { GiLightBulb } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
function Finish() {
  return (
    <div className='comment'>
<div className='comment_head'>
<div className='comment1'>
<button>Solutions</button>
<h1>The global payroll solution</h1>
<p>When it comes to payroll solutions, we have a variety of options that benefit both your company and your contractor.</p>
</div>
<div className='foto'></div>
</div>

<div className='son'>
<div className='one'></div>
<div className='two'>
    <h1>Consolidate Payroll Processing</h1>
    <p>We have designed a fast and effective payroll system that streamlines your payment process.</p>
    <div className='dont'>
<div className='font'>
    <div className='daire'>
    <IoDocumentText  className='icons3'/>
    </div>
    <p className='p3'>Tax Preparation</p>
</div>
<div className='font'>
    <div className='daire'>
    <PiHandHeartFill  className='icons3'/>
    </div>
    <p className='p3'>Payroll Processing</p>
</div>
<div className='font'>
    <div className='daire'>
    <GiLightBulb  className='icons3'/>
    </div>
    <p className='p3'>Cost Effective</p>
</div>
<div className='font'>
    <div className='daire'>
    <IoRocketSharp className='icons3' />
    </div>
    <p className='p3'>Scale Rapidly</p>
</div>
    </div>
   <div className='text'>
   <button className='btn'>Contact Us <GoArrowUpRight className='icons2' /></button>
   </div>
</div>
</div>
    </div>
  )
}

export default Finish