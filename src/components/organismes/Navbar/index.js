import { Avatar, Box, Button, Divider, Drawer, Hidden, Icon, List, ListItem, makeStyles, Typography } from '@material-ui/core'
import React from 'react'


const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith'
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
    {
      href: '/app/products',
      title: 'Products'
    },
    {
      href: '/app/account',
      title: 'Account'
    },
    {
      href: '/app/settings',
      title: 'Settings'
    },
    {
      href: '/login',
      title: 'Login'
    },
    {
      href: '/register',
      title: 'Register'
    },
    {
      href: '/404',
      title: 'Error'
    }
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

function Navbar() {
    const classes = useStyles();
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
          <Box flexGrow={1} />
          <Box
            p={2}
            m={2}
            bgcolor="background.dark"
          >
            <Typography
              align="center"
              gutterBottom
              variant="h4"
            >
              Need more?
            </Typography>
            <Typography
              align="center"
              variant="body2"
            >
              Upgrade to PRO version and access 20 more screens
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              mt={2}
            >
              <Button
                color="primary"
                component="a"
                href="https://react-material-kit.devias.io"
                variant="contained"
              >
                See PRO version
              </Button>
            </Box>
          </Box>
        </Box>
      );
    return (
        <>
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
