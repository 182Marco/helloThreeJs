const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#00ff00" })
);

cube2.position.set(4, -1, -1);
cube2.rotation.y = Math.PI / 0.75;
