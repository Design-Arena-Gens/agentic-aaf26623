'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                TubeAI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition">Testimonials</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
              <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
                Start Free Trial
              </button>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">Testimonials</a>
              <a href="#faq" className="block text-gray-600 hover:text-gray-900">FAQ</a>
              <button className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span>
            Join 10,000+ creators growing faster with AI
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Grow Your YouTube Channel
            <span className="block bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              10x Faster with AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Automate your entire YouTube workflow. From video optimization to analytics, TubeAI handles everything so you can focus on creating great content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition">
              Start Free 14-Day Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:border-gray-400 transition">
              Watch Demo
            </button>
          </div>
          <p className="text-gray-500 text-sm">No credit card required • Cancel anytime • 2-minute setup</p>

          {/* Hero Image/Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">5M+</div>
              <div className="text-gray-600">Videos Optimized</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">20hrs</div>
              <div className="text-gray-600">Saved Per Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Complete YouTube Automation Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop wasting time on repetitive tasks. Let AI handle the heavy lifting while you focus on what matters—creating amazing content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-purple-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Save 20+ Hours Weekly</h3>
              <p className="text-gray-600">Automate uploads, optimization, and scheduling. Get your time back for content creation.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-red-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Boost Views by 300%</h3>
              <p className="text-gray-600">AI-powered optimization ensures your videos rank higher and reach more viewers.</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-purple-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Learning Curve</h3>
              <p className="text-gray-600">Plug-and-play automation. Set it up in 2 minutes and let AI do the work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Dominate YouTube
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete suite of AI-powered tools designed to automate every aspect of your YouTube workflow.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 1
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI Video Optimization</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI analyzes your video content and generates SEO-optimized titles, descriptions, and tags that rank. Boost your discoverability and get found by the right audience.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Automatic keyword research and targeting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Competitor analysis and trend detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Perfect title and description generation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <div className="text-gray-700 font-semibold">AI-Powered SEO Engine</div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 2
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI Thumbnail Generation</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Create click-worthy thumbnails that convert viewers in seconds. Our AI designs eye-catching thumbnails proven to increase click-through rates by up to 400%.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Auto-generate stunning designs from video frames</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">A/B testing to find the highest performing thumbnail</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Custom branding and style templates</span>
                  </li>
                </ul>
              </div>
              <div className="md:order-1 bg-gradient-to-br from-purple-100 to-red-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <div className="text-gray-700 font-semibold">Smart Thumbnail Creator</div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 3
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Automated Uploading</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Schedule and upload videos automatically at optimal times. Our AI determines the best posting schedule for maximum engagement and views.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Bulk upload and schedule weeks of content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">AI-optimized posting times for your audience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Automatic playlist organization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <div className="text-gray-700 font-semibold">Set It & Forget It</div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 4
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Smart Scheduling</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Plan your content calendar months in advance. Our AI suggests optimal upload frequencies and times based on your audience behavior and analytics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Visual content calendar with drag-and-drop</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Multi-channel publishing (YouTube, TikTok, Instagram)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Timezone-aware scheduling for global audiences</span>
                  </li>
                </ul>
              </div>
              <div className="md:order-1 bg-gradient-to-br from-purple-100 to-red-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📅</div>
                  <div className="text-gray-700 font-semibold">Intelligent Calendar</div>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 5
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Get actionable insights with AI-powered analytics. Understand what's working, what's not, and get personalized recommendations to grow faster.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Real-time performance tracking and alerts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">AI-generated growth recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Competitor benchmarking and trend analysis</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="text-gray-700 font-semibold">Data-Driven Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your channel. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for new creators</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition mb-6">
                Start Free Trial
              </button>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Up to 50 videos/month</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI video optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Thumbnail generation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-red-600 to-purple-600 rounded-2xl p-8 text-white relative transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-white/90 mb-6">For growing channels</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$79</span>
                <span className="text-white/90">/month</span>
              </div>
              <button className="w-full bg-white text-red-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition mb-6">
                Start Free Trial
              </button>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited videos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated uploading</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smart scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For agencies & teams</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$199</span>
                <span className="text-gray-600">/month</span>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition mb-6">
                Start Free Trial
              </button>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Manage 10+ channels</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Team collaboration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">White-label options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by 10,000+ Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what successful YouTubers are saying about TubeAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "TubeAI completely transformed my workflow. I went from spending 10 hours a week on uploads to just 30 minutes. My views are up 350% in just 3 months!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-purple-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-600 text-sm">Tech Review Channel • 450K Subs</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The AI thumbnail generator alone is worth the price. My click-through rate doubled overnight. This tool pays for itself 10x over."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-red-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-900">Marcus Chen</div>
                  <div className="text-gray-600 text-sm">Gaming Channel • 1.2M Subs</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "I manage 5 YouTube channels for clients. TubeAI saves me 100+ hours every month. The ROI is absolutely insane. Best investment I've made."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-purple-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-900">Emily Rodriguez</div>
                  <div className="text-gray-600 text-sm">Agency Owner • 3M+ Total Subs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about TubeAI
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How does the free trial work?</h3>
              <p className="text-gray-600">
                Start your 14-day free trial with full access to all Pro features. No credit card required. If you love it, choose a plan after your trial ends. Cancel anytime, no questions asked.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is my YouTube account safe?</h3>
              <p className="text-gray-600">
                Absolutely. TubeAI uses official YouTube APIs and follows all of YouTube's terms of service. We use bank-level encryption and never store your password. Trusted by 10,000+ creators.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How long does setup take?</h3>
              <p className="text-gray-600">
                Less than 2 minutes. Simply connect your YouTube account, and TubeAI handles the rest. No technical knowledge required. Start automating your channel immediately.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes! Cancel your subscription anytime with one click. No contracts, no commitments. You'll retain access until the end of your billing period.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What if I need help?</h3>
              <p className="text-gray-600">
                We offer email support for all plans, priority support for Pro users, and dedicated account managers for Enterprise. Plus, access our comprehensive knowledge base and video tutorials 24/7.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                Yes. If you're not satisfied within the first 30 days, we'll give you a full refund—no questions asked. We're confident TubeAI will transform your channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to 10x Your YouTube Growth?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Join 10,000+ creators who are growing faster with AI automation. Start your free trial today—no credit card required.
          </p>
          <button className="bg-white text-red-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition shadow-2xl mb-6">
            Start Free 14-Day Trial
          </button>
          <p className="text-white/80">
            No credit card required • 2-minute setup • Cancel anytime
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">⚡</div>
              <div className="font-semibold mb-1">Save 20+ Hours Weekly</div>
              <div className="text-sm text-white/80">Automate everything</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📈</div>
              <div className="font-semibold mb-1">300% More Views</div>
              <div className="text-sm text-white/80">AI-powered optimization</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🎯</div>
              <div className="font-semibold mb-1">2-Minute Setup</div>
              <div className="text-sm text-white/80">Start immediately</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                TubeAI
              </span>
              <p className="text-gray-400 mt-4">
                Automate your YouTube workflow and grow 10x faster with AI.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Demo</a></li>
                <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TubeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
