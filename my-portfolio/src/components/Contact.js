import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent,  } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Yekini Kolawole</h2>
                        <img style={{ borderRadius: '99%' }}
                            src="https://mir-s3-cdn-cf.behance.net/user/276/3d59ed371363557.5d152e268c7ca.jpg"
                            alt="avater"
                        />
                        <p style={{ width: '75%', margin: 'auto', padding: '1em' }}>
                            Available 24/7
                        </p>
                    </Cell>
                    
                    <Cell col={6}>


                        <h2>Contact Me</h2>
                        <hr />

                        <List>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize:'25px',}}>
                                <i class="fa fa-phone-square" aria-hidden="true" style={{paddingRight:'5rem'}}></i>
                                 (+235 705 5754 685)
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize:'25px',}}>
                                <i class="fa fa-envelope" aria-hidden="true" style={{paddingRight:'5rem'}}></i>
                                 kolawole_yekini@yahoo.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize:'25px',}}>
                                <i class="fa fa-twitter-square" aria-hidden="true" style={{paddingRight:'5rem'}}></i>
                                 @Anonymous_S7
                                </ListItemContent>
                            </ListItem>
                           
                        </List>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;