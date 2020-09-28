
import React,{useState} from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl'

const Projects = () => {

        const [count, setCount] = useState({
            activeTab:0
        })
    
        const dataChange = () => {
            if(count.activeTab === 0 ){
                return(
                        <div style={{display:'flex'}}>
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
        <CardText>
                    Covid-19 Notification System
        </CardText>
        <CardActions border>
        <Button colored>View Updates</Button>
         </CardActions>
        </Card>
                        </div>
                    )        
                }
                else if (count.activeTab === 1){
                    return(
                        <div style={{display:'flex'}}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
            <CardText>
                        Blood Bank Management System
            </CardText>
            <CardActions border>
            <Button colored>View Updates</Button>
            </CardActions>
            </Card>
            </div>
            )
        }
        else{
            return(
                   <div style={{display:'flex'}}>
                   <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                   <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Blood Bank Management System
                   </CardText>
                   <CardActions border>
                   <Button colored>View Updates</Button>
                   </CardActions>
                   </Card>
                   </div>
                   )
            }
    }
    return (
                <div>
                    <Tabs activeTab={count.activeTab} onChange={(tabID)=>{setCount({...count, activeTab:tabID})}} ripple>
                        <Tab>Python</Tab>
                        <Tab>Java</Tab>
                        <Tab>C++</Tab> 
                    </Tabs>
                    <section>
                        <Grid>
                            <Cell col={12}>
                                {dataChange()}
                            </Cell>
                        </Grid>
                    </section>
                </div> 
                
            ) 
        }
        
export default Projects;
        