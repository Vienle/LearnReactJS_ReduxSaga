import React, { Component } from 'react'
import {Grid,Box,Card,CardContent,CardActions,Fab,withStyles} from '@material-ui/core'
import { Add,Delete} from '@material-ui/icons'
import styles from './styles';

class index extends Component {
    render() {
        var {classes,task,status} = this.props;
        return (
            <Box mt={2}>
                <Card key={index}>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            >
                                <Grid item xs={8}>
                                    <h1>{task.name}</h1>
                                    <p>{task.description}</p>
                                </Grid> 
                                <Grid 
                                    item 
                                    xs={4}
                                >
                                    {status.label}
                                </Grid> 
                        </Grid>
                    </CardContent>
                    <CardActions  className={classes.cardActionsItem}>
                        <Fab color="primary" aria-label="add" size="small">
                            <Add />
                        </Fab>
                        <Fab color="secondary" aria-label="edit"  size="small">
                            <Delete />
                        </Fab>
                    </CardActions>
                </Card>
            </Box>
        )
    }
}
export default withStyles(styles)(index);
