import * as React from "react";
import { Reorder } from "framer-motion";

interface Props {
  item: any;
  displayColor: string;
  width: string;
  key: any;
}

export const Item = ({ item, displayColor, width, key }: Props) => {
  return (
    <Reorder.Item
      value={item}
      id={item.position}
      className={"color-swatch"}
      style={{ backgroundColor: displayColor, width: width }}
      key={key}
    />
  );
};
