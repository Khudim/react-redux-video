/**
 * Created by Beaver on 21.05.2017.
 */
import React from 'react';

export const ImageComponent = ({content, match, history}) => {
    const imageSize = {
        width: 180,
        height: 100,
    };

    return (
        <div className='col-md-2 col-sm-2 col-xs-4'>
            <div className='thumbnail'>

                <img
                    src="http://n1s2.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/940x627_1_5a0bfdc1ca88097a61d2d64668c61ef9@940x627_0xc0a839a4_18087198581488362059.jpeg"
                     onClick={() => history.push(`${match.path}/${content.contentId}`)} style={imageSize}/>
            </div>
        </div>
    )
};
