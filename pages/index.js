import NavBar from '../components/NavBar.jsx';
import Main from '../components/Main.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
    <Head>
        <title>kaleab Girma </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <NavBar />
     <Main />
     <About />
     <Skills />
     {/* projects herer*/}
     
     
    

     </div>
    
  )
}
