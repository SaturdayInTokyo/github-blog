import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/Post/:number' element={<Post />} />
      </Route>
    </Routes>
  )
}

