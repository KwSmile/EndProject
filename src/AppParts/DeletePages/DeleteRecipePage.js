import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"


export default function DeleteRecipePage() {
    const { id } = useParams()

    const navigate = useNavigate();

    const empty = ''
    const [name, setName] = useState(empty)
    // const [desc, setDesc] = useState(empty)

    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/recipes/${id}`)
            setName(data.name)
            // setDesc(data.description)
        }
        getData()
    }, [id])

    const onButtonClick = () => {
        axios.delete(`${API_URL}/recipes/${id}`)
        navigate(`/recipes`)
    }

    return (
        <>
            {name && <button onClick={onButtonClick}>{`Delete ${name} recipe?`}</button>}

        </>
    )

}



