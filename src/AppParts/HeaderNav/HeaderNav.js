import { NavLink } from 'react-router-dom'
import './HeaderNav.css'
import SearchForm from './SearchForm'
import "../generalStyle.scss"


export default function HeaderNav() {




    return (
        <header>
            <ul className='navContainer'>
                <li className='navLink'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to='/recipes'>Recipes</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to='/ingredients'>Ingredients</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to='/methods'>Methods</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to='/photos'>Photo Gallery</NavLink>
                </li>
                <li className='navLink'>
                    <SearchForm />
                </li>
            </ul>

        </header>

    )
}