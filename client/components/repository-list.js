import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./header";


const RepositoryList = () => {
  const { userName } = useParams();
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then(it => {
      const repositoryName = it.data.map((item, index) =>
        <div key="list">
          {index + 1} <Link to={`/${userName}/${item.name}`}>{item.name}</Link>
        </div>
      );
      setValue(repositoryName);
    });
  }, [userName]);
  return (
    <div>
      <Header />
      <div>
        {value}
      </div>
    </div>
  );
};

export default RepositoryList;