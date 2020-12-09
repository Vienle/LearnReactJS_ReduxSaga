import React, { Component } from 'react'
import { STATUS } from './../../contants/index'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TaskList from './../../components/taskList/index'
import Form from './../../components/form/index'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActions from './../../actions/task'

export class Tashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            openForm : false
        }
    }
    
    renderBoard(){
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <TaskList
                listStatus={STATUS}
                tasks={listTask}
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
    
    // componentWillMount(){
    //     console.log("222222")
    //     const { taskActionsCreator } = this.props;
    //     const { fetchListTaskRequest } = taskActionsCreator;
    //     fetchListTaskRequest();
    // }

    componentDidMount(){
        const { taskActionsCreator } = this.props;
        const { fetchListTaskRequest } = taskActionsCreator;
        fetchListTaskRequest();
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

const mapStateToProp = (state,props) => {
    return{
        listTask : state.task.listTask
    }
};
const mapDispatchToProps = dispatch => {
    return{
        taskActionsCreator: bindActionCreators(taskActions,dispatch),
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(Tashboard);
