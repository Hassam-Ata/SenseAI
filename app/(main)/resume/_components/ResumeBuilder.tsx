import { Button } from "@/components/ui/button";
import { Download, Save } from "lucide-react";

const ResumeBuilder = ({ initialContent }: { initialContent: string }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="font-bold gradient-title text-5xl md:text-6xl">
          Resume Builder
        </h1>
        <div className="space-x-2">
          <Button variant="destructive">
            <Save className="h-4 w-4" />
            Save
          </Button>
          <Button>
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <Tabs></Tabs>


    </div>
  );
};
export default ResumeBuilder;
