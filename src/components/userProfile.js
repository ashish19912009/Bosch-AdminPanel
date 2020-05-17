import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const fullTimeRef = useRef();
  const [userData, setUserData] = useState({
    fName: '',
    lName: '',
    gender: '',
    email: '',
    mobile: '',
    partTime: false,
    fullTime: false,
  })

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(!userData.partTime && !userData.fullTime)
    {
      alert("Kindly select Job Type");
      fullTimeRef.current.focus();
    } else if(userData.gender === '') {
      alert("Kindly select Gender"); 
    }
    else
      console.log(userData);
  }

  const fNameChangeHandler = (event) => {
    event.persist();
      setUserData((data) =>{
        return {
          ...data,
          fName: event.target.value
        }
      });
  }

  const lNameChangeHandler = (event) => {
    event.persist();
      setUserData((data) =>{
        return {
          ...data,
          lName: event.target.value
        }
      });
  }

  const emailChangeHandler = (event) => {
    event.persist();
      setUserData((data) =>{
        return {
          ...data,
          email: event.target.value
        }
      });
  }

  const mobileNoChangeHandler = (event) => {
    event.persist();
    setUserData((data)=>{
      return{
        ...data,
        mobile: event.target.value
      }
    });
  }

  const handleChangePartTimeHandler = () => {
    setUserData((data)=>{
      return {
        ...data,
        partTime: !data.partTime
      }
    });
  }

  const handleChangeFullTimeHandler = () => {
    setUserData((data)=>{
      return {
        ...data,
        fullTime: !data.fullTime
      }
    });
  }

  const userGenderHandler = (e) => {
    setUserData((data)=>{
      return {
        ...data,
        gender: e.target.value
      }
    });
  }

  return (
    <Paper>
    <form className={classes.root} onSubmit={onSubmitHandler} autoComplete="off" style={{padding:'50px 0px'}}>
    <Grid container spacing={3} style={{width:'80%'}}>
      <Grid item xs={12} sm={4}>
        <TextField id="outlined-basic"
          label="First Name"
          type="text"
          variant="outlined"
          onChange={fNameChangeHandler}
          value={userData.fName}
          required
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField id="outlined-basic"
          label="last Name"
          type="text"
          variant="outlined"
          onChange={lNameChangeHandler}
          value={userData.lName}
          required
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          onChange={emailChangeHandler}
          value={userData.email}
          required
        />
      </Grid>
    </Grid>
    <Grid container spacing={3} style={{width:'80%'}}>
      <Grid item xs={12} sm={4}>
        <TextField
          id="outlined-basic"
          type="number"
          label="Mobile No"
          variant="outlined"
          onChange={mobileNoChangeHandler}
          value={userData.mobile}
          required
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControlLabel
        control={
          <Checkbox checked={userData.partTime} 
          onChange={handleChangePartTimeHandler}
          value={userData.partTime}
          name="checkedA" />}
        label="Part-Time"
      />
      <FormControlLabel
        control={
          <Checkbox 
          checked={userData.fullTime} 
          onChange={handleChangeFullTimeHandler} 
          value={userData.fullTime}
          ref={fullTimeRef}
          name="checkedA" />}
        label="Full-Time"
      />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl>
          <InputLabel shrink htmlFor="age-label-placeholder">
            Gender
          </InputLabel>
          <Select 
            value={userData.gender}
            onChange={userGenderHandler}
            name="Gender"
            inputProps={{
              name: 'gender',
              id: 'gender-simple',
              }}
            required
          >
          <MenuItem value="">
            <em>None</em>
              </MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    <br/>
    <Grid container style={{width:'75%', textAlign:'right'}}>
    <Grid item xs={12} sm={12}><Button type='submit' variant="contained" color="secondary" >SUBMIT</Button></Grid>
    </Grid>
  </form>
    </Paper>
    
  );
}

export default UserProfile;
