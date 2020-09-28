import React from 'react'
import '../App.css';
import { Grid, Cell } from 'react-mdl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {  faFacebook } from '@fortawesome/free-brands-svg-icons'

function Contacts(){
    return (
        <div>
            <div className="Contacts-main" style={{width: '100%', margin: 'auto'}}>
                <Grid className="Contacts-grid">
                   <Cell col={6}>
                     <h3>CHANDU RAUT</h3>
                        <img src="myAvatar.png" alt="My_avatar" height="200px" className="avatar-img" />
                        <p> Hello ,I am Chandu Raut. I am new learner in ReactJs. I want to gain
                             knowledge and skills about Python and Java.In future I want to make one Mini 
                            mobile game like COC.</p>
                   </Cell>
                   <Cell col={6}>
                       <h3>Wanna Get in Touch? </h3>
                       <hr/>
                       <table>
                           <tr>
                               <td ><FontAwesomeIcon  icon={faPhoneSquare}  className="Contacts-icons" ></FontAwesomeIcon></td>
                               <td>9834051169</td>
                           </tr>
                           <tr>
                               <td><FontAwesomeIcon   icon={faEnvelope}  className="Contacts-icons"></FontAwesomeIcon></td>
                               <td>craut358@gmail.com</td>
                           </tr>
                           <tr>
                               <td><FontAwesomeIcon   icon={faFacebook}  className="Contacts-icons"></FontAwesomeIcon></td>
                               <td>Chandrakant Raut</td>
                           </tr>  
                       </table>
                   </Cell>          
                </Grid> 
            </div>      
        </div>
    )
}

export default Contacts;