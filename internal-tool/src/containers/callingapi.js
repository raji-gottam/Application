import React from 'react';
//import {bindActionCreators} from 'redux';
//import {registerNewUser} from '../actions/user';
//import {connect} from 'react-redux';
class CallingApi extends React.Component{
    constructor() {
        super();
        this.state={
            odernumber:"",
            channel:"",
            rep:"",
            creditcardnumber:"",
            loggedinuser:""
        }
    }
    captureDta=(event)=> {
       var name=event.target.name;
       var value=event.target.value;
       this.setState({[name]:value});
       console.log(this.state);
    }
    apiCalling=(event)=>{
        event.preventDefault();
        console.log("data",this.state);
        //this.props.registerNewUser(this.state);
    }
    render() {
        console.log(this.props);
        return(
            <div>
                <h1></h1>
                <form>
                    <div>
                        <label>ODER LOACTION:</label>
                        <input  onChange={this.captureDta} type="text"  name="odernumber" id="odernumber"></input>
                    </div>
                    <div>
                        <label>CHANNEL:</label>
                        <input  onChange={this.captureDta} type="text"  name="channel" id="channel"></input>
                    </div>
                    <div>
                        <label>REP:</label>
                        <input  onChange={this.captureDta} type="text"  name="rep" id="rep"></input>
                    </div>
                    <div>
                        <label>CREDITCARDNUMBER:</label>
                        <input  onChange={this.captureDta} type="text"  name="creditcardnumber" id="creditcardnumber"></input>
                    </div>
                    <div>
                        <label>LOGGEDINUSER:</label>
                        <input  onChange={this.captureDta} type="text"  name="loggedinuser" id="loggedinuser"></input>
                    </div>
                    <button onClick={this.apiCalling} className="btn btn-info btn-xs">SUBMIT</button>

                    <div>
                    </div>
                </form>
            </div>
        )
    }
}
export default CallingApi;
