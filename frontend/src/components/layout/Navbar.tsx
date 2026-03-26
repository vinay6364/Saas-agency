import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-darker/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter text-slate-50 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">S</div>
          SaaSFlow
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</Link>
          <Link to="/case-studies" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Case Studies</Link>
          <Link to="/pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">Log In</Button>
          <Link to="/contact">
            <Button size="sm" type="button">Book Strategy</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
