import React from "react";

const ListGroup = props => {
    const { items, textProperty, valueProperty, selectedItem } = props;

    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    className={
                        item === selectedItem
                            ? "list-group-item active"
                            : "list-group-item"
                    }
                    key={item[valueProperty]}
                    onClick={() => props.onItemSelect(item)}
                >
                    {item[textProperty]}
                </li>
            ))}
            {/* <li className="list-group-item">All Genres</li> */}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;
