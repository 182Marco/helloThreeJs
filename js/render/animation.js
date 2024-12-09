const animate = () => {
  cube1.rotation.x = clock.getElapsedTime() * (Math.PI / 8);
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();
