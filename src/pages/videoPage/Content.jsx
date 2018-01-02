import React from 'react';
import {connect} from "react-redux";
import {contentActions} from "./ContentActions";
import {Route, withRouter} from "react-router-dom";
import {ImageComponent} from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";

class Content extends React.Component {

    componentDidMount() {
        const {items, filter, loadContent} = this.props;
        if (items.length === 0) {
            loadContent(filter);
        }
    }

    render() {
        const {items, match} = this.props;

        let listItems = items.map((item) =>
            <div key={item.contentId}>
                <ImageComponent content={item} match={match}/>
            </div>
        );
        return (
            <div>
                <div className="container text-center">
                    <div>{listItems}</div>
                </div>
                <Route path={`${match.path}/:id`} component={VideoComponent}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {items, filter} = state.content;
    return {
        items,
        filter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadContent: (filter) => dispatch(contentActions.loadContent(filter)),
    }
};

const contentPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));

export default contentPage;