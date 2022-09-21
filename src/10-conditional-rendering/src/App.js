import './App.css';
import PetInfo from "./components/PetInfo";

function App() {
    return (
        <div className="App">
            <PetInfo animal="cat" age="1" hasPet/>
            <PetInfo animal="dog" age="5" hasPet/>
        </div>
    );
}

export default App;
