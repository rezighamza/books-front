import {Route , RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, Create, Edit , Details, Delete} from './pages/index'
import './App.css'
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />,
        <Route path='/create' element={<Create />} />,
        <Route path='/edit/:id' element={<Edit />} />,
        <Route path='/details/:id' element={<Details />} />,
        <Route path='/delete/:id' element={<Delete />} />
      </Route>
    )
  )
  

  return (
    <RouterProvider router={router} />
  
  )
}

export default App
