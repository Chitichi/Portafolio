import Head from 'next/head'
import Link from 'next/link';
import Navbar from './navbar';
import ScrollComponent from './scroll';
import AnimatedTitle  from './tituloanimado';


export default function Home() {
  return (
    <>
    <Navbar/>
      <Head>
        <title>Giuliana Vazquez Portfolio</title>  
      <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
      <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"/>
      </Head>
      
      
      <ScrollComponent/>
     
      
 </>
  )};