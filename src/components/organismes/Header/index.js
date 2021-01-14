import { AppBar, Badge, Box, Button, Hidden, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import React from 'react'
import Logo from '../../atoms/Logo';
import { fullLogoAlt } from '../../../assets';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
    },
    logo:{
        height: '40px'
    }
  }));

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
            <Logo src={fullLogoAlt} className={classes.logo}></Logo>
                <Box flexGrow={1} />
                <Hidden mdDown>
                <IconButton color="inherit" >
                    <Badge
                    color="primary"
                    variant="dot"
                    >
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <InputIcon />
                </IconButton>
                </Hidden>
                <Hidden lgUp>
                <IconButton
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                </Hidden>
        </Toolbar>
      </AppBar>
    )
}

export default Header
