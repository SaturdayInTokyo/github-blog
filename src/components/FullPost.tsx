import { FaCalendarDay, FaChevronLeft, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import ReactMarkdown from 'react-markdown'

import { format, formatDistanceToNow, parseISO } from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

interface PostProps {
  html_url: string,
  title: string,
  user: {
    login: string
  },
  comments: string,
  body: string,
  created_at: string
}

export function FullPost({ html_url, title, user, comments, body, created_at }: PostProps) {

  const publishedDateFormat = format(parseISO(created_at), "MMMM dd 'às' HH:mm", {
    locale: ptBR,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(parseISO(created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <div>
      <div className=" mt-[-5rem] mb-[4.5rem] px-10 py-8 rounded-xl gap-8 bg-base-profile ">
        <header className="flex justify-between mb-5">
          <NavLink to="/" title="página principal" className="flex gap-2 items-center text-blue hover:underline decoration-2 text-sm">
            <FaChevronLeft />
            <span>VOLTAR</span>
          </NavLink>
          <span className="flex gap-2 items-center text-blue hover:underline decoration-2 text-sm">
            <a target="_blank" href={html_url}>VER NO GITHUB</a>
            <FaExternalLinkAlt />
          </span>
        </header>
        <h1 className="font-bold text-2xl mb-2">{title}</h1>
        <div className="flex gap-8">
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaGithub size={18} className="text-base-label" />
            {user.login}
          </span>
          <time
            className="flex items-center gap-2 text-base-subtitle"
            title={publishedDateFormat}
            dateTime={created_at}
          >
            <FaCalendarDay size={18} className="text-base-label" />
            {publishedDateRelativeToNow}
          </time>
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaComment size={18} className="text-base-label" />
            {comments} comentários
          </span>
        </div>
      </div>
      <article className="px-8 py-10">
        <ReactMarkdown>
          {body}
        </ReactMarkdown>
      </article>
    </div>
  )
}