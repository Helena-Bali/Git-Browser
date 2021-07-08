import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Header from './header';



const RepositoryName = () => {
  const [content, setContent] = useState()
  const { userName, repositoryName } = useParams();
  useEffect(() => {
    axios.get
    (`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then(it => setContent(it.data))
  }, [userName, repositoryName])
  return (
    <div>
      <Header />
      <div id="description" className="p-4">
      <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )

}
export default RepositoryName