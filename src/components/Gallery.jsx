import React, { Component } from 'react';
import { Col, Row, Container, Spinner, Button } from "react-bootstrap"

class Gallery extends Component {

    state = {
        pictures: [
            "./previews/1.jpg",
            "./previews/2.jpg",
            "./previews/3.jpg",
            "./previews/4.jpg",
            "./previews/5.jpg",
            "./previews/6.jpg"
        ],
        modal: false,
        modalImg: undefined,
        modalIndex: -1,
        imageLoad: false
    };

    handleClickImg = () => {
        this.setState({ modal: !this.state.modal })
    }

    changeImage = (i) => {
        if(i < this.state.pictures.length && i > -1){
            this.setState({imageLoad: false})
            this.setState({ modalIndex: i })
            this.setState({ modalImg: require(`${this.state.pictures[i].replace("previews", "fotos")}`).default })
        }
    }

    render() {
        return (
            <div className="app-body">
                <h3 className="mt-5"> GALERIA </h3>
                <Container >
                    <Row>
                        {this.state.pictures.map((e, i) => {
                            return <Col lg={4} sm={6} className="mt-3 col-gallery" key={i}>
                                <img onClick={() => { this.handleClickImg(i); this.changeImage(i); }} className="picture" key={i} src={require(`${e}`).default}></img>
                            </Col>
                        })}
                    </Row>
                </Container>
                {
                    (this.state.modal) ? <div className="gal-modal">
                        <Row className="gal-modal-content mx-0">
                            <Col xs={{ span: 6, order: 6 }} sm={{ span: 1, order: "first" }} className="px-0" onClick={() => { this.changeImage(this.state.modalIndex - 1) }}>
                                <i className="bi-caret-left-fill btn-picture"></i>
                            </Col>
                            <Col xs={{ span: 12, order: 1 }} sm={{ span: 10, order: 6 }} className="m-0 p-0" onClick={this.handleClickImg}>
                                <img src={this.state.modalImg} hidden={!this.state.imageLoad} onLoad={()=>{this.setState({imageLoad: true})}} style={{ width: "100%" }}></img>
                                <Spinner hidden={this.state.imageLoad} animation="border" variant="light"/>
                            </Col>
                            <Col xs={{ span: 6, order: "last" }} sm={{ span: 1, order: "last" }} className="px-0" onClick={() => { this.changeImage(this.state.modalIndex + 1) }}>
                                <i className="bi-caret-right-fill btn-picture"></i>
                            </Col>
                        </Row>
                    </div> : ""
                }
            </div>
        );
    }
}

export default Gallery