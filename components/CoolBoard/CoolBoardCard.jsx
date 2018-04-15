import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import { DragSource } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import '../../static/css/coolboard.css';
import ItemTypes from '../../ItemTypes';

const cardSource = {
	beginDrag() {
		return {}
	},
}

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging(),
	}
}

class CoolBoardCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, imgSrc, description, link, presenter, status } = this.props.data;
    const { key } = this.props.data;
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div key={key} className='row itemSpacing'>
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
      </div>
    )
  }

};

export default DragSource(ItemTypes.BoardItem, cardSource, collect)(CoolBoardCard);
