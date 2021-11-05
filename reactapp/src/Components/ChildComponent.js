import React from 'react';

const ChildComponent = (props) => {
    return(
        <div>
            <h2> {props.message} </h2>
        </div>
    );
}
export default ChildComponent;