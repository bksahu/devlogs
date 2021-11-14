import React, { useState } from 'react'
import LogForm from './LogForm';

function Logs({ log, removeLog, updateLog }) {
    const [edit, editLog] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateLog(edit.id, value)
        editLog({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <LogForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <div key={log.id}>
            <div>
                <p>{log.text}</p>
                <button onClick={() => editLog({ id: log.id, value: log.text })}>Edit</button>
                <button onClick={() => removeLog(log.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Logs;