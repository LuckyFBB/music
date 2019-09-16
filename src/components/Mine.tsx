import React from "react";
import { TopTab } from "./widget/TopTab";
import { BottomTab } from "./widget/BottomTab";

export const Mine = () => {
  return (
    <div>
      <TopTab type="text" text="我的页面" />
      <BottomTab active="mine" />
    </div>
  );
};
