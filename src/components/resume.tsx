import * as React from 'react';
import { Cell, Grid } from 'react-mdl';
// import Skycity from '../img/skycity.jpg';
import timpic from '../img/timpic.gif';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Volunteer from './volunteer';


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
                        <p>The first error is for : MultipartRequestHelper. 
                            Let create a new folder (like we did for Model folder) called Helpers. 
                            Add new class MultipartRequestHelper in this folder and paste the following code.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                            <p>6/324 West Coast Road Glen Eden</p>
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
                        volunteerDescription={"Provided guests with information and directions about the venue. Served food throughout the duration of the venue and helped alongside caterers before and after venue."}
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
                                skill={"JavaScript"} 
                                progress={70}
                            />

                            <Skills
                                skill={"HTML/CSS"} 
                                progress={50}
                            />

                            <Skills 
                                skill={"C#"}
                                progress={60}
                            /> 

                            <Skills 
                                skill={"React"}
                                progress={20}
                            /> 

                            <Skills 
                                skill={"Unity"}
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