import { Avatar, Box, Button, ClickAwayListener, Divider, Drawer, Hidden, Icon, List, ListItem, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';


const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: 'Web Developer',
    name: 'Fatih Ulil A'
  };
  
  const items = [
    {
      href: '/app/dashboard',
      title: 'Dashboard'
    },
    {
      href: '/app/customers',
      title: 'Customers'
    },
  ];
  
  const useStyles = makeStyles(() => ({
    mobileDrawer: {
      width: 256
    },
    desktopDrawer: {
      width: 256,
      top: 64,
      height: 'calc(100% - 64px)'
    },
    avatar: {
      cursor: 'pointer',
      width: 64,
      height: 64
    }
  }));

function Navbar({ onMobileClose, openMobile }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const {sidebarOpen} = useSelector(state =>state.mainReducer)

    const handleDrawerClose = () => {
      console.log('hittttt')
      dispatch({type:"UPDATE_SIDEBAR",data:false})
    };

    const content = (
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            p={2}
          >
            <Avatar
              className={classes.avatar}
              src={user.avatar}
              to="/app/account"
            />
            <Typography
              className={classes.name}
              color="textPrimary"
              variant="h5"
            >
              {user.name}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {user.jobTitle}
            </Typography>
          </Box>
          <Divider />
          <Box p={2}>
            <List>
              {items.map((item) => (
                    <ListItem
                    disableGutters
                  >
                    <Button
                      
                    >
                      {Icon && (
                        <Icon
                          className={classes.icon}
                          size="20"
                        />
                      )}
                      <span >
                        {item.title}
                      </span>
                    </Button>
                  </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      );
    return (
        <>
          <Hidden lgUp>
            <Drawer
              anchor="left"
              classes={{ paper: classes.mobileDrawer }}
              onClose={handleDrawerClose}
              open={sidebarOpen}
              variant="temporary"
            >
              {content}
              <Button onClick={handleDrawerClose}>sadsad</Button>
            </Drawer>
          </Hidden>
  
          <Hidden mdDown>
            <Drawer
              anchor="left"
              open
              variant="persistent"
              classes={{ paper: classes.desktopDrawer }}
            >
              {content}
            </Drawer>
          </Hidden>
        </>
    )
}

export default Navbar
