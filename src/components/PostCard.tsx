import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

interface PostCardProps {
  title: string,
  body: string,
  number: number,
}

export function PostCard({ title, body, number }: PostCardProps) {
  return (
    <Link to={`/post/${number}`}>
      <div className="p-8 rounded-xl bg-base-post max-h-64 min-h-[16rem] hover:cursor-pointer hover:outline hover:outline-base-label ">
        <header className="flex justify-between mb-5 gap-4">
          <h1 className="font-bold text-xl line-clamp-2">{title}</h1>
          <span className="text-sm text-base-span">Há 1 dia</span>
        </header>
        <p className="line-clamp-5">
          <ReactMarkdown>
            {body}
          </ReactMarkdown>
        </p>
      </div>
    </Link >

  )
}