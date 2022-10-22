/* eslint-disable*/
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('adding to cart');
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('you must be logged in to do this');
  }

  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields:'id,quantity'
  });

  const [existingCartItem] = allCartItems;
  console.log(allCartItems.length);
  if (existingCartItem) {
    console.log(`this item is already in teh ${existingCartItem.quantity} cart`);
console.log(existingCartItem);
console.log(existingCartItem.user);
console.log(existingCartItem.quantity);
console.log(existingCartItem.quantity+1);
  return await context.lists.CartItem.updateOne({
    id: existingCartItem.id,
    data: { quantity: existingCartItem.quantity + 1 },
  });
}
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });

}
export default addToCart;
