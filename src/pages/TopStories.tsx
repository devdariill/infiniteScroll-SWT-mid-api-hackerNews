// import useSWR from 'swr'
import { useEffect, useRef } from 'react'
import useSWRInfinite from 'swr/infinite'
import { Story } from '../components/Story'
import { StoryLoader } from '../components/StoryLoader'
import { getTopStories } from '../services/hacker-news'

function TopStories () {
  useEffect(() => {
    document.title = 'Hacker News - Peuba Tecnita USA de Frontend'
  }, [])

  const { data, isLoading, size, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [,page] = key.split('/')
      return getTopStories(Number(page), 5)
    }
  )
  // exmaple for flat()
  // const data = [[1,2,3], [4,5,6], [7,8,9]] -> [1,2,3,4,5,6,7,8,9]
  // const data = [[1,2,3], [4,5,6], [7,8,[9]]] -> [1,2,3,4,5,6,7,8,[9]]
  // example for flat(2)
  // const data = [[1,2,3], [4,5,6], [7,8,[9]]] -> [1,2,3,4,5,6,7,8,9]
  const stories = data?.flat()
  // const { data, error, isLoading } = useSWR('stories', () => getTopStories(1, 10))
  const chivatoEl = useRef(null)
  // const chivatoEl = useRef<HTMLSpanElement >(null)
  useEffect(() => {
    if (chivatoEl.current == null) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        setSize((prevSize) => prevSize + 1)
      }
    })
    observer.observe(chivatoEl.current)
  }, [isLoading, setSize])
  return (
    <>
      {isLoading && <StoryLoader />}
      <ul style={{ listStyle: 'none' }}>
        {stories?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
      {!isLoading && <span ref={chivatoEl}>.</span>}
      {/* <button onClick={() => { setSize(size + 1) }}>Load More</button> */}
    </>
  )
}

export default TopStories
