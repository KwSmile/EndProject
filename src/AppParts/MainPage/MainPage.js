import { useContext } from "react"
import { DarkModeContext } from "../../context"
import Features from "./Features"
import style from "./main.module.scss"
import "../generalStyle.scss"


export default function MainPage() {
    const { darkMode } = useContext(DarkModeContext)
    console.log(darkMode)

    return (
        <div className={style.box}>
            <h1 className={style.title}>Recipe Collection App</h1>

            <Features>

                <h4 className={style.title}>Features:</h4>
                <ul className={style.text}>
                    <li>Recipes (create, edit, delete) (5 pages)</li>
                    <li>Instructions (create, edit, delete) (5 pages)</li>
                    <li>Ingredients (create, edit, delete) (5 pages)</li>
                    <li>Methods (create, edit, delete) (5 pages)</li>
                    <li>Photos Gallery (Link to Sauce) (1 pages)</li>
                    <li>Recipe Photos (create, delete) (3 pages)</li>
                    <li>Ingredient Photos (create, delete) (3 pages)</li>
                    <li>Method Photos (create, delete) (3 pages)</li>
                    <li>Search (Recipes, Ingredient, Methods) (1 pages)</li>
                    {/* <li></li> */}
                </ul>

            </Features>

        </div>

    )
}
