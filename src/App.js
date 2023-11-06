import { Route, Routes } from "react-router-dom";
import HeaderNav from "./AppParts/HeaderNav/HeaderNav";
import MainPage from "./AppParts/MainPage/MainPage";
import SearchPage from "./AppParts/SearchPage/SearchPage";
import RecipesPage from "./AppParts/RecipesPage/RecipesPage";
import RecipePage from "./AppParts/RecipesPage/RecipePage";
import PhotosPage from "./AppParts/PhotosPage/PhotosPage";
import IngredientsPage from "./AppParts/IngredientsPage/IngredientsPage";
import IngredientPage from "./AppParts/IngredientsPage/IngredientPage";
import MethodsPage from "./AppParts/MethodsPage/MethodsPage";
import MethodPage from "./AppParts/MethodsPage/MethodPage";
import RecipePhotoPage from "./AppParts/PhotosPage/RecipePhotoPage";
import IngredientPhotoPage from "./AppParts/PhotosPage/IngredientPhotoPage";
import MethodPhotoPage from "./AppParts/PhotosPage/MethodPhotoPage";
import CreateRecipePage from "./AppParts/CreatePages/CreateRecipePage";
import CreateGuidePage from "./AppParts/CreatePages/CreateGuidePage";
import "./App.css"
import CreateIngredientPage from "./AppParts/CreatePages/CreateIngredientPage";
import CreateMethodPage from "./AppParts/CreatePages/CreateMethodPage";


export default function App() {


  return (
    <>


      <HeaderNav />

      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='/recipe/:id' element={<RecipePage />} />
        <Route path='/recipe/create' element={<CreateRecipePage />} />

        <Route path='/guide/create/:id' element={<CreateGuidePage />} />


        <Route path='/photos' element={<PhotosPage />} />
        <Route path='/recipePhoto/:id' element={<RecipePhotoPage />} />
        <Route path='/ingredientPhoto/:id' element={<IngredientPhotoPage />} />
        <Route path='/methodPhoto/:id' element={<MethodPhotoPage />} />

        <Route path='/ingredients' element={<IngredientsPage />} />
        <Route path='/ingredient/:id' element={<IngredientPage />} />
        <Route path='/ingredient/create/:id' element={<CreateIngredientPage />} />

        <Route path='/methods' element={<MethodsPage />} />
        <Route path='/method/:id' element={<MethodPage />} />
        <Route path='/method/create/:id' element={<CreateMethodPage />} />

        <Route path='/search' element={<SearchPage />} />

        <Route path='*' element={<h1>404: Page not found</h1>} />
      </Routes>


    </>
  )
}

