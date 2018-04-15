import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CoolBoardColumn from './CoolBoardColumn';

class CoolBoard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      uncool: [{
        id: 1,
        title: "This is a test card",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png",
        description: "This is a test description",
        link: "Link to full presentation",
        presenter: "Test Presenter",
        status: "uncool"
      },
      {
        id: 2,
        title: "This is a test card",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png",
        description: "This is a test description",
        link: "Link to full presentation",
        presenter: "Test Presenter",
        status: "uncool"
      }],
      cool: [{
        id: 3,
        title: "This is a test card",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png",
        description: "This is a test description",
        link: "Link to full presentation",
        presenter: "Test Presenter",
        status: "cool"
      },
      {
        id: 4,
        title: "This is a test card",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png",
        description: "This is a test description",
        link: "Link to full presentation",
        presenter: "Test Presenter",
        status: "cool"
      }],
      icecold: [{
        id: 5,
        title: "This is a test card",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png",
        description: "This is a test description",
        link: "Link to full presentation",
        presenter: "Test Presenter",
        status: "icecold"
      },
      {
        id: 6,
        title: "This is a test card",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png",
        description: "This is a test description",
        link: "Link to full presentation",
        presenter: "Test Presenter",
        status: "icecold"
      }]
    }

  }

  render () {
    const {uncool, cool, icecold} = this.state;
    return (
      <Container>
        <Grid columns={3}>
          <CoolBoardColumn data={uncool} />
          <CoolBoardColumn data={cool} />
          <CoolBoardColumn data={icecold} />
        </Grid>
      </Container>
    );
  }

}
export default CoolBoard;