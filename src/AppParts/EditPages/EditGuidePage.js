import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import EditListForm from "./EditListForm"


export default function EditGuidePage() {
    const { id } = useParams()

    const navigate = useNavigate()

    const empty = []
    const [instructions, setInstructions] = useState(empty)

    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/guides/${id}`)
            setInstructions(data.instructions)
            console.log(data)
        }
        getData()
    }, [id])

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

        const { data } = await axios.patch(`${API_URL}/guides/${id}`, {
            instructions: instructions,
        })

        setInstructions(empty)

        navigate(`/recipe/${data.recipeId}`)
    }

    return (
        <>
            <EditListForm
                validity={validity}
                onFormSubmit={onFormSubmit}
                instructions={instructions}
                setInstructions={setInstructions}
            />
        </>
    )

}



