import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import axios from "axios"
import "../generalStyle.scss"


export default function IngredientPage() {
    const { id } = useParams()

    const [data, setData] = useState()


    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/ingredients/${id}?_embed=ingredientPhotos&_expand=recipe`)
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
                {data.ingredientPhotos.map((obj, i) => (
                    <div className="listCard" key={i}>
                        <img src={obj.url} alt="ingredient" />
                        <Link className="linkButton" to={`/ingredientPhoto/delete/${obj.id}`}>Delete Photo</Link>
                    </div>
                ))}
                <Link className="linkButton" to={`/ingredientPhoto/create/${id}`}>Add Photo</Link>
            </div>
            
            <p>{data.description}</p>

            <Link className="linkButton" to={`/ingredient/edit/${data.id}`}>Edit Ingredient</Link>
            <Link className="linkButton" to={`/ingredient/delete/${data.id}`}>Delete Ingredient</Link>


            <h4>Used in recipe:</h4>
            <Link className="linkButton" to={`/recipe/${data.recipe.id}`}>{data.recipe.name}</Link>

        </div>
    )

    return (
        <div className="margin">
            <h2>Ingredient</h2>
            {element}
        </div>
    )
}