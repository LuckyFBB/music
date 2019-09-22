import React from "react";
import { TopTab } from "./widget/TopTab";
import { BottomTab } from "./widget/BottomTab";

export const Mine = () => {
  return (
    <div className="mine">
      <TopTab type="text" text="我的" />
      <div className="mine__content"></div>
      <BottomTab active="mine" />
    </div>
  );
};
