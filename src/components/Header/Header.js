import Link from 'next/link';
import React from 'react';
import { AiFillTwitterCircle, AiFillFacebook, AiFillMail } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
// import Image from 'next/image'
// import Luel from "../../../public/luel.jpg"

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:'flex', alignItems:'center', color:'white', marginLeft:'40px', marginBottom:'5px'}}>
           <FaRocket  size='3rem'/> <Span style={{marginLeft:'10px'}}>my portfolio</Span>
        </a>
        {/* <Image src={Luel} alt='me' width={50} height={50}/> */}
      </Link>
    </Div1>
     
    {/* <Div2>
      <li>
        <Link href='#projects'>
           <NavLink>projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
           <NavLink>technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
           <NavLink>about me</NavLink>
        </Link>
      </li>
    </Div2> */}
    <Div3>
       <img style={{width:'55px', height:'100px', border:'4px solid grey', marginTop:'8px' , clipPath: 'circle(33% at 47% 50%);', cursor:'pointer'}} src='/luel.jpg' alt='me'/>
      <SocialIcons href='https://twitter.com/luell_T?t=0o17ahaCBZ2f06CXE9CNQg&s=09'>
        <AiFillTwitterCircle size='2rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/luel.teshome.12'>
        <AiFillFacebook size='2rem'/>
      </SocialIcons>
      <SocialIcons href='https://mail.google.com/mail/u/0/#inbox'>
        <AiFillMail size='2rem'/>
      </SocialIcons>
      <SocialIcons href='https://t.me/mi9ttt'>
        <FaTelegram size='2rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
