import React from 'react';
import Head from 'next/head'
import '../static/css/reset.css';
import Shell from '../components/Shell';
import mapPathToPage from '../utils/pathUtil';

const CoolBoard = ({page}) => (
  <div>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <Shell page={page}>Cool Board</Shell>
  </div>
)

CoolBoard.getInitialProps = ({pathname}) => ({
 page: mapPathToPage(pathname)
})

export default CoolBoard;