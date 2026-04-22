export default function TermsPage() {
  return (
    <div className="px-4 md:px-10 py-12 flex-1 w-full bg-white max-w-4xl mx-auto">
      <h1 className="text-[32px] font-extrabold tracking-[-1px] mb-8 uppercase">Terms of Service</h1>
      <p className="text-[11px] text-[#888] mb-8 uppercase tracking-[1px]">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6 text-[#666] text-[12px] leading-[1.6]">
        <p>Welcome to TamdaTrade. By accessing this website or purchasing products, you agree to be bound by these Terms of Service.</p>
        
        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">1. Use of the Site</h2>
        <p>You may use this site for personal, non-commercial purposes only. You must not use our site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">2. Products and Authenticity</h2>
        <p>TamdaTrade provides a marketplace for authentic sneakers. We verify all products utilizing methodologies inspired by KREAM standards. However, TamdaTrade is an independent entity and is not formally affiliated with KREAM Corp.</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">3. Prices and Payments</h2>
        <p>All prices are subject to change without notice. We reserve the right at any time to modify or discontinue products without notice. Payments are processed securely. We are not responsible for any fees or charges your bank or credit card issuer may apply.</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">4. Limitation of Liability</h2>
        <p>In no event shall TamdaTrade, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
      </div>
    </div>
  );
}
