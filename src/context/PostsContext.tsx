import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({})

export function PostsProvider({ children }: PostsProviderProps) {

  const [posts, setPosts] = useState({})

  const query = "Boas Práticas"

  useEffect(() => {
    api
      .get('/search/issues', {
        params: {
          q: query + "repo:saturdayintokyo/github-blog"
        }
      })
      .then((res) => setPosts(res.data))
      .catch((err) => {
        console.error('An error occurred: ' + err)
      })
  }, [])

  return (
    <PostsContext.Provider
      value={{
        posts
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}