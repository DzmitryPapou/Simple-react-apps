import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer' // изменили импорт
import PageContainer from '../containers/PageContainer.js' // изменили импорт

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageContainer />
        <UserContainer />
      </div>
    )
  }
}

export default App