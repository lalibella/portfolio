import React from 'react';
import { AiFillTwitterCircle, AiFillFacebook, AiFillMail } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call me</LinkTitle>
      <LinkItem href='tel: +251935581958'>+251935581958 </LinkItem>
       </LinkColumn>
       <LinkColumn style={{marginLeft:'200px'}}>
      <LinkTitle>email</LinkTitle>
      <LinkItem href='mailto: luelteshome92@gmail.com'>luelteshome92@gmail.com </LinkItem>
       </LinkColumn>
      </LinkList>
        <SocialIconsContainer style={{marginLeft:'16px', marginBottom:'80px'}}>
      <SocialContainer>
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
    </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
