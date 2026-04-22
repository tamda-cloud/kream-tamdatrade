import { products } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Truck, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#fafafa] min-h-[240px] px-4 md:px-10 py-12 md:py-8 grid md:grid-cols-2 items-center gap-8 md:gap-4 border-b border-[#f0f0f0]">
        <div className="md:pr-10">
          <span className="inline-block bg-black text-white text-[10px] font-bold px-2 py-1 mb-3 rounded-[2px] uppercase tracking-wide">Kream Verified</span>
          <h1 className="text-[42px] font-extrabold tracking-[-1.5px] leading-[1.1] mb-2.5">
            100% Authentic Sneakers
          </h1>
          <p className="text-[14px] text-[#666] leading-[1.5] mb-5 max-w-lg">
            Global resale marketplace sourcing exclusively from our verified logistics network. Zero fakes. Total transparency.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="#shop" className="bg-black text-white px-6 py-3 text-[12px] font-bold hover:opacity-80 transition-opacity tracking-[0.5px] w-full sm:w-auto text-center rounded-[2px] uppercase">
              Shop New Arrivals
            </Link>
            <Link href="/about" className="bg-transparent border border-black text-black px-6 py-3 text-[12px] font-bold hover:bg-gray-50 transition-colors tracking-[0.5px] w-full sm:w-auto text-center rounded-[2px] uppercase">
              How It Works
            </Link>
          </div>
        </div>
        
        {/* Decorative Graphic Element matching theme */}
        <div className="bg-[#e5e5e5] h-[200px] w-full rounded-[4px] flex flex-col items-center justify-center relative overflow-hidden hidden md:flex border border-[#ccc]">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
             <span className="text-[100px]">👟</span>
          </div>
          <div className="border border-[#ccc] text-[#999] text-[10px] font-extrabold px-3 py-1 bg-[#e5e5e5] z-10 tracking-[1px] uppercase relative">Limited Edition</div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="shop" className="pb-16 w-full bg-white">
        <div className="px-4 md:px-10 pt-10 pb-6 flex justify-between items-end border-b border-transparent">
          <div className="text-[18px] font-bold uppercase tracking-[0.5px]">Featured Drops</div>
          <Link href="#shop" className="text-[12px] text-[#888] underline hover:text-black transition-colors">
            View all products
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-4 md:px-10">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group block cursor-pointer">
              <div className="relative aspect-square bg-[#f4f4f4] rounded-[8px] overflow-hidden mb-3 flex items-center justify-center">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                 <div className="text-[11px] font-extrabold underline mb-1 uppercase tracking-tight">{product.brand}</div>
                 <div className="text-[12px] text-[#333] mb-2 h-[34px] overflow-hidden leading-[1.4]">{product.name}</div>
                 <div className="text-[14px] font-bold">${product.price.toFixed(2)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

       {/* How It Works */}
       <section className="py-16 bg-[#fafafa] border-t border-[#f0f0f0] px-4 md:px-10">
          <div className="text-[18px] font-bold uppercase tracking-[0.5px] mb-10 text-center">Authentication Pipeline</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             {[
               { title: 'Place Order', desc: 'Secure the most exclusive items instantly at market value or place a bid.' },
               { title: 'Rigorous Verification', desc: 'Item is shipped to our facility. We meticulously inspect stitching, tags, soles, and materials.' },
               { title: 'Guaranteed Delivery', desc: 'Receive your verified authentic product via fully insured expedited shipping directly to your door.' }
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center p-4">
                 <div className="text-[10px] font-extrabold text-[#999] tracking-[2px] mb-2 uppercase">Step 0{idx + 1}</div>
                 <div className="text-[14px] font-bold uppercase tracking-[0.5px] mb-2">{item.title}</div>
                 <div className="text-[12px] text-[#666] leading-[1.5] max-w-xs">{item.desc}</div>
               </div>
             ))}
          </div>
       </section>

      {/* Trust Badges */}
      <section className="bg-white border-t border-[#f0f0f0] mt-auto">
        <div className="px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 w-full md:justify-start">
              <div className="w-[32px] h-[32px] shrink-0 bg-[#f0f0f0] rounded-full flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-black" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[11px] font-bold leading-[1.2] uppercase tracking-[0.5px] mb-1">AUTHENTICITY GUARANTEE</div>
                <div className="text-[10px] text-[#888] font-normal leading-[1.4]">KREAM physical inspection label</div>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full md:justify-center">
              <div className="w-[32px] h-[32px] shrink-0 bg-[#f0f0f0] rounded-full flex items-center justify-center">
                <Lock className="w-4 h-4 text-black" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[11px] font-bold leading-[1.2] uppercase tracking-[0.5px] mb-1">SECURE CHECKOUT</div>
                <div className="text-[10px] text-[#888] font-normal leading-[1.4]">Stripe & SSL encrypted payments</div>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full md:justify-end">
              <div className="w-[32px] h-[32px] shrink-0 bg-[#f0f0f0] rounded-full flex items-center justify-center">
                <Truck className="w-4 h-4 text-black" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[11px] font-bold leading-[1.2] uppercase tracking-[0.5px] mb-1">EXPRESS DELIVERY</div>
                <div className="text-[10px] text-[#888] font-normal leading-[1.4]">Verified to door in 5-7 days</div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
