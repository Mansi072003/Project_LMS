'use client'
import React,{FC,useState} from 'react';
import Heading from './utils/Heading';

import Header from './components/Header';
import Hero from './components/Route/Hero';
// import Login from './components/Auth/Login';
// import SignUp from './components/Auth/SignUp';
import {useRouter} from 'next/router';
interface Props {}

const Page : FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login")
  // const [isMobile, setisMobile] = useState(true);
  return (
    <div>
      <Heading title="Edutek" description="Edutek is a platform for students to learn and get help from teachers."
       keywords="Programming,MERN,Redux,Machine learning"/>
       <Header 
       open={open}
       setOpen={setOpen}
       activeItem={activeItem}
       setRoute={setRoute}
       route={route}
      //  isMobile={isMobile}

       />
       <Hero />
    </div>
  
    // show login page
    // <div>
    //   <Login setRoute={setRoute}/>
      
    // </div>
    
  );
}

export default Page;