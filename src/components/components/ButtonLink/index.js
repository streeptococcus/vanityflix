import React from 'react';

function ButtonLink(props) {

  console.log(props)

  return (
    <a href={props.href} className={props.classname}>
       {props.children}
      </a>
    )
}

export default ButtonLink