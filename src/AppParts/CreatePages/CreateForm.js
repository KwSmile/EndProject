
export default function CreateForm({ validity, name, setName, desc, setDesc, empty, onFormSubmit }) {

    const nameError = !validity && name === empty && (
        <div className="formError">Fill in name!</div>
    )
    const descError = !validity && desc === empty && (
        <div className="formError">Fill in description!</div>
    )

    const validityError = !validity && (
        <div className="formError">Form is filled incorrectly!</div>
    )

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div className="formControl">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError}
                </div>
                <div className="formControl">

                    <label htmlFor="desc">Description:</label>
                    <textarea id="desc" name="desc"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    {descError}
                </div>
                {validityError}

                <input type="submit" value="Create" />
            </form>
        </>
    )

}



