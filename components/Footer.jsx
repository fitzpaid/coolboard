import React from 'react';
import '../static/css/segment.override.css';
import { Segment } from "semantic-ui-react";

class Footer extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <Segment inverted>
        <div>Created by @fitzpaid</div>
      </Segment>
    );
  }
}

export default Footer;