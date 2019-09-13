import React, { Component, Fragment } from 'react';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SvgIcon,
    TextField
} from '@material-ui/core';
import { AddCircleRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    FormControl: {
        width: 500
    }
});
export default withStyles(styles)(class extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        }
    }
    
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }

        })
    }

    handleSubmit = () => {
        const { exercise } = this.state;
        this.props.onCreate({
            ...exercise,
            id: exercise.title.toLowerCase().replace(/ /g, '-')
        })

        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        })
    }

    render(){
        const 
            { open, exercise: {title, description, muscles} } = this.state,
            {classes, muscles: categories} = this.props;
        return (
            <Fragment>
                <SvgIcon fontSize="large" onClick={this.handleToggle} style={{cursor: "pointer"}}><AddCircleRounded /></SvgIcon>
                <Dialog open={open} onClose={this.handleToggle}aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{marginBottom: 0}}>
                        Please fill out the form below
                        </DialogContentText>
                        <form>
                        <TextField
                            label="Title"
                            value={title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                            className={classes.FormControl}
                            />
                            <br />
                            <FormControl className={classes.FormControl}>
                                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange("muscles")}
                                >
                                {categories.map(category =>
                                    <MenuItem key={category} value={category}>
                                    {category}
                                    </MenuItem>
                                )}
                                
                            </Select>
                        </FormControl>
                        <br />
                        <TextField
                            multiline
                            rows="4"
                            label="Description"
                            value={description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                            className={classes.FormControl}
                            />
                        </form>
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
})
