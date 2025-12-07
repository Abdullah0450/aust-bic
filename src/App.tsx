import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import BusinessIncubation from "./pages/BusinessIncubation";
import Mentorship from "./pages/Mentorship";
import FundingAccess from "./pages/FundingAccess";
import TrainingPrograms from "./pages/TrainingPrograms";
import NetworkingEvents from "./pages/NetworkingEvents";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition><Index /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/activities" element={<PageTransition><Activities /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/sitemap" element={<PageTransition><Sitemap /></PageTransition>} />
              <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
              <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
              <Route path="/business-incubation" element={<PageTransition><BusinessIncubation /></PageTransition>} />
              <Route path="/mentorship" element={<PageTransition><Mentorship /></PageTransition>} />
              <Route path="/funding-access" element={<PageTransition><FundingAccess /></PageTransition>} />
              <Route path="/training-programs" element={<PageTransition><TrainingPrograms /></PageTransition>} />
              <Route path="/networking-events" element={<PageTransition><NetworkingEvents /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
