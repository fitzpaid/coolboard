import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CoolBoardColumn from './CoolBoardColumn';

class CoolBoard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      items: [
        {
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
        },
        {
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
        },
        {
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
        }
      ]
    }

    this.setStatus = this.setStatus.bind(this);

  }

  setStatus({id}, status) {
    this.setState((prevState) => {
      let items = prevState.items;
      let itemToUpdate  = items.find((item) => {
        return item.id === id
      });
      itemToUpdate['status'] = status;
      return items;
    })
  }

  render () {
    const {items} = this.state;
    return (
      <Container>
        <Grid columns={3}>
          <CoolBoardColumn drop={this.setStatus} type="uncool" data={items.filter(item => item.status === "uncool")} />
          <CoolBoardColumn drop={this.setStatus} type="cool" data={items.filter(item => item.status === "cool")} />
          <CoolBoardColumn drop={this.setStatus} type="icecold" data={items.filter(item => item.status === "icecold")} />
        </Grid>
      </Container>
    );
  }

}
export default CoolBoard;