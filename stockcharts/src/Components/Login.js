import React from 'react';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import { LockTwoTone } from '@material-ui/icons';

export default props => {
    return (
        <Container style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '444px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column', marginTop: '16%'}}>
            <Avatar style={{backgroundColor: 'red'}}>
                <LockTwoTone />
            </Avatar>
            <Typography variant='h5'>Log In</Typography>
            <form>
            <TextField
            id="username"
            label="Username *"
            margin="normal"
            variant="outlined"
            style={{width: '100%'}}
            autoFocus
            />
            <TextField
            id="password"
            label="Password *"
            type='password'
            margin="normal"
            variant="outlined"
            style={{width: '100%'}}
            />

            <FormControlLabel
            control={
                <Checkbox value="rememberMe" />
            }
            label="Remember Me"
            />
            <Button
            variant="contained"
            style={{width: '100%', backgroundColor: '#3f51b5', color: '#ffffff', margin: '24px 0px 16px', fontWeight: 'bold'}}>
                Sign In
            </Button>
            <Grid container>
                <Grid item xs='true'><Link variant='body2'>Forgot Password?</Link></Grid>
                <Grid item><Link variant='body2'>Don't have an account? Sign Up</Link></Grid>
            </Grid>
            </form>
            </div>
            <Box style={{marginTop: '64px'}}>
                <Typography align='center' style={{color: '#7986cb'}}>Copyright © <Link style={{color: '#7986cb'}}>Your Website</Link> 2019</Typography>
            </Box>
        </Container>
        
    );
}
