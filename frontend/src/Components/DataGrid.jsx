import { Box } from "@chakra-ui/react";
import React from "react";
import ItemCard from "./ItemCard";

const DataGrid = ({data}) => {
  return (
    <Box
      w="90%"
      m="auto"
      mt="16"
      display="grid"
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="12"
    >
      {data.map((elem) => (
        <ItemCard {...elem} key={elem.capsule_serial} />
      ))}
    </Box>
  );
};

export default DataGrid;
