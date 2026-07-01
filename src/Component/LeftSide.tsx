import React, { useState } from "react";
import type { Note } from "../App";

type LeftSideProps = {
    addNote: (note: Note) => void;
};

const LeftSide = ({ addNote }: LeftSideProps) => {
    
    const [description,setDescription] = useState<string>("")
    const Change = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setDescription(e.target.value)
    };
    

    const [title, setTitle] = useState<string>("")
    const Change2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    };
    const submitHandler = (e: React.FormEvent<HTMLFormElement> ): void => {
        e.preventDefault();
        addNote({ title, description })
        setDescription("")
        setTitle("")

    };

    return (
        <div className="pt-8 px-8 w-full lg:w-1/2">
            <form
                onSubmit={submitHandler}
                className="flex flex-col"
            >
                <input
                    value={title}
                    onChange={Change2}
                    className="text-bold  px-3 py-2 border-4  border-gray-300 rounded-xl outline-none"
                    type="text"
                    placeholder="Enter Topic/Tag"
                />

                <textarea
                value={description}
                onChange={Change}
                    className=" mt-4 px-3 py-2 border-4 h-64 border-gray-300 rounded-xl resize-none  outline-none"
                    placeholder="Description"
                />

                <button
                    className="self-end mt-2 px-5 py-1 bg-blue-900  rounded-lg hover:cursor"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default LeftSide;
