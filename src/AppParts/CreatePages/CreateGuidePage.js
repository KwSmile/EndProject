import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"


export default function CreateGuidePage() {
    const { id } = useParams()

    const navigate = useNavigate()

    const empty = []
    const [instructions, setInstructions] = useState(empty)


    const [validity, setValidity] = useState(true)

    const onFormSubmit = async (e) => {
        e.preventDefault()

        let valid = false
        if (instructions.length > 0) valid = true
        instructions.forEach((item) => {
            if (item === '') valid = false
        })

        setValidity(valid)
        if (!valid) return

        const { data } = await axios.post(`${API_URL}/guides`, {
            recipeId: Number(id),
            instructions: instructions,
        })

        setInstructions(empty)

        navigate(`/recipe/${data.recipeId}`)
    }

    const instructionsError = !validity && (
        <div className="formError">Fill in instructions!</div>
    )

    const validityError = !validity && (
        <div className="formError">Form is filled incorrectly!</div>
    )

    return (
        <>
            <form onSubmit={onFormSubmit}>
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

                <input type="submit" value="Create" />
            </form>
        </>
    )

}



