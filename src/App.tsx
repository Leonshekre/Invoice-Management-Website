import React, { Component } from 'react'
import SetupPage from './SetupPage';
import ManagerListPage from './ManagerListPage';
const DEBUG: boolean = true;

type Page = "SetupPage" | "ManagerListPage" | "ManagerDetailsPage" | "EmployeeListPage" | "EmployeeDetailsPage";

type AppState = {
  currPage: Page;
}



// ? Component<{}, AppState>
export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {currPage: "SetupPage"};
  }

  // ? why not "render() {}"
  render () {
    if (this.state.currPage === "SetupPage") {
      return <SetupPage/>
    } else if (this.state.currPage === "ManagerListPage") {
      return <ManagerListPage/>
    } else {
      return <div>What</div>
    }
  }
}
