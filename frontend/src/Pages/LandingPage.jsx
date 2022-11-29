import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Crousel from "../Components/Crousel";
import DataGrid from "../Components/DataGrid";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/AppReducer/action";
import Pagination from "../Components/Pagination";
import Filter from "../Components/Filter";

const LandingPage = () => {
  const dispatch = useDispatch();
  const capsulesData = useSelector((store) => store.AppReducer.data);
  const [data, setData] = useState(capsulesData);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    setData(capsulesData);
    console.log(page)
  }, [capsulesData]);

  console.log(data);

  return (
    <Box>
      <Navbar />
      <Crousel />
      <Filter data={data} setData={setData}/>
      <DataGrid data={data} />
      <Pagination page={page} setPage={setPage}/>
      <Footer />
    </Box>
  );
};

export default LandingPage;
