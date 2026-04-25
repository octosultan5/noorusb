"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Order = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  city: string;
  bundle_type: number;
  total_price: number;
  status: string;
};

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Basic Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // كلمة المرور الافتراضية (يمكن تغييرها لاحقاً)
    if (passwordInput === "noor123") {
      setIsAuthenticated(true);
    } else {
      setAuthError("كلمة المرور غير صحيحة");
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching orders:", error);
    } else {
      setOrders(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("orders")
      .update({ status: newStatus })
      .eq("id", id);
      
    if (!error) {
      setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'new': return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">جديد 🔵</span>;
      case 'processing': return <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">قيد المعالجة ⏳</span>;
      case 'shipped': return <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">تم الشحن 📦</span>;
      case 'delivered': return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">تم التوصيل ✅</span>;
      case 'cancelled': return <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">ملغى ❌</span>;
      default: return <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">{status}</span>;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-brand-primary mb-2">لوحة الإدارة</h1>
            <p className="text-slate-500 font-bold">الرجاء إدخال كلمة المرور للمتابعة</p>
          </div>
          
          {authError && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-bold text-center mb-4">
              {authError}
            </div>
          )}
          
          <input 
            type="password" 
            placeholder="كلمة المرور" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-lg focus:border-brand-accent focus:outline-none mb-4 text-center"
            dir="ltr"
          />
          
          <button type="submit" className="w-full btn-primary py-4 text-xl flex justify-center items-center gap-2">
            دخول <i className="fa-solid fa-lock"></i>
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800">إدارة الطلبات</h1>
          <p className="text-slate-500 mt-1">تابع طلبات عملائك وقم بتحديث حالتها</p>
        </div>
        <div className="flex gap-3">
          <button onClick={fetchOrders} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
            <i className="fa-solid fa-rotate-right"></i> تحديث
          </button>
          <button className="bg-brand-green text-white px-4 py-2 rounded-lg font-bold hover:bg-emerald-600 transition-all flex items-center gap-2 shadow-md">
            <i className="fa-solid fa-file-excel"></i> تصدير (Excel)
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="text-slate-500 font-bold mb-2">إجمالي الطلبات</div>
          <div className="text-3xl font-black text-slate-800">{orders.length}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="text-slate-500 font-bold mb-2">الطلبات الجديدة</div>
          <div className="text-3xl font-black text-blue-600">{orders.filter(o => o.status === 'new').length}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="text-slate-500 font-bold mb-2">تم التوصيل</div>
          <div className="text-3xl font-black text-green-600">{orders.filter(o => o.status === 'delivered').length}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="text-slate-500 font-bold mb-2">إجمالي الأرباح المتوقعة</div>
          <div className="text-3xl font-black text-brand-primary">
            {orders.filter(o => o.status !== 'cancelled').reduce((acc, curr) => acc + curr.total_price, 0)} د.م
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
              <tr>
                <th className="p-4 font-bold">رقم الطلب</th>
                <th className="p-4 font-bold">التاريخ</th>
                <th className="p-4 font-bold">العميل</th>
                <th className="p-4 font-bold">الهاتف</th>
                <th className="p-4 font-bold">المدينة</th>
                <th className="p-4 font-bold">العرض</th>
                <th className="p-4 font-bold">المبلغ</th>
                <th className="p-4 font-bold">الحالة</th>
                <th className="p-4 font-bold text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-slate-500">جاري تحميل الطلبات...</td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-slate-500">لا توجد طلبات حتى الآن.</td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-sm font-mono text-slate-400">#{order.id.slice(0, 6)}</td>
                    <td className="p-4 text-sm text-slate-600">{new Date(order.created_at).toLocaleDateString('ar-MA')}</td>
                    <td className="p-4 font-bold text-slate-800">{order.name}</td>
                    <td className="p-4 text-sm font-mono text-blue-600" dir="ltr">{order.phone}</td>
                    <td className="p-4 text-slate-600">{order.city}</td>
                    <td className="p-4">
                      <span className="bg-brand-accent/10 text-brand-accent px-2 py-1 rounded text-xs font-bold">
                        {order.bundle_type} فلاش ميموري
                      </span>
                    </td>
                    <td className="p-4 font-black text-slate-800">{order.total_price} د.م</td>
                    <td className="p-4">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="p-4 text-center">
                      <select 
                        className="bg-slate-100 border-none text-sm rounded-lg p-2 focus:ring-2 focus:ring-brand-primary outline-none"
                        value={order.status}
                        onChange={(e) => updateStatus(order.id, e.target.value)}
                      >
                        <option value="new">جديد</option>
                        <option value="processing">قيد المعالجة</option>
                        <option value="shipped">تم الشحن</option>
                        <option value="delivered">تم التوصيل</option>
                        <option value="cancelled">ملغى</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
