export default function RefundsPage() {
  return (
    <div className="px-4 md:px-10 py-12 flex-1 w-full bg-white max-w-4xl mx-auto">
      <h1 className="text-[32px] font-extrabold tracking-[-1px] mb-8 uppercase">Refund & Return Policy</h1>
      
      <div className="space-y-6 text-[#666] text-[12px] leading-[1.6]">
        <p>Due to the nature of the sneaker resale market and our rigorous authentication process, we have a strict policy regarding returns and refunds.</p>
        
        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">Final Sale Policy</h2>
        <p><strong>All sales on TamdaTrade are final.</strong> Once an order has been placed and checkout is completed, we cannot offer refunds, returns, or exchanges for issues such as buyer&apos;s remorse, ordering the wrong size, or minor manufacturing flaws inherent to retail product releases.</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">Order Cancellations</h2>
        <p>Orders cannot be cancelled once they have been submitted. Because our fulfillment and authentication pipeline begins immediately upon order placement, we cannot intercept or stop the process.</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">Exceptions: Authentication Failures</h2>
        <p>If you purchase an item that fails our internal authentication process before shipping, your order will be cancelled, and you will receive a <strong>full refund</strong> to your original payment method automatically. We do not charge fees for failed authentication.</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">Fulfillment Errors</h2>
        <p>In the highly unlikely event that you receive the incorrect item (e.g., wrong size sent vs ordered, wrong colorway), please contact our support team at <strong>support@tamdatrade.com</strong> within 3 days of receiving your item. The TamdaTrade authentication tag must remain attached and intact. Removing the tag voids any claim for incorrect fulfillment.</p>
      </div>
    </div>
  );
}
