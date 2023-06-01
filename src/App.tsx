import { Suspense, lazy } from 'react'
import { Route } from 'wouter'
import './App.css'
import Header from './components/Header'
import { StoryLoader } from './components/StoryLoader'

const TopStoriesPage = lazy(() => import('./pages/TopStories'))
const DetailPage = lazy(() => import('./pages/Detail'))

export default function App () {
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
