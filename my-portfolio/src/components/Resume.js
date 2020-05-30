import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center', height:'200px'}}>
                        <img style={{ borderRadius: '99%' }}
                            src="https://mir-s3-cdn-cf.behance.net/user/276/3d59ed371363557.5d152e268c7ca.jpg"
                            alt="avater"
                        />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Yekini Kolawole Babatunde</h2> 
                        <h4 style={{color:'grey'}}>User Interface and User Experience Designer</h4>

                        <hr style={{borderTop:'3px solid #833fb2', width:'50%',}}/>
                        <p>lorem ipsum</p>

                        <hr style={{borderTop:'3px solid #833fb2', width:'50%',}}/>

                        <h3>Address</h3>
                        <p>Lagos, Nigeria.</p>

                        <h3>Phone Number</h3>
                        <p>+234 7055 754 685</p>

                        <h3>Email</h3>
                        <p>kolawole_yekini@yahoo.com 
                            <br/>
                            kolawoleyekini@gmail.com
                        </p>

                        <h3>Web</h3>
                        <p>myweb.com</p>


                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>
                        <Education/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;