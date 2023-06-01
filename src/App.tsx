import { Suspense, lazy, useEffect } from 'react'
import { Route } from 'wouter'
import Header from './components/Header'
import { StoryLoader } from './components/StoryLoader'

const TopStoriesPage = lazy(() => import('./pages/TopStories'))
const DetailPage = lazy(() => import('./pages/Detail'))

export default function App () {
  useEffect(() => {
    document.title = 'Hacker News'
  }, [])
  return (
    <>
      <Header />

      <Suspense fallback={<StoryLoader />}>
        <Route path='/' component={TopStoriesPage} />
        <Route path='/article/:id' component={DetailPage} />
      </Suspense>
    </>
  )
}
