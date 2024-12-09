const animate = () => {
  cube1.rotation.x = clock.getElapsedTime();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();
