import React from 'react';
import { Container, Grid, Card, Image } from 'semantic-ui-react';
import '../static/css/coolboard.css';

const CoolBoardItem = (props) => {
  const { id, title, imgSrc, description, link, presenter, status} = props.data;
  const { key } = props.data;
  return (
    <Grid.Row key={key} className='itemPadding'>
      <Card centered>
        <Card.Content>
          <Image floated='right' size='mini' src={imgSrc} />
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Meta>
            {presenter}
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            {status}
          </a>
        </Card.Content>
      </Card>
    </Grid.Row>
  )

};


export default class CoolBoard extends React.Component {
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
    console.log(this.state);
    const {uncool, cool, icecold} = this.state;
    return (
      <Container>
        <Grid columns={3}>
          <Grid.Column>
            {uncool.map(item => <CoolBoardItem key={item.id} data={item} />)}
          </Grid.Column>
          <Grid.Column>
            {cool.map(item => <CoolBoardItem key={item.id} data={item} />)}
          </Grid.Column>
          <Grid.Column>
            {icecold.map(item => <CoolBoardItem key={item.id} data={item} />)}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }

}