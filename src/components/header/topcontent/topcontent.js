import React from 'react';
import {Link} from 'react-scroll';

const Topcontent = () => {
  return (

    <div id='topcontent'>
        <div id='topcontent_container'> 
        <h1>Ms.PREETHI SHREE B</h1>
        <p><b>Computer Science Engineer & Budding Web and App Developer</b></p>
        <p className='box'><b>Hi Everyone!! I'm Preethi! I'm graduating CSE in PSNACET.I'm Interested in Full Stack Development,and also interested in the Devops technology.I have done many online courses and earned some certificates and some of them are listed.And this is my portfolio!! </b></p>
       <a href='https://drive.google.com/file/d/1JDXt3LmJPg-7g6cjCKHq2rWooPtRvLIW/view?usp=drive_link'>
        <button id='topcontent_downloadbutton'>Download CV</button>
        <Link to='projects' smooth={true} duration={500}></Link>
.;       </a>
        </div>

    </div>
  )
}
export default Topcontent;