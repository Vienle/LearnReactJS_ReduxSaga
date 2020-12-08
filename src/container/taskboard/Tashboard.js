import React, { Component } from 'react'
import { STATUS } from './../../contants/index'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TaskList from './../../components/taskList/index'
import Form from './../../components/form/index'

const taskList = [
    {
        id : 1,
        name : "Learn Reactjs",
        description : "Learn Reactjs",
        status : 0
    },
    {
        id : 2,
        name : "Learn Vue JS",
        description : "Learn Vue JS",
        status : 1
    },
    {
        id : 3,
        name : "Learn Java",
        description : "Learn Java",
        status : 2
    },
]

export default class Tashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            openForm : false
        }
    }
        
    renderBoard(){
        let xhtml = null;
        xhtml = (
            <TaskList
                listStatus={STATUS}
                tasks={taskList}
            />
        )
        return xhtml;
    }
    renderForm(){
        var {openForm} = this.state;
        let xhtml = null;
        xhtml = (
            <Form 
                openForm={openForm}
                onCloseForm={this.opCloseForm}
                />
        )
        return xhtml;
    }
    onOpenForm =()=>{
        this.setState({
            openForm : true
        })
    }
    opCloseForm = () =>{
        this.setState({
            openForm : false
        })
    }

    render() {
        return (
            <div>
                <Button 
                    onClick={this.onOpenForm}
                    variant="contained" 
                    color="primary"
                    startIcon={<AddIcon />}>
                    Add New
                </Button>
                 {this.renderBoard()}
                 {this.renderForm()}
            </div>
        )
    }
}
