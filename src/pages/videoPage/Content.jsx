import React from 'react';
import {connect} from "react-redux";
import {contentActions} from "./ContentActions";
import {Route, withRouter} from "react-router-dom";
import {ImageComponent} from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";
import ReduxInfiniteScroll from "../../common/ReduxInfiniteScroll";
import {Button, ButtonGroup} from "react-bootstrap";
import {contentConstants} from "./ContentConstants";

class Content extends React.Component {

    loadMore() {
        let {filter, loadContent} = this.props;
        loadContent(filter);
    }

    render() {
        const {items, match, history, filter} = this.props;
        let listItems = items.map((item) =>
            <div key={item.content.id}>
                <ImageComponent item={item} match={match} history={history}/>
            </div>
        );
        return (
            <div style={{marginTop: 10}}>
                <div style={{position: 'fixed', marginTop: '25%', marginLeft: -60}}>
                    <ButtonGroup vertical block>
                        <Button active={filter.page === 0}>1</Button>
                        <Button active={filter.page === 2}>2</Button>
                        <Button active={filter.page === 3}>3</Button>
                        <Button active={filter.page === 4}>{filter.count / contentConstants.PAGE_SIZE}</Button>
                    </ButtonGroup>
                </div>
                <div className="container text-center">
                    < ReduxInfiniteScroll
                        items={listItems}
                        loadMore={this.loadMore.bind(this)
                        }
                        hasMore={filter.hasMore
                        }
                    />
                </div>
                <Route path={`${match.path}/:id`} component={VideoComponent}/>
            </div>
        )
            ;
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