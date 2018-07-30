import React from 'react';
import ScreenRow from './screenRow';

const Screen = (props) => {
  return (
    <div className='screen'>
      <ScreenRow value = {props.question}/>
      <ScreenRow value = {props.answer}/>
    </div>
  );
}

Screen.prototype = {
  question : React.ProtoTypes.string.isRequired,
  answer : React.ProtoTypes.string.isRequired
}

export default Screen;