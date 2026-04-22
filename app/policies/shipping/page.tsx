export default function ShippingPage() {
  return (
    <div className="px-4 md:px-10 py-12 flex-1 w-full bg-white max-w-4xl mx-auto">
      <h1 className="text-[32px] font-extrabold tracking-[-1px] mb-8 uppercase">Shipping Policy</h1>
      
      <div className="space-y-6 text-[#666] text-[12px] leading-[1.6]">
        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">The Authentication Timeline</h2>
        <p>Because every item is verified prior to being shipped to the buyer, our timeline is different from traditional retail. </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Processing:</strong> Seller ships to TamdaTrade (1-4 business days)</li>
          <li><strong>Authentication:</strong> Item is inspected (1-2 business days)</li>
          <li><strong>Delivery:</strong> Authenticated item is shipped to you (2-5 business days)</li>
        </ul>
        <p>In total, expect your item to arrive within <strong>5-11 business days</strong> from the time of order placement.</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">Shipping Rates</h2>
        <p>Shipping rates are calculated dynamically at checkout based on your delivery address and the current rates from our premium carrier partners (UPS, FedEx, DHL). All shipments are fully insured and require a signature upon delivery to prevent theft.</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">International Shipping</h2>
        <p>We ship globally. Please note that international buyers are responsible for any applicable customs duties, taxes, or import fees levied by their destination country. These fees are not included in the purchase price or shipping cost paid at checkout.</p>
      </div>
    </div>
  );
}
