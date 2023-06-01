import useSWR from 'swr'
import { Link } from 'wouter'
import { getItemInfo } from '../services/hacker-news'

interface StoryProps {
  id: number
  index: number
}

export const Story = (props: StoryProps) => {
  const { id, index } = props
  const { data, isLoading } = useSWR('stories', () => getItemInfo(id))

  if (isLoading) {
    return <>Loading...</>
  }

  const { by, kids, score, title, url } = data
  console.log(data)

  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch {
    domain = 'news.ycombinator.com'
  }
  return (
    <article className=''>
      <header className=''>
        <small className=''>{index}.</small>
        <a className='' href={url} target='_black' rel='noopener noreferer'>{title}</a>
        <a href={url}>({domain})</a>
      </header>
      <footer>
        <span>{score} points</span>
        <Link className='' href={`/article/${id}`}> by {by}</Link>
        <Link className='' href={`/article/${id}`}> 6 hours ago</Link>
        <Link className='' href={`/article/${id}`}> {kids?.length ?? 0}</Link>
      </footer>
    </article>
  )
}
