import React, { PropTypes } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Grid, Row, Col } from "react-bootstrap";
import Comic from "../Comic/Comic";
import Loader from "../Loader/Loader";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
        this.loadData = this.loadData.bind(this);
    }

    loadData(page) {
        fetch(`/api/comic/get?page=${page}`)
            .then(r => r.json())
            .then(({success, data = []}) => {
                let newData = [...this.state.data];
                Array.prototype.push.apply(newData, data);
                this.setState({data: newData});
            }).catch((e) => console.log("Oops!", e));
    }
    render() {
        const {data = []} = this.state;
        return (
            <Grid>
                <Row className="show-grid">
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadData}
                        hasMore={true}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        {data.map((d, idx) => (
                        
                            <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                            <Comic {...d}/>
                            </Col>
                        ))}
                    </InfiniteScroll>
                </Row> 
            </Grid>
 
        );
    }
}


export default List;