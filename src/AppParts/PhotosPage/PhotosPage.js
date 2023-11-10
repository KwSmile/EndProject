import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { Link } from "react-router-dom"
import "../generalStyle.scss"



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
            <div className="listContainer">
                {recipePhotos.toReversed().map((obj) => (
                    <div className="listCard" key={obj.id}>
                        <Link to={`/recipePhoto/${obj.id}`}>
                            <img src={obj.url} alt="recipe" />
                        </Link>
                        <Link className="linkButton" to={`/recipe/${obj.recipeId}`}>View Recipe</Link>
                    </div>

                ))}
            </div>
        </>
    )

    const ingredientList = ingredientPhotos && (
        <>
            <h2>Ingredients</h2>
            <div className="listContainer">
                {ingredientPhotos && ingredientPhotos.toReversed().map((obj) => (
                    <div className="listCard" key={obj.id}>
                        <Link to={`/ingredientPhoto/${obj.id}`}>
                            <img src={obj.url} alt="ingredient" />

                        </Link>
                        <Link className="linkButton" to={`/ingredient/${obj.ingredientId}`}>View Ingredient</Link>
                    </div>

                ))}
            </div>
        </>
    )

    const methodList = methodPhotos && (
        <>
            <h2>Methods</h2>
            <div className="listContainer">
                {methodPhotos && methodPhotos.toReversed().map((obj) => (
                    <div className="listCard" key={obj.id}>
                        <Link to={`/methodPhoto/${obj.id}`}>
                            <img src={obj.url} alt="method" />
                        </Link>
                        <Link className="linkButton" to={`/method/${obj.methodId}`}>View Method</Link>
                    </div>

                ))}
            </div>
        </>
    )


    return (
        <div className="margin">

            <h1>Photo Gallery</h1>

            {recipeList}
            {ingredientList}
            {methodList}

        </div>

    )
}
