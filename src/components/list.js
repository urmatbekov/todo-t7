import Item from "./item";
import React, {Component} from "react";

class List extends Component {

    state = {
        data: [
            {id: 7, label: "Do home work", active: false, done: false},
            {id: 11, label: "Read a book", active: false, done: false},
            {id: 114, label: "Clean a new-book", active: false, done: false},
        ]
    }

    onChangeActive = (id) => () => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            if (index !== -1) {
                const newObj = {...data[index]}
                newObj.active = !newObj.active
                return {data: [...data.slice(0, index), newObj, ...data.slice(index + 1)]}
            }
        })
    }

    onChangeDone = (id) => () => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            if (index !== -1) {
                const newObj = {...data[index]}
                newObj.done = !newObj.done
                return {data: [...data.slice(0, index), newObj, ...data.slice(index + 1)]}
            }
        })
    }

    onDeleteItem = (id) => () => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            return {data: [...data.slice(0, index), ...data.slice(index + 1)]}
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.data.map((item) => {
                    return <Item onChangeDone={this.onChangeDone(item.id)}
                                 onChangeActive={this.onChangeActive(item.id)}
                                 onDeleteItem={this.onDeleteItem(item.id)}
                                 key={item.id} {...item}/>
                })}
            </ul>
        )
    }
}


export default List;