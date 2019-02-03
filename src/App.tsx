import * as React from 'react';
import {Content, Drawer, Header, Layout, Navigation} from 'react-mdl';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Router from './router';


class App extends React.Component{
  public render() {
    return (
      <BrowserRouter>
          {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
          <div className="outer">
              <Layout>
                <div className="header-div">
                  <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll={true}>
                      <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                      </Navigation>
                    </Header>
                </div>
                  <Drawer title="Contents">
                      <Navigation>
                        <Link to="/landingpage">Home </Link>
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
