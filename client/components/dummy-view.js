import React from "react";
import { Route, Switch } from 'react-router-dom'
import Head from './head'
import MainPage from './main-page'
import RepositoryList from './repository-list'
import RepositoryName from './reposytory-name'


const Dummy = () => {
   return (
    <div>
      <Head title="Hello" />
      <div>
        <Switch>
          <Route exact path="/" component={() => <MainPage />} />
          <Route exact path="/:userName" component={() => <RepositoryList />} />
          <Route exact path="/:userName/:repositoryName" component={() => <RepositoryName />} />
        </Switch>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
