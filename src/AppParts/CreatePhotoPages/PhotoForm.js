import "../generalStyle.scss"

export default function PhotoForm({onFormSubmit, validity, url, setUrl, empty}) {
    
    const urlError = !validity && url === empty && (
        <div className="formError">Fill in url!</div>
    )

    const validityError = !validity && (
        <div className="formError">Form is filled incorrectly!</div>
    )

    return (
        <>
            <form className="formGeneral" onSubmit={onFormSubmit}>
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



