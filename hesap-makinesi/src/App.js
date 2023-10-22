import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { Clock } from 'react-bootstrap-icons'; // Clock ikonunu ekledik
import { BsFillBrightnessHighFill } from "react-icons/bs";

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isBlackBackground, setIsBlackBackground] = useState(false);
  const [headerColor, setHeaderColor] = useState(isBlackBackground ? 'black' : '#00008B');

  const toggleHistory = () => {
      setShowHistory(!showHistory);
  };

  const toggleBackgroundColor = () => {
    setIsBlackBackground(!isBlackBackground);
  
    if (isBlackBackground) {
      setHeaderColor('#80B3FF'); // Koyu lacivert
    } else {
      setHeaderColor('#363062'); 
    }
  };
  


    const addToText = (val) => {
        if (val === "AC") {
            setText("");
        } else if (val === "=") {
            try {
                const evalResult = eval(text);
                setResult(evalResult);

                if (text !== "" && !isNaN(evalResult)) {
                    setHistory([...history, { expression: text, result: evalResult }]);
                }
            } catch (error) {
                setResult("Hata");
            }
        } else if (val === "R") {
            const lastHistory = history.slice(-1)[0];
            if (lastHistory) {
                setText(lastHistory.expression);
                setHistory(history.slice(0, -1));
            } else {
                setText("");
            }
        } else {
            setText(text + val);
        }
    };

    const clearHistory = () => {
        setHistory([]);
        setResult("");
        setText("");
        setShowHistory(false);
    };

    if (history.length > 3) {
        setHistory(history.slice(-3));
    }

    return (
        <div className="App">
         <div className="header"style={{ backgroundColor: headerColor }}>
            <div className='calc-wrapper' style={{ backgroundColor: isBlackBackground ? 'black' : 'white', color: isBlackBackground ? 'white' : 'black' }}>
            <div className="calc-wrapper" style={{ backgroundColor: isBlackBackground ? 'black' : 'white', color: isBlackBackground ? 'white' : 'black' }}>
             <h1 className="calculator-title">Calculator</h1>

             {/* Diğer  bileşenler ve düğmeler buraya gelecek */}
    
             </div>

                <Input text={text} result={result} />
                <button onClick={toggleHistory} className="button-small">
                <Clock />
                </button>

                <button onClick={toggleBackgroundColor} className="button-small">
                    <BsFillBrightnessHighFill />
                </button>


                <button onClick={clearHistory} className="button-small">Geçmişi Temizle</button>
                {showHistory && (
                    <div className="history">
                        <h2>Geçmiş İşlemler</h2>
                        <ul>
                            {history.map((item, index) => (
                                <li key={index}>
                                    {item.expression} = {item.result}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>  
            <div className="footer">
               <div className='row'>
                 <Button symbol="AC" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'} />
                 <Button symbol="%" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'} />
                 <Button symbol="." handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'} />
                 <Button symbol="R" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'} />
               </div>
                <div className='row'>
                    <Button symbol="7" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="8" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="9" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="/" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                </div>
                <div className='row'>
                    <Button symbol="4" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="5" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="6" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="*" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                </div>
                <div className='row'>
                    <Button symbol="1" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="2" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="3" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="+" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                </div>
                <div className='row'>
                    <Button symbol="0" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="00" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="-" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                    <Button symbol="=" handleClick={addToText} color={isBlackBackground ? '#5272F2' : '#C2D9FF'}/>
                </div>
            </div>
            </div>  
        </div>
    );
}

export default App;