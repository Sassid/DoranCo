// * Library to manage the states 
import React from 'react'
// *Library to render the application in the html et to updtate elements
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// *SPA = Single Page Application (a website created dynmically with react)
// *SSR = Server Side Rendering (the website is created dynamically in react and then constructed on the server's side and then the html is sent to the web browser

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// Create an objet 'user with 2 keys: firstname and lastname
const user = {
  firstname: 'Roo', 
  age: 223,
}



// *  A component is a React Function taking an object as a parameter and that returns JSX
function Button(props) {
  return (
    <button style={{backgroundColor: "royalblue", color:"white"}}>{props.label}</button>
  )
}

function ContactForm() {
  return (
    <form>
      <input type="text" placeholder='name' />
      <input type="text" placeholder='age' />
      {Button({ label: "Validate" })}
    </form>
  )
}

// ! we can also use variable like so
// function ContactForm() {
//  const buttonProps = {label: 'validate'}
//   return (
//     <form>
//       <input type="text" placeholder='name' />
//       <input type="text" placeholder='age' />
//       {Button(buttonProps)}
//     </form>
//   )
// }

// ?Ternary Function is a conditon written in one line:
//age > 18 ? "Majeur" : "Mineur"

// *Rendering of the app inside the html page by using the ReactDOM library
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Titre text='Created in JSX with React'></Titre>
    <p>{user.age > 18 ? "Legal" : "Mineur"}</p>
    {ContactForm()}
    {Button({label: 'Contact me'})}
    <Button label='Delete'></Button>
  </div>
)

// TODO: Exercice
// Créer un composant Titre qui reçoit un parametre de type objet avec la clé text.
// Dans le composant affiché un h1 en utilisant l'objet reçue en props pour le text du titre
// Ajouter Du style au titre pour changer sa couleur et sa taille
// Utiliser le composant dans le render pour l'afficher

function Titre(props){
  const myStyle = {color: "red", fontSize: "100px"}
return (
  <h1 style={myStyle}>{props.text}</h1>
)
}

