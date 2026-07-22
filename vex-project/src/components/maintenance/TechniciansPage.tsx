import React from "react";
import { useMaintenance } from "../../hooks/useMaintenance";
import { User, Activity, CheckCircle2 } from "lucide-react";

export const TechniciansPage: React.FC = () => {
  const { technicians, isLoading } = useMaintenance();

  if (isLoading) {
    return <div className="h-64 flex items-center justify-center font-sans">Loading technicians...</div>;
  }

  const getAvailabilityBadge = (status: string) => {
    if (status === "available") {
      return (
        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200">
          AVAILABLE
        </span>
      );
    }
    return (
      <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-200">
        BUSY
      </span>
    );
  };

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Technician Shifts & Availability</h2>
        <p className="text-xs text-slate-400 mt-1">Skills routing matrices and active workloads</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {technicians.map((tech) => (
          <div key={tech.id} className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <User className="h-4 w-4 text-[#4F46E5]" /> {tech.name}
              </span>
              {getAvailabilityBadge(tech.availability)}
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 block">Role: {tech.role}</span>
              <span className="text-[10px] text-slate-400 block font-medium">Workload: {tech.workload}%</span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-50">
              {tech.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechniciansPage;
