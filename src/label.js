const Label = (props) => {
    const { id, state, handlePlusMinus, returnMinutes } = props

    return (
        <div id={id + "-label"} className="labels">
            {id} length
            <p id={id + "-length"}>{returnMinutes(state[id])}</p>
            <div id={id + "-controls"} className="controls">
                <button
                    id={id + "-increment"}
                    onClick={() => handlePlusMinus('increment', id)}>
                    {id} +
                </button>
                <button
                    id={id + "-decrement"}
                    onClick={() => handlePlusMinus('decrement', id)}>
                    {id} -
                </button>
            </div>
        </div>
    )
}
export default Label