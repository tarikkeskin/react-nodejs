import './App.css';
import React, { Component } from 'react';
import {createUserServices,getAllUsersServices} from './Services'
import {Users} from './Components/Users'
import {CreateUser} from './Components/CreateUser'
import { DisplayBoard } from './Components/DisplayBoard';
import Konva from 'konva';
import { Stage, Layer, Rect, Text,Circle } from 'react-konva';

const Shape = () => {
  const [color,setColor] = React.useState();

  return (
    <Circle
      x={0}
      y={0}
      draggable
      radius={50}
      fill='green'
      onDragEnd={() => {
        setColor(Konva.Util.getRandomColor());
      }}
    />
  );
};

class ColoredRect extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={150}
        height={150}
        draggable
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

class App extends Component {


  state = {
      user: {},
      users: [],
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
          <Users></Users>
        </div>
        <Stage width={window.innerWidth} height={window.innerHeight} >
        <Layer >
          <Text text="Try click on rect" />
          <Shape />
          <ColoredRect />
          
        </Layer>
      </Stage>

      
      </div>
      );
    }
  }


export default App;
