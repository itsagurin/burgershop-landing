import { useState } from 'react';
import './FoodCart.scss';
import { foodItems } from "../../data/test_data/cartItems.js";

const FoodCart = () => {
    const [items, setItems] = useState(foodItems);

    const updateQuantity = (id, change) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                const newQuantity = Math.max(0, item.quantity + change);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setItems(updatedItems);
    };

    const calculateTotal = () => {
        const totalPrice = items.reduce((accumulator, currentItem) => {
            return accumulator + (currentItem.price * currentItem.quantity);
        }, 0);

        return totalPrice;
    };

    const calculateTotalQuantity = () => {
        const totalQuantity = items.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.quantity;
        }, 0);

        return totalQuantity;
    };

    const shouldShowDeliveryInfo = () => {
        const totalQuantity = calculateTotalQuantity();
        const totalPrice = calculateTotal();

        return totalQuantity > 7 || totalPrice > 2500;
    };

    return (
        <div className="cart">
            <div className="cart-desc">
                <h2>Корзина</h2>
                <div className="quantity-total">
                    {calculateTotalQuantity()}
                </div>
            </div>
            <div className="cart-items">
                {items.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <span className="item-name">{item.name}</span>
                            <span className="item-weight">{item.weight}г</span>
                            <span className="item-price">{item.price}₽</span>
                        </div>
                        <div className="quantity-control">
                            <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="quantity-button"
                            >
                                -
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="quantity-button"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <span>Итого</span>
                <span className="total-price">{calculateTotal()}₽</span>
            </div>
            <button className="order-button">Оформить заказ</button>
            {shouldShowDeliveryInfo() && (
                <div className="delivery-info">
                    <span>🚚 Бесплатная доставка</span>
                </div>
            )}
        </div>
    );
};

export default FoodCart;