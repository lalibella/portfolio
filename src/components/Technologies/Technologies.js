import React from 'react';
import {FaCss3, FaHtml5,} from 'react-icons/fa';
import {DiFirebase, DiReact,} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked in a wide range of development stacks using the likes of Javascript, react, next j.s, firebase 
    </SectionText>
    <List>
      <ListItem>
        <FaCss3 size='3rem'/> <h3 style={{color:'#0082c8'}}> CSS </h3>
      </ListItem>
      <ListItem>
        <FaHtml5 size='3rem'/> <h3 style={{color:'#f5af19'}}> HTML </h3>
      </ListItem>
      <ListItem>
        <DiReact size='3rem'/> <h3 style={{color:'#6dd5ed'}}> REACT </h3>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/> <h3 style={{color:'#00B4DB'}}> FIREBASE </h3> 
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
