import React from "react";
import cx from "classnames";

interface ISProps {
  title: string;
  type: string;
  hot?: Array<{}>; //热门搜索
  list?: Array<{}>;
}

export const SearchList = (props: ISProps) => {
  const { hot, title, type, list } = props;

  const renderSearch = () => {
    switch (type) {
      case "hot":
        return hot && hot.length
          ? hot.map((item: any, index: number) => (
              <div className="searchlist__item" key={item.searchWord}>
                <span
                  className={cx("index", {
                    index__active: index < 3
                  })}
                >
                  {index + 1}
                </span>
                <div className="item">
                  <div className="item__line">
                    <span className="searchWord">{item.searchWord}</span>
                    <span className="score">{item.score}</span>
                    {item.iconType !== 0 && (
                      <img
                        src={item.iconUrl}
                        className={cx("icon", {
                          icon__five: item.iconType === 5
                        })}
                      />
                    )}
                  </div>
                  <span className="content">{item.content}</span>
                </div>
              </div>
            ))
          : null;
      case "content":
        return list && list.length
          ? list.map((item: any) => {
              return <div key={item.id}>{item.name}</div>;
            })
          : null;
    }
  };
  return (
    <div className="searchlist">
      <p className="searchlist__title">{title}</p>
      <div className="searchlist__content">{renderSearch()}</div>
    </div>
  );
};
