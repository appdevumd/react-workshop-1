import {React, useState} from "react"; 

/* This is the Counter Component 
   Important things to note are the state
   -This state can be set to ANY datatype (string, bool, objects, etc.)
   -Functions use the function 'setCount' to change count, you can change
   this to any name as long as it's declared with the state
*/
function Counter(props) {
    const [count, setCount] = useState(10);

    function increment() {
        setCount(count+1);
    }

    function deincrement() {
        if(count !== 0){
            setCount(count-1);
        }
    }

    return (
        <>
            <button onClick={increment}>+</button>
            <h1>{count}</h1>
            <button onClick={deincrement}>-</button>
        </>
    );
};

export default Counter;