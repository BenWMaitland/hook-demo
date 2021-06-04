import React, { useState } from "react";
import { Button } from '@material-ui/core';

export default function UseStates(props) {
    const [myArray, setMyArray] = useState([1, 2, 3]);

    const updateArray = () => { // state cannot be mutated directly. Instead, create a new object, array, etc. and set the value to this new value

        // this looks like an easy way around that, but running this code will update the value without calling a new render. The web page will not show the change:

        // var newArray = myArray;
        // newArray.push(4);
        // setMyArray(newArray);
        // console.log(myArray);

        setMyArray([...myArray, 4]); // instead, use the javascript "spread" function to spread the old state, then add or remove as necessary. this method will cause a new render
    }

    return (
        <div style={{ fontSize: 40 }}>
            {myArray}
            <br />
            <Button onClick={updateArray} style={{ fontSize: 40 }}>Add to Array</Button>
        </div>
    );
}
