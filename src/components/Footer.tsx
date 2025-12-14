import { Facebook, Twitter, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white mt-20 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DataAnalytics Pro</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering professionals with cutting-edge data analytics education and resources.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-white">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-white">Connect With Us</h4>
            <div className="flex space-x-3 mb-6">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-white/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-white/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-white/10">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-white/10">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span>info@dataanalyticspro.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">&copy; 2025 DataAnalytics Pro. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}