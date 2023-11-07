import { useContext } from "react"
import { DarkModeContext } from "../../context"
import Features from "./Features"

export default function MainPage() {
    const { darkMode } = useContext(DarkModeContext)
    console.log(darkMode)

    return (
        <div>
            <h1>Recipe Collection App</h1>

            <Features>

                <h4>Features:</h4>
                <ul>
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
