import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-slate-900 to-slate-800" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto" suppressHydrationWarning>
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-400 mb-8" suppressHydrationWarning>
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            🏗️ Engineering Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
            Business Systems Built for <span className="text-blue-400">Scale</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Custom web platforms, automated workflows, and optimized digital infrastructure designed to eliminate operational friction and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" suppressHydrationWarning>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              Book a Strategy Call
            </Link>
            
            <Link 
              href="/case-studies" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              View Results
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Business Web Platforms */}
      <section id="web-platforms" className="py-20 bg-slate-900" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16" suppressHydrationWarning>
            <div suppressHydrationWarning>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-400 mb-6" suppressHydrationWarning>
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Solution Pillar 1
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Custom Business Web Platforms
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Corporate websites, client portals, admin dashboards, and internal operational systems engineered for scalability, performance, and business impact.
              </p>
              <div className="space-y-4 mb-8" suppressHydrationWarning>
                <div className="flex items-start" suppressHydrationWarning>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1" suppressHydrationWarning>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h4 className="font-semibold text-white mb-1">Scalable Architecture</h4>
                    <p className="text-gray-400">Built to grow with your business from startup to enterprise scale</p>
                  </div>
                </div>
                <div className="flex items-start" suppressHydrationWarning>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1" suppressHydrationWarning>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h4 className="font-semibold text-white mb-1">Performance Optimization</h4>
                    <p className="text-gray-400">Lightning-fast load times and seamless user experiences</p>
                  </div>
                </div>
                <div className="flex items-start" suppressHydrationWarning>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1" suppressHydrationWarning>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h4 className="font-semibold text-white mb-1">Operational Centralization</h4>
                    <p className="text-gray-400">Unified systems that eliminate data silos and improve efficiency</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                Discuss Your Platform Needs →
              </Link>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-gray-700" suppressHydrationWarning>
              <h3 className="text-xl font-bold text-white mb-6">Platform Capabilities</h3>
              <div className="space-y-4" suppressHydrationWarning>
                <div className="p-4 bg-slate-700 rounded-lg" suppressHydrationWarning>
                  <h4 className="font-semibold text-blue-400 mb-2">🌐 Corporate Websites</h4>
                  <p className="text-gray-300 text-sm">Professional websites that convert visitors into customers</p>
                </div>
                <div className="p-4 bg-slate-700 rounded-lg" suppressHydrationWarning>
                  <h4 className="font-semibold text-blue-400 mb-2">👥 Client Portals</h4>
                  <p className="text-gray-300 text-sm">Secure client access to project management and resources</p>
                </div>
                <div className="p-4 bg-slate-700 rounded-lg" suppressHydrationWarning>
                  <h4 className="font-semibold text-blue-400 mb-2">📊 Admin Dashboards</h4>
                  <p className="text-gray-300 text-sm">Real-time business intelligence and management tools</p>
                </div>
                <div className="p-4 bg-slate-700 rounded-lg" suppressHydrationWarning>
                  <h4 className="font-semibold text-blue-400 mb-2">⚙️ Internal Systems</h4>
                  <p className="text-gray-300 text-sm">Custom operational tools for workflow optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Process Automation */}
      <section id="process-automation" className="py-20 bg-slate-800" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16" suppressHydrationWarning>
            <div className="order-2 lg:order-1" suppressHydrationWarning>
              <div className="bg-slate-900 rounded-2xl p-8 border border-gray-700" suppressHydrationWarning>
                <h3 className="text-xl font-bold text-white mb-6">Automation Solutions</h3>
                <div className="space-y-4" suppressHydrationWarning>
                  <div className="p-4 bg-slate-800 rounded-lg" suppressHydrationWarning>
                    <h4 className="font-semibold text-blue-400 mb-2">🔄 Workflow Automation</h4>
                    <p className="text-gray-300 text-sm">Streamline repetitive tasks and eliminate manual bottlenecks</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg" suppressHydrationWarning>
                    <h4 className="font-semibold text-blue-400 mb-2">🔗 CRM Integrations</h4>
                    <p className="text-gray-300 text-sm">Connect your systems for seamless data flow and insights</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg" suppressHydrationWarning>
                    <h4 className="font-semibold text-blue-400 mb-2">📈 Reporting Systems</h4>
                    <p className="text-gray-300 text-sm">Automated reporting for data-driven decision making</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg" suppressHydrationWarning>
                    <h4 className="font-semibold text-blue-400 mb-2">⚡ Process Optimization</h4>
                    <p className="text-gray-300 text-sm">Redesign workflows for maximum efficiency and scalability</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2" suppressHydrationWarning>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-400 mb-6" suppressHydrationWarning>
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Solution Pillar 2
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Business Process Automation
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Eliminate repetitive work and reduce operational friction with intelligent automation that transforms how your business operates.
              </p>
              <div className="space-y-4 mb-8" suppressHydrationWarning>
                <div className="flex items-start" suppressHydrationWarning>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1" suppressHydrationWarning>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h4 className="font-semibold text-white mb-1">Workflow Automation</h4>
                    <p className="text-gray-400">Automate complex business processes from start to finish</p>
                  </div>
                </div>
                <div className="flex items-start" suppressHydrationWarning>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1" suppressHydrationWarning>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h4 className="font-semibold text-white mb-1">CRM Integrations</h4>
                    <p className="text-gray-400">Connect all your business tools for unified operations</p>
                  </div>
                </div>
                <div className="flex items-start" suppressHydrationWarning>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1" suppressHydrationWarning>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h4 className="font-semibold text-white mb-1">Process Optimization</h4>
                    <p className="text-gray-400">Redesign workflows for maximum efficiency and scalability</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                Explore Automation Opportunities →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical SEO & Digital Infrastructure */}
      <section id="technical-seo" className="py-20 bg-slate-900" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16" suppressHydrationWarning>
            <div suppressHydrationWarning>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-400 mb-6" suppressHydrationWarning>
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Solution Pillar 3
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Technical SEO & Digital Infrastructure
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Engineering-based growth optimization through technical audits, site architecture, performance optimization, and analytics systems.
              </p>
              <div className="space-y-4 mb-8" suppressHydrationWarning>
                <div className="flex items-start" suppressHydrationWarning>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1" suppressHydrationWarning>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h4 className="font-semibold text-white mb-1">Technical Audits</h4>
                    <p className="text-gray-400">Comprehensive analysis of your digital infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start" suppressHydrationWarning>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1" suppressHydrationWarning>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h4 className="font-semibold text-white mb-1">Site Architecture</h4>
                    <p className="text-gray-400">Optimized structure for search engines and user experience</p>
                  </div>
                </div>
                <div className="flex items-start" suppressHydrationWarning>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1" suppressHydrationWarning>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h4 className="font-semibold text-white mb-1">Conversion Tracking</h4>
                    <p className="text-gray-400">Measure and optimize every step of the customer journey</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                Optimize Your Digital Infrastructure →
              </Link>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-gray-700" suppressHydrationWarning>
              <h3 className="text-xl font-bold text-white mb-6">Infrastructure Services</h3>
              <div className="space-y-4" suppressHydrationWarning>
                <div className="p-4 bg-slate-700 rounded-lg" suppressHydrationWarning>
                  <h4 className="font-semibold text-blue-400 mb-2">🔍 Technical Audits</h4>
                  <p className="text-gray-300 text-sm">Deep analysis of technical performance and opportunities</p>
                </div>
                <div className="p-4 bg-slate-700 rounded-lg" suppressHydrationWarning>
                  <h4 className="font-semibold text-blue-400 mb-2">🏗️ Site Architecture</h4>
                  <p className="text-gray-300 text-sm">Scalable structures that support growth and search visibility</p>
                </div>
                <div className="p-4 bg-slate-700 rounded-lg" suppressHydrationWarning>
                  <h4 className="font-semibold text-blue-400 mb-2">⚡ Performance Optimization</h4>
                  <p className="text-gray-300 text-sm">Lightning-fast experiences that improve conversions</p>
                </div>
                <div className="p-4 bg-slate-700 rounded-lg" suppressHydrationWarning>
                  <h4 className="font-semibold text-blue-400 mb-2">📊 Analytics Systems</h4>
                  <p className="text-gray-300 text-sm">Comprehensive tracking and business intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto text-center px-4" suppressHydrationWarning>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business Systems?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Let's discuss how our engineering solutions can eliminate operational friction and accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" suppressHydrationWarning>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
            >
              📅 Book a Strategy Call
            </Link>
            
            <Link 
              href="/case-studies" 
              className="inline-flex items-center px-10 py-5 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              📊 View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
