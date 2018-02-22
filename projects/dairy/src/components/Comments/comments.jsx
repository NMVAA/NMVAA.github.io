import React from 'react';
import './comments.css';

const Comments = (props) => {
    if (props.selectedItem != null) {
        let commentItems = props.dItems[props.selectedItem].comments.map((item, i) => {
            return <div key={i} className="commentItem">
                <img src={item.userImg} alt="userImg" />
                <p>{item.comment}</p>
            </div>
        })
        return (
            <div className="Comments">
                <h2>{props.dItems[props.selectedItem].name}</h2>
                {commentItems}
                <form>
                    <img src={ null || "http://via.placeholder.com/50/ff305a"} alt="userImg" />
                    <textarea rows="10" cols="45" type="text" onKeyPress={props.addComment} />
                </form>
            </div>
        );
    }
    return (
        <div className="Comments">
            Select Item
        </div>
    );
}

export default Comments;
