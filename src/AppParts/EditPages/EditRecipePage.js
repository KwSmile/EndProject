import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import EditForm from "./EditForm"
import "../generalStyle.scss"


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

    return (
        <>
            <h2 className="margin">Edit Recipe</h2>
            <EditForm
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



