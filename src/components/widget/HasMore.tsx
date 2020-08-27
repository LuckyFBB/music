import React from "react";

interface ISProps {
  handleMore: Function;
  isLoading: boolean;
}

export const HasMore = (props: ISProps) => {
  const { isLoading, handleMore } = props;
  return (
    <div className="loadmore">
      {isLoading ? (
        <span>加载中...</span>
      ) : (
        <span onClick={() => handleMore()}>加载更多</span>
      )}
    </div>
  );
};
