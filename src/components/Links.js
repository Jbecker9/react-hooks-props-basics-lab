import React from "react";

function Links(prop){
    return (
        <div id = "links">
            <h3>Links</h3>
            <a href={prop.user.github}>{prop.user.github}</a>
            <a href={prop.user.linkedin}>{prop.user.linkedin}</a>
        </div>
    )
}

export default Links