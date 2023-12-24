import React from 'react'
import { Element } from 'react-scroll'
import skilling from '../../components/skillcontainer/skill.jpg'
import LinearProgress from '@mui/material/LinearProgress'
export const Skillcontainer = () => {
  return (
    <Element className='skillcontainer' id='skills'>
        <div className='skillcontainerimage'>
            <img src={skilling}></img>
        </div>
        <div className="skillcontainertext">
            <h2>PROGRAMMING SKILLS</h2>
            <div className='skillcontainer_skillset'>
                <h5>c</h5>
            <div className='skillcontainer__slider skillcontainer__slider1'>
            <LinearProgress variant='determinate' value={60}/>
        </div>
        </div>   
        <div className='skillcontainer_skillset'>
                <h5>JAVA</h5>
            <div className='skillcontainer__slider skillcontainer__slider2'>
            <LinearProgress variant='determinate' value={50}/>
        </div>
        </div> 
        <div className='skillcontainer_skillset'>
                <h5>HTML</h5>
            <div className='skillcontainer__slider skillcontainer__slider3'>
            <LinearProgress variant='determinate' value={70}/>
        </div>
        </div> 
        <div className='skillcontainer_skillset'>
                <h5>CSS</h5>
            <div className='skillcontainer__slider skillcontainer__slider4'>
            <LinearProgress variant='determinate' value={70}/>
        </div>
        </div> 
        <div className='skillcontainer_skillset'>
                <h5>JavaScript</h5>
            <div className='skillcontainer__slider skillcontainer__slider5'>
            <LinearProgress variant='determinate' value={50}/>
        </div>
        </div> 
        <div className='skillcontainer_skillset'>
                <h5>ReactJS</h5>
            <div className='skillcontainer__slider skillcontainer__slider6'>
            <LinearProgress variant='determinate' value={50}/>
        </div>
        </div> 
    </div>
    
    <div className="skillcontainertext1">
            <h2>SKILLSET</h2>
            <div className='skillcontainer_skillset1'>
                <h5>Basic Front End Developer</h5>
            <div className='skillcontainer__slider skillcontainer__slider1'>
            <LinearProgress variant='determinate' value={50}/>
        </div>
        </div>   
        <div className='skillcontainer_skillset1'>
                <h5>Communication</h5>
            <div className='skillcontainer__slider skillcontainer__slider2'>
            <LinearProgress variant='determinate' value={70}/>
        </div>
        </div> 
        <div className='skillcontainer_skillset1'>
                <h5>Active Listener</h5>
            <div className='skillcontainer__slider skillcontainer__slider3'>
            <LinearProgress variant='determinate' value={80}/>
        </div>
        </div> 
        <div className='skillcontainer_skillset1'>
                <h5>Enthusiastic Learner</h5>
            <div className='skillcontainer__slider skillcontainer__slider4'>
            <LinearProgress variant='determinate' value={80}/>
        </div>
        </div> 
        <div className='skillcontainer_skillset1'>
                <h5>Leadership Quality</h5>
            <div className='skillcontainer__slider skillcontainer__slider5'>
            <LinearProgress variant='determinate' value={90}/>
        </div>
        </div> 
    </div>
    
    </Element>
  )
}
 export default Skillcontainer;