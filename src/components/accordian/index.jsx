//dingle selaction
//multiple selection

import { useState } from "react";
import data from "./data";
import './styles.css'

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSinglesSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMutiple = [...multiple];
        const findIddexOfCurrentId = cpyMutiple.indexOf(getCurrentId)
        console.log(findIddexOfCurrentId);
        if (findIddexOfCurrentId === -1) cpyMutiple.push(getCurrentId)
        else cpyMutiple.splice(findIddexOfCurrentId, 1)

        setMultiple(cpyMutiple);
    }

    console.log(selected);

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick={enableMultiSelection
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSinglesSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                                {
                                    enableMultiSelection ?
                                        multiple.indexOf(dataItem.id) !== -1 &&
                                        <div className="content">{dataItem.answer}</div> :
                                        selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                                }
                            </div>
                        </div>
                    ))
                ) : (<div>No data found !</div>
                )}
        </div>
    </div>
};