import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { API_URL } from "../../config"

export default function SearchPage() {
    const [searchParams] = useSearchParams()

    const phrase = searchParams.get('search')

    const [users, setUsers] = useState(null)
    const [posts, setPosts] = useState(null)
    const [albums, setAlbums] = useState(null)

    useEffect(() => {
        const getUserData = async () => {
            const res = await fetch(`${API_URL}/users?q=${phrase}`)
            const apiData = await res.json()
            setUsers(apiData)
        }
        const getPostsData = async () => {
            const res = await fetch(`${API_URL}/posts?q=${phrase}`)
            const apiData = await res.json()
            setPosts(apiData)
        }
        const getAlbumsData = async () => {
            const res = await fetch(`${API_URL}/albums?q=${phrase}`)
            const apiData = await res.json()
            setAlbums(apiData)
        }

        getUserData()
        getPostsData()
        getAlbumsData()

    }, [phrase])


    const loadingElement = !users && !posts && !albums && (
        <h2>Loading...</h2>
        
    )

    let dataCheck = users && posts && albums && true
    let dataLengthCheck = dataCheck && users.length === 0 && posts.length === 0 && albums.length === 0 && true
    let unqualifiedCheck = phrase === '' || (dataCheck && dataLengthCheck)
    const unqualifiedElement = unqualifiedCheck && (
        <h3>Search phrase is unqualified to peer into the data...</h3>
    )

    phrase && users && posts && albums && console.log(users, posts, albums)
    console.log(phrase)

    const usersListElement = users && users.map((obj) => (
        <li key={obj.id}>
            <Link to={`/users/${obj.id}`}>
                {obj.name}

            </Link>

        </li>
    ))
    const usersElement = usersListElement && (
        <>
            <h3>Users</h3>
            <ul>
                {usersListElement}
            </ul>
        </>
    )

    const postsListElement = posts && posts.map((obj) => (
        <li key={obj.id}>
            <Link to={`/posts/${obj.id}`}>
                {obj.title}

            </Link>

        </li>
    ))
    const postsElement = postsListElement && (
        <>
            <h3>Posts</h3>
            <ul>
                {postsListElement}
            </ul>
        </>
    )

    const albumsListElement = albums && albums.map((obj) => (
        <li key={obj.id}>
            <Link to={`/albums/${obj.id}`}>
                {obj.title}

            </Link>

        </li>
    ))
    const albumsElement = albumsListElement && (
        <>
            <h3>Albums</h3>
            <ul>
                {albumsListElement}
            </ul>
        </>
    )




    return (
        <div>
            {loadingElement || unqualifiedElement || (
                <>
                    <h2>Search Results:</h2>
                    {usersElement}
                    {postsElement}
                    {albumsElement}

                </>
            )}



        </div>
    )
}
