// import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { Story } from '../components/Story'
import { StoryLoader } from '../components/StoryLoader'
import { getTopStories } from '../services/hacker-news'

function TopStories () {
  const { data, isLoading } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [,page] = key.split('/')
      return getTopStories(Number(page), 10)
    }
  )
  // const { data, error, isLoading } = useSWR('stories', () => getTopStories(1, 10))

  return (
    <>
      {isLoading && <StoryLoader />}
      <ul style={{ listStyle: 'none' }}>
        {data?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
      <button>Load More</button>
    </>
  )
}

export default TopStories
