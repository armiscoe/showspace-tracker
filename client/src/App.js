import React, {Component} from 'react';
import Navbar from "./components/Navbar"
import ShowList from "./components/ShowList"
import ShowModal from './components/ShowModal'
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions'
import "./App.css"

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render(){
  return (
    <Provider store={store}>
    <div className="App" style={{backgroundColor:'red'}}>
      <Navbar />
      <ShowModal />
      <ShowList />
    </div>
    </Provider>
  )
  }
}

export default App;
