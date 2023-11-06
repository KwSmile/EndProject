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
                {recipeData.recipePhotos.map((obj, i) => (
                    <div key={i}>
                        <img src={obj.url} alt="recipe" />
                        <Link to={`/recipePhoto/delete/${obj.id}`}>Delete Photo</Link>
                    </div>
                ))}
                <Link to={`/recipePhoto/create/${id}`}>Add Photo</Link>
            </div>
            <p>{recipeData.description}</p>
        </>
    )

    const guidesList = recipeData.guides.length !== 0 && recipeData.guides.map((obj) => (
        <div key={obj.id}>
            <ul>
                {obj.instructions.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
            <Link to={`/guide/edit/${obj.id}`}>Edit Guide</Link>
            <Link to={`/guide/delete/${obj.id}`}>Delete Guide</Link>
        </div>
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
                {obj.ingredientPhotos.map((obj, i) => (
                    <div key={i}>
                        <img src={obj.url} alt="ingredient" />
                        <Link to={`/ingredientPhoto/delete/${obj.id}`}>Delete Photo</Link>
                    </div>
                ))}
                <Link to={`/ingredientPhoto/create/${id}`}>Add Photo</Link>
            </div>
            <p>{obj.description}</p>

            <Link to={`/ingredient/edit/${obj.id}`}>Edit Ingredient</Link>
            <Link to={`/ingredient/delete/${obj.id}`}>Delete Ingredient</Link>
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
                {obj.methodPhotos.map((obj, i) => (
                    <div key={i} >
                        <img src={obj.url} alt="method" />
                        <Link to={`/methodPhoto/delete/${obj.id}`}>Delete Photo</Link>
                    </div>
                ))}
                <Link to={`/methodPhoto/create/${id}`}>Add Photo</Link>
            </div>
            <p>{obj.description}</p>

            <Link to={`/method/edit/${obj.id}`}>Edit Method</Link>
            <Link to={`/method/delete/${obj.id}`}>Delete Method</Link>
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
                <Link to={`/recipe/edit/${id}`}>Edit Recipe</Link>
                <Link to={`/recipe/delete/${id}`}>Delete Recipe</Link>

                {guidesElement}
                <Link to={`/guide/create/${id}`}>Add Instructions</Link>

                {ingredientsElement}
                <Link to={`/ingredient/create/${id}`}>Add Ingredient</Link>

                {methodElement}
                <Link to={`/method/create/${id}`}>Add Method</Link>

            </div>

        </>
    )
}