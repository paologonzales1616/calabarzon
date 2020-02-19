import React, { useEffect, useContext, useLayoutEffect } from "react";
import { config } from "../../core/config";
import Content from "../../components/content/Content";
import { AppContext } from "../../core/utils/Store";

const Index = () => {
  const { app, setApp } = useContext(AppContext);
  useEffect(() => {
    document.title = config.title + " | Data Visualization";
    setApp({ ...app, page: "visualization" });
    localStorage.page = "visualization";
  }, []);

  useLayoutEffect(() => {}, []);

  async function getDataSet() {
      const res = await fetch(`${config.host}/`)
  }

  return <Content></Content>;
};

export default Index;
