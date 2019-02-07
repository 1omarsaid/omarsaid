import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(

      <div style={{textAlign: 'center'}}>

      <img
        src="https://i.imgur.com/Gn8W7OZ.jpg"
        alt="profile"

        style={{height: '90%'}}
         />

      </div>
    )
  }
}

export default Resume;
