import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//onClose={handleClose}
export default class index extends Component {
   
    render() {
        var {openForm, onCloseForm} = this.props;
        return (
            <div>
                <Dialog open={openForm} onClose={onCloseForm} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={onCloseForm} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onCloseForm} color="primary">
                        Subscribe
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
