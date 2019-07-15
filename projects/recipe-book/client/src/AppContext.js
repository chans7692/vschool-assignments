import React, { Component } from "react";
import axios from "axios";
const recipeAxios = axios.create();

recipeAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            filtered: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        this.getRecipes();
    }
  
    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.recipes
        });
    }

    getRecipes = () => {
        return recipeAxios.get("/api/recipe")
            .then(response => {
                return this.setState({ 
                    recipes: response.data,
                    filtered: response.data
                })
            })
    }

    addRecipes = (newRecipe) => {
        return recipeAxios.post("/api/recipe/", newRecipe)
            .then(response => {
                this.setState(prevState => {
                    return { recipes: [...prevState.recipes, response.data] }
                })
            })
    }

    editRecipe = (recipeId, recipe) => {
        return recipeAxios.put(`/api/recipe/${recipeId}`, recipe)
            .then(response => {
                this.setState(prevState => {
                    const updatedRecipes = prevState.recipes.map(recipe => {
                        return recipe._id === response.data._id ? response.data : recipe
                    })
                    return { recipes: updatedRecipes }
                })
            })
    }

    deleteRecipe = (recipeId) => {
        return recipeAxios.delete(`/api/recipe/${recipeId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedRecipes = prevState.recipes.filter(recipe => {
                        return recipe._id !== recipeId
                    })
                    return { recipes: updatedRecipes }
                })
            })
    }

    search = (e) => {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
        currentList = this.state.recipes;

        newList = currentList.filter(item => {
            const lc = item.title.toString().toLowerCase();
            const filter = e.target.value.toString().toLowerCase();
            return lc.includes(filter);
        });
        } else {
        newList = this.state.recipes;
        }
        this.setState({
        filtered: newList
        });
    }

    signup = (userInfo) => {
        return recipeAxios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                })
            })
    }

    login = (credentials) => {
        return recipeAxios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                this.getRecipes()
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            Recipes: [],
            user: {},
            token: ""
        })
    }    


    render() {
        return (
            <AppContext.Provider
                value={{
                    getRecipes: this.getRecipes,
                    addRecipes: this.addRecipes,
                    editRecipe: this.editRecipe,
                    deleteRecipe: this.deleteRecipe,
                    search: this.search,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    ...this.state
                }}
            >

                {this.props.children}

            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}
