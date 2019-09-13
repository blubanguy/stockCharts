import React, { Fragment }from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemSecondaryAction, ListItemText, IconButton } from "@material-ui/core";
import { Delete } from '@material-ui/icons';
const styles = {
    Paper: {padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'}
};

export default ({
    exercises,
    category,
    onSelect,
    exercise: {
        id,
        title = 'Welcome!',
        description = 'Please select an exercise from the list on the left'
    },
    onDelete 
    }) => {
    return(
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                    ?<Fragment key={group}>
                        <Typography 
                            variant="subtitle1"
                            style={{textTransform: 'capitalize'}}>
                            {group}
                        </Typography>
                        <List component="ul" aria-label="secondary mailbox folders">
                            {exercises.map(({ id, title }) =>
                                <ListItem 
                                key={id}
                                button
                                onClick = {() => onSelect(id)} 
                                >
                                <ListItemText 
                                    primary = {title}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => onDelete(id)}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                                </ListItem>
                            )}    
                        </List>
                    </Fragment>
                    :null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="h3">
                    {title}
                </Typography> 
                <Typography 
                variant="body1"
                style={{marginTop: 20}}>
                    {description}
                </Typography> 
            </Paper>
        </Grid>
    </Grid>
    );
}
