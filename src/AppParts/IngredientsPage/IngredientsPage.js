import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { Link } from "react-router-dom"
import "../generalStyle.scss"


export default function IngredientsPage() {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(API_URL + '/ingredients?_embed=ingredientPhotos')
            setData(data)
        }

        getData()

    }, [])

    if (!data) {
        return (<h3>Loading...</h3>)
    }

    const listElement = (
        <div className="listContainer">
            {data && data.toReversed().map((obj) => (
                <div className="listCard" key={obj.id}>
                    <Link to={`/ingredient/${obj.id}`}>
                        <h3 className="marginNone">{obj.name}</h3>
                        {obj.ingredientPhotos.length && <img src={obj.ingredientPhotos[0].url} alt="ingredient" />}

                    </Link>

                </div>

            ))}
        </div>
    )

    return (
        <div className="margin">

            <h2>Ingredients</h2>
            {listElement}



        </div>

    )
}