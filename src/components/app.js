import React, {Component} from 'react';
import List from "./list";
import './app.css'

class App extends Component {
    render() {
        return (
            <div className="parent-container">
                <header>
                    <h1>Todo List</h1>
                </header>
                <main>
                    <List/>
                </main>
            </div>
        );
    }
}

export default App;