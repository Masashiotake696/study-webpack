/**
 * Tree Shakingされる
 */
// import { upperCase } from 'lodash-es'
// const text = upperCase('hello webpack app')
// console.log(text)

/**
 * Tree Shakingされない
 */
import _ from 'lodash-es'
const text = _.upperCase('hello webpack app')
console.log(text)