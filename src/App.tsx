import React from 'react';
import Front from 'components/front/index';
import 'assets/styles/style.scss';
import Admin from 'components/admin/admin';
import {Route, Routes} from 'react-router-dom';
import SignInScreen from './components/admin/login';
import {useAppSelector} from './core/store/hook';

const App: React.FC = ()=> {
  const isLoggedIn = useAppSelector(state=> state.auth.isFetched);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Front/>}/>
        <Route path="/login" element={<SignInScreen />} />
        <Route path="/admin/*" element={isLoggedIn ? <Admin/> : <SignInScreen/>}/>
      </Routes>
    </div>
  );
};

export default App;
