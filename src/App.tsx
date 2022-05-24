import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
    return (
        <div>
            <Card
                width='200px'
                height='200px'
                variant={CardVariant.outline}
                onClick={(num) => console.log(num,'test clik')}
            >
                <button>Click</button>
            </Card>
        </div>
    );
}

export default App;
