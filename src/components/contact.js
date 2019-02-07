import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Omar Said</h2>
            <img
              src="https://i.imgur.com/ErKSJ4j.jpg"
              alt="profile"

              style={{height: '250px'}}
               />
             <p style={{ width: '65%', margin: 'auto', paddingTop: '2em'}}>Currently Pursuing an Electrical Engineering Degree at Ryerson University. Fulfilling an Internship at IBM as a Watson Solution Engineer. In my spare time I love to learn iOS development and integrating different technologies like video processing and Machine Learning.</p>

          </Cell>

          {/*This is the right side of the website*/}
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (514) 814-3838
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    omarmksaid@gmail.com
                  </ListItemContent>
                </ListItem>



              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
