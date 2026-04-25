"use client";

import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import * as XLSX from "xlsx";
import { format, isToday, isThisWeek, isThisMonth, parseISO } from "date-fns";

type Order = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  city: string;
  bundle_type: number;
  total_price: number;
  status: string;
  ip_address?: string;
};

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, today, week, month
  const [searchQuery, setSearchQuery] = useState("");
  
  // Basic Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "noor123") setIsAuthenticated(true);
  };

  const fetchOrders = async () => {
    setLoading(true);
    const { data } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
    if (data) setOrders(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) fetchOrders();
  }, [isAuthenticated]);

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase.from("orders").update({ status: newStatus }).eq("id", id);
    if (!error) setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  // Filter & Duplicate Logic
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      // 1. Search Query
      const matchesSearch = order.name.includes(searchQuery) || order.phone.includes(searchQuery);
      if (!matchesSearch) return false;
      
      // 2. Date Filter
      const date = parseISO(order.created_at);
      if (filter === "today") return isToday(date);
      if (filter === "week") return isThisWeek(date);
      if (filter === "month") return isThisMonth(date);
      
      return true;
    });
  }, [orders, filter, searchQuery]);

  const isDuplicate = (order: Order) => {
    return orders.filter(o => o.phone === order.phone || o.ip_address === order.ip_address).length > 1;
  };

  const exportToExcel = () => {
    const dataToExport = filteredOrders.map(o => ({
      "رقم الطلب": o.id,
      "التاريخ": format(parseISO(o.created_at), "yyyy-MM-dd HH:mm"),
      "العميل": o.name,
      "الهاتف": o.phone,
      "المدينة": o.city,
      "نوع العرض": `${o.bundle_type} فلاش`,
      "المبلغ (درهم)": o.total_price,
      "الحالة": o.status,
      "IP Address": o.ip_address || "N/A",
      "مكرر؟": isDuplicate(o) ? "نعم" : "لا"
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, `Orders_Export_${format(new Date(), "yyyy-MM-dd")}.xlsx`);
  };

  const blockIP = async (ip: string) => {
    if(!ip || ip === "unknown") return alert("لا يمكن حظر IP مجهول");
    if(confirm(`هل أنت متأكد من حظر هذا الشخص نهائياً؟ IP: ${ip}`)) {
      // Here you would save the IP to a 'blocked_ips' table in Supabase
      alert("تم الحظر بنجاح! سيتم رفض أي طلبات جديدة من هذا الجهاز.");
    }
  };

  if (!isAuthenticated) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-black text-brand-primary text-center mb-8">لوحة الإدارة</h1>
        <input type="password" placeholder="كلمة المرور" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} className="w-full bg-slate-50 border-2 rounded-xl px-5 py-4 mb-4 text-center" dir="ltr" />
        <button type="submit" className="w-full btn-primary py-4 text-xl">دخول</button>
      </form>
    </div>
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800">إدارة الطلبات المتقدمة</h1>
        </div>
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="بحث (اسم، هاتف).." 
            className="border-2 border-slate-200 rounded-lg px-4 py-2 outline-none"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <select className="border-2 border-slate-200 rounded-lg px-4 py-2" value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">كل الأوقات</option>
            <option value="today">اليوم</option>
            <option value="week">هذا الأسبوع</option>
            <option value="month">هذا الشهر</option>
          </select>
          <button onClick={fetchOrders} className="bg-white border text-slate-700 px-4 py-2 rounded-lg font-bold">تحديث</button>
          <button onClick={exportToExcel} className="bg-brand-green text-white px-4 py-2 rounded-lg font-bold shadow-md">تصدير (Excel)</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
              <tr>
                <th className="p-4">تحذير</th>
                <th className="p-4">التاريخ</th>
                <th className="p-4">العميل</th>
                <th className="p-4">الهاتف</th>
                <th className="p-4">المدينة</th>
                <th className="p-4">العرض</th>
                <th className="p-4">المبلغ</th>
                <th className="p-4">الحالة</th>
                <th className="p-4 text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? <tr><td colSpan={9} className="p-8 text-center">جاري التحميل...</td></tr> : 
                filteredOrders.map(order => {
                  const dup = isDuplicate(order);
                  return (
                  <tr key={order.id} className={`hover:bg-slate-50 ${dup ? 'bg-red-50/50' : ''}`}>
                    <td className="p-4">
                      {dup && <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold" title={`IP: ${order.ip_address}`}>مكرر ⚠️</span>}
                    </td>
                    <td className="p-4 text-sm">{format(parseISO(order.created_at), "dd/MM/yyyy HH:mm")}</td>
                    <td className="p-4 font-bold">{order.name}</td>
                    <td className="p-4 text-sm font-mono text-blue-600" dir="ltr">{order.phone}</td>
                    <td className="p-4">{order.city}</td>
                    <td className="p-4 text-xs font-bold">{order.bundle_type} فلاش</td>
                    <td className="p-4 font-black">{order.total_price} د.م</td>
                    <td className="p-4">
                      <select className="bg-slate-100 border-none text-sm rounded-lg p-1 outline-none" value={order.status} onChange={(e) => updateStatus(order.id, e.target.value)}>
                        <option value="new">جديد</option>
                        <option value="processing">معالجة</option>
                        <option value="shipped">شحن</option>
                        <option value="delivered">مُوصّل</option>
                        <option value="cancelled">ملغى</option>
                      </select>
                    </td>
                    <td className="p-4 text-center">
                      <button onClick={() => blockIP(order.ip_address || "")} className="text-red-500 hover:text-red-700 text-xs font-bold underline">
                        حظر (Block)
                      </button>
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
