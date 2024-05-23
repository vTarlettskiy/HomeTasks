import React from 'react';
import {FilterPropsType} from "./App";

type MoneyPropsType = {
    banknots: string
    value: number
    number: string
}

type NewComponentPropsType = {
    currentMoney: MoneyPropsType[]
    onClickFilterHandler: (value: FilterPropsType) => void
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, i) => {
                    return (
                        <li key={i}>
                            <span> {objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('ruble')}>rubls</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>
    );
};

