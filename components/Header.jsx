import React from 'react';
import '../static/css/segment.override.css';
import { Menu, Segment } from 'semantic-ui-react';
import Link from 'next/link';

class Header extends React.Component {
  
  constructor (props) {
    super(props);
  }

  render () {
    const { activePage } = this.props;
    return (
    <Segment inverted>
      <Menu inverted pointing secondary>
          <Menu.Item
            name='board'
            active={activePage === 'home'}
          >
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
          </Menu.Item>

          <Menu.Item
          
            name='board'
            active={activePage === 'board'}
          >
            <Link href="/board">
              <a>
                  Cool Board
              </a>
            </Link>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
};

export default Header;
