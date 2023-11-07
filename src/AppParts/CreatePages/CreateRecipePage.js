import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../config"
import { useNavigate } from "react-router-dom"
import CreateForm from "./CreateForm";


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

    return (
        <>
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



