import { Suspense, lazy } from 'react'
import { Route } from 'wouter'
import './App.css'
import Header from './components/Header'

const TopStoriesPage = lazy(() => import('./pages/TopStories'))
const DetailPage = lazy(() => import('./pages/Detail'))

export default function App () {
  return (
    <>
      <Header />

      <Suspense fallback='Loading...'>
        <Route path='/' component={TopStoriesPage} />
        <Route path='/article/:id' component={DetailPage} />
      </Suspense>
    </>
  )
}
