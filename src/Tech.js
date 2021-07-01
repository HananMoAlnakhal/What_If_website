import React, {useState} from 'react';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Ideas from './components/Ideas';
import { ideaData } from './components/Ideas/data';


function Tech() {

    return (
      <>
          <GlobalStyle />
          <Hero />
          <Ideas heading='WHAT IF ‽' data={ideaData} />
      </>
    );

  }
  
export default Tech;