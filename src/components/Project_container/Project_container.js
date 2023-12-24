import React from 'react'
import { Element } from 'react-scroll';
import Project from '../Project/Project';


const Project_container = () => {

    const projects=[
        {
            img:"https://tse4.mm.bing.net/th?id=OIP.KhUzbovzhaFxhtAijOidFAHaDk&pid=Api&P=0&h=180",
            title:"Virtual Internship Certificate",
            desc:"ARSUS Solutions & Services Pvt Ltd.",
            link:"https://photos.google.com/photo/AF1QipOkv6L1C-orgr-CnQpMcZs5cTHn-Bj07gkFrbji",
        },
        {
            img:"https://tse4.mm.bing.net/th?id=OIP.KhUzbovzhaFxhtAijOidFAHaDk&pid=Api&P=0&h=180",
            title:"Introduction to DevOps",
            desc:"Great Learning",
            link:"https://photos.google.com/photo/AF1QipNWmZEPZsLZsVFkxgQcpCEwUZbnRKQa0_CAbunl",
        },
        {
            img:"https://tse4.mm.bing.net/th?id=OIP.KhUzbovzhaFxhtAijOidFAHaDk&pid=Api&P=0&h=180",
            title:"DBMS & MySQL Zero TO Hero",
            desc:"Lets Upgrade",
            link:"https://photos.google.com/photo/AF1QipO6K8dtjQniBTChp_cjrpQQiAHYC9-4qvZAqKY-",
        },
        {
            img:"https://tse4.mm.bing.net/th?id=OIP.KhUzbovzhaFxhtAijOidFAHaDk&pid=Api&P=0&h=180",
            title:"Amazon Web Services",
            desc:"Udemy",
            link:"https://photos.google.com/photo/AF1QipOgsPzVV1-ELK3l6SATpN_GG01uStvhtNauykrU"        },
        {
            img:"https://tse4.mm.bing.net/th?id=OIP.KhUzbovzhaFxhtAijOidFAHaDk&pid=Api&P=0&h=180",
            title:"Oracle Cloud Foundations1",
            desc:"ORACLE Academy",
            link:"https://photos.google.com/photo/AF1QipMQOg1NbXbpys0-mI9GvhemS01z5kuQRyR4DbQW",         },
    ];

  return (
    <Element className='projectcontainer' id='projects'>
        <h1>Certificates</h1>
        <p>Here some of the cerificates that I have earned</p>
        <div className='projectcontainer__projects'>
{
    projects.map((project,index)=>{
        return(
            <Project 
            key={index} 
            img={project.img} 
            title={project.title} 
            desc={project.desc} 
            link={project.link} 
            />
        )
    })
}
        </div>
    </Element>
  )
}

export default Project_container;
