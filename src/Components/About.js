import React from 'react'
import '../App.css';
import { Cell,Grid } from 'react-mdl';

function About() {
    return (
        <div className="About-text">
            <Grid className="About-Grid">
                <Cell col={12}>
                    <div className="AboutTitle" >
                        <marquee className="text1"> THIS IS MY PORTFOLIO</marquee>
                        <img src="myAvatar.png" alt="My_avatar" height="200px" className="avatar-img" />
                    </div>   
                </Cell>
                  
            </Grid>
            <h1> Chandu Raut</h1>
        </div>
    )
}

export default About;