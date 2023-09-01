import Header from './components/Header/page'
import About from './About/page'
import Footer from './components/Footer/page'
import Experience from "@/app/Experience/page";
import Project from '@/app/Project/page';

export default function Home(){
  return (
      <main className="min-h-screen bg-slate-800">
          <Header/>
          <About/>
          <Experience/>
          <Project/>
          <Footer/>
      </main>
  )
}