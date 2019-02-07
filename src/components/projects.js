import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    {/* This is to point to the intial*/}
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">

          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Personal Website</CardTitle>
            <CardText>
              The following Website that you are on is built with React!
            </CardText>
            <CardActions border>
              <Button href="https://github.com/1omarsaid/Personal-Website" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
              <Button href="https://www.google.com" rel="noopener noreferrer" target = "_blank"  colored>Medium</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>


        </div>


      )
    } else if(this.state.activeTab === 1) {
        return(
          <div className="projects-grid">

            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >The Alert Application</CardTitle>
              <CardText>
                A university Centeric mobile application to give students alerts of free food/ Events or dangerous activities on campus.
              </CardText>
              <CardActions border>
                <Button href="" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
                <Button href ="https://medium.com/@omarmksaid/from-zero-to-app-launch-3f00bef3e5d4" rel= "noopener noreferrer" target="_blank" colored>Medium</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Shopification</CardTitle>
              <CardText>
                The following Website that you are on is built with React!
              </CardText>
              <CardActions border>
                <Button href="https://github.com/1omarsaid/Shopification" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
                <Button href="https://www.google.com" rel= "noopener noreferrer" target="_blank" colored>Medium</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Smart Eyes</CardTitle>
              <CardText>
                Using real time video processing and object detection, giving visually impaired users more conficents with their surroundings.
              </CardText>
              <CardActions border>
                <Button href="https://github.com/1omarsaid/Smart-Eyes" rel="noopener noreferrer" target = "_blank" colored>GitHub</Button>
                <Button href="https://www.gooogle.com" rel="noopener noreferrer" target="_blank"  colored>Medium</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>Synergy</CardTitle>
              <CardText>
                The following Website that you are on is built with React!
              </CardText>
              <CardActions border>
                <Button href="https://github.com/1omarsaid/Synergy" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
                <Button href="https://www.google.com" rel="noopener noreferrer" target="_blank" colored>Medium</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Text Speech</CardTitle>
              <CardText>
                The following Website that you are on is built with React!
              </CardText>
              <CardActions border>
                <Button href="https://www.google.com" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
                <Button href="" rel="noopener noreferrer" target="_blank" colored>Medium</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
            </Card>



          </div>

      )
    }else if (this.state.activeTab === 2) {
      return(

        <div className="projects-grid">

        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Sentiment Analysis</CardTitle>
          <CardText>
            Using Neural network to determine if a review is a positive or a negative review.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/1omarsaid/Sentiment_Analysis" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            <Button href="" rel="noopener noreferrer" target="_blank" colored>Medium</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>


        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>Traffic Prediction</CardTitle>
          <CardText>
            Using a Neural Network to predict how much traffic will be at a certain intersection.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/1omarsaid/traffic-prediction" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            <Button href="" rel="noopener noreferrer" target="_blank" colored>Medium</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>

        </div>


      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>iOS</Tab>
          <Tab>Machine Learning</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
