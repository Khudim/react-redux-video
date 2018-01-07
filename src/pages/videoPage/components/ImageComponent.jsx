/**
 * Created by Beaver on 21.05.2017.
 */
import React from 'react';
import {host} from "../../../app/FakeBackend";

export const ImageComponent = ({content, match, history}) => {
    const imageSize = {
        width: 180,
        height: 100,
    };

    return (
        <div className='col-md-2 col-sm-2 col-xs-4'>
            <div className='thumbnail'>
                <img src={host + /img/ + content.contentId}
                     onClick={() => history.push(`${match.path}/${content.contentId}`)} style={imageSize}/>
            </div>
        </div>
    )
};
