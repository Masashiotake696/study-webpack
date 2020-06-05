import $ from 'jquery'
import add from './modules/add'
import tax from './modules/tax'

const item1Price = 400
const item2Price = 600
const totalPrice = add(item1Price, item2Price)
const salesTax = 1.10
const priceIncludeTax = tax(totalPrice, salesTax)

$('body').text(priceIncludeTax)