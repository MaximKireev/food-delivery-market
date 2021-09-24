import {Rate} from "antd";
import React from "react";

const Ranking = (props) => {
    let ranking = props.ranking.map(item => item.rating).reduce((prev, next) => prev + next, 0)/props.ranking.length

    return (
        <Rate allowHalf defaultValue={ranking} />

    )
}

export default Ranking