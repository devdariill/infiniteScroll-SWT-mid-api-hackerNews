import { Route } from 'wouter'
import './App.css'
import Header from './components/Header'
import DetailPage from './pages/Detail'
import TopStoriesPage from './pages/TopStories'
export default function App () {
  return (
    <>
      <Header />

      <Route path='/' component={TopStoriesPage} />
      <Route path='/article/:id' component={DetailPage} />
    </>
  )
}
