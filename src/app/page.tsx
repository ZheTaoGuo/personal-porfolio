import Header from './components/Header/page'
import About from './About/page'
import Footer from './components/Footer/page'

export default function Home(){
  return (
      <main className="min-h-screen bg-slate-800">
          <Header/>
          <About/>
          <Footer/>
      </main>
  )
}