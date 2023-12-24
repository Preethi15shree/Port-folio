import { IconButton } from '@mui/material'
import React from 'react'
import {LinkedIn} from '@mui/icons-material'
import { Element } from 'react-scroll'
import "./contact.css"

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email:<span>preethishreeb2004@gmail.com</span>
            </p>
            <p>
                GitHub Username: <span>https://github.com/Preethi15shree/Preethi</span>
            </p>
            <div className='contact__icons'>
                <a href='https://www.linkedin.com/in/preethi-shree-b-46a320230'>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>

            </div>
        </div>
    </Element>
  )
}

export default Contact;