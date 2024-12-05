console.log(THREE);

// instanciate the scene
const scene = new THREE.Scene();

// initialize mesh

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "pink" })
);

// add mesch in the scende
scene.add(mesh);

const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
//initialize che camera
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); // default values of near is 1 and for far is 2000
camera.position.z = 3;
camera.position.x = 1;
//initialize che canvas

const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);
