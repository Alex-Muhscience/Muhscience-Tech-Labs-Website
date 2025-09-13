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

      {/* Company Overview Section */}
      <section className="py-20 bg-gradient-to-br from-brand-bg/50 to-white" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="grid lg:grid-cols-2 gap-12 items-center" suppressHydrationWarning>
            <div suppressHydrationWarning>
              <div className="inline-flex items-center px-4 py-2 bg-brand-teal/10 rounded-full text-sm font-medium text-brand-navy mb-6" suppressHydrationWarning>
                <span className="w-2 h-2 bg-brand-teal rounded-full mr-2"></span>
                About Muhscience Tech Labs
              </div>
              <h2 className="text-4xl font-bold mb-6 text-brand-charcoal">
                Leading East Africa's Digital Transformation
              </h2>
              <p className="text-lg text-brand-charcoal/80 mb-6 leading-relaxed">
                Founded in 2014, Muhscience Tech Labs has emerged as East Africa's premier cybersecurity and technology innovation company. We specialize in protecting businesses from cyber threats while enabling digital transformation through cutting-edge cloud, AI, and software solutions.
              </p>
              <p className="text-lg text-brand-charcoal/80 mb-8 leading-relaxed">
                Our mission is to make advanced cybersecurity and technology accessible to businesses of all sizes, helping them compete globally while staying secure locally.
              </p>
              <div className="grid grid-cols-2 gap-6" suppressHydrationWarning>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm" suppressHydrationWarning>
                  <div className="text-2xl font-bold text-brand-navy mb-1">ISO 27001</div>
                  <div className="text-sm text-brand-charcoal/70">Certified</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm" suppressHydrationWarning>
                  <div className="text-2xl font-bold text-brand-teal mb-1">24/7</div>
                  <div className="text-sm text-brand-charcoal/70">SOC Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative" suppressHydrationWarning>
              <div className="bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl p-8 text-white" suppressHydrationWarning>
                <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
                <div className="space-y-4" suppressHydrationWarning>
                  <div className="flex items-start" suppressHydrationWarning>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1" suppressHydrationWarning>
                      <span className="text-sm font-bold">🔒</span>
                    </div>
                    <div suppressHydrationWarning>
                      <h4 className="font-semibold mb-1">Security First</h4>
                      <p className="text-white/80 text-sm">Every solution is built with security as the foundation, not an afterthought.</p>
                    </div>
                  </div>
                  <div className="flex items-start" suppressHydrationWarning>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1" suppressHydrationWarning>
                      <span className="text-sm font-bold">🚀</span>
                    </div>
                    <div suppressHydrationWarning>
                      <h4 className="font-semibold mb-1">Innovation</h4>
                      <p className="text-white/80 text-sm">Leveraging cutting-edge technology to solve complex business challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start" suppressHydrationWarning>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1" suppressHydrationWarning>
                      <span className="text-sm font-bold">🤝</span>
                    </div>
                    <div suppressHydrationWarning>
                      <h4 className="font-semibold mb-1">Partnership</h4>
                      <p className="text-white/80 text-sm">Building long-term relationships based on trust and measurable results.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 bg-white" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="text-center mb-16" suppressHydrationWarning>
            <h2 className="text-4xl font-bold mb-4 text-brand-charcoal">Industries We Serve</h2>
            <p className="text-xl text-brand-charcoal/80 max-w-3xl mx-auto">Deep expertise across critical sectors with tailored security and technology solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" suppressHydrationWarning>
            <div className="text-center p-6 bg-brand-bg/30 rounded-xl hover:bg-brand-bg/50 transition-colors" suppressHydrationWarning>
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="font-bold text-brand-charcoal mb-2">Financial Services</h3>
              <p className="text-sm text-brand-charcoal/70">Banks, fintech, insurance companies</p>
            </div>
            <div className="text-center p-6 bg-brand-bg/30 rounded-xl hover:bg-brand-bg/50 transition-colors" suppressHydrationWarning>
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-bold text-brand-charcoal mb-2">Healthcare</h3>
              <p className="text-sm text-brand-charcoal/70">Hospitals, clinics, health tech</p>
            </div>
            <div className="text-center p-6 bg-brand-bg/30 rounded-xl hover:bg-brand-bg/50 transition-colors" suppressHydrationWarning>
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="font-bold text-brand-charcoal mb-2">Government</h3>
              <p className="text-sm text-brand-charcoal/70">Public sector, municipalities</p>
            </div>
            <div className="text-center p-6 bg-brand-bg/30 rounded-xl hover:bg-brand-bg/50 transition-colors" suppressHydrationWarning>
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="font-bold text-brand-charcoal mb-2">Manufacturing</h3>
              <p className="text-sm text-brand-charcoal/70">Industrial, automotive, logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-brand-bg/30" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="text-center mb-16" suppressHydrationWarning>
            <h2 className="text-4xl font-bold mb-4 text-brand-charcoal">What Our Clients Say</h2>
            <p className="text-xl text-brand-charcoal/80 max-w-3xl mx-auto">Trusted by leading organizations across East Africa for mission-critical security and technology solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" suppressHydrationWarning>
            <div className="bg-white p-8 rounded-xl shadow-lg" suppressHydrationWarning>
              <div className="flex items-center mb-4" suppressHydrationWarning>
                <div className="flex text-brand-orange" suppressHydrationWarning>
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
              </div>
              <p className="text-brand-charcoal/80 mb-6 italic">
                "Muhscience Tech Labs transformed our cybersecurity posture completely. Their 24/7 SOC monitoring has prevented multiple attacks, and their team's expertise is unmatched in the region."
              </p>
              <div className="flex items-center" suppressHydrationWarning>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-navy to-brand-teal rounded-full flex items-center justify-center mr-4" suppressHydrationWarning>
                  <span className="text-white font-bold text-sm">JM</span>
                </div>
                <div suppressHydrationWarning>
                  <div className="font-semibold text-brand-charcoal">John Mwangi</div>
                  <div className="text-sm text-brand-charcoal/70">CTO, East Africa Bank</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" suppressHydrationWarning>
              <div className="flex items-center mb-4" suppressHydrationWarning>
                <div className="flex text-brand-orange" suppressHydrationWarning>
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
              </div>
              <p className="text-brand-charcoal/80 mb-6 italic">
                "Their cloud migration strategy saved us 40% on infrastructure costs while improving our security. The AI-powered analytics they implemented have revolutionized our decision-making."
              </p>
              <div className="flex items-center" suppressHydrationWarning>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-orange rounded-full flex items-center justify-center mr-4" suppressHydrationWarning>
                  <span className="text-white font-bold text-sm">AK</span>
                </div>
                <div suppressHydrationWarning>
                  <div className="font-semibold text-brand-charcoal">Amina Kone</div>
                  <div className="text-sm text-brand-charcoal/70">CEO, HealthTech Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" suppressHydrationWarning>
              <div className="flex items-center mb-4" suppressHydrationWarning>
                <div className="flex text-brand-orange" suppressHydrationWarning>
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
              </div>
              <p className="text-brand-charcoal/80 mb-6 italic">
                "Outstanding penetration testing services. They identified vulnerabilities we didn't know existed and provided clear, actionable remediation plans. True security experts."
              </p>
              <div className="flex items-center" suppressHydrationWarning>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-navy rounded-full flex items-center justify-center mr-4" suppressHydrationWarning>
                  <span className="text-white font-bold text-sm">DR</span>
                </div>
                <div suppressHydrationWarning>
                  <div className="font-semibold text-brand-charcoal">David Ruto</div>
                  <div className="text-sm text-brand-charcoal/70">IT Director, Manufacturing Corp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships Section */}
      <section className="py-20 bg-white" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="text-center mb-16" suppressHydrationWarning>
            <h2 className="text-4xl font-bold mb-4 text-brand-charcoal">Certifications & Partnerships</h2>
            <p className="text-xl text-brand-charcoal/80 max-w-3xl mx-auto">Recognized expertise and strategic partnerships with leading technology providers.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" suppressHydrationWarning>
            <div className="text-center p-6 bg-brand-bg/20 rounded-xl" suppressHydrationWarning>
              <div className="w-16 h-16 bg-gradient-to-r from-brand-navy to-brand-teal rounded-full flex items-center justify-center mx-auto mb-4" suppressHydrationWarning>
                <span className="text-white font-bold text-lg">ISO</span>
              </div>
              <h3 className="font-bold text-brand-charcoal mb-2">ISO 27001:2013</h3>
              <p className="text-sm text-brand-charcoal/70">Information Security Management</p>
            </div>
            
            <div className="text-center p-6 bg-brand-bg/20 rounded-xl" suppressHydrationWarning>
              <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-orange rounded-full flex items-center justify-center mx-auto mb-4" suppressHydrationWarning>
                <span className="text-white font-bold text-lg">AWS</span>
              </div>
              <h3 className="font-bold text-brand-charcoal mb-2">AWS Partner</h3>
              <p className="text-sm text-brand-charcoal/70">Advanced Consulting Partner</p>
            </div>
            
            <div className="text-center p-6 bg-brand-bg/20 rounded-xl" suppressHydrationWarning>
              <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-navy rounded-full flex items-center justify-center mx-auto mb-4" suppressHydrationWarning>
                <span className="text-white font-bold text-lg">MS</span>
              </div>
              <h3 className="font-bold text-brand-charcoal mb-2">Microsoft Partner</h3>
              <p className="text-sm text-brand-charcoal/70">Gold Cloud Platform</p>
            </div>
            
            <div className="text-center p-6 bg-brand-bg/20 rounded-xl" suppressHydrationWarning>
              <div className="w-16 h-16 bg-gradient-to-r from-brand-navy to-brand-teal rounded-full flex items-center justify-center mx-auto mb-4" suppressHydrationWarning>
                <span className="text-white font-bold text-lg">GCP</span>
              </div>
              <h3 className="font-bold text-brand-charcoal mb-2">Google Cloud</h3>
              <p className="text-sm text-brand-charcoal/70">Premier Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-brand-bg/30" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
          <div className="text-center mb-16" suppressHydrationWarning>
            <h2 className="text-4xl font-bold mb-4 text-brand-charcoal">Recent Success Stories</h2>
            <p className="text-xl text-brand-charcoal/80 max-w-3xl mx-auto">Delivering measurable results across diverse industries and complex challenges.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" suppressHydrationWarning>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow" suppressHydrationWarning>
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Banking Security Overhaul</h3>
              <p className="text-brand-charcoal/70 mb-4">Implemented comprehensive cybersecurity framework for major East African bank, including 24/7 SOC, penetration testing, and compliance management.</p>
              <div className="flex items-center justify-between text-sm" suppressHydrationWarning>
                <span className="text-brand-teal font-semibold">Financial Services</span>
                <span className="text-brand-charcoal/60">2024</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow" suppressHydrationWarning>
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">Multi-Cloud Migration</h3>
              <p className="text-brand-charcoal/70 mb-4">Migrated healthcare provider's infrastructure to hybrid multi-cloud environment, reducing costs by 40% while improving security and scalability.</p>
              <div className="flex items-center justify-between text-sm" suppressHydrationWarning>
                <span className="text-brand-teal font-semibold">Healthcare</span>
                <span className="text-brand-charcoal/60">2024</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow" suppressHydrationWarning>
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-4 text-brand-charcoal">AI-Powered Analytics</h3>
              <p className="text-brand-charcoal/70 mb-4">Developed custom AI solution for manufacturing company to predict equipment failures, reducing downtime by 60% and maintenance costs by 35%.</p>
              <div className="flex items-center justify-between text-sm" suppressHydrationWarning>
                <span className="text-brand-teal font-semibold">Manufacturing</span>
                <span className="text-brand-charcoal/60">2023</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12" suppressHydrationWarning>
            <Link 
              href="/projects" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-teal text-white rounded-xl font-semibold hover:from-brand-navy/90 hover:to-brand-teal/90 transition-all duration-300"
            >
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" suppressHydrationWarning>
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
