import * as React from 'react';
import {Content, Drawer, Header, Layout, Navigation} from 'react-mdl';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Router from './router';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
          {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
          <div className="demo-big-content">
              <Layout>
                  <Header className="header-color" title="Title" scroll={true}>
                      <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Header>
                  <Drawer title="Title">
                      <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Drawer>
                  <Content>
                      <div className="page-content"/>
                      <Router />
                  </Content>
             </Layout>
           </div>
      </BrowserRouter> 
    );
  }
}

export default App;
