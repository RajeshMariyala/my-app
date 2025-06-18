import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Home";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </main>
  );
}
