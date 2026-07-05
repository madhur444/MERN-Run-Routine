import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Toast({ message, show }: { message: string; show: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) setVisible(true);
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="flex items-center gap-3 bg-slate-800 border border-emerald-500/40 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-emerald-500/10">
        <CheckCircle className="text-emerald-500 w-5 h-5" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}