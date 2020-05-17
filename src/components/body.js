import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import UserList from './UserList';
import UserProfile from './userProfile';
import UserDetails from './singleUser';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [userID, setuserID] = React.useState(0);
  const [showUserModal, setShowUserModal] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const userIDHandler = (uID) => {
    setuserID(uID);
    setShowUserModal(!showUserModal);
  }

  return (
    <div className={classes.root} style={{marginTop:'70px'}}>
        <Container style={{marginTop:'50px'}}>
        <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="User List" {...a11yProps(0)} />
          <Tab label="User Profile" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{backgroundColor:'#DEE9F0'}}>
        <UserList getuserIdHandler={userIDHandler}/>
      </TabPanel>
      <TabPanel value={value} index={1} style={{textAlign:'center', backgroundColor:'#DEE9F0'}}>
        <UserProfile/>
      </TabPanel>
        </Container>
        <UserDetails userId={userID} showModal={showUserModal} closeModal={userIDHandler}/>
    </div>
  );
}
