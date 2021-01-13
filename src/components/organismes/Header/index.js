import { AppBar, Badge, Box, Button, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import React from 'react'

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box flexGrow={1} />
                <Hidden mdDown>
                <IconButton color="inherit">
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
