import React from 'react';
import Style from './Header.module.css';
import {Typography} from '@material-ui/core';

const Header = () => {
  return (
    <div className={Style.box}>
      <div className={Style.title}>
      <Typography variant="h5">Covid Tracker </Typography>
            </div>
    </div>
  )
}

export default Header;