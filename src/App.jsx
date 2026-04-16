import BackToTopButton from "./components/BackToTopButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";

function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const routes = {
    "/": <HomePage />,
    "/about-us": <AboutPage />,
    "/contact-us": <ContactPage />,
    "/privacy-policy": <PrivacyPolicyPage />,
    "/terms-of-use": <TermsOfUsePage />,
    "/cookies-policy": <CookiesPolicyPage />,
  };
  const currentPage = routes[normalizedPath] || <HomePage />;

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />

      {currentPage}

      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
