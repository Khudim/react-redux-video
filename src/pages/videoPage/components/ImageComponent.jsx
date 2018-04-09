/**
 * Created by Beaver on 21.05.2017.
 */
import React from 'react';
import {host} from "../../../app/FakeBackend";

export const ImageComponent = ({item, match, history}) => {
    const imageSize = {
        width: 180,
        height: 100,
    };

    return (
        <div className='col-md-2 col-sm-2 col-xs-4'>
            <div className='thumbnail'>
                <img src={host + /img/ + item.content.id}
                     onClick={() => history.push(`${match.path}/${item.content.id}`)} style={imageSize}/>
            </div>
        </div>
    )
};
