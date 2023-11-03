import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import axios from "axios"

export default function MethodPage() {
    const { id } = useParams()

    const [data, setData] = useState()


    useEffect(() => {
        async function getData() {
            const {data} = await axios(`${API_URL}/methods/${id}?_embed=methodPhotos&_expand=recipe`)
            setData(data)
        }

        getData()


    }, [id])

    if (!data) return

    const element = (
        <div>
            <h3>{data.name}</h3>
            <div>
                {data.methodPhotos.map((item, i) => (
                    <img key={i} src={item.url} alt="method" />
                ))}
            </div>
            <p>{data.description}</p>

            <h4>Used in recipe:</h4>
            <Link to={`/recipe/${data.recipe.id}`}>{data.recipe.name}</Link>

        </div>
    )

    return (
        <>
            <h2>Method</h2>
            {element}
        </>
    )
}