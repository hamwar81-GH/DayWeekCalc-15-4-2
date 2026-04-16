import JsonLd from "./components/JsonLd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import { buildSiteSchemaGraph } from "./lib/schema";

function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const siteSchema = buildSiteSchemaGraph(normalizedPath);
  const routes = {
    "/": <HomePage />,
    "/about-us": <AboutPage />,
    "/privacy-policy": <PrivacyPolicyPage />,
    "/terms-of-use": <TermsOfUsePage />,
    "/cookies-policy": <CookiesPolicyPage />,
  };
  const currentPage = routes[normalizedPath] || <HomePage />;

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd id="site-schema" data={siteSchema} />
      <Header />

      {currentPage}

      <Footer />
    </div>
  );
}

export default App;
