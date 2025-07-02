// import Header from './Header.jsx'
// import Footer from './Footer.jsx';
// import Food from './Food.jsx';
// import Card from './Card.jsx';
//import Button from './Button.jsx';
import Student from './Student.jsx';

function App() {

  return(
    <>
      <Student name="Welcome" age={39} isStudent={false}/> 
      <Student name="Patrick" age={42} isStudent={true}/>
      <Student name="Mohnish" age={10} isStudent={true}/>
      <Student name="Sriman" age={14} isStudent={true}/>
      <Student name="Prabhu"/> 
      {/*<Button/>
      <Header/>
      <Food/>
      <Footer/>
      <Card/>
      <Card/> */}
    </>
  );
 
}

export default App
