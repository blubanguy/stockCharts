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
import Form from './Form';


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

    handleChange = name => ({ target: { value } }) =>
        this.setState({
            [name]: value
        })

    render(){
        const 
            { open, exercise: {title, description, muscles} } = this.state
        return (
            <Fragment>
                <SvgIcon fontSize="large" onClick={this.handleToggle} style={{cursor: "pointer"}}><AddCircleRounded /></SvgIcon>
                <Dialog open={open} onClose={this.handleToggle}aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{marginBottom: 0}}>
                        Please fill out the form below
                        </DialogContentText>
                        <Form />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                        color="inherit"
                        style={{backgroundColor: "gray"}}
                        onClick={this.handleSubmit}>
                        Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}