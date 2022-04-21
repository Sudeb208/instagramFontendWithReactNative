import React from "react";
import { BottomSheetRefProps } from "./BottomSheet";
export const BottomSheetPress = (ref: any, max: number, min: number) => {
  const isActive = ref?.current?.isActive();
  if (isActive) {
    ref?.current?.scrollTo(max);
  } else {
    ref?.current?.scrollTo(min);
  }
};

export const isActiveOnPress = (ref: any) => {
  ref?.current?.scrollTo(0);

  //   if (isActive) {
  //     return true;
  //   }
};
