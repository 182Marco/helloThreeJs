// Initialize mesh
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#8be9fd" })
);
cube1.position.set(10, 3, 3);

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
