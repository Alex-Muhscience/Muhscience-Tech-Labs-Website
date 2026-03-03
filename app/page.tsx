import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      {/* International SEO and Enterprise Meta Tags */}
      <Head>
        <title>Business Systems & Automation Engineering | Muhscience Tech Labs</title>
        <meta name="description" content="We Design and Automate Business Systems That Scale. Custom web platforms, business process automation, and technical SEO infrastructure for SMEs ready to operate efficiently and grow." />

        {/* Hreflang tags for international targeting */}
        <link rel="alternate" hrefLang="en" href="https://muhscience-tech-labs-website.vercel.app" />
        <link rel="alternate" hrefLang="en-KE" href="https://muhscience-tech-labs-website.vercel.app" />
        <link rel="alternate" hrefLang="en-UG" href="https://muhscience-tech-labs-website.vercel.app" />
        <link rel="alternate" hrefLang="en-TZ" href="https://muhscience-tech-labs-website.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://muhscience-tech-labs-website.vercel.app" />

        {/* Enterprise SEO Meta Tags */}
        <meta name="geo.region" content="KE-NBO" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921,36.8219" />
        <meta name="distribution" content="KE" />
        <meta name="country" content="Kenya" />
        <meta name="city" content="Nairobi" />
        <meta name="state" content="Nairobi County" />
        <meta name="zipcode" content="00100" />

        {/* Business Schema for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://muhscience-tech-labs-website.vercel.app#webpage",
              "url": "https://muhscience-tech-labs-website.vercel.app",
              "name": "Business Systems & Automation Engineering | Muhscience Tech Labs",
              "description": "We Design and Automate Business Systems That Scale. Custom web platforms, business process automation, and technical SEO infrastructure for SMEs ready to operate efficiently and grow.",
              "inLanguage": "en",
              "isPartOf": {
                "@id": "https://muhscience-tech-labs-website.vercel.app#website",
                "@type": "WebSite",
                "name": "Muhscience Tech Labs",
                "url": "https://muhscience-tech-labs-website.vercel.app"
              },
              "about": {
                "@id": "https://muhscience-tech-labs-website.vercel.app#organization",
                "@type": "Organization",
                "name": "Muhscience Tech Labs"
              },
              "mainEntity": {
                "@type": "ProfessionalService",
                "name": "Business Systems & Automation Engineering",
                "description": "Custom business systems, process automation, and technical SEO infrastructure for SMEs ready to operate efficiently and grow.",
                "provider": {
                  "@id": "https://muhscience-tech-labs-website.vercel.app#organization"
                }
              },
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://muhscience-tech-labs-website.vercel.app/contact?name={name}&company={company}&email={email}",
                  "inLanguage": "en"
                },
                "name": "Book Strategy Call",
                "description": "Schedule a free 30-minute strategy consultation with our systems architects"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen" suppressHydrationWarning>
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-br from-slate-900 to-slate-800" suppressHydrationWarning>
          <div className="max-w-4xl mx-auto" suppressHydrationWarning>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-400 mb-8" suppressHydrationWarning>
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              🏗️ Business Systems & Automation Engineering
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
              We Design and Automate Business Systems That <span className="text-blue-400">Scale</span>.
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Custom web platforms, business process automation, and technical SEO infrastructure for SMEs ready to operate efficiently and grow.
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
                View Case Studies
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

        {/* Core Solutions Section */}
        <section className="py-20 bg-slate-900" suppressHydrationWarning>
          <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
            <div className="text-center mb-16" suppressHydrationWarning>
              <h2 className="text-4xl font-bold mb-4 text-white">Engineering Solutions That Drive Growth</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Scalable systems, automated workflows, and optimized digital infrastructure built for SME efficiency.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" suppressHydrationWarning>
              <div className="bg-slate-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300" suppressHydrationWarning>
                <div className="text-4xl mb-4" suppressHydrationWarning>🌐</div>
                <h3 className="text-xl font-bold mb-4 text-white">Custom Business Web Platforms</h3>
                <p className="text-gray-400 mb-6">Corporate websites, client portals, admin dashboards, and internal operational systems designed for scalability and performance.</p>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li className="flex items-start"><span className="text-blue-400 mr-2">→</span> Scalable architecture</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-2">→</span> Performance optimization</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-2">→</span> Operational centralization</li>
                </ul>
                <Link href="/solutions#web-platforms" className="text-blue-400 font-semibold hover:text-blue-300">Explore Web Platforms →</Link>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300" suppressHydrationWarning>
                <div className="text-4xl mb-4" suppressHydrationWarning>⚡</div>
                <h3 className="text-xl font-bold mb-4 text-white">Business Process Automation</h3>
                <p className="text-gray-400 mb-6">Workflow automation, CRM integrations, reporting systems, and internal process optimization to eliminate repetitive work.</p>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li className="flex items-start"><span className="text-blue-400 mr-2">→</span> Workflow automation</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-2">→</span> CRM integrations</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-2">→</span> Process optimization</li>
                </ul>
                <Link href="/solutions#process-automation" className="text-blue-400 font-semibold hover:text-blue-300">Explore Automation →</Link>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300" suppressHydrationWarning>
                <div className="text-4xl mb-4" suppressHydrationWarning>�</div>
                <h3 className="text-xl font-bold mb-4 text-white">Technical SEO & Digital Infrastructure</h3>
                <p className="text-gray-400 mb-6">Technical audits, site architecture, performance optimization, and analytics systems for engineering-based growth optimization.</p>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li className="flex items-start"><span className="text-blue-400 mr-2">→</span> Technical audits</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-2">→</span> Site architecture</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-2">→</span> Conversion tracking</li>
                </ul>
                <Link href="/solutions#technical-seo" className="text-blue-400 font-semibold hover:text-blue-300">Explore Technical SEO →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Growing Organizations Section */}
        <section className="py-20 bg-slate-800" suppressHydrationWarning>
          <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
            <div className="text-center mb-16" suppressHydrationWarning>
              <h2 className="text-4xl font-bold mb-4 text-white">Trusted By Growing Organizations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">We architect and manage full digital infrastructure including web systems, automation workflows, and search performance optimization.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8" suppressHydrationWarning>
              <div className="bg-slate-900 p-8 rounded-xl border border-gray-700" suppressHydrationWarning>
                <div className="flex items-start mb-6" suppressHydrationWarning>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4" suppressHydrationWarning>
                    <span className="text-blue-400 font-bold text-lg">CP</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h3 className="text-xl font-bold text-white mb-2">Chania Publishers Limited</h3>
                    <p className="text-gray-400 text-sm mb-4">Leading Publishing & Media Company</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Architected comprehensive digital infrastructure including custom content management system, automated publishing workflows, and performance optimization that reduced page load times by 65%.
                </p>
                <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Web Platform</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Process Automation</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Performance</span>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-xl border border-gray-700" suppressHydrationWarning>
                <div className="flex items-start mb-6" suppressHydrationWarning>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4" suppressHydrationWarning>
                    <span className="text-blue-400 font-bold text-lg">EC</span>
                  </div>
                  <div suppressHydrationWarning>
                    <h3 className="text-xl font-bold text-white mb-2">EuroAfrique Corporate Skills</h3>
                    <p className="text-gray-400 text-sm mb-4">Professional Training & Development</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Designed and implemented integrated learning management system with automated enrollment, progress tracking, and reporting systems that increased operational efficiency by 45%.
                </p>
                <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">CRM Integration</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Automation</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-20 bg-slate-900" suppressHydrationWarning>
          <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
            <div className="grid lg:grid-cols-2 gap-12 items-center" suppressHydrationWarning>
              <div suppressHydrationWarning>
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-400 mb-6" suppressHydrationWarning>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  About Muhscience Tech Labs
                </div>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Engineering Business Systems for Growth-Focused SMEs
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We specialize in designing and implementing custom business systems that eliminate operational friction and enable scalable growth. From web platforms to automated workflows, we build the digital infrastructure that powers efficient operations.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our approach combines systems thinking with technical excellence to deliver solutions that not only solve today's challenges but scale with tomorrow's ambitions.
                </p>
                <div className="grid grid-cols-2 gap-6" suppressHydrationWarning>
                  <div className="text-center p-4 bg-slate-800 rounded-lg border border-gray-700" suppressHydrationWarning>
                    <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
                    <div className="text-sm text-gray-400">Systems Deployed</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800 rounded-lg border border-gray-700" suppressHydrationWarning>
                    <div className="text-2xl font-bold text-blue-400 mb-1">98%</div>
                    <div className="text-sm text-gray-400">Client Retention</div>
                  </div>
                </div>
              </div>
              <div className="relative" suppressHydrationWarning>
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white" suppressHydrationWarning>
                  <h3 className="text-2xl font-bold mb-6">Our Engineering Philosophy</h3>
                  <div className="space-y-4" suppressHydrationWarning>
                    <div className="flex items-start" suppressHydrationWarning>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1" suppressHydrationWarning>
                        <span className="text-sm font-bold">🏗️</span>
                      </div>
                      <div suppressHydrationWarning>
                        <h4 className="font-semibold mb-1">Systems First</h4>
                        <p className="text-white/80 text-sm">Every solution is engineered as part of an integrated system, not as isolated components.</p>
                      </div>
                    </div>
                    <div className="flex items-start" suppressHydrationWarning>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1" suppressHydrationWarning>
                        <span className="text-sm font-bold">⚡</span>
                      </div>
                      <div suppressHydrationWarning>
                        <h4 className="font-semibold mb-1">Automation Driven</h4>
                        <p className="text-white/80 text-sm">Eliminate repetitive tasks and optimize workflows for maximum efficiency.</p>
                      </div>
                    </div>
                    <div className="flex items-start" suppressHydrationWarning>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1" suppressHydrationWarning>
                        <span className="text-sm font-bold">📈</span>
                      </div>
                      <div suppressHydrationWarning>
                        <h4 className="font-semibold mb-1">Growth Focused</h4>
                        <p className="text-white/80 text-sm">Build systems that scale with your business ambitions and market demands.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Case Studies Section */}
        <section className="py-20 bg-slate-800" suppressHydrationWarning>
          <div className="max-w-6xl mx-auto px-4" suppressHydrationWarning>
            <div className="text-center mb-16" suppressHydrationWarning>
              <h2 className="text-4xl font-bold mb-4 text-white">Business Transformation Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Real-world results from implementing custom business systems and automation solutions.</p>
            </div>

            <div className="space-y-12" suppressHydrationWarning>
              {/* Case Study 1 */}
              <div className="bg-slate-900 rounded-2xl border border-gray-700 overflow-hidden" suppressHydrationWarning>
                <div className="p-8" suppressHydrationWarning>
                  <div className="flex items-start justify-between mb-6" suppressHydrationWarning>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Publishing Workflow Automation</h3>
                      <p className="text-gray-400">Chania Publishers Limited</p>
                    </div>
                    <div className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium">
                      65% Efficiency Gain
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6" suppressHydrationWarning>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Problem</h4>
                      <p className="text-gray-300">Manual publishing processes causing delays, inconsistent quality, and high operational costs with no real-time tracking.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Strategy</h4>
                      <p className="text-gray-300">Design integrated content management system with automated workflow orchestration and real-time analytics dashboard.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6" suppressHydrationWarning>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Implementation</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Custom CMS with automated approval workflows</li>
                        <li>• Integration with existing distribution channels</li>
                        <li>• Real-time progress tracking and reporting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Results</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• 65% reduction in publishing time</li>
                        <li>• 45% decrease in operational costs</li>
                        <li>• 100% improvement in process visibility</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Custom CMS</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Workflow Automation</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Analytics Dashboard</span>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-slate-900 rounded-2xl border border-gray-700 overflow-hidden" suppressHydrationWarning>
                <div className="p-8" suppressHydrationWarning>
                  <div className="flex items-start justify-between mb-6" suppressHydrationWarning>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Learning Management System Integration</h3>
                      <p className="text-gray-400">EuroAfrique Corporate Skills</p>
                    </div>
                    <div className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium">
                      45% Growth in Enrollment
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6" suppressHydrationWarning>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Problem</h4>
                      <p className="text-gray-300">Disconnected training systems, manual enrollment processes, and no centralized tracking of learner progress or business metrics.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Strategy</h4>
                      <p className="text-gray-300">Build integrated learning ecosystem with automated CRM integration, progress tracking, and business intelligence reporting.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6" suppressHydrationWarning>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Implementation</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Custom LMS with automated enrollment</li>
                        <li>• CRM integration for lead management</li>
                        <li>• Advanced analytics and reporting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Results</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• 45% increase in student enrollment</li>
                        <li>• 70% reduction in administrative overhead</li>
                        <li>• Real-time business intelligence</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">LMS Development</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">CRM Integration</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Business Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12" suppressHydrationWarning>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white" suppressHydrationWarning>
          <div className="max-w-4xl mx-auto text-center px-4" suppressHydrationWarning>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Engineer Your Business Systems?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join growth-focused SMEs that trust us to design, automate, and optimize their digital infrastructure for scalable success.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" suppressHydrationWarning>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                � Book a Strategy Call
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center px-10 py-5 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                � View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
