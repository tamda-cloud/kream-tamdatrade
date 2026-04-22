export default function PrivacyPolicyPage() {
  return (
    <div className="px-4 md:px-10 py-12 flex-1 w-full bg-white max-w-4xl mx-auto">
      <h1 className="text-[32px] font-extrabold tracking-[-1px] mb-8 uppercase">Privacy Policy</h1>
      <p className="text-[11px] text-[#888] mb-8 uppercase tracking-[1px]">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6 text-[#666] text-[12px] leading-[1.6]">
        <p>TamdaTrade (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        
        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">1. Information We Collect</h2>
        <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, and in connection with other activities, services, features or resources we make available.</p>
        <p>Information collected may include: Name, Email address, Mailing address, Phone number, and Payment information (processed securely via Stripe).</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">2. How We Use Information</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To process transactions securely.</li>
          <li>To personalize user experience.</li>
          <li>To improve our Website.</li>
          <li>To send periodic emails regarding your order or other products and services.</li>
        </ul>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">3. Data Protection</h2>
        <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.</p>

        <h2 className="text-[14px] font-bold text-black uppercase tracking-[0.5px] mt-8 mb-4">4. Sharing Your Personal Information</h2>
        <p>We do not sell, trade, or rent Users&apos; personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.</p>
      </div>
    </div>
  );
}
