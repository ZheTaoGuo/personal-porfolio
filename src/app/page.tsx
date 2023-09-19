import Header from './components/Header/page'
import About from './About/page'
import Footer from './components/Footer/page'
import Experience from "@/app/Experience/page";
import Project from '@/app/Project/page';

export default function Home(){
  return (
      <main className="min-h-screen p-2 bg-slate-800">
          <Header/>
          <div className="px-6 md:px-12">
              <About/>
              <Experience/>
              <Project/>
          </div>
          <Footer/>
      </main>
  )
}