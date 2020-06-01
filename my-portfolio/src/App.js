import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
// import LandingPage from './components/LandingPage';
import { Link } from 'react-router-dom';


function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header" title={<Link style={{textDecoration:'none', color:'white'}}
                to="/">MyPortfolio</Link>} scroll>

                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/project">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration:'none', color:'Black'}}
                to="/">MyPortfolio</Link>}>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/project">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
