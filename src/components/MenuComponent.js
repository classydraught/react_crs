import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);

        console.log('Menu constructor is mounted');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish, comments: dish.comments });

    }


    componentDidMount() {
        console.log("Component did mounted");
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );
        });
        console.log("Render is invoked");
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

            </div>


        );

    }
}

export default Menu;





