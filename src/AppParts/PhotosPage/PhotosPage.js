import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { Link } from "react-router-dom"


export default function PhotosPage() {

    const [recipePhotos, setRecipePhotos] = useState()
    const [ingredientPhotos, setIngredientPhotos] = useState()
    const [methodPhotos, setMethodPhotos] = useState()


    useEffect(() => {
        const getRecipePhotos = async () => {
            const { data } = await axios(API_URL + '/recipePhotos')
            setRecipePhotos(data)
        }
        const getIngredientPhotos = async () => {
            const { data } = await axios(API_URL + '/ingredientPhotos')
            setIngredientPhotos(data)
        }
        const getMethodPhotos = async () => {
            const { data } = await axios(API_URL + '/methodPhotos')
            setMethodPhotos(data)
        }
        getRecipePhotos()
        getIngredientPhotos()
        getMethodPhotos()



    }, [])

    if (!recipePhotos || !ingredientPhotos || !methodPhotos) {
        return (<h3>Loading...</h3>)
    }

    const recipeList = recipePhotos && (
        <>
            <h2>Recipes</h2>
            <ul>
                {recipePhotos.toReversed().map((obj) => (
                    <li key={obj.id}>
                        <Link to={`/recipePhoto/${obj.id}`}>
                            <img src={obj.url} alt="recipe" />
                        </Link>
                        <Link to={`/recipe/${obj.recipeId}`}>View Recipe</Link>
                    </li>

                ))}
            </ul>
        </>
    )

    const ingredientList = ingredientPhotos && (
        <>
            <h2>Ingredients</h2>
            <ul>
                {ingredientPhotos && ingredientPhotos.toReversed().map((obj) => (
                    <li key={obj.id}>
                        <Link to={`/ingredientPhoto/${obj.id}`}>
                            <img src={obj.url} alt="ingredient" />

                        </Link>
                        <Link to={`/ingredient/${obj.ingredientId}`}>View Ingredient</Link>
                    </li>

                ))}
            </ul>
        </>
    )

    const methodList = methodPhotos && (
        <>
            <h2>Methods</h2>
            <ul>
                {methodPhotos && methodPhotos.toReversed().map((obj) => (
                    <li key={obj.id}>
                        <Link to={`/methodPhoto/${obj.id}`}>
                            <img src={obj.url} alt="method" />
                        </Link>
                        <Link to={`/method/${obj.methodId}`}>View Method</Link>
                    </li>

                ))}
            </ul>
        </>
    )


    return (
        <div>

            <h1>Photos</h1>

            {recipeList}
            {ingredientList}
            {methodList}

        </div>

    )
}
