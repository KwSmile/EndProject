import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"


export default function EditRecipePage() {
    const { id } = useParams()

    const navigate = useNavigate();

    const empty = ''
    const [name, setName] = useState(empty)
    const [desc, setDesc] = useState(empty)

    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/recipes/${id}`)
            setName(data.name)
            setDesc(data.description)
        }
        getData()
    }, [id])

    const [validity, setValidity] = useState(true)

    const onFormSubmit = (e) => {
        e.preventDefault()

        let valid = false
        if (name !== empty && desc !== empty) valid = true

        setValidity(valid)
        if (!valid) return

        axios.patch(`${API_URL}/recipes/${id}`, {
            name: name,
            description: desc
        })

        setName(empty)
        setDesc(empty)

        navigate(`/recipe/${id}`)
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

                <input type="submit" value="Edit" />
            </form>
        </>
    )

}


