
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Product from './Components/Product/Product';
import Feauture from './Components/Feature/Feauture';
import HowToUse from './Components/HowTOUSe/HowToUse';
import Testimonial from './Components/Testimonial/Testimonial';
import Blog from './Components/Blog/Blog';
import Pagenotfound from './Components/404/Pagenotfound';
import Contact from './Components/Contact.jsx/Contact';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import ReturnAndRefundPolicy from './Components/ReturnRefundPolicy/ReturnRefundPolicy';
import HelpPage from './Components/HelpPage/HelpPage';
import FAQPage from './Components/FAQPage/FAQPage';
import CookiesPage from './Components/CookiesPage/CookiesPage';
import SinglePage from './Components/ProductDetails/SinglePage'
import Cart from './Components/Cart/Cart';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LoginForm from './Components/LoginForm/LoginForm';
import toast, { Toaster } from 'react-hot-toast';
import Checkout from './Components/Checkout/Checkout';
import UpdateProfile from './Components/Profile/UpdateProfile';
import Profile from './Components/Profile/Profile';
import PaymentSuccess from './Components/Payment/PaymentSuccess';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/details/:_id' element={<SinglePage />} />
          <Route path='/feature' element={<Feauture />} />
          <Route path='/how_to_use' element={<HowToUse />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/*' element={<Pagenotfound />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/term&condition' element={<TermsAndConditions />} />
          <Route path='/return&refund' element={<ReturnAndRefundPolicy />} />
          <Route path='/help' element={<HelpPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/cookies' element={<CookiesPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Payment-Success' element={<PaymentSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
