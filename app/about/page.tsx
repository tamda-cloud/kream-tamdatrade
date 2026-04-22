import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="px-4 md:px-10 py-12 flex-1 w-full bg-white max-w-4xl mx-auto">
      <h1 className="text-[32px] font-extrabold tracking-[-1px] mb-8 uppercase">About TamdaTrade</h1>
      
      <div className="space-y-8">
        <section>
           <h2 className="text-[14px] font-bold uppercase tracking-[0.5px] mb-3 text-black">Our Mission</h2>
           <p className="text-[12px] text-[#666] leading-[1.6]">
             TamdaTrade was founded on a simple principle: absolute trust in every transaction. In a market flooded with counterfeits, finding authentic, high-quality sneakers can be an anxious process. We eliminate that anxiety by providing a curated, premium marketplace where every single item is 100% verified.
           </p>
        </section>

        <section>
           <h2 className="text-[14px] font-bold uppercase tracking-[0.5px] mb-3 text-black">The Authentication Standard</h2>
           <p className="text-[12px] text-[#666] leading-[1.6] mb-3">
             We operate leveraging the stringent verification standards popularized by platforms like KREAM. Our independent experts scrutinize everything from the shoe box, to the stitching, inside tags, insoles, outsoles, and material quality.
           </p>
           <p className="text-[12px] text-[#666] leading-[1.6]">
             If a product doesn&apos;t pass our multi-point inspection, it does not reach your door. Period. 
           </p>
        </section>
        
        <section className="bg-[#fafafa] border border-[#eee] p-6 rounded-[4px] my-10">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.5px] mb-2">Disclaimer</h3>
            <p className="text-[11px] text-[#888] leading-[1.5]">
               TamdaTrade is an independent resale platform. We are not legally affiliated, associated, authorized, endorsed by, or in any way officially connected with KREAM Corp. We simply utilize their rigorous, industry-leading methodology to guide our own internal authentication protocols.
            </p>
        </section>

        <section>
           <h2 className="text-[14px] font-bold uppercase tracking-[0.5px] mb-3 text-black">The Experience</h2>
           <p className="text-[12px] text-[#666] leading-[1.6]">
             Purchasing highly sought-after sneakers should feel like a premium retail experience, not a risky gamble. We&apos;ve designed our platform to be minimal, clean, and intuitive, allowing the products to speak for themselves. 
           </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-[#eee] pb-12">
         <h3 className="text-[11px] font-bold uppercase tracking-[0.5px] mb-3">Got questions?</h3>
         <Link href="/contact" className="text-[12px] font-bold underline hover:text-[#666] transition-colors">
            Contact our Customer Support Team
         </Link>
      </div>
    </div>
  );
}
