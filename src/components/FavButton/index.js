import React from "react";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import {Button} from "./styles";

export const FavButton = ({isLiked, likes, onClick}) => {
  const Icon = isLiked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}


