import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FullPost } from "../components/FullPost";
import { PostsContext } from "../context/PostsContext";

export function Post() {
  const { number } = useParams();
  const { posts } = useContext(PostsContext)

  return (
    <div className="flex flex-col justify-center w-4/6 mx-auto max-w-max min-w-[30%]">
      {posts.items?.filter(item => item.number == number).map((item) => (
        <FullPost key={item.number} {...item} />
      ))}

    </div>
  )
}