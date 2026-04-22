export default function FAQPage() {
  const faqs = [
    {
      q: "Are all items authentic?",
      a: "Yes. 100%. Every single item sold on TamdaTrade goes through a rigorous multi-point physical inspection by our highly trained experts utilizing standards inspired by top platforms like KREAM."
    },
    {
      q: "What does 'Verified via KREAM standards' mean?",
      a: "It means we examine the same crucial data points they do: packaging, materials, stitching, UV stamping, sole flexibility, and smell. While we are an independent entity not affiliated with KREAM, we subscribe to their industry-leading level of scrutiny."
    },
    {
      q: "How long does shipping take?",
      a: "Because items must first travel to our authentication center before being shipped to you, the total delivery time is generally 5-11 business days."
    },
    {
      q: "Can I cancel my order or get a refund?",
      a: "No. All sales are final. Because market prices fluctuate rapidly and we immediately begin the fulfillment pipeline upon order creation, we do not accept returns, exchanges, or cancellations for issues like buyer&apos;s remorse or sizing errors."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards globally via our secure Stripe integration, ensuring your payment details are heavily encrypted and protected."
    }
  ];

  return (
    <div className="px-4 md:px-10 py-12 flex-1 w-full bg-white max-w-4xl mx-auto">
      <div className="text-center mb-10">
         <h1 className="text-[32px] font-extrabold tracking-[-1.5px] uppercase mb-4">FAQ</h1>
         <p className="text-[12px] text-[#666] uppercase tracking-[0.5px]">Everything you need to know about purchasing on TamdaTrade.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#fafafa] p-6 rounded-[2px] border border-[#eee]">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.5px] mb-2">{faq.q}</h3>
            <p className="text-[12px] text-[#666] leading-[1.6]">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center border-t border-[#eee] pt-10">
        <p className="text-[11px] text-[#888] font-bold uppercase tracking-[0.5px] mb-4">Still have questions?</p>
        <a href="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-[2px] font-bold tracking-[1px] text-[12px] uppercase hover:opacity-80 transition-opacity">
          Contact Support
        </a>
      </div>
    </div>
  );
}
