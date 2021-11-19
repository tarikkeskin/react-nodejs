import React from 'react'
import Accounts from '../accounts.json'
import { Container, Grid, Header, List } from "semantic-ui-react";
import { Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteUserServices,updateServices} from '../Services'
import ContainerButton from './ContainerButton';



class Users extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

   

    deleteUser = (id) => {

      // console.log("Inside deleteUser");
      deleteUserServices(id);

    }

    updateUser(id,firstName,email){
      updateServices(id,firstName,email);
    }


    onSubmit(firstName){

      return event =>{
        event.preventDefault();
        this.updateUser(firstName,event.target.name.value,event.target.email.value);

      }

    }


    render() {

        return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header className="uiHeader">List</Header>
              <List>
                {Accounts.map(account => {
                    return (
                    <Card style={{ width: '18rem' ,height:'13rem'}} key={account.firstName}>
                        <Card.Body>
                            <Card.Title>{account.firstName}</Card.Title>
                            <Card.Text>
                            {account.email}
                            </Card.Text>
                            <ContainerButton triggerText='Update'  onSubmit={ this.onSubmit(account.firstName)}  /> 
                            <Button variant="primary" onClick={ () => this.deleteUser(account.firstName) }>Delete Account</Button>
                        </Card.Body>
                    </Card>
                    
                    );
                })}
              </List>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
        )
    }
}

export {Users};



