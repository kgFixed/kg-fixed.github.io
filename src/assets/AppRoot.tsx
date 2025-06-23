import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Ror from '../pages/Ror_org';
import Orcid from '../pages/Orcid_org';

function AppRoot() {

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage /> }/>
            <Route path='/ror' element={<Ror /> }/>
            <Route path='/orcid' element={<Orcid /> }/>
        </Routes>
      </Router>
    </>
  )
}

export default AppRoot
