import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './components/Comments.js'



function App() {

    return (
        <div>
            <div className="header">
            <h2>First App</h2>
            </div>
            <Comments/>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('app'));