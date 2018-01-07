/**
 * Created by Beaver on 21.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {contentActions} from "../ContentActions";
import {host} from "../../../app/FakeBackend";

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: this.props.video.height,
            width: this.props.video.width
        };
        this.clickOutside = this.clickOutside.bind(this);
        this.clickArrows = this.clickArrows.bind(this);
    }

    clickArrows(event) {
        event.preventDefault();
        const {items, history, video} = this.props;

        let index = items.indexOf(video);

        if (event.key === 'ArrowLeft') {
            index--;
            if (index < 0) {
                index = items.length - 1;
            }
        } else if (event.key === 'ArrowRight') {
            index++;
            if (index >= items.length) {
                index = 0;
            }
        }
        let nextId = items[index].contentId;
        history.push(`./${nextId}`)
    }

    clickOutside() {
        this.props.history.push('./')
    }

    componentDidMount() {
        document.body.addEventListener('keydown', this.clickArrows, false);
        document.body.addEventListener('click', this.clickOutside, false);
    }

    componentWillUnmount() {
        document.body.removeEventListener("keydown", this.clickArrows, false);
        document.body.removeEventListener('click', this.clickOutside, false);
    }

    resizeVideo(event) {
        event.preventDefault();
        let divider;
        let delta = event.nativeEvent.wheelDelta;
        if (delta >= 120) {
            divider = 0.9;
        } else if (delta <= 120) {
            divider = 1.1;
        }
        this.setState({
                height: this.state.height / divider,
                width: this.state.width / divider
            }
        )
    }

    render() {
        let {match} = this.props;
        const divStyle = {
            position: 'fixed',
            right: '50%',
            backgroundColor: '#555555',
            top: window.innerHeight / 2 + 'px',
            height: this.state.height,
            width: this.state.width,
            marginTop: '-' + this.state.height / 2 + 'px',
            marginRight: '-' + this.state.width / 2 + 'px'
        };

        return (
            <div>
                {
                    <video onWheel={this.resizeVideo.bind(this)}
                           src={host + '/video/' + match.params.id}
                           style={divStyle}
                           type="video/webm"
                           controls
                           loop
                           autoPlay/>
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const {items} = state.content;
    const video = items.find((item) => item.contentId === Number(ownProps.match.params.id));
    return {
        video,
        items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadContentById: (id) => dispatch(contentActions.loadContentById(id)),
    }
};

const VideoComponent = withRouter(connect(mapStateToProps, mapDispatchToProps)(Video));

export default VideoComponent;

Video.defaultProps = {
    video: {
        height: 100,
        width: 180
    }
};

Video.propTypes = {
    video: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number
    })
};