import 'react';
import './App.css'
import Header from './components/Header';
import Main from "./pages/main/main.jsx";
const App = () => {
    return (
        <div>
            <Header/>
            <Main />
        </div>
    );
};

export default App;