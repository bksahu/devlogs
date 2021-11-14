import React, { useState, useEffect, useRef } from 'react'

function LogForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            // TODO: make id uuid
            id: Math.floor(Math.random() * 10000),
            "title": new Date().toString(),
            text: input
        });
        setInput('');
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                        <input type="text"
                            placeholder="Log your daily activities"
                            value={input}
                            name="text"
                            onChange={handleChange}
                            ref={inputRef} />
                        <button  onSubmit={handleSubmit}>Update</button>
                    </>
                ) :
                    (
                        <>
                            <input type="text"
                                placeholder="Log your daily activities"
                                value={input}
                                name="text"
                                onChange={handleChange}
                                ref={inputRef} />
                            <button onSubmit={handleSubmit}>Add Log</button>
                        </>
                    )
                }


            </form>

        </div>
    )
}

export default LogForm;