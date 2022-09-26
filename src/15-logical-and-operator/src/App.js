import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
import {useState} from "react";
import Reset from "./components/Reset";

function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <Counter count={count}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Reset count={count} setCount={setCount}/>
        </div>
    );
}

export default App;
