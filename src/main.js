import './style.css'
import { initPortfolioScene } from './three/portfolioScene.js'

initPortfolioScene({
  canvas: document.querySelector('#hero-canvas'),
  sections: document.querySelectorAll('section[data-scene-step]')
})
