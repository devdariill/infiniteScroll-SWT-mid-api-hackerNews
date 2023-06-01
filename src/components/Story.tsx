import useSWR from 'swr'
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

  return (
    <article className=''>
      <header className=''>
        <small className=''>{index}.</small>
        <a className='' href={url} target='_black' rel='noopener noreferer'>{title}</a>
        <a href={url}>({url})</a>
      </header>
      <footer />
    </article>
  )
}
