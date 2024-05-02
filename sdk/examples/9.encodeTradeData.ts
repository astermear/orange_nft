import { createSDK, privateKeys } from './0.config'
import { NULL_ADDRESS, OrderSide } from '../src/types/types'

async function test() {
  const sdk1 = createSDK(privateKeys[1])
  
  // 1. query element orders
  const orders = await sdk1.queryOrders({
    asset_contract_address: '0xd077bd42b79eB45F6eC24d025c6025B9749215CE',
    payment_token: NULL_ADDRESS,
    side: OrderSide.SellOrder
  })
  console.log('orders, ', orders)
  
  // 2. encodeTradeData
  const tradeData = await sdk1.encodeTradeData({
    orders: orders
    // quantities: [],  // optional
    // tokenIds: [],    // optional
  })
  console.log('tradeData: ', tradeData)
}

test()
  .then()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
