import React from 'react';
import { AppBar, Drawer, IconButton, InputAdornment, InputBase,
         List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar } from '@material-ui/core';
import { AccountCircle, Scanner, Search, ShowChart, Menu, ViewList } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        width: '100vw'
    },
    searchBar: {
    }

}, {name: 'MuiDrawer'});

const useInputStyles = makeStyles({
    input: {
        flexGrow: 1,
        maxWidth: '700px',
        color: 'white',
        borderRadius: '10px'
    }

}, {name: 'MuiInputBase'});

export default ({ onDrawerOpen, open, handleClickAway, isLoggedIn}) => {
    const classes = useStyles();
    const inputClasses = useInputStyles();
    return(
        <div>
           <AppBar position='static' className={classes.root}>
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <InputBase
                    placeholder="Enter Symbol or Name"
                    className={inputClasses.input}
                    />
                    <IconButton 
                    edge='start'
                    color='inherit'
                    onClick={onDrawerOpen}
                    >
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor='right' open={open} onClose={handleClickAway}>
                <List>
                    {['Charts', 'Watch List', 'News', 'Sign Out'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index===0?<ShowChart />:index===1?<ViewList/>:index===2?<Scanner />:<AccountCircle/>}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
