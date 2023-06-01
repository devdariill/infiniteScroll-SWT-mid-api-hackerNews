import useSWR from 'swr'
import { Story } from '../components/Story'
import { getTopStories } from '../services/hacker-news'
function TopStories () {
  const { data, error, isLoading } = useSWR('stories', () => getTopStories(1, 3))

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {isLoading && <li>Loading...</li>}
        {error != null && <li>Something went wrong</li>}
        {data?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TopStories
