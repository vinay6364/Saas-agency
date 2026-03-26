
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { ArrowRight, Bot, Zap, LineChart, Globe, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
        <div className="absolute inset-0 bg-darker -z-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen -z-10" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 z-10 pt-20">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Next-Gen SaaS Agency
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-50">
            Turn Your Visitors Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              High-Paying Clients
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We build AI-powered websites, smart chatbots, and automated lead generation systems that work 24/7 to grow your business. Stop chasing leads; let them come to you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="w-full sm:w-auto group">
              Book Your Free Strategy
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Case Studies
            </Button>
          </div>
        </div>
        
        {/* Social Proof Logos */}
        <div className="mt-24 w-full max-w-5xl opacity-50 grayscale flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-xl font-bold">IronGrip Gym</div>
          <div className="text-xl font-bold">MediSpa Clinic</div>
          <div className="text-xl font-bold">SolarTech</div>
          <div className="text-xl font-bold">Apex Realty</div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 px-4 bg-darker w-full flex justify-center">
        <div className="max-w-6xl w-full space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-50">Systems Built for Revenue. <br/>Not Just Looks.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Stop relying on outdated WordPress sites. We implement full-stack growth systems that automate your sales process.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-800 bg-slate-900/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <CardTitle>AI-Driven Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Beautiful, fast, and optimized for one metric: Conversion. We craft digital experiences that make your brand undeniable and route visitors straight to your calendar.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <CardTitle>24/7 AI Chatbots</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Never miss a late-night inquiry. Our custom 'Clawbot-style' agents qualify leads and book appointments while you sleep. Completely trained on your business data.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-500 mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <CardTitle>Full-Stack Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">From the first click to the final sale, we automate your follow-ups, emails, and lead nurturing so your pipeline stays full without lifting a finger.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES SECTION */}
      <section id="case-studies" className="py-24 px-4 relative overflow-hidden flex justify-center border-t border-slate-800">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="max-w-6xl w-full">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-50">Proven Results</h2>
            <p className="text-slate-400 mt-4 text-lg">See how we transform local businesses into lead-generating machines.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400 border border-green-500/20">
                +310% Lead Increase
              </div>
              <h3 className="text-2xl md:text-4xl font-bold">IronGrip Gym: From empty classes to waitlisted in 45 days.</h3>
              <p className="text-slate-400 text-lg">We replaced their static site with an automated booking funnel and a 24/7 AI receptionist. Now, trial classes fill up while the owner sleeps.</p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Reduced admin time by 20 hrs/week</li>
                <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> 45 new automated bookings per month</li>
                <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> 100% automated follow-up sequence</li>
              </ul>
              <Button className="mt-4">Read Full Case Study</Button>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-video rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/20">
                <LineChart className="w-24 h-24 text-primary opacity-50" />
                <div className="absolute bottom-4 right-4 bg-darker/90 backdrop-blur border border-slate-700 p-4 rounded-lg">
                  <div className="text-sm text-slate-400">Monthly Bookings</div>
                  <div className="text-2xl font-bold text-white flex items-center">
                    124 <span className="text-green-500 text-sm ml-2.5 flex items-center">↑ 310%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTION */}
      <section id="pricing" className="py-24 px-4 bg-darker flex justify-center">
        <div className="max-w-6xl w-full space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-50">Growth Systems Scaled for You</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">No bloated retainer fees. Just pure, targeted performance.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-slate-700 bg-slate-900 relative overflow-hidden flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Growth Core</CardTitle>
                <CardDescription>Perfect for small businesses starting out.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$497</span>
                  <span className="text-slate-400"> / month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 mt-4">
                  <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> High-converting landing page</li>
                  <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Basic AI Chatbot (FAQ & Booking)</li>
                  <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Cal.com integration</li>
                  <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Fast secure hosting & maintenance</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary bg-slate-900 border-2 relative overflow-hidden flex flex-col scale-100 md:scale-105 shadow-[0_0_40px_rgba(139,92,246,0.15)] z-10">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary" />
              <div className="absolute top-4 right-4 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/30">POPULAR</div>
              <CardHeader>
                <CardTitle className="text-2xl">Bespoke Partner</CardTitle>
                <CardDescription>Full custom growth for scaling companies.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$1,497</span>
                  <span className="text-slate-400"> / month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 mt-4">
                  <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Everything in Core, plus:</li>
                  <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Multi-page custom website</li>
                  <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Advanced AI logic & qualification</li>
                  <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Advanced Email nurture sequences</li>
                  <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> CRM integrations & Zapier workflows</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-white">Apply Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. CTA / CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 bg-slate-900 border-t border-slate-800 flex justify-center flex-col items-center">
        <div className="text-center space-y-4 mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50">Ready to automate your pipeline?</h2>
          <p className="text-slate-400 text-lg">Book a free strategy session with our team to see exactly how we can build a custom lead engine for your business.</p>
        </div>

        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-start">
          <Card className="border-slate-700 bg-darker">
            <CardHeader>
              <CardTitle>Get a custom growth plan</CardTitle>
              <CardDescription>Leave your details and we'll send over a personalized demo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Full Name</label>
                <Input placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <Input type="email" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Company Website</label>
                <Input placeholder="https://..." />
              </div>
              <Button className="w-full mt-2">Request Demo via Email</Button>
            </CardContent>
          </Card>
          <div className="bg-darker rounded-xl border border-slate-700 p-1 md:p-4 aspect-square md:aspect-auto md:h-full flex flex-col justify-center items-center text-center">
            {/* Cal.com Placeholder */}
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-50 mb-2">Skip the line</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-[250px]">Book a strategy call directly on our calendar. Limited spots available.</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              Open Calendar (Cal.com)
            </Button>
            <p className="text-xs text-slate-500 mt-4">* Cal.com embed placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
}
