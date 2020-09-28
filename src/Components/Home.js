import React from 'react';
import '../App.css';

import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStackOverflow, faPython, faInstagram ,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


function Home(){
    return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="home-grid">
                
                <Cell col={12}>
                    <div className="headertitle" >
                        <img src="myAvatar.png" alt="My_avatar" height="200px" className="avatar-img" />
                    </div>
                </Cell>

                <Cell coll={12} style={{width:'100%'}}>
                    <div className="header">
                        <img src="sign1.png" alt="Signature"/>
                    </div>
                    
                </Cell>

                
                    <div className="banner-text">
                        <h1>Student</h1>
                        <hr/>
                        <p>
                            C++ | Web Development | Python | HTML
                        </p>
                        <div className ="home-icons">
                            <span className="icon" >
                                < a href="https://github.com/csr2137" >
                                <FontAwesomeIcon icon={faGithub} /> </a>
                            </span>
                            <span className="icon">
                                < a href='https://www.google.com' >
                                <FontAwesomeIcon icon={faStackOverflow} /></a>
                            </span>
                            <span className="icon">
                                < a href="//https:www.Telegram.com" >
                                <FontAwesomeIcon icon={faPython} /></a>
                            </span>
                            <span className="icon">
                                < a href="https://www.instagram.com/csr_2137"  >
                                <FontAwesomeIcon icon={faInstagram} /></a>
                            </span>
                            <span className="icon">
                                < a href="//https:www.Google.com"  >
                                <FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </span>
                        </div>
                    </div>
            </Grid>
            
            
        </div>
            
    )
}

export default Home;