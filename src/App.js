import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Homepage from './pages/homepage/Homepage';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <BrowserRouter>
      
       <Header/>
       <Switch>
         <div className='' style={{minHeight:'80vh',width:'100%', padding:'20px 70px'}}>
         <Route exact path='/' component={Homepage}/>
         <Route exact path='/about' component={About}/>
         <Route exact path='/contacts' component={Contacts}/>
         <Route exact path='/skills' component={Skills}/>
         </div>
       </Switch>
       <Footer/>
     </BrowserRouter>
  );
}

export default App;
