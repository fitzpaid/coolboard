/**
 * This file defines the layout and structure of the app 
 */
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Grid } from 'semantic-ui-react';


class Shell extends React.Component {
  constructor (props) {
      super(props);
  }

  render() {
    return (
      <div className='Shell'>
        <Header activePage={this.props.page} />
        <div className="Shell-content">
          {this.props.children}
        </div>
        <style jsx>{`
          .Shell {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
          .Shell-content {
            flex: 1;
          }
        `}</style>
        <Footer />
      </div>
    );
  }
} 

export default Shell;