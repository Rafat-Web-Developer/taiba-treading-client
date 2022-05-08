import React, { useState } from "react";
import { toast } from "react-toastify";

const useDeleteItems = (id) => {
  const [resultData, setResultData] = useState({});
  const url = `https://arcane-tundra-05128.herokuapp.com/item/${id}`;
  fetch(url, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      toast("Item Deleted Successfully, Alhamdulillah");
      setResultData(data);
    });
  return [resultData, setResultData];
};

export default useDeleteItems;
