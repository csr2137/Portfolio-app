import React from 'react';
import '../App.css';
import {Grid,Cell,ProgressBar} from 'react-mdl';

function Resume(){
  return (
    <div>
       <div className="Resume-main" style={{width: '100%', margin: 'auto'}}>
         
          <Grid className="Resume-grid">
             <Cell col={12}>
             <h3>CHANDRAKANT RAUT</h3>
                <p><h2>Career Objective:-</h2>
                           <h5> To secure a challenging position in a reputable organization 
                             to expand my learnings, knowledge, and skills.</h5></p>
                <br></br>
                <hr></hr>
               <p><h2>Education:-</h2> 
               <h4>G.H.Raisoni college of Engineering and Technology,Wagholi,Pune-412205</h4>
               <h5>BE(Pursuing)</h5>
               <h5>7.3</h5>
               <h4>Bharat English School,Shivajinagar,Pune-411005</h4>
               <h5>12th</h5>
               <h5>66.92</h5>
               <h4>Laxmibai Nandgude Highschool</h4>
               <h5>10th</h5>
               <h5>90.40</h5></p>  
               <hr></hr>  
               <h2>TECHNICAL SKILLS:-</h2>
               <p><h3>HTML</h3><h1><ProgressBar max={100} now={45}/></h1>
                   <h3>C++</h3><h1><ProgressBar  now={55}/></h1>
                   <h3>Python</h3><h1><ProgressBar  now={40}/></h1></p>
                       
           </Cell>
         </Grid>
        </div>
    </div>
  )
}
export default Resume;