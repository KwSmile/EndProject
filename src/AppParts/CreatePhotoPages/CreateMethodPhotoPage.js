import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import PhotoForm from "./PhotoForm"
import "../generalStyle.scss"

export default function CreateMethodPhotoPage() {
    const { id } = useParams()

    const navigate = useNavigate()

    const empty = ''
    const [url, setUrl] = useState(empty)

    const [validity, setValidity] = useState(true)

    const onFormSubmit = (e) => {
        e.preventDefault()

        let valid = false
        if (url !== empty) valid = true

        setValidity(valid)
        if (!valid) return

        axios.post(`${API_URL}/methodPhotos`, {
            methodId: Number(id),
            url: url
        })

        setUrl(empty)

        navigate(-1)
    }

    return (
        <>
        <h2 className="margin">Create Method Photo</h2>
            <PhotoForm
                onFormSubmit={onFormSubmit}
                validity={validity}
                url={url}
                setUrl={setUrl}
                empty={empty}
            />
        </>
    )

}



