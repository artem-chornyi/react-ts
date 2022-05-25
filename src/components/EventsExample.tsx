import React, { FC, useState,useRef } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clikHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value, 'useState');
        console.log(inputRef.current?.value, 'useRef');
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP');
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input
                value={value}
                placeholder='useState'
                type='text'
                onChange={ changeHandler }
            />
            <input
                ref={ inputRef }
                placeholder='useRef'
                type='text'
            />
            <button onClick={ clikHandler }>
                Click me
            </button>
            <div
                draggable
                onDrag={ dragHandler }
                style={{
                    width: 200,
                    height: 200,
                    background: 'red'
                }}
            ></div>
            <div
                onDrop={ dropHandler }
                onDragLeave={ leaveHandler }
                onDragOver={ onDragOverHandler }
                style={{
                    width: 200,
                    height: 200,
                    background: isDrag ? 'blue' : 'red',
                    marginTop: 20
                }}
            ></div>
        </div>
    )
}

export default EventsExample;