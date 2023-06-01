import useSWR from 'swr'
import { Link } from 'wouter'
import { getItemInfo } from '../services/hacker-news'
import { getRelativeTime } from '../utils/getrelativeTime'
import { story, storyFooter, storyHeader, storyLink, storyTitle } from './Story.css'
import { StoryLoader } from './StoryLoader'

interface StoryProps {
  id: number
  index: number
}

export const Story = (props: StoryProps) => {
  const { id, index } = props
  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <StoryLoader />
  }

  const { by, kids, score, title, url, time } = data
  console.log(data)

  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch {}

  const timeAgo = getRelativeTime(time)
  return (
    <article className={story}>
      <header className={storyHeader}>
        <small>{index + 1}.</small>
        <a className={storyTitle} href={url} target='_black' rel='noopener noreferer'>{title}</a>
        <a className={storyLink} href={url}>({domain})</a>
      </header>
      <footer className={storyFooter}>
        <span>{score} points</span>
        <Link className={storyLink} href={`/article/${id}`}> by {by}</Link>
        <Link className={storyLink} href={`/article/${id}`}> {timeAgo}</Link>
        <Link className={storyLink} href={`/article/${id}`}> {kids?.length ?? 0}</Link>
      </footer>
    </article>
  )
}
