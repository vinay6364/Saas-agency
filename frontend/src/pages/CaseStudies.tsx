import { Button } from '../components/ui/Button';
import { LineChart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <div className="w-full flex-col min-h-[80vh] py-24 px-4 flex items-center">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-50">Proven Results</h1>
          <p className="text-slate-400 mt-4 text-lg">See how we transform local businesses into lead-generating machines.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400 border border-green-500/20">
              +310% Lead Increase
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white">IronGrip Gym: From empty classes to waitlisted in 45 days.</h3>
            <p className="text-slate-400 text-lg">We replaced their static site with an automated booking funnel and a 24/7 AI receptionist. Now, trial classes fill up while the owner sleeps.</p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Reduced admin time by 20 hrs/week</li>
              <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> 45 new automated bookings per month</li>
              <li className="flex items-center text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> 100% automated follow-up sequence</li>
            </ul>
            <Link to="/contact">
              <Button className="mt-4" type="button">Get Results Like This</Button>
            </Link>
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
    </div>
  );
}
