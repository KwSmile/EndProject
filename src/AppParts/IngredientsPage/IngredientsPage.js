import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { Link } from "react-router-dom"

export default function IngredientsPage() {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(API_URL + '/ingredients?_embed=ingredientPhotos')
            setData(data)

        }

        getData()

    }, [])
    console.log(data)

    const listElement = (
        <ul>
            {data && data.toReversed().map((obj) => (
                <li key={obj.id}>
                    <Link to={`/ingredient/${obj.id}`}>
                        <h3>{obj.name}</h3>
                        {obj.ingredientPhotos.length && <img src={obj.ingredientPhotos[0].url} alt="ingredient" />}

                    </Link>

                </li>

            ))}
        </ul>
    )

    return (
        <div>

            <h2>Ingredients</h2>

            {listElement}



        </div>

    )
}