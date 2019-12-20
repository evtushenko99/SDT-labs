import React from 'react';
import '../styles/App.css';
import PowerView from './PowerView';

/**
 * Главный компонент.
 */
class App extends React.Component {

    /**
     * Конструктор класса `App`.
     * @param props объект со свойствами.
     */
    constructor(props) {
        super(props);
    }

    /**
     * Отрисовывает компонент.
     */
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Технологии разработки ПО</p>
                    <p>Вариант 5</p>
                    <PowerView />
                </header>
            </div>
        );
    }
}

export default App;