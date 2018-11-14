import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {

        console.log("App - Counters->render");
        const {onReset, onIncrement, onDelete, counters} = this.props;

        return (
            <div>
                <button
                    className="espacamento3 corAzul"
                    onClick={onReset}
                >
                    Reset
                </button>
                {counters.map(
                    counter => (
                        <Counter
                            key={counter.id}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            counter={counter}
                        >
                        </Counter>  
                    ))
                }
            </div>
        );
    }
}

export default Counters;