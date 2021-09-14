import React from "react";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80';

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
      <Image src={cover} />
      {emoji}
  </Anchor>
)
