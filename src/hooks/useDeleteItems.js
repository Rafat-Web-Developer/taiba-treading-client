import React, { useState } from "react";
import { toast } from "react-toastify";

const useDeleteItems = (id) => {
  const [resultData, setResultData] = useState({});
  const url = `http://localhost:5000/item/${id}`;
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
