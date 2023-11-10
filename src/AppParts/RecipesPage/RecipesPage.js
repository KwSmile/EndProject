import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { Link } from "react-router-dom"
import "../generalStyle.scss"

export default function RecipesPage() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(API_URL + '/recipes?_embed=recipePhotos')
            setData(data)
        }

        getData()

    }, [])

    if (!data) {
        return (<h3>Loading...</h3>)
    }

    const listElement = (
        <ul className="listContainer paddingNone">
            {data && data.toReversed().map((obj) => (
                <li className="listCard" key={obj.id}>
                    <Link to={`/recipe/${obj.id}`}>
                        <h3 className="marginNone">{obj.name}</h3>
                        {obj.recipePhotos.length > 0 && <img src={obj.recipePhotos[0].url} alt="recipe" />}

                    </Link>

                </li>

            ))}
        </ul>
    )

    return (
        <div className="margin">

            <h2>Recipes</h2>
            <Link className="linkButton" to={`/recipe/create`}>Add Recipe</Link>

            {listElement}



        </div>

    )
}