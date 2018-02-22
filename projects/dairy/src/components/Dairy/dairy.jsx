import React from 'react';
import './dairy.css';
const Dairy = (props) => {
    let items = props.dItems.map((item, index) => {
        return <div className="item clearfix" key={index} data-index={index} onClick={props.renderComments}>
            <div className="selected"></div><span className="itemName" data-index={index}>{item.name}</span> <span  className="badge" data-index={index}>&nbsp;&nbsp;{item.comments.length}&nbsp;&nbsp;</span>
            <div  className="delete clearfix" data-tag={index} onClick={props.deleteItem}>Delete</div>
        </div>
    })
    const submitHandler = (e) => {
        if(e.keyCode === 13){
        e.preventDefault();
        }
    }
    return (
        <div className="Dairy">
            <h1>Items</h1>
            <form action="">
                <input placeholder="Type name here..." type="text" onKeyDown={submitHandler} />
                <div className="addNew clearfix" onClick={props.addNewItem}>Add new</div>
            </form>
            {items}
        </div>
    );
}

export default Dairy;
