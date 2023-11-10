import { useState } from "react"
import "../generalStyle.scss"


export default function SearchForm() {

    const [phrase, setPhrase] = useState('')

    return (

        <form
            action="/search"
        >
            <input
                type="text"
                id="search"
                name="search"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
            />

            <input type="submit" id="submit" value="Search" />
        </form>
    )
}