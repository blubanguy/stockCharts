import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import Chart from './Chart';
import Login from './Login';

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    openDrawer = () => {
        this.setState({
            open: true
        })
    }
    handleClickAway = () => {
        this.setState({
            open: false
        })
    }

    render () {
        const { isLoggedIn, open } = this.state;
        return (
            isLoggedIn?
            <Grid container direction='column' alignItems='stretch'>
                <Grid 
                item style={{flexGrow: 1}}
                ref={ (gridElement => this.gridElement = gridElement)}
                >
                    <Nav 
                    handleClickAway={this.handleClickAway}
                    onDrawerOpen={this.openDrawer}
                    open={open}
                    isLoggedin={isLoggedIn}
                    />
                </Grid>
                <Grid item>
                    <Chart />
                </Grid>
            </Grid>
            :<Login />
        );
    }
}