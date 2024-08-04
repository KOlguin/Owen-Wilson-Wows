// import { React, Component, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// class App extends Component {
//   // Inicia el estado por default
//   constructor(props) {
//     super(props)
//     this.state = { apiResponse: ""}
//   }

//   // fetch los datos que viene de la API y guarda la respuesta en this.state.apResponse
//   callAPI() {
//     fetch("http://localhost:3000/testAPI")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }));
//   }

//   // Metodo del ciclo de vida de React que se encarga de ejecutar callAPI() despues de que el componente se monta
//   componentDidMount() {
//     this.callAPI()
//   }

//   render() {
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <div>
//             <a href="https://vitejs.dev" target="_blank">
//               <img src={viteLogo} className="logo" alt="Vite logo" />
//             </a>
//             <a href="https://react.dev" target="_blank">
//               <img src={reactLogo} className="logo react" alt="React logo" />
//             </a>
//           </div>

//           <h1 className='App-title'>Welcome to Vite + React</h1>
//         </header>
//         {/* La siguiente línea despliega el valor guardado en this.state.apiResponse */}
//         <p className='App-intro'> { this.state.apiResponse } </p>
//       </div>
//     )
//   }
// }

// export default App

import { BrowserRouter as Router } from 'react-router-dom'
import RoutesFunction from "./Routes";

function App() {
  return (
    <Router>
        <RoutesFunction />
    </Router>
  );
}

export default App;

