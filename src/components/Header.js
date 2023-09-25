'use client' //<< modify server component to client component<<
import React from 'react'

 function Header(props) {
    console.log(props)
  return (
    <header>kk {props.msg}</header> 
  )
}
export default Header