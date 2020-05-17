import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Avatar } from '@material-ui/core';


const SimpleDialogDemo = (props) => {
  const [userData, setuserData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    setOpen(props.showModal);
  },[props.showModal])
  useEffect(()=> {
    if(props.userId !== 0)
    {
      const getuserInfo = () => {
        fetch(`https://reqres.in/api/users/${props.userId}`)
        .then(resData => resData.json())
        .then(data=> {
          setuserData(data);
        })
        .catch(err => console.log(err))
      }
      getuserInfo();
    }
  },[props.userId]);

  useEffect(()=>{
  },[userData]);

  const handleClose = () => {
      setOpen(!open);
      props.closeModal(0);
  };

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"User Complete Data"}</DialogTitle>
        <DialogContent>
        <Grid container>
                <Grid item xs={10}>
                    <Avatar src={userData.data && userData.data.avatar}/>
                </Grid>
            </Grid>
            <br/>
            <Grid container>
                <Grid item xs={12}>
                    Name : <span>{ userData.data && userData.data.first_name}  { userData.data && userData.data.last_name}</span>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    Email Address:  <span>{ userData.data && userData.data.email}</span>
                </Grid>
            </Grid>
            <br/>
            <Grid container>
                <Grid item xs={12}>
                    Company Name:  <span>{ userData.data && userData.ad.company}</span>
                </Grid>
                <Grid item xs={12}>
                    About:  <span>{ userData.data && userData.ad.text}</span>
                </Grid>
                <Grid item xs={12}>
                    Website URL:  <span>{ userData.data && userData.ad.url}</span>
                </Grid>
            </Grid>
        </DialogContent>
      </Dialog>
  );
}

export default SimpleDialogDemo;