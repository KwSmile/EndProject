import "../generalStyle.scss"

export default function EditListForm({ validity, onFormSubmit, instructions, setInstructions }) {
    const instructionsError = !validity && (
        <div className="formError">Fill in instructions!</div>
    )

    const validityError = !validity && (
        <div className="formError">Form is filled incorrectly!</div>
    )

    return (
        <>
            <form className="formGeneral" onSubmit={onFormSubmit}>
                <div className="formControl">

                    <label htmlFor="instructions">Instructions:</label>
                    <ul>
                        {instructions.map((item, i) => (
                            <li key={i}>
                                <textarea id="instructions" name="instructions"
                                    value={item}
                                    onChange={(e) => setInstructions(prev => {
                                        let newb = [...prev]
                                        newb[i] = e.target.value
                                        return newb
                                    })}
                                />
                                {item === '' && instructionsError}
                            </li>
                        ))}
                    </ul>
                    <input type="button" value="+" name="add" id="add"
                        onClick={() => setInstructions(prev => {
                            let newb = [...prev]
                            newb.push('')
                            return newb
                        })}
                    />
                    <input type="button" value="-" name="sub" id="sub"
                        onClick={() => setInstructions(prev => {
                            let newb = [...prev]
                            newb.pop()
                            return newb
                        })}
                    />
                </div>
                {validityError}

                <input type="submit" value="Edit" />
            </form>
        </>
    )

}



