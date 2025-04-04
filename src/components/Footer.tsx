import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white" style={{
      backgroundImage: `radial-gradient(at 91.33841335773243% 24.403493974046665%, hsla(195.86206896551727, 100%, 65.88235294117646%, 1) 0%, hsla(195.86206896551727, 100%, 65.88235294117646%, 0) 100%), radial-gradient(at 81.16694196420345% 1.8868065765726305%, hsla(239.1891891891892, 90.98360655737707%, 52.156862745098046%, 1) 0%, hsla(239.1891891891892, 90.98360655737707%, 52.156862745098046%, 0) 100%), radial-gradient(at 41.25294657363921% 33.802982566521855%, hsla(195.86206896551727, 100%, 65.88235294117646%, 1) 0%, hsla(195.86206896551727, 100%, 65.88235294117646%, 0) 100%), radial-gradient(at 5.507477889454959% 91.87410098172121%, hsla(147.23926380368098, 83.58974358974359%, 61.76470588235294%, 1) 0%, hsla(147.23926380368098, 83.58974358974359%, 61.76470588235294%, 0) 100%), radial-gradient(at 35.6369680176309% 34.66260592490411%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%)`
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Payment methods row */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="p-2 bg-white/10 rounded-md">
            <svg className="h-10 w-16" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="40" rx="4" fill="#fff"/>
              <path d="M27.4 20h9.2v-8h-9.2v8z" fill="#FF5F00"/>
              <path d="M28.2 16a5.1 5.1 0 012-4 5 5 0 100 8 5.1 5.1 0 01-2-4z" fill="#EB001B"/>
              <path d="M38.2 16a5 5 0 01-8 4 5 5 0 000-8 5 5 0 018 4z" fill="#F79E1B"/>
            </svg>
          </div>
          <div className="p-2 bg-white/10 rounded-md">
            <svg className="h-10 w-16" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="40" rx="4" fill="#fff"/>
              <path d="M27 25.8h10V14.2H27v11.6z" fill="#fff"/>
              <path d="M27.8 20a5.8 5.8 0 010-5.8h8.4a5.8 5.8 0 010 5.8h-8.4z" fill="#F1F1F1"/>
              <path d="M43 14.2L38.3 20l4.6 5.8h-4.3L36 22.5l-2.6 3.3h-4.3l4.6-5.8-4.6-5.8h4.3l2.6 3.3 2.6-3.3H43z" fill="#00579F"/>
            </svg>
          </div>
          <div className="p-2 bg-white/10 rounded-md">
            <svg className="h-10 w-16" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="40" rx="4" fill="#fff"/>
              <path d="M35 14a5 5 0 00-5 5v6h12v-6a5 5 0 00-7-5z" fill="#000"/>
              <path d="M30 25v-5a5 5 0 115 5h-5z" fill="#000"/>
            </svg>
          </div>
          <div className="p-2 bg-white/10 rounded-md">
            <svg className="h-10 w-16" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="40" rx="4" fill="#fff"/>
              <path d="M32 16l-3 5.2L32 26l3-4.8L32 16z" fill="#1507b2"/>
              <path d="M32 16l-6 10h12l-6-10z" fill="#51D1FF" fillOpacity="0.4"/>
              <path d="M39 25l-7-9-7 9h14z" fill="#cc2692"/>
              <path d="M25 25l7-9 7 9" stroke="#4cef96" strokeWidth="1.5"/>
              <path d="M32 26v-5" stroke="#27b588" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="p-2 bg-white/10 rounded-md">
            <div className="h-10 w-16 flex items-center justify-center text-white text-sm font-semibold">
              BANK
            </div>
          </div>
          <div className="p-2 bg-white/10 rounded-md">
            <div className="h-10 w-16 flex items-center justify-center text-white text-sm font-semibold">
              TROY
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img src="/remi.png" alt="REMI" className="h-12 w-12" />
            </div>
            <p className="mt-4 text-white/80">
              Global B2B Money Remittance Service Provider
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/remi-world" className="text-white/80 hover:text-white">REMI World</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4"><Link to="/legal" className="text-white hover:text-white">Legal</Link></h3>
            <ul className="space-y-2">
              <li><Link to="/legal/privacy-policy" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/legal/aml-policy" className="text-white/80 hover:text-white">AML Policy</Link></li>
              <li><Link to="/compliance" className="text-white/80 hover:text-white">Compliance</Link></li>
              <li><Link to="/pci-dss" className="text-white/80 hover:text-white">PCI DSS</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-white/80">
                <Mail className="h-5 w-5 mr-2" />
                info-remi@remirabbit.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} REMI. All rights reserved.</p>
        </div>
      </div>
    <div className="w-full bg-white py-4 flex flex-wrap items-center justify-center gap-6">
  <img src="/visa.png" alt="Visa" className="h-8 object-contain" />
  <img src="/mastercard.png" alt="Mastercard" className="h-8 object-contain" />
  <img src="/troy.png" alt="Troy" className="h-8 object-contain" />
  <img src="/jcb.png" alt="JCB" className="h-8 object-contain" />
  <img src="/unionpay.png" alt="UnionPay" className="h-8 object-contain" />
  <img src="/bank-transfer.png" alt="Bank Transfer" className="h-8 object-contain" />
  <img src="/havale.png" alt="Havale" className="h-8 object-contain" />
</div>
    </footer>
  );
};

export default Footer;
