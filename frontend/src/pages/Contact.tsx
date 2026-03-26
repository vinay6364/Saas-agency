import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="w-full flex-col min-h-[80vh] py-24 px-4 flex items-center">
      <div className="w-full max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-50">Ready to automate your pipeline?</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">Book a free strategy session with our team to see exactly how we can build a custom lead engine for your business.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="border-slate-700 bg-darker">
            <CardHeader>
              <CardTitle>Get a custom growth plan</CardTitle>
              <CardDescription>Leave your details and we'll send over a personalized demo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Full Name</label>
                  <Input placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <Input type="email" placeholder="john@company.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Company Website</label>
                  <Input placeholder="https://..." />
                </div>
                <Button className="w-full mt-4" type="button">Request Demo via Email</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="bg-darker rounded-xl border border-slate-700 p-4 aspect-square md:aspect-auto md:h-full flex flex-col justify-center items-center text-center">
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
      </div>
    </div>
  );
}
