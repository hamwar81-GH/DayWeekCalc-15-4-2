import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isAboutPage = normalizedPath === "/about-us";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {isAboutPage ? <AboutPage /> : <HomePage />}

      <Footer />
    </div>
  );
}

export default App;
