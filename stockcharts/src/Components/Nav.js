import React from 'react';
import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { ViewList, ShowChart, Menu } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }

}));

export default ({ onDrawerOpen, open, handleClickAway, isLoggedIn}) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
           <AppBar position='static'>
                <Toolbar>
                    <IconButton 
                     edge='start'
                     color='inherit' 
                     className={classes.menuButton}
                     onClick={onDrawerOpen}>
                        <Menu />
                    </IconButton>
                    <Typography className={classes.title}>
                        StockCharts
                    </Typography>
                    <Button color='inherit'>
                        {isLoggedIn
                        ?'Sign Out'
                        :'Log In'}
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={handleClickAway}>
                <List>
                    {['Charts', 'Watch List'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index===0?<ShowChart />:<ViewList/>}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
