import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-graviital-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="flex items-center text-graviital-blue hover:text-graviital-purple transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-graviital-purple to-graviital-blue bg-clip-text text-transparent">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to GraviitalBeats. These Terms and Conditions govern your use of GraviitalBeats and the services offered through our platform, including our website and any associated applications.
            </p>
            <p>
              By using GraviitalBeats and its related services, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use our platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Waitlist Registration</h2>
            <p>
              By joining our waitlist, you provide consent for GraviitalBeats to collect and store your personal data including but not limited to your name and email address. We will use this information to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Notify you about the launch of our services</li>
              <li>Provide you with updates about our platform</li>
              <li>Share exclusive offers available to waitlist members</li>
              <li>Contact you with relevant information about our services</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Any information collected through our platform is subject to our Privacy Policy, which describes how we collect, use, and protect your personal information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Responsibilities</h2>
            <p>
              When using GraviitalBeats and participating in our waitlist, you agree to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of any account information</li>
              <li>Not use the platform for any illegal or unauthorized purpose</li>
              <li>Not interfere with the proper operation of the service</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              All content on GraviitalBeats, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of GraviitalBeats or its content suppliers and is protected by international copyright laws.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              GraviitalBeats and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              We may modify these Terms and Conditions at any time. If we make changes, we will provide notice by posting the updated terms on our platform and updating the "Last updated" date at the top of these Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="font-medium text-graviital-blue">support@graviitalbeats.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 