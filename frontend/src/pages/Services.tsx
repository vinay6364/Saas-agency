import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card';
import { Globe, Bot, Zap } from 'lucide-react';

export default function Services() {
  return (
    <div className="w-full flex-col min-h-[80vh] py-24 px-4 flex items-center">
      <div className="max-w-6xl w-full space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-50">Our Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">We implement full-stack growth systems that automate your sales process.</p>
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
    </div>
  );
}
