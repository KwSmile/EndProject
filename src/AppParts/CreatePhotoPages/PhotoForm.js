import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../config"
import { useNavigate, useParams } from "react-router-dom"


export default function CreateRecipePhotoPage({onFormSubmit, validity}) {

    const empty = ''
    const [url, setUrl] = useState(empty)
    
    const urlError = !validity && url === empty && (
        <div className="formError">Fill in url!</div>
    )

    const validityError = !validity && (
        <div className="formError">Form is filled incorrectly!</div>
    )

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div className="formControl">

                    <label htmlFor="url">Photo Url:</label>
                    <input type="text" id="url" name="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    {urlError}
                </div>
                {validityError}

                <input type="submit" value="Create" />
            </form>
        </>
    )

}



