/**
 * Created by Beaver on 21.05.2017.
 */
import React, {Component} from 'react';
import {LinkContainer} from "react-router-bootstrap";

export const ImageComponent = ({content, match}) => {
    const imageSize = {
        width: 180,
        height: 100
    };

    return (
        <div className='col-md-2 col-sm-2 col-xs-4 video-col'>
            <div className='thumbnail'>
                <LinkContainer to={`${match.path}/${content.contentId}`}>
                    <img src={content.img} style={imageSize}/>
                </LinkContainer>
            </div>
        </div>
    )
};
