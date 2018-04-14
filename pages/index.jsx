import React from 'react';
import Head from 'next/head'
import { Header, Container } from 'semantic-ui-react';
import Shell from '../components/Shell';
import mapPathToPage from '../utils/pathUtil';

const Home = ({page}) => (
  <div>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <Shell page={page}>
      <Container text textAlign="center">
        <Header as="h2">About This Tool</Header>
        <p>This tool is to allow the sorting and ranking of different 
          technoligies that Pond5 wish to use. It's based off Engineering All-Hands talks.
          The hope is to give insight into what tools we want to use now and in the future and what could be helpful.
        </p>
      </Container>
    </Shell>
  </div>
)

Home.getInitialProps = ({pathname}) => ({
 page: mapPathToPage(pathname)
})

export default Home;