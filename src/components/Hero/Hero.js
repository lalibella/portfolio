import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = () => (
  <Section row nopadding>
    <LeftSection main center>
      <SectionTitle style={{marginTop:'60px'}}>
        hello there, name is <span style={{color:'yellow'}}>ልኡል</span> & welocome to my personal portfolio site
      </SectionTitle>
    <SectionText>
      self-motivated,committed and resourceful tech enthusiast and computer science graduate who's trying to do good and bring his A game to the job 24/7
    </SectionText>
      <a href='https://twitter.com/luell_T?t=0o17ahaCBZ2f06CXE9CNQg&s=09' target='_blank'>
        <Button>Learn More</Button>
        <Button>Download Resume </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;