import { Link } from "react-router-dom";
import { format, formatDistanceToNow, parseISO } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

interface PostCardProps {
  title: string,
  body: string,
  number: number,
  created_at: string,
}

export function PostCard({ title, body, number, created_at }: PostCardProps) {
  const publishedDateFormat = format(parseISO(created_at), "MMMM dd 'às' HH:mm", {
    locale: ptBR,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(parseISO(created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Link to={`/post/${number}`}>
      <div className="p-8 rounded-xl bg-base-post max-h-64 min-h-[16rem] hover:cursor-pointer hover:outline hover:outline-base-label ">
        <header className="flex justify-between mb-5 gap-4">
          <h1 className="font-bold text-xl line-clamp-2">{title}</h1>
          <time
            className="text-sm text-base-span"
            title={publishedDateFormat}
            dateTime={created_at}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>
        <ReactMarkdown className="line-clamp-5">
          {body}
        </ReactMarkdown>
      </div>
    </Link >
  )
}