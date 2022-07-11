import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { BingoModel } from "./models/BingoModel";
import { bingoCollection } from "./services/firebase";

const BingoCard: React.FC<{ bingo: BingoModel; id: string }> = ({
  bingo,
  id,
}) => {
  const handleClick = async () => {
    await updateDoc(doc(bingoCollection, id), {
      done: !bingo.done,
    });
  };

  return (
    <Card
      sx={{ height: "100%", background: bingo.done ? "#018294" : "#F0EAE3" }}
    >
      <CardActionArea
        sx={{ height: "100%", minHeight: "150px", textAlign: "center" }}
        onClick={handleClick}
      >
        <CardContent>
          <Typography
            sx={{ textDecoration: bingo.done ? "line-through" : "none" }}
          >
            {bingo.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BingoCard;
