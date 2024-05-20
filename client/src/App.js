
import './App.css';
import Header from './Common/Header';
import Body from './components/Body';
import store from './utils/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import createBrowserRouter, { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
function App() {
  const appStore=createBrowserRouter([{
    path : "/",
    element : <Body/>,
    children: [{
      path: "/",
      element:<MainContainer/>,
    },
    {
      path: "/watch",
      element:<WatchPage/>,
    }]
  }])
  return (
    <Provider store={store}>
    <>
    <Header/>
    <RouterProvider router={appStore}></RouterProvider>
    </>
    </Provider>
  );
}

export default App;
