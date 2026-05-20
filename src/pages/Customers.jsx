import { useState } from "react"; // Tambahkan useState
import PageHeader from "../components/PageHeader";
import customersData from "../data/customer.json"; 

export default function Customers() {
  // 1. State untuk mengatur buka/tutup Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50/50 relative">
      <PageHeader 
        title="Customer List" 
        breadcrumb={["Dashboard", "Customers"]}
      >
        {/* 2. Tambahkan fungsi onClick untuk membuka Modal */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <span className="text-lg">+</span> Add Customer
        </button>
      </PageHeader>

      <div className="p-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-100">
                <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Customer</th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Contact Info</th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Loyalty Level</th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customersData.map((cust) => (
                <tr key={cust.customerId} className="hover:bg-indigo-50/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                        {cust.customerName.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{cust.customerName}</div>
                        <div className="text-xs text-gray-400">{cust.customerId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 font-medium">{cust.email}</div>
                    <div className="text-xs text-gray-400">{cust.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ring-1 ring-inset
                      ${cust.loyalty === 'Gold' ? 'bg-amber-50 text-amber-700 ring-amber-200' : 
                        cust.loyalty === 'Silver' ? 'bg-slate-50 text-slate-700 ring-slate-200' : 
                        'bg-orange-50 text-orange-700 ring-orange-200'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${cust.loyalty === 'Gold' ? 'bg-amber-500' : cust.loyalty === 'Silver' ? 'bg-slate-500' : 'bg-orange-500'}`}></span>
                      {cust.loyalty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Tabel */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <p>Showing {customersData.length} customers</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 transition-all">Prev</button>
            <button className="px-3 py-1 border rounded bg-indigo-600 text-white shadow-sm">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* --- 3. MODAL FORM CUSTOMER --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in duration-300">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-indigo-50/30">
              <h3 className="text-xl font-bold text-gray-800">New Customer Profile</h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
              >
                &times;
              </button>
            </div>
            
            <form className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Customer ID</label>
                  <input type="text" placeholder="CUST-XXX" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Loyalty</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white">
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input type="text" placeholder="e.g. Dimas Al Fajri" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input type="email" placeholder="example@mail.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input type="tel" placeholder="0812..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
              
              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md transition-all active:scale-95"
                >
                  Save Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}