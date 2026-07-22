import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroOrb() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 3.4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Wireframe globe (latitude/longitude sphere)
    const sphereGeo = new THREE.SphereGeometry(1.15, 36, 24);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
    });
    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(sphereGeo),
      wireMat,
    );
    globeGroup.add(wireframe);

    // Inner soft glow
    const glowGeo = new THREE.SphereGeometry(1.02, 48, 48);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.05,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    globeGroup.add(glow);

    // Orbit ring
    const ringGeo = new THREE.TorusGeometry(1.55, 0.005, 8, 128);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.4;
    globeGroup.add(ring);

    // Slight tilt like Earth's axis
    globeGroup.rotation.z = 0.35;

    let raf = 0;
    const animate = () => {
      wireframe.rotation.y += 0.0035;
      glow.rotation.y += 0.0035;
      ring.rotation.z += 0.002;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      sphereGeo.dispose();
      wireMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
