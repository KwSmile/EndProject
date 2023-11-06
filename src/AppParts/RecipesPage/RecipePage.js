import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import axios from "axios"

export default function RecipePage() {
    const { id } = useParams()

    const [recipeData, setRecipeData] = useState()
    const [ingredientData, setIngredientData] = useState()
    const [methodData, setMethodData] = useState()


    useEffect(() => {
        async function getRecipeData() {
            const { data } = await axios(`${API_URL}/recipes/${id}?_embed=guides&_embed=recipePhotos`)
            setRecipeData(data)
        }
        async function getIngredientData() {
            const { data } = await axios(`${API_URL}/ingredients?recipeId=${id}&_embed=ingredientPhotos`)
            setIngredientData(data)
        }
        async function getMethodData() {
            const { data } = await axios(`${API_URL}/methods?recipeId=${id}&_embed=methodPhotos`)
            setMethodData(data)
        }

        getRecipeData()
        getIngredientData()
        getMethodData()

    }, [id])

    if (!recipeData) return

    const recipeElement = (
        <>
            <h3>{recipeData.name}</h3>
            <div>
                {recipeData.recipePhotos.map((item, i) => (
                    <img key={i} src={item.url} alt="recipe" />
                ))}
            </div>
            <p>{recipeData.description}</p>
        </>
    )

    const guidesList = recipeData.guides.length !== 0 && recipeData.guides.map((obj) => (
        <ul key={obj.id}>
            {obj.instructions.map((item, i) => (
                <li key={i}>
                    {item}
                </li>
            ))}
        </ul>
    ))

    const guidesElement = guidesList && (
        <>
            <h3>Instructions</h3>
            <div>
                {guidesList}
            </div>
        </>
    )
    const ingredientsList = ingredientData && ingredientData.map((obj) => (
        <li key={obj.id}>
            <h4>{obj.name}</h4>
            <div>
                {obj.ingredientPhotos.map((item, i) => (
                    <img key={i} src={item.url} alt="ingredient" />
                ))}
            </div>
            <p>{obj.description}</p>

        </li>
    ))
    const ingredientsElement = ingredientsList && (
        <>
            <h3>Ingredients</h3>
            <ul>
                {ingredientsList}
            </ul>
        </>
    )

    const methodList = methodData && methodData.map((obj) => (
        <li key={obj.id}>
            <h4>{obj.name}</h4>
            <div>
                {obj.methodPhotos.map((item, i) => (
                    <img key={i} src={item.url} alt="method" />
                ))}
            </div>
            <p>{obj.description}</p>
        </li>
    ))
    const methodElement = methodList && (
        <>
            <h3>Methods</h3>
            <ul>
                {methodList}
            </ul>
        </>
    )

    return (
        <>
            <h2>Recipe</h2>

            <div>

                {recipeElement}

                {guidesElement}
                <Link to={`/guide/create/${id}`}>Add Set Of Instructions</Link>

                {ingredientsElement}
                <Link to={`/ingredient/create/${id}`}>Add Ingredient</Link>

                {methodElement}
                <Link to={`/method/create/${id}`}>Add Method</Link>

            </div>

        </>
    )
}