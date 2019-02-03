import * as React from 'react';
import { Cell, Grid } from 'react-mdl';
// import JS from '../img/js.png';
// import Skycity from '../img/skycity.jpg';
import timpic from '../img/timpic.gif';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Volunteer from './volunteer';

const skillIcons = {
    cSharp: "http://www.nerdystickers.com/thumbnail.asp?file=assets/images/product_images/csharp-001.png&maxx=300&maxy=0",
    html: "https://banner2.kisspng.com/20180503/cee/kisspng-web-development-html-css3-the-ohana-code-logo-2cpaper-projection-shaded_1660937-html-dropdown-js-5aebd5631cd291.7591600015254050271181.jpg",    
    javascript: "https://banner2.kisspng.com/20180821/uxs/kisspng-product-design-logo-brand-trademark-reporting-tool-for-javascript-and-html5-component-5b7c7899e0f971.9841989015348839939215.jpg",
    react: "https://banner2.kisspng.com/20180518/ptw/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575942028.3034008315266584216067.jpg",
    unity: "https://banner2.kisspng.com/20180523/fuf/kisspng-unity-game-engine-logo-video-game-corelle-brands-5b059883ec9bc6.4197736615270933799692.jpg"
}


class Resume extends React.Component {
    public render() {
        return(
            <div>
                <Grid>
                    
                    {/* Splitting the page in two sides */}
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={timpic}
                                alt="avatar"
                                style={{height: '50%',
                                paddingTop: '5em'                            
                            }}
                            />                         
                        </div>

                        {/* Left side blurbs */}
                        <h2 style={{paddingTop: '2em'}}>Timothy Serrano</h2>
                        <h4 style={{color: 'gray'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Date of Birth</h5>
                            <p>October 2nd 1994 (02/10/1994)</p>
                        <h5>Address</h5>
                            <p>6/324 West Coast Road, Glen Eden, Auckland.</p>
                        <h5>Phone</h5>
                            <p>(021) 1613579</p>
                        <h5>E-mail (Personal/University)</h5>
                            <p>tim.serrano@live.com</p>
                            <p>tmd9567@autuni.ac.nz</p>
                        <h5>Web</h5>
                            <p>placeholderwebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>    

                    {/* Right Side of page (Education/Experience) */}
                    <Cell className="resume-right-col" col={8}>
                        <h2> Education </h2>
                        
                        {/* UoA */}
                        <Education 
                            startYear={2013}
                            endYear={2014}
                            schoolName={"University of Auckland"}
                            schoolDescription={"Attended University of Auckland as my first place of tertiary study. Studied Computer Science under a Bachelor of Sciences degree. Deferred after second year for two years from (2015-2016)."} 
                        />

                        {/* AUT */}
                        <Education 
                            startYear={2017}
                            endYear={2019}
                            schoolName={"Auckland University of Technology"}
                            schoolDescription={"Enrolled into AUT after two-year long gap. Started from a clean slate, began from the beginning of first year and currently in third year. Currently studying a Bachelor of Computer and Information Sciences, majoring in Software Development. Expected graduation date end of 2019."} 
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                    
                    <h2>Volunteer Work</h2>

                    <Volunteer 
                        startYear={2017}
                        endYear={2017}
                        volunteerPlace={"SPCA Auckland - Legacy Giver Event"}
                        volunteerDescription1={"Provided guests with information and directions regarding venue"}
                        volunteerDescription2={"Catered to guests throughout the duration of the venue"}
                        volunteerDescription3={"Engage with guests to present a comfortable environment and promote SPCA future events"}
                    />

                    <hr style={{borderTop: '3px solid #e22947'}}/>

                    <h2>Experience</h2>

                    {/* First Job */}
                    <Experience
                        startYear={2012}
                        endYear={2014}
                      //  companyPicture={}
                        workPlace={"Cotton On - Sales Assistant"}
                        jobDescription1={"Achieved daily,monthly and yearly store budgets constantly for 2 years"}
                        jobDescription2={"Excelled in all tasks given and completed within allotted time"}
                        jobDescription3={"Provide high standard of customer service to ensure customer satisfaction"}
                    />

                    {/* Second Job */}
                    <Experience 
                        startYear={2015}
                        endYear={2018}
                        // companyPicture={}
                        workPlace={"SKYCITY Casino - Croupier"}
                        jobDescription1={"Engage with players while working under pressure at a fast pace to deliver constant entertainment."}
                        jobDescription2={"Maintain communication between colleagues to assist with security and surveillance."}
                        jobDescription3={"Perform independently without assistance of supervisor or managers during extremely busy hours"}
                        />
            
                    <hr style={{borderTop: '3px solid #e22947'}}/>

                    <h2>Skills</h2>
                        <Cell className="skills-progress-bars" col={12}>
                            <Skills
                                skill={skillIcons.javascript} 
                                progress={70}
                            />

                            <Skills
                                skill={skillIcons.html} 
                                progress={50}
                            />

                            <Skills 
                                skill={skillIcons.cSharp}
                                progress={60}
                            /> 

                            <Skills 
                                skill={skillIcons.react}
                                progress={20}
                            /> 

                            <Skills 
                                skill={skillIcons.unity}
                                progress={40}
                            />
                        </Cell>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;