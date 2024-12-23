import React, { useState } from "react";
import Button from "./ui/Button";
import Work from "../work/page";
import Skills from "./Skills";

const WorkSkills = () => {
  const [activeTab, setActiveTab] = useState<"portfolio" | "skills">(
    "portfolio"
  );

  const handleTabChange = (tab: "portfolio" | "skills") => setActiveTab(tab);

  return (
    <div className=" mt-20 w-full ">
      <div className="flex-center space-x-4 bg-primary-600 w-full py-2 px-3 rounded-lg">
        <Button
          onClick={() => handleTabChange("portfolio")}
          variant={"null"}
          size="medium"
          className={`${
            activeTab === "portfolio" ? "bg-primary-500" : ""
          } w-full uppercase`}
        >
          portfolio
        </Button>
        <Button
          onClick={() => handleTabChange("skills")}
          variant={"null"}
          size="medium"
          className={`${
            activeTab === "skills" ? "bg-primary-500" : ""
          } w-full uppercase`}
        >
          Skills
        </Button>
      </div>

      <div className="mt-6">
        {activeTab === "portfolio" ? <Work /> : <Skills />}
      </div>
    </div>
  );
};

export default WorkSkills;
