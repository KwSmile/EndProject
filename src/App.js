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
import CreateIngredientPage from "./AppParts/CreatePages/CreateIngredientPage";
import CreateMethodPage from "./AppParts/CreatePages/CreateMethodPage";
import EditRecipePage from "./AppParts/EditPages/EditRecipePage"
import EditGuidePage from "./AppParts/EditPages/EditGuidePage"
import EditIngredientPage from "./AppParts/EditPages/EditIngredientPage";
import EditMethodPage from "./AppParts/EditPages/EditMethodPage";
import DeleteRecipePage from "./AppParts/DeletePages/DeleteRecipePage"
import DeleteGuidePage from "./AppParts/DeletePages/DeleteGuidePage";
import DeleteIngredientPage from "./AppParts/DeletePages/DeleteIngredientPage";
import DeleteMethodPage from "./AppParts/DeletePages/DeleteMethodPage";
import CreateRecipePhotoPage from "./AppParts/CreatePhotoPages/CreateRecipePhotoPage";
import CreateIngredientPhotoPage from "./AppParts/CreatePhotoPages/CreateIngredientPhotoPage";
import CreateMethodPhotoPage from "./AppParts/CreatePhotoPages/CreateMethodPhotoPage";
import "./App.css"
import DeleteRecipePhotoPage from "./AppParts/DeletePhotoPages/DeleteRecipePhotoPage";
import DeleteIngredientPhotoPage from "./AppParts/DeletePhotoPages/DeleteIngredientPhotoPage";
import DeleteMethodPhotoPage from "./AppParts/DeletePhotoPages/DeleteMethodPhotoPage";


export default function App() {


  return (
    <>


      <HeaderNav />

      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='/recipe/:id' element={<RecipePage />} />
        <Route path='/recipe/create' element={<CreateRecipePage />} />
        <Route path='/recipe/edit/:id' element={<EditRecipePage />} />
        <Route path='/recipe/delete/:id' element={<DeleteRecipePage />} />

        <Route path='/guide/create/:id' element={<CreateGuidePage />} />
        <Route path='/guide/edit/:id' element={<EditGuidePage />} />
        <Route path='/guide/delete/:id' element={<DeleteGuidePage />} />

        <Route path='/photos' element={<PhotosPage />} />
        <Route path='/recipePhoto/:id' element={<RecipePhotoPage />} />
        <Route path='/ingredientPhoto/:id' element={<IngredientPhotoPage />} />
        <Route path='/methodPhoto/:id' element={<MethodPhotoPage />} />
        <Route path='/recipePhoto/create/:id' element={<CreateRecipePhotoPage />} />
        <Route path='/ingredientPhoto/create/:id' element={<CreateIngredientPhotoPage />} />
        <Route path='/methodPhoto/create/:id' element={<CreateMethodPhotoPage />} />
        <Route path='/recipePhoto/delete/:id' element={<DeleteRecipePhotoPage />} />
        <Route path='/ingredientPhoto/delete/:id' element={<DeleteIngredientPhotoPage />} />
        <Route path='/methodPhoto/delete/:id' element={<DeleteMethodPhotoPage />} />

        <Route path='/ingredients' element={<IngredientsPage />} />
        <Route path='/ingredient/:id' element={<IngredientPage />} />
        <Route path='/ingredient/create/:id' element={<CreateIngredientPage />} />
        <Route path='/ingredient/edit/:id' element={<EditIngredientPage />} />
        <Route path='/ingredient/delete/:id' element={<DeleteIngredientPage />} />

        <Route path='/methods' element={<MethodsPage />} />
        <Route path='/method/:id' element={<MethodPage />} />
        <Route path='/method/create/:id' element={<CreateMethodPage />} />
        <Route path='/method/edit/:id' element={<EditMethodPage />} />
        <Route path='/method/delete/:id' element={<DeleteMethodPage />} />

        <Route path='/search' element={<SearchPage />} />

        <Route path='*' element={<h1>404: Page not found</h1>} />
      </Routes>


    </>
  )
}

