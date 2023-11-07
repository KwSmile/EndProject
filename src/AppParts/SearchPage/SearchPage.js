import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { API_URL } from "../../config"
import axios from "axios"
import style from "../generalStyle.module.scss"


export default function SearchPage() {
    const [searchParams] = useSearchParams()

    const phrase = searchParams.get('search')

    const [recipes, setRecipes] = useState()
    const [ingredients, setIngredients] = useState()
    const [methods, setMethods] = useState()

    useEffect(() => {
        const getRecipesData = async () => {
            const { data } = await axios(`${API_URL}/recipes?q=${phrase}`)
            setRecipes(data)
        }
        const getIngredientsData = async () => {
            const { data } = await axios(`${API_URL}/ingredients?q=${phrase}`)
            setIngredients(data)
        }
        const getMethodsData = async () => {
            const { data } = await axios(`${API_URL}/methods?q=${phrase}`)
            setMethods(data)
        }
        getRecipesData()
        getIngredientsData()
        getMethodsData()

    }, [phrase])

    if (!recipes && !ingredients && !methods) {
        return (
            <h2 className={style.title}>Loading...</h2>
        )
    }

    if (recipes && ingredients && methods) {
        if (phrase === '' || (recipes.length === 0 && ingredients.length === 0 && methods.length === 0)) {
            return (
                <h3 className={style.title}>Search phrase is unqualified to peer into the data...</h3>
            )
        }
    }

    // phrase && recipes && ingredients && methods && console.log(recipes, ingredients, methods)
    // console.log(phrase)

    const recipesListElement = recipes && recipes.length > 0 && recipes.map((obj) => (
        <li key={obj.id} >
            <Link to={`/recipe/${obj.id}`}>
                {obj.name}
            </Link>
        </li>
    ))
    const recipesElement = recipesListElement && (
        <>
            <h3 className={style.title}>Recipes</h3>
            <ul>
                {recipesListElement}
            </ul>
        </>
    )

    const ingredientsListElement = ingredients && ingredients.length > 0 && ingredients.map((obj) => (
        <li key={obj.id}>
            <Link to={`/ingredient/${obj.id}`}>
                {obj.name}

            </Link>

        </li>
    ))
    const ingredientsElement = ingredientsListElement && (
        <>
            <h3 className={style.title}>Ingredients</h3>
            <ul>
                {ingredientsListElement}
            </ul>
        </>
    )

    const methodsListElement = methods && methods.length > 0 && methods.map((obj) => (
        <li key={obj.id}>
            <Link to={`/method/${obj.id}`}>
                {obj.name}

            </Link>

        </li>
    ))
    const methodsElement = methodsListElement && (
        <>
            <h3 className={style.title}>Methods</h3>
            <ul>
                {methodsListElement}
            </ul>
        </>
    )

    return (
        <div className="margin">

            <h2 className={style.title}>Search Results:</h2>
            {recipesElement}
            {ingredientsElement}
            {methodsElement}

        </div>
    )
}
