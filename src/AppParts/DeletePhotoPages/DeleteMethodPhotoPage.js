import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import "../generalStyle.scss"


export default function DeleteMethodPhotoPage() {
    const { id } = useParams()

    const navigate = useNavigate();

    const [data, setData] = useState()

    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/methodPhotos/${id}?_expand=method`)
            setData(data)
            console.log(data)
        }
        getData()
    }, [id])


    const onButtonClick = () => {
        axios.delete(`${API_URL}/methodPhotos/${id}`)
        navigate(`/recipe/${data.method.recipeId}`)
    }

    return (
        <>
            {data && <button className="deleteButton" onClick={onButtonClick}>{`Delete photo`}</button>}
        </>
    )

}



