import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import UserDetailes from './Components/UserDetails/UserDetailes.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';




const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/about',
        element : <About></About>
      },

      {
        path : '/contact',
        element : <Contact></Contact>,
      },

      {
        path : '/users',
        // loader : ( ()  => fetch('url'))
        loader : ( () =>  fetch('https://jsonplaceholder.typicode.com/users')),
        element : <Users></Users>,
      },

      {
        // :userId = variable will store value
        path : '/user/:userId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetailes></UserDetailes>

 // params is an object, where 'userId' is a property and the value will be 'current_route'        
      },

      {
        path : '/posts',
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element : <Posts></Posts>
      },

      {
        path : '/post/:postId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element : <PostDetails></PostDetails>
      }

  
    ]
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
