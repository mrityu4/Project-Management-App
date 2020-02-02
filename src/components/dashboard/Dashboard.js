import React,{Component} from 'react';
import Notification from './Notification'
import Projectlist from '../project/Projectlist';


class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"> 
                        <Projectlist/>
                    </div>
                    <div className="col s12 m5 offset-1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard