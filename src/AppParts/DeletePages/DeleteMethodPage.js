import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"


export default function DeleteMethodPage() {
    const { id } = useParams()

    const navigate = useNavigate();

    const [data, setData] = useState()

    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/methods/${id}`)
            setData(data)
            console.log(data)
        }
        getData()
    }, [id])


    const onButtonClick = () => {
        axios.delete(`${API_URL}/methods/${id}`)
        navigate(`/recipe/${data.recipeId}`)
    }

    return (
        <>
            {data && <button onClick={onButtonClick}>{`Delete method ${data.name}`}</button>}
        </>
    )

}



