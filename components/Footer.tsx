import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#f9f9f9] border-t border-[#eee] pt-12 pb-6 px-4 md:px-10 mt-auto">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[18px] font-black uppercase tracking-[-0.5px] mb-3">TamdaTrade</h3>
            <p className="text-[11px] text-[#888] max-w-sm mb-6 leading-[1.6]">
              Premium resale marketplace for 100% authentic sneakers. Every pair is meticulously verified through KREAM-standard authentication before shipping.
            </p>
            <div className="flex space-x-4 text-[#999]">
              <a href="#" className="hover:text-black transition-colors"><Instagram className="w-4 h-4" strokeWidth={2}/></a>
              <a href="#" className="hover:text-black transition-colors"><Twitter className="w-4 h-4" strokeWidth={2}/></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-black uppercase tracking-[1px] mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-[11px] text-[#888] hover:text-black uppercase">FAQ</Link></li>
              <li><Link href="/contact" className="text-[11px] text-[#888] hover:text-black uppercase">Contact Us</Link></li>
              <li><Link href="/policies/shipping" className="text-[11px] text-[#888] hover:text-black uppercase">Shipping Policy</Link></li>
              <li><Link href="/policies/refunds" className="text-[11px] text-[#888] hover:text-black uppercase">Return Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-black uppercase tracking-[1px] mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/policies/terms" className="text-[11px] text-[#888] hover:text-black uppercase">Terms of Service</Link></li>
              <li><Link href="/policies/privacy" className="text-[11px] text-[#888] hover:text-black uppercase">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#f0f0f0] pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#999] uppercase tracking-[0.5px]">
          <p>© {new Date().getFullYear()} TAMDATRADE. NOT AFFILIATED WITH KREAM. AUTHENTICATION VIA KREAM CORE.</p>
          <div className="mt-4 md:mt-0 flex gap-5">
              <Link href="/policies/privacy" className="hover:text-black">Privacy Policy</Link>
              <Link href="/policies/terms" className="hover:text-black">Terms</Link>
              <Link href="/policies/refunds" className="hover:text-black">Refunds</Link>
              <Link href="/policies/shipping" className="hover:text-black">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
