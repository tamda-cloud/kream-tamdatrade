import Link from 'next/link';
import { Search, ShoppingBag, User } from 'lucide-react';

export function Header() {
  return (
    <>
      <div className="bg-black text-white text-center text-[10px] font-semibold tracking-[1px] py-2 uppercase">
        Free Shipping on all orders over $200 — Authenticity Guaranteed by KREAM
      </div>
      <header className="sticky top-0 z-50 bg-white border-b border-[#f0f0f0]">
        <div className="w-full px-4 md:px-10 h-[80px] flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-[24px] font-black tracking-[-1px] uppercase">
              TamdaTrade
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 justify-center gap-[30px]">
            <Link href="/" className="text-[13px] font-medium uppercase opacity-60 hover:opacity-100 transition-opacity">SHOP</Link>
            <Link href="/about" className="text-[13px] font-medium uppercase opacity-60 hover:opacity-100 transition-opacity">ABOUT</Link>
            <Link href="/faq" className="text-[13px] font-medium uppercase opacity-60 hover:opacity-100 transition-opacity">FAQ</Link>
            <Link href="/contact" className="text-[13px] font-medium uppercase opacity-60 hover:opacity-100 transition-opacity">CONTACT</Link>
          </nav>

          <div className="flex items-center gap-5">
            <button aria-label="Search" className="text-black hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5" strokeWidth={2} />
            </button>
            <Link href="/contact" aria-label="User Account" className="text-black hover:opacity-60 transition-opacity">
              <User className="w-5 h-5" strokeWidth={2} />
            </Link>
            <Link href="#" aria-label="Cart" className="text-black hover:opacity-60 transition-opacity relative">
              <ShoppingBag className="w-5 h-5" strokeWidth={2} />
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
