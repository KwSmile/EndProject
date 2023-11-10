import { NavLink } from 'react-router-dom'
import SearchForm from './SearchForm'
import "../generalStyle.scss"
import './HeaderNav.scss'


export default function HeaderNav() {
    const logo = 'Kiwi'

    return (
        <header>
            <ul className="navContainer">
                <li className="spin text navLink">{logo}</li>
                <li className="navLink ">
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className="navLink">
                    <NavLink to='/recipes'>Recipes</NavLink>
                </li>
                <li className="navLink">
                    <NavLink to='/ingredients'>Ingredients</NavLink>
                </li>
                <li className="navLink">
                    <NavLink to='/methods'>Methods</NavLink>
                </li>
                <li className="navLink">
                    <NavLink to='/photos'>Photo Gallery</NavLink>
                </li>
                <li className="navLink">
                    <SearchForm />
                </li>
            </ul>

        </header>

    )
}