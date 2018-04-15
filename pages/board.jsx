import React from 'react';
import Head from 'next/head'
import '../static/css/reset.css';
import Shell from '../components/Shell';
import CoolBoard from '../components/CoolBoard/CoolBoard';
import mapPathToPage from '../utils/pathUtil';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const CoolBoardScreen = ({page}) => (
  <div>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <Shell page={page}><CoolBoard /></Shell>
  </div>
)

CoolBoardScreen.getInitialProps = ({pathname}) => ({
 page: mapPathToPage(pathname)
});

export default DragDropContext(HTML5Backend)(CoolBoardScreen);