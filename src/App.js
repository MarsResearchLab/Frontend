import './App.css';
import TopBar from './components/TopBar';
import ViewmodeModal from './components/ViewmodeModal';
import { useState } from "react"
import MainPage from './pages/MainPage';

function App() {

  const [viewmode, setViewmode] = useState(0);
  const [viewmodeVisible, setViewmodeVisible] = useState(false);

  var handleVisible = () => {
    setViewmodeVisible(!viewmodeVisible);
  }

  var handleViewmode = () => {
    if (viewmode == 0)
      setViewmode(1);
    else
      setViewmode(0);
  }

  return (
    <div className="App">
      <TopBar handleClick={handleVisible} viewmode={viewmode}></TopBar>
      <div className="app-viewmode-modal" style={{display: viewmodeVisible ? "block" : "none"}}>
        <ViewmodeModal handleClick={handleViewmode} viewmode={viewmode}></ViewmodeModal>
      </div>
      <div className='app-main-page'>
      <MainPage></MainPage>
      </div>
    </div>
  );
}

export default App;
