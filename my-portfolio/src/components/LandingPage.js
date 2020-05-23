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
                            
                        </div>
                        
                    </Cell>
                </Grid>
                
            </div>
        )
}
}

export default LandingPage;