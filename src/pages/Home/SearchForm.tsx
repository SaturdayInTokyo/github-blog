import * as z from 'zod'
import { useContext} from 'react'
import { PostsContext } from '../../context/PostsContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchFormComponent() {

  const { fetchPosts } = useContext(PostsContext)

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <form onSubmit={handleSubmit(handleSearchPosts)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="w-full py-3 px-4 rounded-md placeholder:text-base-label bg-base-input border border-base-border focus:outline focus:outline-blue"
        {...register('query')}
      />
    </form>
  )
}
