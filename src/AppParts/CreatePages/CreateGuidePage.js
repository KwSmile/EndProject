import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import CreateListForm from "./CreateListForm"
import "../generalStyle.scss"

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

    return (
        <>
        <h2 className="margin">Create Guide</h2>
            <CreateListForm
                validity={validity}
                onFormSubmit={onFormSubmit}
                instructions={instructions}
                setInstructions={setInstructions}
            />
        </>
    )

}



