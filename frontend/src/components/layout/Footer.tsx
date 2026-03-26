export default function Footer() {
  return (
    <footer className="bg-darker py-12 border-t border-slate-800 text-center text-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">S</div>
            <p className="text-sm font-semibold text-slate-200">© 2026 SaaSFlow Agency. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
