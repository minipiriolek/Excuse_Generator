import React, { useState } from 'react';
import DataEntryForm from './components/DataEntryForm';
import ExcuseList from './components/ExcuseList';

const App: React.FC = () => {
    const [excuses, setExcuses] = useState<string[]>([]);

    const addExcuse = (excuse: string) => {
        setExcuses((prev) => [...prev, excuse]);
    };

    return (
        <div>
            <h1>Excuse Generator</h1>
            <DataEntryForm onAddExcuse={addExcuse} />
            <ExcuseList excuses={excuses} />
        </div>
    );
};

export default App;
https://copilot.microsoft.com/chats/g361hsZvgtdYFBhdEANk8