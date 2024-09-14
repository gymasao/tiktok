import Header from "./components/Header"
import ImageSlider from './components/ImageSlider'
import GridSection from './components/GridSection'
import LinkSection from './components/LinkSection'
import NewsSection from './components/NewsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ImageSlider />
      <GridSection />
      <LinkSection />
      <NewsSection />
    </main>
  )
}