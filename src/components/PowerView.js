import React from 'react';
import '../styles/PowerView.css'
import { isNumber } from 'util';

/**
 * Компонент React. Форма ввода цвета.
 */
class PowerView extends React.Component {

    /**
     * Конструктор класса.
     * @param props объект со свойствами.
     */
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            power: 0
        };
    }

    onNumberChanged(value) {
        console.log("New Number: " + value)
        this.setState({ number: value })
    }

    onPowerChanged(value) {
        console.log("New Power: " + value)
        this.setState({ power: value })
    }

    onNewExpression(number, power) {
        console.log("Number is " + number + "; Power is " + power);

        if (isNaN(number)) {
            throw new Error("Основание введено с ошибкой")
        }

        if (isNaN(power)) {
            throw new Error("Степень введена с ошибкой")
        }

        return Math.pow(+number, +power);
    }

    /**
     * Отрисовывает компонент.
     */
    render() {
        let result;
        try {
            console.log("Считаем результат");
            result = this.onNewExpression(+this.state.number, +this.state.power)
        } catch (error) {
            result = error.message;
        }
        return (
            <div>
                <input id="number" type="text" onChange={(event) => this.onNumberChanged(event.target.value)} value={this.state.number} />
                <input id="power" type="text" onChange={(event) => this.onPowerChanged(event.target.value)} value={this.state.power} />
                <p id="result">{result}</p>
            </div>
        );
    }
}
export default PowerView;