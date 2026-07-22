import React, { useState } from "react";
import { useWorkflows } from "../../hooks/useWorkflows";
import { Save, Plus, ArrowRight, Settings } from "lucide-react";

export const WorkflowBuilderPage: React.FC = () => {
  const { createWorkflowTemplate } = useWorkflows();
  const [name, setName] = useState("");
  const [nodes, setNodes] = useState([
    { id: "node-1", type: "trigger", name: "Failure Trigger", description: "SCADA alarm logs" },
    { id: "node-2", type: "ai_investigation", name: "AI RCA Investigation", description: "5-Whys analysis" },
  ]);

  const handleAddNode = () => {
    const id = `node-${nodes.length + 1}`;
    setNodes([...nodes, { id, type: "work_order", name: "Issue Calibration WO", description: "Maintenance checklist" }]);
  };

  const handleSave = async () => {
    if (name.trim()) {
      await createWorkflowTemplate({
        name,
        description: "Visual automation rules sequence",
        nodes: nodes.map((n) => ({ ...n, status: "pending" })),
        edges: [],
      });
      alert("Workflow Template Saved!");
    }
  };

  return (
    <div className="space-y-6 font-sans max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Visual Workflow Builder</h2>
          <p className="text-xs text-slate-400 mt-1">Design automated rules linking SCADA triggers to work orders</p>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-xs"
        >
          <Save className="h-4 w-4" /> Save Template
        </button>
      </div>

      <div className="bg-white border border-[#E5E7EB] p-5 rounded-2xl shadow-xs space-y-4">
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Template Name</label>
          <input
            type="text"
            placeholder="e.g. Critical Safety Escalate Rules"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-3.5 py-2 rounded-xl focus:outline-none"
          />
        </div>
      </div>

      {/* Visual Canvas layout */}
      <div className="bg-slate-50 border border-[#E5E7EB] rounded-[24px] p-6 min-h-64 flex flex-col md:flex-row items-center justify-center gap-4 relative overflow-hidden">
        {nodes.map((node, idx) => (
          <React.Fragment key={node.id}>
            {idx > 0 && <ArrowRight className="h-5 w-5 text-slate-300 hidden md:block shrink-0" />}
            <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl w-48 shadow-xs space-y-2 relative group hover:border-[#4F46E5] transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  {node.type}
                </span>
                <Settings className="h-3.5 w-3.5 text-slate-400 cursor-pointer hover:text-slate-700" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">{node.name}</h4>
              <p className="text-[10px] text-slate-400 leading-normal">{node.description}</p>
            </div>
          </React.Fragment>
        ))}

        <button
          onClick={handleAddNode}
          className="h-10 w-10 bg-white border border-slate-200 hover:border-[#4F46E5] hover:text-[#4F46E5] rounded-full flex items-center justify-center shadow-xs transition-all shrink-0"
          title="Add Action Node"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default WorkflowBuilderPage;
