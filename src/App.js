import { Route, Switch }from 'react-router-dom'
import MeetState from './context/MeetState';


import Nav from './Components/Layouts/Nav';


import NewMeetup from './pages/NewMeetup';


import Favourite from './pages/Favourite';


import AllMeetup from './pages/AllMeetup';



function App() {
  return (
    <div className="App">
      <MeetState>
      <Nav /> 
        <Switch>
          <Route exact path="/" component={AllMeetup} />
          <Route  path="/new" component={NewMeetup} />
          <Route  path="/favourites" component={Favourite} />
          </Switch>
          </MeetState>
    </div>

  );
}

export default App;
