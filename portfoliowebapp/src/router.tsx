import * as React from 'react';
import { Route } from 'react-router-dom';

import AboutMe from './components/aboutme';
import Contacts from './components/contact';
import LandingPage from './components/landingpage';
import Projects from './components/projects';
import Resume from './components/resume';


export const Router: React.StatelessComponent<{}> = () => {
    return (

            <div>
                <main>
                    <Route exact={true} path="/" component={LandingPage} />
                    <Route path="/aboutme" component={AboutMe} />
                    <Route path="/contact" component={Contacts} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/resume" component={Resume} />

                    {/*                    
                        Add later, for redirecting links

                        <Redirect from='*' to='/' /> 
                    
                    */}
                </main>
            </div>
    );
}

export default Router;