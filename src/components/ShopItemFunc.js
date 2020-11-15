import React from "react";
import ShopItem from "../models/ShopItem";
import PropTypes from "prop-types";

class ShopItemFunc extends React.Component {
    static propTypes = {
        item: PropTypes.instanceOf(ShopItem).isRequired,
    }

    render() {
        const {brand, title, description, descriptionFull, price, currency} = this.props.item;

        return <div className="main-content">
            <h2>{title}</h2>
            <h1>{brand}</h1>
            <h3>{description}</h3>
            <div className="description">
                {descriptionFull}
            </div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{currency}{price.toFixed(2)}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>;
    }
}

export default ShopItemFunc;
