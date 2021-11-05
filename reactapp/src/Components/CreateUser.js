import React from 'react'


export const CreateUser = ({user,onChangeForm, createUser }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2 style={{backgroundColor:'green'}} >Create User</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                    </div>     
                    <button type="button" onClick= {(e) => createUser(user)} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

