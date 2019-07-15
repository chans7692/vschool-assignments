import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./Navbar";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import ProtectedRoute from "./Auth/ProtectedRoute";

import RecipeList from "./Recipes/RecipeList";
import AddRecipeForm from "./Recipes/AddRecipeForm"
import Recipe from './Recipes/Recipe'
import EditForm from './Recipes/EditRecipeForm'

function App() {
    return (
        <div className="app-wrapper">
            <Navbar/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path='/form' component={AddRecipeForm}/>
                <Route path='/recipe' component={Recipe} />
                <Route path='/edit-form' component={EditForm}/>
                
                <ProtectedRoute path="/recipes" component={RecipeList}/>
                <Route exact path="/" render={() => <Redirect to="/recipes"/>}/>
            </Switch>
        </div>
    )
}

export default App;
