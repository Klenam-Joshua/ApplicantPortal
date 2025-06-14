import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from "@coreui/react";
import { useState } from "react";
import JobAlert from "./JobAlert/JobAlert";

const activities = ["Job Alerts", "Saved", "Applications"];

export default function Activities() {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTabChange = (indx) => {
    setActiveTab(indx);
  };
  return (
    <div className="px-3  ">
      <CTabs activeItemKey={0}>
        <CTabList variant="tabs">
          {activities.map((activity, indx) => {
            return (
              <CTab
                itemKey={indx}
                key={indx + "activity_list"}
                onClick={() => handleActiveTabChange(indx)}
              >
                {activity}
              </CTab>
            );
          })}
        </CTabList>
      </CTabs>
      <CTabContent>
        {activeTab === 0 && (
          <CTabPanel>
            <JobAlert />
          </CTabPanel>
        )}
        {activeTab === 1 && <CTabPanel>Saved </CTabPanel>}
        {activeTab === 2 && <CTabPanel>Applications</CTabPanel>}
      </CTabContent>
    </div>
  );
}
