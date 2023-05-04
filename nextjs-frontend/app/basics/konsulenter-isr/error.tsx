"use client"

import React from "react";

export default function Error({ error, reset }: any) {
    React.useEffect(() => {
        console.log('logging error:', error);
    }, [error]);

    return (
        <article className="row">
            <div className="col s12 m6">
                <div className="card red darken-1">
                    <div className="card-content white-text">
                        <p>Error</p>
                        <p>
                            {error?.message}
                        </p>
                    </div>
                    <div className="card-action">
                        <button className="waves-effect waves-light btn" onClick={() => reset()}>Try Again</button>
                    </div>
                </div>
            </div>
        </article>
    )
}