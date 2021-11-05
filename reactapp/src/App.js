import './App.css';
import React, { Component } from 'react';
import {createUser,getAllUsers} from './Services'
import {Users} from './Components/Users'
import {CreateUser} from './Components/CreateUser'
import { DisplayBoard } from './Components/DisplayBoard';
//import { Text, TextInput, View } from 'react-native';


class App extends Component {


  state = {
      user: {},
      users: [],
      numberOfUsers:0
    };

    createUser = (e) => {
        createUser(this.state.user)
          .then(res=>{
              this.setState({numberOfUsers : this.state.numberOfUsers+1});
          });
    }

    getAllUsers = (e) => {
      getAllUsers()
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
      this.setState({user})

    }
  
    componentDidMount() {

      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));

    }

    
    callBackendAPI = async () => {

      const response = await fetch('/expressed_backend');
      const body = await response.json();

  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
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
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>
      );
    }
  }


export default App;
