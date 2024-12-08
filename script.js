// Instantiate the scene
const scene = new THREE.Scene();

// Initialize mesh
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#8be9fd" })
);
cube1.position.set(3, 3, 3);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#00ff00" })
);

cube2.position.set(4, -1, -1);
cube2.rotation.y = Math.PI / 0.75;

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshBasicMaterial({ color: "#ff6347" })
);
sphere.position.set(10, 2, 0);

const group = new THREE.Group();
group.position.x = -5;
group.add(cube1, cube2, sphere);

// Add meshes to the scene
scene.add(group);

const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

scene.add(new THREE.AxesHelper(5));

// Initialize the camera
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); // Default values: near=1, far=2000
camera.position.z = 7;
camera.position.x = 3;
camera.position.y = 3;

// Initialize the canvas
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

// Set the background color to #282a36
renderer.setClearColor("#282a36");

// Render the scene
renderer.render(scene, camera);
