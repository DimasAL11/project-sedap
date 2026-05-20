import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";

export default function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50/50 relative">
      <PageHeader title="Order List" breadcrumb={["Dashboard", "Orders"]}>
        {/* Tombol pemicu Modal */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md flex items-center gap-2"
        >
          <span className="text-lg">+</span> Add Orders
        </button>
      </PageHeader>

      <div className="p-8">
        {/* Tabel kamu tetap di sini */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
           {/* ... Kode Tabel yang sebelumnya ... */}
           <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">Customer</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">Total Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {ordersData.map((order) => (
                  <tr key={order.orderId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium">{order.orderId}</td>
                    <td className="px-6 py-4 text-sm">{order.customerName}</td>
                    <td className="px-6 py-4 text-sm">{order.status}</td>
                    <td className="px-6 py-4 text-sm">{order.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      </div>

      {/* --- MODAL FORM ORDERS --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-indigo-50/30">
              <h3 className="text-xl font-bold text-gray-800">New Order Details</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>
            
            <form className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Order ID</label>
                <input type="text" placeholder="e.g. ORD-031" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Customer Name</label>
                <input type="text" placeholder="Full Name" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white">
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Total Price</label>
                  <input type="text" placeholder="Rp 0" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Order Date</label>
                <input type="date" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
              
              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 transition-all">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md transition-all">Save Order</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}