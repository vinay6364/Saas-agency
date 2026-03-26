import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="w-full flex-col min-h-[80vh] py-24 px-4 flex items-center">
      <div className="max-w-6xl w-full space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-50">Simple, Transparent Pricing</h1>
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
              <Link to="/contact" className="w-full">
                <Button className="w-full" variant="outline" type="button">Get Started</Button>
              </Link>
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
              <Link to="/contact" className="w-full">
                <Button className="w-full text-white" type="button">Apply Now</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
