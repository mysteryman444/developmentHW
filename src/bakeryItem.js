import React from "react";
import './bootsrap.css'


const bakeryItem = ({ props }) => {
    return (
        <div>
            <img class="card-img-top" src={props.img} alt={props.name} />
            <h5 className="card-title">{props.name}&nbsp;&nbsp;${props.price}</h5>
            <h6>Vegan:<b>{(props.vegan) ? 'Yes' : 'No'}</b></h6>
            <h6>Gluten-Free:<b>{(props.gfStatus) ? 'Yes' : 'No'}</b></h6>

            <div className="card-text">{props.description}</div>
        </div>
    );
}
export default bakeryItem;
