import React from 'react';
import Tech from './TOPICS/Tech';
import Sports from './TOPICS/Sports';
import Space from './TOPICS/Space';
import Edu from './TOPICS/Edu';
import Eco from './TOPICS/Eco';


const Topics = (props) => {
    return(
        <topics>
            <Tech topic1={props.topic1} />
            <Sports topic2={props.topic2} />
            <Space topic3={props.topic3} />
            <Edu topic4={props.topic4} />
            <Eco topic5={props.topic5} />
        </topics>
    );
}

export default Topics;