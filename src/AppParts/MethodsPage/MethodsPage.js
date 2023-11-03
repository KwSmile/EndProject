import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { Link } from "react-router-dom"

export default function MethodsPage() {

    const [data, setData] = useState()

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(API_URL + '/methods?_embed=methodPhotos')
            setData(data)

        }

        getData()

    }, [])
    console.log(data)

    if (!data) return

    const listElement = (
        <ul>
            {data && data.toReversed().map((obj) => (
                <li key={obj.id}>
                    <Link to={`/method/${obj.id}`}>
                        <h3>{obj.name}</h3>
                        {obj.methodPhotos.length && <img src={obj.methodPhotos[0].url} alt="method" />}

                    </Link>

                </li>

            ))}
        </ul>
    )

    return (
        <div>

            <h2>Methods</h2>

            {listElement}

        </div>

    )
}