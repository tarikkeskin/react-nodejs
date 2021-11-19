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
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="username" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">E-mail</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="e-mail" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <input type="password" onChange={(e) => onChangeForm(e)}  className="form-control" name="password" id="password" aria-describedby="emailHelp" placeholder="password" />
                        </div>
                    </div>     
                    <button type="button" onClick= {(e) => createUser(user)} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

