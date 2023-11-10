import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import EditForm from "./EditForm"
import "../generalStyle.scss"


export default function EditIngredientPage() {
    const { id } = useParams()

    const navigate = useNavigate()

    const empty = ''
    const [name, setName] = useState(empty)
    const [desc, setDesc] = useState(empty)

    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/ingredients/${id}`)
            setName(data.name)
            setDesc(data.description)
            console.log(data)
        }
        getData()
    }, [id])

    const [validity, setValidity] = useState(true)

    const onFormSubmit = async (e) => {
        e.preventDefault()

        let valid = false
        if (name !== empty && desc !== empty) valid = true

        setValidity(valid)
        if (!valid) return

        const { data } = await axios.patch(`${API_URL}/ingredients/${id}`, {
            name: name,
            description: desc
        })

        setName(empty)
        setDesc(empty)

        navigate(`/recipe/${data.recipeId}`)
    }

    return (
        <>
            <h2 className="margin">Edit Ingredient</h2>
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



