import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './global/global.css'
import { PostsProvider } from './context/PostsContext'

export function App() {
  return (
    <BrowserRouter>
      <PostsProvider>
        <Router />
      </PostsProvider>
    </BrowserRouter>
  )
}
