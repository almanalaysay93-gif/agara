import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BookOpen } from "lucide-react";

interface ResearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResearchDialog: React.FC<ResearchDialogProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-[94vw] !w-[94vw] !h-[92vh] !max-h-[92vh] sm:!max-w-[94vw] !p-0 !gap-0 flex flex-col overflow-hidden bg-[#faf8f5] border border-[#e5ded4] shadow-2xl rounded-2xl">
        <div className="px-6 py-3.5 border-b border-[#e5ded4] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1b2a20] flex items-center justify-center text-[#f2eee4] shrink-0">
              <BookOpen size={16} />
            </div>
            <div>
              <DialogTitle className="!text-[15px] !font-semibold !text-[#1b2a20] !font-sans !tracking-tight !leading-snug !m-0 !font-normal-none" style={{ fontSize: "15px", fontFamily: "'DM Sans', sans-serif", letterSpacing: "normal", lineHeight: "1.3" }}>
                AGARA Clinical & Market Research Workspace
              </DialogTitle>
              <DialogDescription className="!text-[12px] !text-[#6e766a] !font-sans !mt-0.5 !m-0" style={{ fontSize: "12px", fontFamily: "'DM Sans', sans-serif", letterSpacing: "normal", lineHeight: "1.4" }}>
                Interactive Pharmacokinetic Curves, Formulation Matrix & Category Unit Economics
              </DialogDescription>
            </div>
          </div>
        </div>

        {/* Full Modal Workspace with clean isolated scrolling */}
        <div className="flex-1 w-full h-full bg-[#fbf9f4] overflow-hidden relative">
          <iframe
            src="/research.html"
            title="Agara Clinical and Market Research Full Dossier"
            className="w-full h-full border-none block"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
