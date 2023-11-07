import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import CreateForm from "./CreateForm"
import "../generalStyle.scss"

export default function CreateIngredientPage() {
    const { id } = useParams()

    const navigate = useNavigate()

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

        const { data } = await axios.post(`${API_URL}/ingredients`, {
            recipeId: Number(id),
            name: name,
            description: desc
        })

        setName(empty)
        setDesc(empty)

        navigate(`/ingredient/${data.id}`)
    }

    return (
        <>
        <h2 className="margin">Create Ingredient</h2>
            <CreateForm
                validity={validity}
                name={name}
                setName={setName}
                desc={desc}
                setDesc={setDesc}
                empty={empty}
                onFormSubmit={onFormSubmit}
            />
        </>
    )

}



