import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './dashboard/Home';
import About from './About_Us/About';
import Services from './serviceList/Services';
import ServiceDetailsView from './services/Service/service-details-view';
import './index.css';
import Footer from './components/Footer';
import ContactSection from './conctactUs/Contact';
import ScrollToTop from './components/ScrollToTop';
import { SnackbarProvider } from 'notistack';
import JobPage from './jobsList/Jobs';

function App() {
  // useEffect(() => {
  //   const handleClick = (event) => {
  //     event.preventDefault(); // Prevents the default click action
  //   };

  //   const handleContextMenu = (event) => {
  //     event.preventDefault(); // Prevents the context menu from opening
  //   };

  //   // Add event listeners to disable left-click and context menu
  //   document.addEventListener('click', handleClick);
  //   document.addEventListener('contextmenu', handleContextMenu);

  //   // Cleanup the event listeners on component unmount
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);

  return (
    <Router>
      <SnackbarProvider>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobpage" element={<JobPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details/:urlSlug" element={<ServiceDetailsView />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
          <Footer />
        </div>
      </SnackbarProvider>
    </Router>
  );
}

export default App;
