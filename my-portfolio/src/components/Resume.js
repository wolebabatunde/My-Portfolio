import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center', height: '200px' }}>
                            <img style={{ borderRadius: '99%' }}
                                src="https://mir-s3-cdn-cf.behance.net/user/276/3d59ed371363557.5d152e268c7ca.jpg"
                                alt="avater"
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Yekini Kolawole Babatunde</h2>
                        <h4 style={{ color: 'grey' }}>User Interface and User Experience Designer</h4>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%', }} />
                        <p>lorem ipsum</p>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%', }} />

                        <h3>Address</h3>
                        <p>Lagos, Nigeria.</p>

                        <h3>Phone Number</h3>
                        <p>+234 7055 754 685</p>

                        <h3>Email</h3>
                        <p>kolawole_yekini@yahoo.com
                            <br />
                            kolawoleyekini@gmail.com
                        </p>

                        <h3>Web</h3>
                        <p>myweb.com</p>


                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2015}
                            schoolName={"Olabisi Onabanjo University"}
                            schoolDescription={"Ago-Iwoye, Ogun State, Nigeria."}
                            courseTitle={"Political Science"}
                        />

                        <Education
                            startYear={2018}
                            endYear={2019}
                            schoolName={"The Code Center"}
                            schoolDescription={"Ikeja, Lagos State, Nigeria"}
                            courseTitle={"User Interface & User Experience Designer"}
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2019}
                            endYear={"Till date"}
                            jobName={"Libra Motors"}
                            jobTitle="User Interface / User Experience Designer"

                            jobDescription="Redesigned the Libmot Fifty five(55) Pages Mobile Application know as LibmotMobile to be more userfriendly and enjoyable."

                        />

                        <Experience
                            startYear={2019}
                            endYear={"Till date"}
                            jobName={"Libra Motors"}
                            jobTitle="User Interface / User Experience Designer"

                            jobDescription="Redesigned the Libmot Logistics Website"

                        />

                        <Experience
                            startYear={2019}
                            endYear={"Till date"}
                            jobName={"Libra Motors"}
                            jobTitle="User Interface / User Experience Designer"

                            jobDescription="Designed the Libmot Logistics Self-Service Mobile Application from the scratch"

                        />

                        <Experience
                            startYear={2019}
                            endYear={"Till date"}
                            jobName={"Libra Motors"}
                            jobTitle="User Interface / User Experience Designer"

                            jobDescription="Redesigned the Libra Motors Website (Still in Progress)"
                        />

                        <Experience
                            startYear={2019}
                            endYear={"Till date"}
                            jobName={"Libra Motors"}
                            jobTitle="Product Designer"

                            jobDescription="Designed the branding of the Libmot Mobile Application using Photoshop and am also responsible for design of flyers, banners, step and repeat photo banner etc"
                        />

                        <Experience
                            startYear={2019}
                            endYear={"Till date"}
                            jobName={"Libra Motors"}
                            jobTitle="Product Team Member"

                            jobDescription="Review the new products done by different team/members of the organization before pushing it out to the public"
                        />

                        <Experience
                            startYear={2019}
                            endYear={"Till date"}
                            jobName={"Libra Motors"}
                            jobTitle="Social Media Manager"

                            jobDescription="Design and post Social media contents on Facebook and Instagram "
                        />



                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName={"The Code Center"}
                            jobTitle={"Product Designer"}
                            jobDescription="I was responsible for designing Mockups/User Interface for Clients, was 
                        responsible for meeting/interacting with clients to gather project requirements from them 
                        and was also responsible for translating mockups designed by me or other interface designer to
                        Frontend codes"

                        />

                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName={"The Code Center"}
                            jobTitle={"ICT Instructor (Freelance)"}
                            jobDescription="Instructor of HTML and CSS for Fresh Students"

                        />

                        <Experience
                            startYear={2018}
                            endYear={"2018 (3months duration)"}
                            jobName={"HNG Internship 6.0 (Internship)"}
                            jobTitle={"UI/UX Designer"}
                            jobDescription="Designed a responsive Mini Classroom Web/App for Team Asclepius and
                            many other team for duration of 3months and also wrote Frontend codes for my team"

                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;