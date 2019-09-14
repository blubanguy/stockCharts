import React from 'react';
import {    
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    FormControl: {
        width: 500
    }
});

export default withStyles(styles)(class extends Component {
    constructor(props){
        super(props);
        this.state={
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        }
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

    render () {
        const {classes, muscles: categories} = this.props;

        return(
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
        );
    }
})