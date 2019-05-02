import React from 'react';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }

        this.onIncrement = this.onIncrement.bind(this);
        this.deIncrement = this.deIncrement.bind(this);
    }

    onIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    deIncrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render () {
        return <CounterPresenter
            counter={this.state.counter}
            onIncrement={this.onIncrement}
            decrement={this.deIncrement}
        />
    }
}