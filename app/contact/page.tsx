export default function ContactPage() {
  return (
    <div className="px-4 md:px-10 py-12 flex-1 w-full bg-white max-w-5xl mx-auto">
      <div className="text-center mb-10">
         <h1 className="text-[32px] font-extrabold tracking-[-1.5px] uppercase mb-4">Contact Us</h1>
         <p className="text-[12px] text-[#666] uppercase tracking-[0.5px]">We aim to respond to all inquiries within 24-48 business hours.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         {/* Contact Form */}
         <div className="bg-[#fafafa] p-8 rounded-[4px] border border-[#eee]">
            <h2 className="text-[16px] font-bold uppercase tracking-[0.5px] mb-6">Send a Message</h2>
            <form className="space-y-5 flex flex-col">
               <div>
                 <label htmlFor="name" className="block text-[10px] font-extrabold text-[#999] uppercase tracking-[1px] mb-2">Name</label>
                 <input type="text" id="name" className="w-full border border-[#ccc] bg-white px-3 py-2.5 rounded-[2px] focus:outline-none focus:border-black text-[12px] transition-colors" placeholder="YOUR NAME" />
               </div>
               <div>
                 <label htmlFor="email" className="block text-[10px] font-extrabold text-[#999] uppercase tracking-[1px] mb-2">Email Address</label>
                 <input type="email" id="email" className="w-full border border-[#ccc] bg-white px-3 py-2.5 rounded-[2px] focus:outline-none focus:border-black text-[12px] transition-colors" placeholder="YOU@EXAMPLE.COM" />
               </div>
               <div>
                 <label htmlFor="order" className="block text-[10px] font-extrabold text-[#999] uppercase tracking-[1px] mb-2">Order Number (Optional)</label>
                 <input type="text" id="order" className="w-full border border-[#ccc] bg-white px-3 py-2.5 rounded-[2px] focus:outline-none focus:border-black text-[12px] transition-colors" placeholder="#TT-12345" />
               </div>
               <div>
                 <label htmlFor="message" className="block text-[10px] font-extrabold text-[#999] uppercase tracking-[1px] mb-2">Message</label>
                 <textarea id="message" rows={5} className="w-full border border-[#ccc] bg-white px-3 py-2.5 rounded-[2px] focus:outline-none focus:border-black text-[12px] resize-none transition-colors" placeholder="HOW CAN WE HELP YOU?"></textarea>
               </div>
               <button type="button" className="w-full bg-black text-white font-bold tracking-[1px] uppercase text-[12px] py-4 rounded-[2px] hover:opacity-80 transition-opacity mt-4">
                 Submit Inquiry
               </button>
            </form>
         </div>

         {/* Contact Info */}
         <div className="flex flex-col justify-center gap-8 pl-0 md:pl-10">
            <div>
               <h3 className="text-[10px] font-extrabold text-[#999] uppercase tracking-[1px] mb-2">Email Support</h3>
               <p className="text-[14px] font-bold text-black uppercase tracking-[0.5px]">support@tamdatrade.com</p>
            </div>
            <div>
               <h3 className="text-[10px] font-extrabold text-[#999] uppercase tracking-[1px] mb-2">WhatsApp</h3>
               <p className="text-[14px] font-bold text-black uppercase tracking-[0.5px]">+1 (234) 567-8900</p>
               <p className="text-[11px] text-[#666] mt-1">Text messages only.</p>
            </div>
            <div>
               <h3 className="text-[10px] font-extrabold text-[#999] uppercase tracking-[1px] mb-2">KakaoTalk</h3>
               <p className="text-[14px] font-bold text-black uppercase tracking-[0.5px]">@TamdaTrade_Official</p>
            </div>
            <div className="pt-8 border-t border-[#eee]">
               <h3 className="text-[10px] font-extrabold text-[#999] uppercase tracking-[1px] mb-2">Business Hours</h3>
               <p className="text-[13px] font-bold text-black uppercase tracking-[0.5px]">Monday – Friday</p>
               <p className="text-[11px] text-[#666] mt-1">9:00 AM – 6:00 PM (EST)</p>
            </div>
         </div>
      </div>
    </div>
  );
}
