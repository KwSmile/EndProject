import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import "../generalStyle.scss"


export default function DeleteGuidePage() {
    const { id } = useParams()

    const navigate = useNavigate();

    const [data, setData] = useState()

    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/guides/${id}?_expand=recipe`)
            setData(data)
            console.log(data)
        }
        getData()
    }, [id])


    const onButtonClick = () => {
        axios.delete(`${API_URL}/guides/${id}`)
        navigate(`/recipe/${data.recipeId}`)
    }

    return (
        <>
            {data && <button className="deleteButton" onClick={onButtonClick}>{`Delete guide number ${data.id} from ${data.recipe.name} recipe?`}</button>}

        </>
    )

}



