import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-white to-brand-bg/50" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto" suppressHydrationWarning>
          <div className="inline-flex items-center px-4 py-2 bg-brand-teal/10 rounded-full text-sm font-medium text-brand-navy mb-8" suppressHydrationWarning>
            <span className="w-2 h-2 bg-brand-teal rounded-full mr-2"></span>
            🚀 Leading Cybersecurity & Tech Innovation in East Africa
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-brand-charcoal">
            Secure. Scale. <span className="text-brand-teal">Innovate</span>.
          </h1>
          
          <p className="text-xl text-brand-charcoal/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge cybersecurity, cloud solutions, and AI-powered innovations. 
            Trusted by 200+ companies across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" suppressHydrationWarning>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-teal text-white rounded-xl font-semibold text-lg hover:from-brand-navy/90 hover:to-brand-teal/90 transition-all duration-300 shadow-lg"
            >
              Start Your Digital Transformation
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-brand-orange text-brand-orange rounded-xl font-semibold text-lg hover:bg-brand-orange hover:text-white transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" suppressHydrationWarning>
            <div className="p-4" suppressHydrationWarning>
              <div className="text-4xl font-bold text-brand-navy mb-2" suppressHydrationWarning>200+</div>
              <div className="text-sm text-brand-charcoal font-medium" suppressHydrationWarning>Happy Clients</div>
            </div>
            <div className="p-4" suppressHydrationWarning>
              <div className="text-4xl font-bold text-brand-teal mb-2" suppressHydrationWarning>500+</div>
              <div className="text-sm text-brand-charcoal font-medium" suppressHydrationWarning>Projects Delivered</div>
            </div>
            <div className="p-4" suppressHydrationWarning>
              <div className="text-4xl font-bold text-brand-orange mb-2" suppressHydrationWarning>10+</div>
              <div className="text-sm text-brand-charcoal font-medium" suppressHydrationWarning>Years Experience</div>
            </div>
            <div className="p-4" suppressHydrationWarning>
              <div className="text-4xl font-bold text-brand-teal mb-2" suppressHydrationWarning>25+</div>
              <div className="text-sm text-brand-charcoal font-medium" suppressHydrationWarning>Expert Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="text-center mb-16" suppressHydrationWarning>
            <h2 className="text-4xl font-bold mb-4 text-brand-charcoal">Our Core Services</h2>
            <p className="text-xl text-brand-charcoal/80 max-w-3xl mx-auto">Comprehensive technology solutions designed to protect, optimize, and transform your business operations.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" suppressHydrationWarning>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" suppressHydrationWarning>
              <div className="text-4xl mb-4" suppressHydrationWarning>🛡️</div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Cybersecurity</h3>
              <p className="text-brand-charcoal/70 mb-4">Comprehensive security solutions including penetration testing, vulnerability assessments, and 24/7 SOC monitoring.</p>
              <Link href="/services" className="text-brand-teal font-semibold hover:text-brand-navy">Learn More →</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" suppressHydrationWarning>
              <div className="text-4xl mb-4" suppressHydrationWarning>☁️</div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Cloud Solutions</h3>
              <p className="text-brand-charcoal/70 mb-4">Scalable cloud infrastructure, migration services, and multi-cloud management on AWS, Azure, and Google Cloud.</p>
              <Link href="/services" className="text-brand-teal font-semibold hover:text-brand-navy">Learn More →</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" suppressHydrationWarning>
              <div className="text-4xl mb-4" suppressHydrationWarning>🤖</div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">AI & Machine Learning</h3>
              <p className="text-brand-charcoal/70 mb-4">Intelligent automation, predictive analytics, and custom AI solutions to drive business innovation.</p>
              <Link href="/services" className="text-brand-teal font-semibold hover:text-brand-navy">Learn More →</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" suppressHydrationWarning>
              <div className="text-4xl mb-4" suppressHydrationWarning>💻</div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Software Development</h3>
              <p className="text-brand-charcoal/70 mb-4">Custom web and mobile applications built with modern frameworks and best practices.</p>
              <Link href="/services" className="text-brand-teal font-semibold hover:text-brand-navy">Learn More →</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" suppressHydrationWarning>
              <div className="text-4xl mb-4" suppressHydrationWarning>📊</div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Data Analytics</h3>
              <p className="text-brand-charcoal/70 mb-4">Business intelligence, data warehousing, and advanced analytics to drive data-driven decisions.</p>
              <Link href="/services" className="text-brand-teal font-semibold hover:text-brand-navy">Learn More →</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" suppressHydrationWarning>
              <div className="text-4xl mb-4" suppressHydrationWarning>🎓</div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Training & Consulting</h3>
              <p className="text-brand-charcoal/70 mb-4">Professional training programs and strategic consulting to build internal capabilities.</p>
              <Link href="/services" className="text-brand-teal font-semibold hover:text-brand-navy">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-brand-bg/30" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="text-center mb-16" suppressHydrationWarning>
            <h2 className="text-4xl font-bold mb-4 text-brand-charcoal">Why Choose Muhscience Tech Labs?</h2>
            <p className="text-xl text-brand-charcoal/80 max-w-3xl mx-auto">We combine deep technical expertise with a proven track record of delivering secure, scalable, and innovative solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" suppressHydrationWarning>
            <div className="text-center p-6" suppressHydrationWarning>
              <div className="w-16 h-16 bg-gradient-to-r from-brand-navy to-brand-teal rounded-full flex items-center justify-center mx-auto mb-4" suppressHydrationWarning>
                <span className="text-white text-2xl font-bold">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Uncompromising Security</h3>
              <p className="text-brand-charcoal/70">Zero-breach track record with ISO 27001 certification and military-grade security protocols.</p>
            </div>
            
            <div className="text-center p-6" suppressHydrationWarning>
              <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-orange rounded-full flex items-center justify-center mx-auto mb-4" suppressHydrationWarning>
                <span className="text-white text-2xl font-bold">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Expert Team</h3>
              <p className="text-brand-charcoal/70">25+ certified professionals with expertise across cybersecurity, cloud, AI/ML, and software development.</p>
            </div>
            
            <div className="text-center p-6" suppressHydrationWarning>
              <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-navy rounded-full flex items-center justify-center mx-auto mb-4" suppressHydrationWarning>
                <span className="text-white text-2xl font-bold">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Proven Results</h3>
              <p className="text-brand-charcoal/70">500+ successful projects across East Africa with 99.9% uptime guarantee and measurable ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-teal text-white" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto text-center px-4" suppressHydrationWarning>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 200+ companies that trust Muhscience Tech Labs for their cybersecurity, 
            cloud infrastructure, and digital innovation needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" suppressHydrationWarning>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-10 py-5 bg-white text-brand-navy rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
            >
              📞 Schedule Free Consultation
            </Link>
            
            <Link 
              href="/projects" 
              className="inline-flex items-center px-10 py-5 border-2 border-brand-orange text-brand-orange rounded-xl font-bold text-lg hover:bg-brand-orange hover:text-white transition-all duration-300"
            >
              📁 View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
