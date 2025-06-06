import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Companies from "./components/Companies";
import Specialties from "./components/Specialties";
import YouTubeVideos from "./components/YouTubeVideos";
import TalkVideos from "./components/Talks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Companies />
          <Specialties />
          <YouTubeVideos />
          <TalkVideos />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
