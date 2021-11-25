import './App.css';
import React, { Component } from 'react';
import {createUserServices,getAllUsersServices} from './Services'
import {Users} from './Components/Users'
import {CreateUser} from './Components/CreateUser'
import { DisplayBoard } from './Components/DisplayBoard';
import { Stage, Layer, Text } from 'react-konva';
import Stars from './KonvaComponents/Stars';
import ColoredRect from './KonvaComponents/ColoredRect';
import Shape from './KonvaComponents/Circle';
import { Html } from 'react-konva-utils';
import ReactDOM from 'react-dom';




class App extends Component {


  state = {
      user: {},
      numberOfUsers:0
    };  


    createUser = (e) => {
        createUserServices(this.state.user)
          .then(res=>{
              this.setState({numberOfUsers : this.state.numberOfUsers+1});
          });
    }

    getAllUsers = (e) => {
      getAllUsersServices()
        .then(users=>{
          console.log(users);
          this.setState({users:users,numberOfUsers:users.length})
        });
    }

    

    onChangeForm = (e) => {

      let user = this.state.user;
      if (e.target.name === 'firstname') {
        user.firstName = e.target.value;
      }
      if (e.target.name === 'email') {
        user.email = e.target.value;
      }
      if (e.target.name === 'password') {
        user.password = e.target.value;
      }
      this.setState({user})

    }
    
  
  
    render() {
      return (

          <div className="App">
            <div className="container mrgnbtm">
              <div className="row">
                <div className="col-md-8">
                    <CreateUser 
                          user={this.state.user}
                          onChangeForm={this.onChangeForm}
                          createUser={this.createUser}
                          >
                    </CreateUser>
                </div>
                <div className="col-md-4">
                
                  <DisplayBoard
                    numberOfUsers={this.state.numberOfUsers}
                    getAllUsersA={this.getAllUsers}
                  >
                  </DisplayBoard>
                  
                </div>
              </div>
              </div>
              <div className="row mrgnbtm">
                <Users />
              </div>  

              {
              /*<Stage width={window.innerWidth} height={window.innerHeight} >
                <Layer >   
                  <Shape />
                  <ColoredRect />
                  <Stars />
                </Layer>
              </Stage>
              */
              }
              
            </div>

         
      );
    }
  }


export default App;
ReactDOM.render(<App />, document.getElementById('root'));

