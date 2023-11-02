import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { Link } from "react-router-dom"


export default function PhotosPage() {

    const [recipePhotos, setRecipePhotos] = useState([])
    const [ingredientPhotos, setIngredientPhotos] = useState([])
    const [methodPhotos, setMethodPhotos] = useState([])


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
    // console.log(data)

    const listElement = (
        <>
            <h2>Recipes</h2>
            <ul>
                {recipePhotos && recipePhotos.toReversed().map((obj) => (
                    <li key={obj.id}>
                        <Link to={`/recipe/${obj.recipeId}`}>
                            <img src={obj.url} alt="recipe" />
                        </Link>
                    </li>

                ))}
            </ul>
            <h2>ingredients</h2>
            <ul>
                {ingredientPhotos && ingredientPhotos.toReversed().map((obj) => (
                    <li key={obj.id}>
                        <Link to={`/ingredient/${obj.ingredientId}`}>
                            <img src={obj.url} alt="ingredient" />
                        </Link>
                    </li>

                ))}
            </ul>
            <h2>Methods</h2>
            <ul>
                {methodPhotos && methodPhotos.toReversed().map((obj) => (
                    <li key={obj.id}>
                        <Link to={`/method/${obj.methodId}`}>
                            <img src={obj.url} alt="method" />
                        </Link>
                    </li>

                ))}
            </ul>
        </>
    )

    return (
        <div>

            <h1>Photos</h1>

            {listElement}



        </div>

    )
}
