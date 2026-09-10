# Three.js Portfolio

An interactive portfolio application built with Three.js and Vite.

## Features

- Modular Three.js setup with dedicated scene, camera, renderer, controls, lighting, and effects modules
- Animated 3D hero showcase with rotating geometric meshes
- Orbit mouse interaction for the hero scene
- Scroll-based smooth camera transitions between portfolio sections
- Starfield particle background and layered lighting (ambient, directional, point)
- Portfolio layout with Hero, About, Projects, and Contact sections
- Responsive design and smooth section navigation
- Vite development workflow with hot reload and source maps in production builds

## Tech Stack

- [Three.js](https://threejs.org/)
- [Vite](https://vite.dev/)
- Vanilla JavaScript + CSS

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  main.js
  style.css
  three/
    camera.js
    controls.js
    lighting.js
    portfolioScene.js
    renderer.js
    scene.js
    shapes.js
    stars.js
```
