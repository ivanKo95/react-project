import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1)
        console.log(count)
    }

    return (
        <div className="App">
            <Counter count={count}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
        </div>
    );
}

export default App;
