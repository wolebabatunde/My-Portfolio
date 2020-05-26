import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width:'100', margin:'auto'}}>
                <Grid className="landingpage-grid">
                    <Cell col={12}>
                        <img
                        src="https://mir-s3-cdn-cf.behance.net/user/276/3d59ed371363557.5d152e268c7ca.jpg"
                        alt="avater"
                        className="avater-img"
                        />

                        <div className="banner-text">
                            <h2>User Interface & User Experience Designer</h2>

                            <hr/>

                            <p>HTML / HTML5 | CSS / CSS3 | BOOTSTRAP | REACT | ADOBE XD | FIGMA</p>


                            <div className="social-links">

                                {/* Linkedln */}
                                <a href="https://www.linkedin.com/in/kolawole-yekini-06812043/" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/wolebabatunde" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github fa-3x" aria-hidden="true"></i>
                                </a>

                                {/* Behance */}
                                <a href="https://www.behance.net/kolawoleyekini/" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
                                </a>

                                {/* Twitter */}
                                <a href="https://twitter.com/Anonymous_S7" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
                                </a>

                            </div>
                            
                        </div>
                        
                    </Cell>
                </Grid>
                
            </div>
        )
}
}

export default LandingPage;