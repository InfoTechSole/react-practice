import React, { Component } from "react";

const ListGroup = props => {
    const { items, textProperty, valueProperty } = props;

    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    className="list-group-item"
                    key={item[valueProperty]}
                    onClick={() => this.onGenreSelect(item)}
                >
                    {item[textProperty]}
                </li>
            ))}
            {/* <li className="list-group-item">All Genres</li> */}
        </ul>
    );
};

export default ListGroup;
