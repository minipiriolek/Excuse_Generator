import React, { useState } from 'react';
import './App.css'

function DataEntryForm(props: { onAddExcuse: (excuse: string) => void }) {
    return null;
}

function ExcuseList(props: { excuses: string[] }) {
    return null;
}

const App: React.FC = () => {
    const [excuses, setExcuses] = useState<string[]>([]);

    const addExcuse = (excuse: string) => {
        setExcuses((prev) => [...prev, excuse]);
    };

    return (
        <div className="form-container">
            <h1>Excuse Generator</h1>
            <DataEntryForm onAddExcuse={addExcuse}/>
            <ExcuseList excuses={excuses}/>
            <form className="excuse-form">
                <label>
                    <strong>Imię:</strong>
                    <input type="text" name="name"/>
                </label>
                <label>
                    <strong>Powód wymówki:</strong>
                    <select name="reason">
                        <option value="spóźnienie">Spóźnienie</option>
                        <option value="niedostarczenie">Niedostarczenie pracy domowej</option>
                        <option value="brak_odpowiedzi">Brak odpowiedzi na wiadomość</option>
                    </select>
                </label>
                <label>
                    <strong>Poziom wiarygodności:</strong>
                    <input type="range" name="credibility" min="0" max="100"/>
                </label>
                <label>
                    <strong>Data zdarzenia:</strong>
                    <input type="date" name="date"/>
                </label>
                <label>
                    <strong>Poziom kreatywności:</strong>
                    <select name="creativity">
                        <option value="">Sam wymyśl ;)</option>
                        <option value="genialna">Genialna</option>
                        <option value="klasyczna">Klasyczna</option>
                    </select>
                </label>
                <label>
                    <strong>Dodatkowe szczegóły:</strong>
                    <textarea name="details"></textarea>
                </label>
                <label>
                    <strong>Pilność wymówki:</strong>
                    <input type="checkbox" name="urgent"/>
                </label>
                <button type="submit">Wyślij wymówkę</button>
            </form>
        </div>
    );
};

export default App;
