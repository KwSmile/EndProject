import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../config"
import { useNavigate } from "react-router-dom"


export default function CreateRecipePage() {

    const navigate = useNavigate();

    const empty = ''
    const [name, setName] = useState(empty)
    const [desc, setDesc] = useState(empty)

    const [validity, setValidity] = useState(true)

    const onFormSubmit = async (e) => {
        e.preventDefault()

        let valid = false
        if (name !== empty && desc !== empty) valid = true

        setValidity(valid)
        if (!valid) return

        const { data } = await axios.post(`${API_URL}/recipes`, {
            name: name,
            description: desc
        })

        setName(empty)
        setDesc(empty)
        
        navigate(`/recipe/${data.id}`)
    }

    const nameError = !validity && name === empty && (
        <div className="formError">Fill in name!</div>
    )
    const descError = !validity && desc === empty && (
        <div className="formError">Fill in description!</div>
    )

    const validityError = !validity && (
        <div className="formError">Form is filled incorrectly!</div>
    )

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div className="formControl">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError}
                </div>
                <div className="formControl">

                    <label htmlFor="desc">Description:</label>
                    <textarea id="desc" name="desc"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    {descError}
                </div>
                {validityError}

                <input type="submit" value="Create" />
            </form>
        </>
    )

}



