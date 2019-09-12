import React, { Component, Fragment } from 'react';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    SvgIcon
} from '@material-ui/core';
import { AddCircleRounded } from '@material-ui/icons';

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render(){
        const { open } = this.state;
        return (
            <Fragment>
                <SvgIcon fontSize="large" onClick={this.handleToggle} style={{cursor: "pointer"}}><AddCircleRounded /></SvgIcon>
                <Dialog open={open} onClose={this.handleToggle}aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        Please fill out the form below
                        </DialogContentText>
                        <form>
            
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary">
                        Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}
