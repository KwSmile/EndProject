import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import axios from "axios"
import "../generalStyle.scss"


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

    if (!recipeData) {
        return (<h3>Loading...</h3>)
    }

    const recipeElement = (
        <>
            <h3>{recipeData.name}</h3>
            <div className="listContainer">
                {recipeData.recipePhotos.map((obj, i) => (
                    <div className="listCard" key={i}>
                        <img src={obj.url} alt="recipe" />
                        <Link className="linkButton" to={`/recipePhoto/delete/${obj.id}`}>Delete Photo</Link>
                    </div>
                ))}
                <Link className="linkButton" to={`/recipePhoto/create/${id}`}>Add Photo</Link>
            </div>
            <p>{recipeData.description}</p>
        </>
    )

    const guidesList = recipeData && recipeData.guides.map((obj) => (
        <div key={obj.id}>
            <ul className="listContainer paddingNone">
                {obj.instructions.map((item, i) => (
                    <li className="listCard none" key={i}>
                        <span>{i + 1} - {item}</span>
                    </li>
                ))}
            </ul>
            <Link className="linkButton" to={`/guide/edit/${obj.id}`}>Edit Instructions</Link>
            <Link className="linkButton" to={`/guide/delete/${obj.id}`}>Delete Instructions</Link>
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
        <div key={obj.id}>
            <h4>{obj.name}</h4>
            <div className="listContainer">
                {obj.ingredientPhotos.map((obj, i) => (
                    <div className="listCard" key={i}>
                        <img src={obj.url} alt="ingredient" />
                        <Link className="linkButton" to={`/ingredientPhoto/delete/${obj.id}`}>Delete Photo</Link>
                    </div>
                ))}
                <Link className="linkButton" to={`/ingredientPhoto/create/${obj.id}`}>Add Photo</Link>
            </div>
            <p>{obj.description}</p>

            <Link className="linkButton" to={`/ingredient/edit/${obj.id}`}>Edit Ingredient</Link>
            <Link className="linkButton" to={`/ingredient/delete/${obj.id}`}>Delete Ingredient</Link>
        </div>
    ))
    const ingredientsElement = ingredientsList && (
        <>
            <h3>Ingredients</h3>
            <div>
                {ingredientsList}
            </div>
        </>
    )

    const methodList = methodData && methodData.map((obj) => (
        <div key={obj.id}>
            <h4>{obj.name}</h4>
            <div className="listContainer">
                {obj.methodPhotos.map((obj, i) => (
                    <div className="listCard" key={i} >
                        <img src={obj.url} alt="method" />
                        <Link className="linkButton" to={`/methodPhoto/delete/${obj.id}`}>Delete Photo</Link>
                    </div>
                ))}
                <Link className="linkButton" to={`/methodPhoto/create/${obj.id}`}>Add Photo</Link>
            </div>
            <p>{obj.description}</p>

            <Link className="linkButton" to={`/method/edit/${obj.id}`}>Edit Method</Link>
            <Link className="linkButton" to={`/method/delete/${obj.id}`}>Delete Method</Link>
        </div>
    ))
    const methodElement = methodList && (
        <>
            <h3>Methods</h3>
            <div>
                {methodList}
            </div>
        </>
    )

    return (
        <>
            <h2 className="margin">Recipe</h2>

            <div className="margin">

                {recipeElement}
                <Link className="linkButton" to={`/recipe/edit/${id}`}>Edit Recipe</Link>
                <Link className="linkButton" to={`/recipe/delete/${id}`}>Delete Recipe</Link>

                {guidesElement}
                <Link className="linkButton" to={`/guide/create/${id}`}>Add Instructions</Link>

                {ingredientsElement}
                <Link className="linkButton" to={`/ingredient/create/${id}`}>Add Ingredient</Link>

                {methodElement}
                <Link className="linkButton" to={`/method/create/${id}`}>Add Method</Link>

            </div>

        </>
    )
}