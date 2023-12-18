import React from 'react';
import './App.css';
import Crossword from "./component/Crossword";

function App() {
    const words = [
        "Традиции",
        "Баласагун",
        "Усулижадид",
        "Латиница",
        "Расширение",
        "Баласагуни",
        "Курмана",
        "Ликвидация",
        "Латинский",
    ];

    return (
        <div>
            <h1>11 Лекция Кроссворд</h1>
            <Crossword words={words} />

        </div>
    );
}

export default App;
