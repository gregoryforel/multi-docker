import React from 'react';
import axios from 'axios';

export const Fib = () => {
    const [seenIndexes, setSeenIndexes] = React.useState([]);
    const [values, setValues] = React.useState({});
    const [index, setIndex] = React.useState('');

    React.useEffect(() => {
        const fetchValues = async () => {
            const values = await axios.get('/api/values/current');
            setValues(values.data);
        };

        const fetchIndexes = async () => {
            const seenIndexes = await axios.get('/api/values/all');
            setSeenIndexes(seenIndexes.data);
        };

        fetchValues();
        fetchIndexes();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('/api/values', {
            index,
        });
        setIndex('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your index:</label>
                <input
                    value={index}
                    onChange={(event) => setIndex(event.target.value)}
                />

                <button>Submit</button>
            </form>

            <h3>Indexes I have seen:</h3>
            {seenIndexes
                .map(({ number }) => {
                    return number;
                })
                .join(', ')}
            <h3>Calculated Values:</h3>
            {Object.keys(values).map((value) => {
                return (
                    <div key={value}>
                        For index {value}, I calculated {values[value]}
                    </div>
                );
            })}
        </div>
    );
};
