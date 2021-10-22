import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { OtherPage } from './OtherPage';
import { Fib } from './Fib';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to='/'>Home</Link>
                    <Link to='/otherpage'>Other Page</Link>
                </div>

                <div>
                    <Route exact path='/' component={Fib} />
                    <Route exact path='/otherpage' component={OtherPage} />
                </div>
            </div>
        </Router>
    );
}

export default App;
