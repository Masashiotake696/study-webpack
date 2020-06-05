import { APP_NAME, hello, Figure } from './js/myutil'
import './css/style.css'
import picture from './images/wings.jpg'
import json from './json/sample.json'
import csv from './csv/sample.csv'
import html from './html/sample.html'
import xml from './xml/sample.xml'
import txt from './txt/sample.txt'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/react/App'
import { triangle } from './ts/util'
import './sass/style.scss'
import jQuery from 'jquery'

console.log(APP_NAME)
hello()
console.log(Figure.getTriangle(10, 5))
console.log(Figure.getTriangle(30, 10))

if (process.env.NODE_ENV === 'development') {
  console.log('開発モード')
}

const body = document.getElementsByTagName('body')[0]
body.classList.add('sky')

window.addEventListener('DOMContentLoaded', function () {
  const img = new Image()
  img.src = picture
  document.body.appendChild(img)
}, false)

console.log(json[0].title)

console.log(csv[0][1])

console.log(html)

console.log(xml.data.row[0])
console.log(xml.data.row[1].$.id)
console.log(xml.data.row[1]._)

console.log(txt)

const data = {
  hoge: 'hoooooo',
  fuga: 'gaaaaaa',
  piyo: 'piiiii'
}
const { hoge, ...other } = data
console.log(hoge, other)

ReactDOM.render(<App />, document.getElementById('app'))

console.log(triangle(10, 5))

const sassbox = document.getElementById('sass-box')
sassbox.classList.add('skybox')

const $ = jQuery
console.log($.fn.jquery)
