import React from "react";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const { userName, repositoryName } = useParams();

  return (<div className="bg-indigo-800 font-bold justify-between rounded-lg border shadow-lg p-10">
      <div>
        <Link to="/" id="go-back" className="bg-gray-300 text-black items-center text-center h-8 w-24  font-bold rounded-lg border shadow-lg p-0">
          Go back
        </Link>
      </div>
      { repositoryName && <Link to={`/${userName}`} id="go-repository-list" className="bg-gray-300 text-black items-center text-center h-8 w-24  font-bold rounded-lg border shadow-lg p-0">
          Go to repository list
        </Link> }
      <div id="repository-name" className="bg-indigo-800 text-white font-bold border-none">{userName} repositories:</div>
    </div>
  );
};

export default React.memo(Header);
