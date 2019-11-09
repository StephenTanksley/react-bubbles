import React, { useState, useEffect } from "react";
import { axiosWithAuth as axios } from '../../utils/api'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [error, setError] = useState()
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  //R of CRUD - Reading the data.
  useEffect(() => {
    axios()
      .get('/colors')
      .then(response => {
        setColorList(response.data)
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  return (
    <>
    <div className = "color-list">
    
    {/* If there's an error, we want to see it on the page. */}
    {error && <div className="error">{`${error}`}</div>}

      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
    </>
  );
};

export default BubblePage;
