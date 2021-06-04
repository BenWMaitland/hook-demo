import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';

export default function UseEffects(props) {
    const [counterOne, setCounterOne] = useState(1);
    const [counterTwo, setCounterTwo] = useState(2);

    const [outputOne, setOutputOne] = useState("Start value");
    const [outputTwo, setOutputTwo] = useState("Start value");
    const [outputThree, setOutputThree] = useState("Start value");

    // useEffect performs functions at different parts of the component lifecycle
    // Common practice in React was to use classes instead of functions when making components, but hooks were added to make components smaller and less coupled
    // useEffect has the same functionality as these functions, but useEffect is used in a function while these examples are used with classes:

    // componentDidMount()
    // componentDidUpdate()
    // componentWillUnmount()

    useEffect(() => { // this will be called every time there is a render
        setOutputOne("counterOne: " + counterOne + " | counterTwo: " + counterTwo);
    })

    useEffect(() => { // this will be called only on the first render
        setOutputTwo("counterOne: " + counterOne + " | counterTwo: " + counterTwo);

        return () => console.log("goodbye"); // this syntax mimics componentWillUnmount from the class syntax. If you need something to run when a component resolves, use this (eg. clean up listeners)
    }, []) // the empty array at the bottom is what makes it run only on the first render

    useEffect(() => { //this will be called every time there is an update to counterTwo. It acts as a listener function
        setOutputThree("counterOne: " + counterOne + " | counterTwo: " + counterTwo);
    }, [counterTwo]) // Add as many stateful values to the end array as needed. A change in any of those values will call the function

    return (
        <>
            <div style={{ fontSize: 40 }}>
                <Button onClick={() => { setCounterOne(counterOne - 1) }} style={{ fontSize: 40 }}>-</Button>
                {counterOne}
                <Button onClick={() => { setCounterOne(counterOne + 1) }} style={{ fontSize: 40 }}>+</Button>

                <Button onClick={() => { setCounterTwo(counterTwo - 1) }} style={{ fontSize: 40 }}>-</Button>
                {counterTwo}
                <Button onClick={() => { setCounterTwo(counterTwo + 1) }} style={{ fontSize: 40 }}>+</Button>
            </div>

            <div style={{ fontSize: 40 }}>
                <p>
                    Output One: {outputOne}
                </p>
                <p>
                    Output Two: {outputTwo}
                </p>
                <p>
                    Output Three: {outputThree}
                </p>
            </div>
        </>
    );
}
