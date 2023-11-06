import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { Link } from "react-router-dom"

export default function RecipesPage() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(API_URL + '/recipes?_embed=recipePhotos')
            setData(data)
        }

        getData()

    }, [])
    console.log(data)

    const listElement = (
        <ul>
            {data && data.toReversed().map((obj) => (
                <li key={obj.id}>
                    <Link to={`/recipe/${obj.id}`}>
                        <h3>{obj.name}</h3>
                        {obj.recipePhotos.length && <img src={obj.recipePhotos[0].url} alt="recipe" />}

                    </Link>

                </li>

            ))}
        </ul>
    )

    return (
        <div>

            <h2>Recipes</h2>
            <Link to={`/recipe/create`}>Add Recipe</Link>

            {listElement}



        </div>

    )
}