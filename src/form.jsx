import React from 'react';
import { connect } from 'react-redux';
import ReduxForm from './reduxForm';
import {storeData} from './store';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            mobile:'',       
            data:props.data
        }
    }

    componentWillReceiveProps(nProps){
        this.setState({data:nProps.data});
    }

    setChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    submit(e){
        e.preventDefault();
        this.props.storeData({name:this.state.name,email:this.state.email,mobile:this.state.mobile})
    }

    reduxFormSubmit(values){
        console.log(values);
    }

    render (){
        const {data}=this.state;
        console.log(data);
        return (
            <div>
                <form>
                    <input onChange={this.setChange.bind(this)} value={this.name} name="name"></input>
                    <input onChange={this.setChange.bind(this)} value={this.name} name="email"></input>
                    <input onChange={this.setChange.bind(this)} value={this.name} name="mobile"></input>                    
                    <input type="submit" onClick={this.submit.bind(this)}></input>
                </form>
                {
                       data.name && data.email && data.mobile && (<div>
                           <div>Name:{data.name}</div>
                           <div>Email:{data.email}</div>
                           <div>Mobile:{data.mobile}</div>
                       </div>)
                }
                {/* <div style={{paddingTop:'20px'}}>
                    <ReduxForm onSubmit={this.reduxFormSubmit.bind(this)}></ReduxForm>
               </div> */}
            </div>
        );
    }
}

const mapStateToProps=(state)=>({data:state.data})
const mapDispatchToProps={storeData}
export default connect(mapStateToProps,mapDispatchToProps)(Form);
