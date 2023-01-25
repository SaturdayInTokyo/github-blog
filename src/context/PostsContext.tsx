import { createContext, ReactNode, useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({})

export function PostsProvider({ children }: PostsProviderProps) {

  const [posts, setPosts] = useState({})

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: query + "repo:saturdayintokyo/github-blog"
      },
    })

    setPosts(response.data)
  }, [])

  const showPosts = useCallback(async () => {
    const response = await api.get('/search/issues', {
      params: {
        q: "repo:saturdayintokyo/github-blog"
      },
    })

    setPosts(response.data)
  }, [])

  useEffect(() => {
    showPosts()
  }, [])


  return (
    <PostsContext.Provider
      value={{
        posts,
        fetchPosts
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}