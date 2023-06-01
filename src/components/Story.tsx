import useSWR from 'swr'
import { Link } from 'wouter'
import { getItemInfo } from '../services/hacker-news'
import { story, storyFooter, storyHeader, storyLink, storyTitle } from './Story.css'

interface StoryProps {
  id: number
  index: number
}

export const Story = (props: StoryProps) => {
  const { id, index } = props
  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <>Loading...</>
  }

  const { by, kids, score, title, url } = data
  console.log(data)

  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch {}
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
        <Link className={storyLink} href={`/article/${id}`}> 6 hours ago</Link>
        <Link className={storyLink} href={`/article/${id}`}> {kids?.length ?? 0}</Link>
      </footer>
    </article>
  )
}
