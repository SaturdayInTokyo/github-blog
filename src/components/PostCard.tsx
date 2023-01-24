interface PostCardProps {
  title: string,
  body: string,
}

export function PostCard({ title, body }: PostCardProps) {
  return (
    <div className="p-8 rounded-xl bg-base-post max-h-64 hover:cursor-pointer hover:outline hover:outline-base-label ">
      <header className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-xl">{title}</h1>
        <span className="text-sm text-base-span">Há 1 dia</span>
      </header>
      <p className="line-clamp-5">{body}</p>
    </div>
  )
}