import { useState } from 'react';
import { cartSummary } from '../hyper_Checkout/data';
import { Cart } from '../hyper_Checkout/types';

export default function useCheckout() {
    const [cart, setCart] = useState<Cart>(cartSummary);

    /**
     * Update the shipping cost
     */
    const updateShipping = (shippingCost: number) => {
        var localCart = { ...cart };
        localCart['shipping'] = shippingCost;
        localCart['total'] = localCart['sub_total'] + shippingCost;
        setCart(localCart);
    };

    return { cart, updateShipping };
}
