import React from 'react';

const Button = (props) => {
  return(
    <input 
      type = "button"
      className = {props.type === 'action' ? 'button action-button' : 'button input-button'}
      onClick = {props.handleClick}
      value = {props.label}
    />
  );
}

Button.protoTypes = {
  type : React.ProtoTypes.string.isRequired,
  handleClick : React.ProtoTypes.func.isRequired,
  value : React.ProtoTypes.func.isRequired
}

export default Button;