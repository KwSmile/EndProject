import { Route, Routes } from "react-router-dom";
import HeaderNav from "./AppParts/HeaderNav/HeaderNav";
import MainPage from "./AppParts/MainPage/MainPage";
import SearchPage from "./AppParts/SearchPage/SearchPage";
import RecipesPage from "./AppParts/RecipesPage/RecipesPage";
import RecipePage from "./AppParts/RecipesPage/RecipePage";
import PhotosPage from "./AppParts/PhotosPage/PhotosPage";
import PhotoPage from "./AppParts/PhotosPage/PhotoPage";
import IngredientsPage from "./AppParts/IngredientsPage/IngredientsPage";
import IngredientPage from "./AppParts/IngredientsPage/IngredientPage";
import "./App.css"


export default function App() {


  return (
    <>
      <>

        <HeaderNav />

        <Routes>
          <Route path='/' element={<MainPage />} />
          
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/recipes/:id' element={<RecipePage />} />

          <Route path='/photos' element={<PhotosPage />} />
          <Route path='/photos/:id' element={<PhotoPage />} />

          <Route path='/ingredients' element={<IngredientsPage />} />
          <Route path='/ingredients/:id' element={<IngredientPage />} />

          <Route path='/search' element={<SearchPage />} />

          <Route path='*' element={<h1>404: Page not found</h1>} />
        </Routes>

      </>
    </>
  )
}

