import React, { Component } from 'react';
// import { DISHES } from '../shared/dishes';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Dish extends Component {





    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }


    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments;
            return (
                <div>
                    <h4>Comments</h4>

                    {comments.map(comment => {
                        return (
                            <div>
                                <p>{comment.comment}</p>
                                <p> -- {comment.author} , {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit"
                                }).format(new Date(Date.parse(comment.date)))}</p>

                            </div>
                        );
                    })}


                </div>
            );
        } else return <div />;
    }





    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>

        );
    }
}


export default Dish;


