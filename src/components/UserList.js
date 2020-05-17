import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import * as Style from './userList.module.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    table: {
      minWidth: 700,
    },
  }));

const UserList = (props) => {
    const classes = useStyles();

    const [userData, setUserData] = useState({
      "page": 1,
      "per_page": 0,
      "total": 12,
      "total_pages": 2,
      userInfo:[] 
    });

    useEffect(()=> {

      const getUserData = () => {
        fetch(`https://reqres.in/api/users?page=${userData.page}`)
        .then(res => res.json())
        .then(resData => {
            const temp = {...userData};
                temp.page = resData.page;
                temp.per_page = resData.per_page;
                temp.total = resData.total;
                temp.total_pages = resData.total_pages;
                resData.data.forEach((el) => {
                  temp.userInfo.push(el)
                });
            setUserData(temp);
        })
        .catch(err => console.log(err))
      }
      
      getUserData();
    },[]);

    return(<React.Fragment>
      
      <main className={classes.content}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
      <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Email ID</StyledTableCell>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Avatar</StyledTableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {userData.userInfo.length >0 && userData.userInfo.map(row => {
            return (<TableRow className={Style.tableList} key={row.email} onClick={()=> props.getuserIdHandler(row.id)}>
              <TableCell align="center">{row.id} </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.first_name}</TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center"><Avatar alt="Remy Sharp" src={row.avatar} /></TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
    </main>
        
        </React.Fragment>);
};

export default UserList;