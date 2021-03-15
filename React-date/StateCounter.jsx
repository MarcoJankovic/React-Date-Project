import React, { } from "react";

const StateCounter = ({ date, aday, rday, aMon, rMon, aYear, rYear, }) => {

    return (
        <>
            <h1>{date} </h1>
            <div class="container">
                <div class="day">
                    <button class="btn-green" onClick={() => { aday(1); }}> Day + </button>
                    <button class="btn-red" onClick={() => { rday(1); }}> Day - </button>
                </div>

                <div class="month">
                    <button class="btn-green" onClick={() => { aMon(1); }}> Month + </button>
                    <button class="btn-red" onClick={() => { rMon(1); }}> Month - </button>
                </div>

                <div class="year">
                    <button class="btn-green" onClick={() => { aYear(1); }}> Year +</button>
                    <button class="btn-red" onClick={() => { rYear(1); }}> Year - </button>
                </div>
            </div>
        </>
    );
};

export default StateCounter;