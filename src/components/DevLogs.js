import React, { useState } from "react";
import LogForm from "./LogForm";
import Logs from "./Logs";

function DevLogs() {
    const [logs, setLogs] = useState([]);
  
    const addLog = log => {
        const newlogs = [log, ...logs]
        
        if (!log.text || /^\s*$/.test(log.text)) {
            return;
        }
        setLogs(newlogs)
    };
  
    const updateLog = (logId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
  
        setLogs(prev => prev.map(item => (item.id === logId ? newValue : item)));
    };
  
    const removeLog = id => {
        const removeArr = [...logs].filter(log => log.id !== id)
  
        setLogs(removeArr);
    };

  
    return (
        <div>
            <h1>Development Log</h1>
            <LogForm onSubmit={addLog} />
            {
                logs.length > 0 ? logs.map((log, index) => {
                    return <Logs log={log} removeLog={removeLog} updateLog={updateLog} />
                })  : "No logs"
            }

        </div>
    )
  }
  
  export default DevLogs;
  