import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterPropsType = 'all' | 'dollar' | 'ruble'

function App() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<FilterPropsType>('all')

    let currentMoney = money

    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }

    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: FilterPropsType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
            {/*<ul>*/}
            {/*    {currentMoney.map((objFromMoneyArr, i) => {*/}
            {/*        return (*/}
            {/*            <li key={i}>*/}
            {/*                <span> {objFromMoneyArr.banknots}</span>*/}
            {/*                <span> {objFromMoneyArr.value}</span>*/}
            {/*                <span> {objFromMoneyArr.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{marginLeft: '35px'}}>*/}
            {/*    <button onClick={() => onClickFilterHandler('all')}>all</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('ruble')}>rubls</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>*/}
            {/*</div>*/}
        </>

    );
}

export default App;
