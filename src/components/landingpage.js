import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', textAlign: 'center'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.imgur.com/p3SDPTp.jpg"
              alt="avatar"
              className="avatar-img"

              />

            <div className="banner-text">
            <h2>Omar Said</h2>
              <h1>Full Stack Mobile Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | Firebase | Swift</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/omarmustafa97/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/1omarsaid" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Medium */}
          <a href="https://medium.com/@omarmksaid" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-medium" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
          <div className='footer' style={{textAlign: 'center', width: '100%'}}>
          <hr/>
          <h2> </h2>
          <p>This site is made with React.js</p>
          </div>
        </Grid>



      </div>
    )
  }
}

export default Landing;
