import { products, getProductById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="px-4 md:px-10 py-8 flex-1 w-full bg-white">
      <div className="flex text-[10px] text-[#888] font-bold uppercase tracking-[1px] mb-6 gap-2">
         <Link href="/" className="hover:text-black hover:underline">SHOP</Link>
         <span>/</span>
         <span className="text-black">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative aspect-square bg-[#f4f4f4] rounded-[8px] overflow-hidden">
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col pt-2">
          <div className="text-[11px] font-extrabold underline uppercase mb-2 text-[#333]">{product.brand}</div>
          <h1 className="text-[32px] font-extrabold tracking-[-1px] leading-[1.1] mb-2">{product.name}</h1>
          <p className="text-[14px] text-[#666] mb-6">{product.colorway}</p>
          
          <div className="text-[20px] font-bold mb-8">
            ${product.price.toFixed(2)}
          </div>

          <div className="space-y-3 mb-8">
             <div className="flex justify-between items-center border border-[#eee] bg-white p-3.5 rounded-[4px]">
               <span className="text-[11px] font-bold uppercase tracking-[0.5px]">Condition</span>
               <span className="text-[12px] text-[#333] font-medium">{product.condition}</span>
             </div>
             <div className="flex justify-between items-center border border-[#eee] bg-white p-3.5 rounded-[4px]">
               <span className="text-[11px] font-bold uppercase tracking-[0.5px]">Size</span>
               <button className="text-[12px] font-medium flex items-center gap-2 hover:opacity-70">
                 US 9 (Mens) <span className="text-[9px] bg-black text-white px-2 py-1 uppercase rounded-[2px] font-bold tracking-wide">CHANGE</span>
               </button>
             </div>
          </div>

          <button className="w-full bg-black text-white py-4 rounded-[2px] text-[12px] font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors mb-6">
            Proceed to Checkout
          </button>

          <div className="bg-[#fafafa] border border-[#eee] rounded-[4px] p-4 flex items-start gap-4 mb-4">
            <ShieldCheck className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.5px]">Authenticated via KREAM standards</h4>
              <p className="text-[12px] text-[#666] mt-1.5 leading-[1.5]">This item goes through rigorous authentication at our processing centers to ensure it is 100% authentic before it is shipped.</p>
            </div>
          </div>

          <div className="border-t border-[#eee] pt-6 space-y-6 mt-4">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <p className="text-[10px] font-bold text-[#999] uppercase tracking-[1px] mb-1">Release Date</p>
                  <p className="text-[12px] font-medium text-[#333]">{product.releaseDate}</p>
               </div>
               <div>
                  <p className="text-[10px] font-bold text-[#999] uppercase tracking-[1px] mb-1">SKU</p>
                  <p className="text-[12px] font-medium text-[#333]">{product.sku}</p>
               </div>
            </div>
            
            <div className="pt-4 border-t border-[#eee]">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.5px] mb-2">Editor&apos;s Notes</h3>
              <p className="text-[12px] text-[#666] leading-[1.6]">{product.description}</p>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-[#eee]">
             <div className="flex gap-4 items-center">
               <Truck className="w-4 h-4 text-[#888]" strokeWidth={2} />
               <div>
                 <p className="text-[11px] font-bold uppercase tracking-[0.5px]">Standard Delivery</p>
                 <p className="text-[#888] text-[11px] mt-0.5">Arrives in 5-7 business days after authentication</p>
               </div>
             </div>
             <div className="flex gap-4 items-center">
               <RotateCcw className="w-4 h-4 text-[#888]" strokeWidth={2} />
               <div>
                 <p className="text-[11px] font-bold uppercase tracking-[0.5px]">Returns Policy</p>
                 <p className="text-[#888] text-[11px] mt-0.5">Final sale items cannot be returned</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
