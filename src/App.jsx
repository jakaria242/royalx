import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from './layout/RootLayout';
import Home from './page/home/Home';
import About from './page/about/About';
import Service from './page/service/Service';
import Rooms from './page/rooms/Rooms';
import Amenities from './page/amenities/Amenities';
import Testimonials from './page/testimonials/Testimonials';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/amenities' element={<Amenities/>}/>
        <Route path='/testimonial' element={<Testimonials/>}/>

      </Route>
    )
  );


  return (
    <RouterProvider router={router}/>
  )
}

export default App
