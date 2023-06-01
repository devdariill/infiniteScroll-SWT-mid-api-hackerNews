import { useEffect } from 'react'
import useSWR from 'swr'
import ListOfComments from '../components/ListOfComments'
import { getItemInfo } from '../services/hacker-news'

function Detail (props: { params: { id: number } }) {
  const { params: { id } } = props
  // const { id } = props.params
  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id))
  useEffect(() => {
    document.title = `Hacker News - ${String(data.title)}`
  }, [data])
  return (
    <div className=''>
      {
        isLoading ? <div>Loading...</div> : <ListOfComments ids={data?.kids?.slice(0, 10) ?? []} />
      }
    </div>
  )
}

export default Detail
