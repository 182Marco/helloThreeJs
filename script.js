// Instantiate the scene
const scene = new THREE.Scene();

// Initialize mesh
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#8be9fd" })
);

// mesh position
mesh.position.x = 2;
mesh.position.y = 1;
mesh.position.z = 4;

// Add mesh to the scene
scene.add(mesh);

const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Initialize the camera
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); // Default values: near=1, far=2000
camera.position.z = 7;
camera.position.x = 0;
camera.position.y = 0;

// Initialize the canvas
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

// Set the background color to #282a36
renderer.setClearColor("#282a36");

// Render the scene
renderer.render(scene, camera);
