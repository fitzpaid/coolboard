import React from 'react';
import CoolBoardCard from "./CoolBoardCard";
import { Grid } from 'semantic-ui-react';

class CoolBoardColumn extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Grid.Column>
        {data.map(item => <CoolBoardCard key={item.id} data={item} />)}
      </Grid.Column>
    )
  }
};

export default CoolBoardColumn;