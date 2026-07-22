import React from "react";
import { useCompliance } from "../../hooks/useCompliance";
import { Award, FileDown, UploadCloud } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const CertificatesPage: React.FC = () => {
  const { certificates, isLoading } = useCompliance();

  const getStatusColor = (status: string) => {
    if (status === "expired") return "text-red-600 bg-red-50 border-red-200";
    if (status === "expiring_soon") return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-green-600 bg-green-50 border-green-200";
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Operational Certificates & Permits</h2>
          <p className="text-xs text-slate-400 mt-1">Active, expiring, and expired certifications registry</p>
        </div>

        <button className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-xs">
          <UploadCloud className="h-4 w-4" /> Upload Certificate
        </button>
      </div>

      {isLoading ? (
        <div className="h-32 flex items-center justify-center">Loading certificates...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <Award className="h-4.5 w-4.5 text-[#4F46E5]" /> {cert.type}
                </span>
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getStatusColor(cert.status)}`}>
                  {cert.status}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-500 block">Owner: {cert.owner}</span>
                <span className="text-[10px] text-slate-400 block font-medium">Expires: {new Date(cert.expiry).toLocaleDateString()}</span>
              </div>

              <div className="flex items-center justify-end pt-3 border-t border-slate-50">
                <Link
                  to="/documents"
                  className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-lg flex items-center gap-1"
                >
                  <FileDown className="h-3.5 w-3.5" /> View Evidence Document
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
