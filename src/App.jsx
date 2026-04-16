import JsonLd from "./components/JsonLd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { buildSiteSchemaGraph } from "./lib/schema";

function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isAboutPage = normalizedPath === "/about-us";
  const siteSchema = buildSiteSchemaGraph(normalizedPath);

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd id="site-schema" data={siteSchema} />
      <Header />

      {isAboutPage ? <AboutPage /> : <HomePage />}

      <Footer />
    </div>
  );
}

export default App;
