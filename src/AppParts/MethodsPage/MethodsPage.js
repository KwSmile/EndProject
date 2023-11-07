import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { Link } from "react-router-dom"
import "../generalStyle.scss"


export default function MethodsPage() {

    const [data, setData] = useState()

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(API_URL + '/methods?_embed=methodPhotos')
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
                    <Link to={`/method/${obj.id}`}>
                        <h3 className="marginNone">{obj.name}</h3>
                        {obj.methodPhotos.length && <img src={obj.methodPhotos[0].url} alt="method" />}

                    </Link>

                </div>

            ))}
        </div>
    )

    return (
        <div className="margin">

            <h2>Methods</h2>

            {listElement}

        </div>

    )
}