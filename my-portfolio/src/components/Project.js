import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }

    }
    toggleCategories() {


        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">

                    {/* Projects 1 */}

                    <Card shadow={7} style={{ minwidth: '420px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Projects 2 */}

                    <Card shadow={7} style={{ minwidth: '420px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Projects 3 */}

                    <Card shadow={7} style={{ minwidth: '420px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                </div>






            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is UI Design</h1>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Pure HTML</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>This is Photoshop Design</h1>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab> React</Tab>
                    <Tab>Pure HTML/CSS</Tab>
                    <Tab>UI Design</Tab>
                    <Tab>Photoshop Design</Tab>

                </Tabs>

                <section>
                    {this.toggleCategories()}
                </section>


            </div>
        )
    }
}

export default Project;