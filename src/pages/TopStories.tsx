import useSWR from 'swr'
import { getTopStories } from '../services/hacker-news'
function TopStories () {
  const { data, error, isLoading } = useSWR('stories', () => getTopStories(1, 3))

  return (
    <>
      <ul>
        {isLoading && <li>Loading...</li>}
        {error != null && <li>Something went wrong</li>}
        {data.map((id: number) => (
          <li key={id}>
            <Story id={id} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TopStories
