import React, { useState } from 'react';

interface CrosswordProps {
    words: string[];
}

const Crossword: React.FC<CrosswordProps> = ({ words }) => {
    const [crosswordGrid, setCrosswordGrid] = useState<string[][]>(initializeCrosswordGrid());
    const [showResults, setShowResults] = useState<boolean>(false);

    function initializeCrosswordGrid() {
        return words.map((word) => Array(word.length).fill(''));
    }

    const handleInputChange = (rowIndex: number, colIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedGrid = [...crosswordGrid];
        const inputValue = event.target.value.toUpperCase().charAt(0); // Ограничиваем ввод одной буквой
        updatedGrid[rowIndex][colIndex] = inputValue;
        setCrosswordGrid(updatedGrid);
    };

    const handleShowResults = () => {
        setShowResults(true);
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "80%" }}>
            <div className="crossword-container">
                {crosswordGrid.map((row, rowIndex) => (
                    <div key={rowIndex} className="crossword-row">
                        {row.map((cell, colIndex) => (
                            <input
                                key={colIndex}
                                type="text"
                                value={cell}
                                onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                                className="crossword-cell"
                                maxLength={1} // Ограничиваем ввод одной буквой
                                style={{ width: '25px', height: '25px' }}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div>
                <h4>
                    1. Народная система воспитания:  (5 букв). <br/>

                    2. Культурный центр:  (9 букв).  <br/>

                    3. Образовательный период:  (11 букв).  <br/>

                    4. Латинский алфавит:  (8 букв).  <br/>

                    5. Советская эпоха:  (9 букв).  <br/>
                    6.  Ученые:  (9 букв). <br/>

                    7. Школа:  (7 букв).  <br/>

                    8. Русско-местные школы:  (13 букв). <br/>

                    9.  Безграмотность:  (10 букв). <br/>

                    10.  Изменение алфавита:  (8 букв). <br/>
                </h4>

                <button
                    style={{ width: "150px", height: "50px", background: "blue", color: "white", fontSize: "14px" }}
                    onClick={handleShowResults}
                >
                    показать результаты
                </button>

                {showResults && (
                    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>

                        Результаты... <br/>
                        1.Традиции <br/>
                        2.Баласагун <br/>
                        3.Усули жадид <br/>
                        4.Латиница <br/>
                        5.Расширение <br/>
                        6.Баласагуни <br/>
                        7.Курмана <br/>
                        8.Русско-местные <br/>
                        9.Ликвидация <br/>
                        10.Латинский <br/>
                        <button onClick={handleHideResults} style={{ marginTop: '10px' }}>
                            скрыть результаты
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Crossword;
