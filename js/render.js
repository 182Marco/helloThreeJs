// Initialize the canvas
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

// Set the background color to #282a36
renderer.setClearColor("#282a36");

// Render the scene
renderer.render(scene, camera);
