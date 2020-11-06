import React, {Component} from "react";

class Item extends Component {
    render() {
        const {onDeleteItem, done, onChangeDone, onChangeActive, label, active} = this.props
        const style = {}
        if (done) {
            style.textDecoration = "line-through"
        }
        return (
            <div style={{display: 'flex'}}>
                <li style={style} onClick={onChangeActive}
                    className={"list-group-item " + (active ? 'active' : "")}>{label}
                </li>
                <button style={{float: "right",margin: "10px 0 10px 10px"}} onClick={onDeleteItem} className="btn btn-danger">x</button>
                <button style={{float: "right", margin: "10px 0 10px 10px"}} className="btn btn-success"
                        onClick={onChangeDone}>!
                </button>
            </div>
        )
    }
}


export default Item;