import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'
import Chaticon from './ChatIcon';

function Chat() {
  return (
    <>
        <CssBaseline />


<      Grid container spacing={0} style={{ width:'100%' }}>
        <Grid items xs={5} md={0}>

        <Chaticon title = "Group1"/>
        <Chaticon title = "Group2"/>
        <Chaticon title = "Group3"/>
        <Chaticon title = "Group4"/>
        <Chaticon title = "Group6"/>
        <Chaticon title = "Group7"/>
        <Chaticon title = "Group8"/>
        <Chaticon title = "Group9"/>
        <Chaticon title = "Group10"/>
        <Chaticon title = "Group11"/>


          </Grid>
          <Grid items xs={7} md={8}>

            <h1 style={{fontSize:50 ,display:"flex", flexDirection:"column-reverse",justifyItems:"center"}}>ChatRoom</h1>
            
          </Grid>
          
         
         </Grid> 


     
    </>
  )
}

export default Chat;
