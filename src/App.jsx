import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBanner from "./components/TopBanner/TopBanner";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ITSolutions from "./components/ITSolutions/ITSolutions";
import CyberSecurity from "./components/CyberSecurity/CyberSecurity";
import Sectors from "./components/Sectors/Sectors";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

// Service pages
import ManagedITServices from "./pages/Services/ManagedITServices";
import ITSupportHelpdesk from "./pages/Services/ITSupportHelpdesk";
import ITConsultancy from "./pages/Services/ITConsultancy";
import CoManagedITSupport from "./pages/Services/CoManagedITSupport";
import ITProcurement from "./pages/Services/ITProcurement";

// Solution pages
import CloudSolutions from "./pages/Solutions/CloudSolutions";
import MicrosoftAzure from "./pages/Solutions/MicrosoftAzure";
import Microsoft365 from "./pages/Solutions/Microsoft365";
import BackupDisasterRecovery from "./pages/Solutions/BackupDisasterRecovery";
import BusinessAppsERP from "./pages/Solutions/BusinessAppsERP";
import MicrosoftPowerPlatform from "./pages/Solutions/MicrosoftPowerPlatform";

// Cyber Security pages
import CyberSecurityServices from "./pages/CyberSecurity/CyberSecurityServices";
import CyberEssentials from "./pages/CyberSecurity/CyberEssentials";
import EndpointSecurity from "./pages/CyberSecurity/EndpointSecurity";
import EmailSecurity from "./pages/CyberSecurity/EmailSecurity";
import ManagedFirewall from "./pages/CyberSecurity/ManagedFirewall";
import SecurityRiskAssessment from "./pages/CyberSecurity/SecurityRiskAssessment";

// Sector pages
import EducationSchools from "./pages/Sectors/EducationSchools";
import Manufacturing from "./pages/Sectors/Manufacturing";
import CharitiesNonProfits from "./pages/Sectors/CharitiesNonProfits";
import ProfessionalServices from "./pages/Sectors/ProfessionalServices";
import Healthcare from "./pages/Sectors/Healthcare";

// About
import AboutUs from './pages/About/AboutUs'
import OurTeam from './pages/About/OurTeam'
import CaseStudies from './pages/About/CaseStudies'
import BlogInsights from './pages/About/BlogInsights'

import "./App.css";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ITSolutions />
      <CyberSecurity />
      <Sectors />
      <Testimonials />
      <ContactSection />
    </main>
  );
}

function Layout({ children }) {
  return (
    <div className="app">
      <TopBanner />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Services */}
          <Route
            path="/services/managed-it-services"
            element={<ManagedITServices />}
          />
          <Route
            path="/services/it-support-helpdesk"
            element={<ITSupportHelpdesk />}
          />
          <Route path="/services/it-consultancy" element={<ITConsultancy />} />
          <Route
            path="/services/co-managed-it-support"
            element={<CoManagedITSupport />}
          />
          <Route path="/services/it-procurement" element={<ITProcurement />} />

          {/* Solutions */}
          <Route
            path="/solutions/cloud-solutions"
            element={<CloudSolutions />}
          />
          <Route
            path="/solutions/microsoft-azure"
            element={<MicrosoftAzure />}
          />
          <Route path="/solutions/microsoft-365" element={<Microsoft365 />} />
          <Route
            path="/solutions/backup-disaster-recovery"
            element={<BackupDisasterRecovery />}
          />
          <Route
            path="/solutions/business-apps-erp"
            element={<BusinessAppsERP />}
          />
          <Route
            path="/solutions/microsoft-power-platform"
            element={<MicrosoftPowerPlatform />}
          />

          {/* Cyber Security */}
          <Route
            path="/cyber-security/cyber-security-services"
            element={<CyberSecurityServices />}
          />
          <Route
            path="/cyber-security/cyber-essentials"
            element={<CyberEssentials />}
          />
          <Route
            path="/cyber-security/endpoint-security"
            element={<EndpointSecurity />}
          />
          <Route
            path="/cyber-security/email-security"
            element={<EmailSecurity />}
          />
          <Route
            path="/cyber-security/managed-firewall"
            element={<ManagedFirewall />}
          />
          <Route
            path="/cyber-security/security-risk-assessment"
            element={<SecurityRiskAssessment />}
          />
          {/* Sectors */}
          <Route
            path="/sectors/education-schools"
            element={<EducationSchools />}
          />
          <Route path="/sectors/manufacturing" element={<Manufacturing />} />
          <Route
            path="/sectors/charities-non-profits"
            element={<CharitiesNonProfits />}
          />
          <Route
            path="/sectors/professional-services"
            element={<ProfessionalServices />}
          />
          <Route path="/sectors/healthcare" element={<Healthcare />} />

          {/* About */}
          <Route path="/about/about-us" element={<AboutUs />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/case-studies" element={<CaseStudies />} />
          <Route path="/about/blog-insights" element={<BlogInsights />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
