import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import axios from "axios"
import "../generalStyle.scss"


export default function MethodPage() {
    const { id } = useParams()

    const [data, setData] = useState()


    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/methods/${id}?_embed=methodPhotos&_expand=recipe`)
            setData(data)
        }

        getData()


    }, [id])

    if (!data) {
        return (<h3>Loading...</h3>)
    }

    const element = (
        <div>
            <h3>{data.name}</h3>
            <div className="listContainer">
                {data.methodPhotos.map((obj, i) => (
                    <div className="listCard" key={i} >
                        <img src={obj.url} alt="method" />
                        <Link className="linkButton" to={`/methodPhoto/delete/${obj.id}`}>Delete Photo</Link>
                    </div>
                ))}
                <Link className="linkButton" to={`/methodPhoto/create/${id}`}>Add Photo</Link>
            </div>
            <p>{data.description}</p>

            <Link className="linkButton" to={`/method/edit/${data.id}`}>Edit Method</Link>
            <Link className="linkButton" to={`/method/delete/${data.id}`}>Delete Method</Link>

            <h4>Used in recipe:</h4>
            <Link className="linkButton" to={`/recipe/${data.recipe.id}`}>{data.recipe.name}</Link>

        </div>
    )

    return (
        <div className="margin">
            <h2>Method</h2>
            {element}
        </div>
    )
}