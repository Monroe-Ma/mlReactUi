import React from 'react';
import Icon from './Icon';
import "./icon.SideShow.scss"
const IconSideShow = () => { 

  return (
    <div>
      <Icon className='SideIcon' name="add" />
      <Icon className='SideIcon' name="daily" />
      <Icon className='SideIcon' name="eat" />
      <Icon className='SideIcon' name="education" />
      <Icon className='SideIcon' name="medical" />
      <Icon className='SideIcon' name="shopping" />
      <Icon className='SideIcon' name="snacks" />
      <Icon className='SideIcon' name="traffic" />
   </div>
  )
}
export default IconSideShow
