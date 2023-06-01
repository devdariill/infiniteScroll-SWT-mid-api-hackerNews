import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'

const Comment = (props: { id: number }) => {
  const { id } = props
  const { data, isLoading } = useSWR(`/comments/${id}`, () => getItemInfo(id))
  if (isLoading) {
    return <div>Loading...</div>
  }
  const { by, time, text, kids } = data

  return (
    <>
      <article>
        <header>
          <small>
            <span>{by}</span>
            <span>.</span>
            <span>5 hours ago</span>
          </small>
        </header>
        <p>{text}</p>
      </article>
      {kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />}
    </>
  )
}

function ListOfComments (props: { ids: number[] }) {
  const { ids } = props
  return (
    <ul>
      {
        ids?.map((id: number) => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))
      }
    </ul>
  )
}

export default ListOfComments
