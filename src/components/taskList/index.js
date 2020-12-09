import React, { Component } from 'react'
import {Grid,Box} from '@material-ui/core'
import TaskItem from './../taskItem/index'

export default class index extends Component {

    render() {
        var { listStatus, tasks } = this.props;
        
        return (
            <Grid container spacing={3}>
                {
                    listStatus.map((status,index) =>
                        {
                            return(
                                <Grid item md={4} xs={12} key={index}>
                                    <Box mt={2}>{status.label}
                                        {
                                            tasks != null ?
                                            tasks.map((task,index) => {
                                                if( task.status === status.value){
                                                   return (<TaskItem
                                                    key={index}
                                                    task={task}
                                                    status={status}
                                                />)
                                                }
                                            }) : ''
                                        }
                                    </Box>
                                </Grid>
                            )
                        }
                    )
                }
            </Grid>
        )
    }
}
