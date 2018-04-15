import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import '../../static/css/coolboard.css';

class CoolBoardCard extends React.Component {

  render() {
    const { id, title, imgSrc, description, link, presenter, status } = this.props.data;
    const { key } = this.props.data;
    return (
      <Grid.Row key={key} className='itemSpacing'>
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
  }

};

export default CoolBoardCard;