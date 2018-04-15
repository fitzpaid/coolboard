import React from 'react';
import CoolBoardCard from "./CoolBoardCard";
import { DropTarget } from 'react-dnd';
import { Grid } from 'semantic-ui-react';
import ItemTypes from '../../ItemTypes';

const BoardTarget = {
  drop(props) {
    console.log("Dropped");
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class CoolBoardColumn extends React.Component {
  render() {
    const { data, connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="column">
        {data.map(item => <CoolBoardCard key={item.id} data={item} />)}
      </div>
    )
  }
};

export default DropTarget(ItemTypes.BoardItem, BoardTarget, collect)(CoolBoardColumn);