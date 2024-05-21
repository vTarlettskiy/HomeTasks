import React, {useState} from 'react';
import './App.css';

type ButtonPropsType = {
    name: string
}

function App() {

    let[a, setA] = useState(1)

    const onClickHandler = ({name}: ButtonPropsType) => {
        switch (name) {
            case 'number':
                setA(++a)
                break
            case '0':
                setA(0)
                break
        }
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={() => onClickHandler({name: 'number'})}>number</button>
            <button onClick={() => onClickHandler({name: '0'})}>0</button>
        </div>
    );
}

export default App;
