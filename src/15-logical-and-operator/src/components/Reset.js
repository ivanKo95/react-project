function Reset({count, setCount}) {
    const buttonStyle = {backgroundColor: 'lightgreen'};
    const resetCount = () => {
        setCount(0)
    }

    return !!count && (
        <div>
            <button style={buttonStyle} onClick={resetCount}>Reset</button>
        </div>)
}

export default Reset;