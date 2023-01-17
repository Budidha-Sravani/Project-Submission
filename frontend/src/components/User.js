import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function User() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[comments,setComments]=useState('')
    const[rating,setRating]=useState('')
    const[Users,setStudents]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const user={rating,comments}
    console.log(user)
    fetch("http://localhost:8002/feedback",{
      method:"POST",
      headers:{"Content-Type":"application/json","access-control-allow-origin":"*"},
      body:JSON.stringify(user)

  }).then(()=>{
    console.log("New feedback added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8002/feedback")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>How Was Your Experience</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Give rating" variant="outlined" fullWidth 
      value={rating}
      onChange={(e)=>setRating(e.target.value)}
      />
      <TextField id="outlined-basic" label="Comments" variant="outlined" fullWidth
      value={comments}
      onChange={(e)=>setComments(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Users</h1>

    <Paper elevation={3} style={paperStyle}>

      {Users.map(user=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={user.id}>
         Id:{user.id}<br/>
         Rating:{user.rating}<br/>
         Comments:{user.comments}

        </Paper>
      ))
}
</Paper>
</Container>
  );
}