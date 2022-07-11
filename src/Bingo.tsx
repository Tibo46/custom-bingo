import { bingoCollection } from "./services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Container, Grid, Stack } from "@mui/material";
import BingoCard from "./BingoCard";
import { BingoModel } from "./models/BingoModel";

const Bingo = () => {
  // @ts-ignore
  const [bingos, loading, error] = useCollection<BingoModel>(bingoCollection, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  console.log(bingos);
  return (
    <Container sx={{ py: "50px" }}>
      <Stack
        alignContent="center"
        justifyContent="center"
        minHeight="calc(100vh - 100px)"
      >
        <Grid container={true} spacing={2}>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {bingos &&
            bingos.docs.map((bingoDoc) => (
              <Grid item={true} xs={6} sm={3} md={3} key={bingoDoc.id}>
                <BingoCard id={bingoDoc.id} bingo={bingoDoc.data()} />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Bingo;
