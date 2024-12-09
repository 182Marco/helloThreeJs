const animate = () => {
  cube1.rotation.x += 0.01;
  // Render the scene
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();
