import React, { useEffect, useRef } from 'react';

interface WorldSphereLogoProps {
  size?: number;
  className?: string;
}

export const WorldSphereLogo: React.FC<WorldSphereLogoProps> = ({ size = 42, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;

    const width = size;
    const height = size;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    // Configuración de los puntos en la esfera (más finos y densos)
    const puntos: Array<{ x: number; y: number; z: number; tamaño: number }> = [];
    const cantidad = 900;
    const radio = (size / 2) * 0.82;

    for (let i = 0; i < cantidad; i++) {
      const phi = Math.acos(1 - 2 * Math.random());
      const theta = Math.random() * Math.PI * 2;

      puntos.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
        tamaño: Math.random() * 0.35 + 0.2, // Puntos más pequeños y sutiles
      });
    }

    let rotacion = 0;

    const dibujar = () => {
      ctx.clearRect(0, 0, width, height);

      const centroX = width / 2;
      const centroY = height / 2;

      rotacion += 0.007;

      // Brillo y halo del mundo sutil y transparente
      const gradiente = ctx.createRadialGradient(
        centroX,
        centroY,
        radio * 0.1,
        centroX,
        centroY,
        radio * 1.35
      );

      gradiente.addColorStop(0, 'rgba(2, 132, 199, 0.16)');
      gradiente.addColorStop(0.5, 'rgba(14, 165, 233, 0.06)');
      gradiente.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradiente;
      ctx.beginPath();
      ctx.arc(centroX, centroY, radio * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // Dibujar los puntos proyectados en 3D
      for (const punto of puntos) {
        // Rotación alrededor del eje Y
        const x = punto.x * Math.cos(rotacion) - punto.z * Math.sin(rotacion);
        const z = punto.x * Math.sin(rotacion) + punto.z * Math.cos(rotacion);
        const y = punto.y;

        // Perspectiva
        const perspectiva = 1 / (1.8 - z);
        const px = centroX + x * radio * perspectiva;
        const py = centroY + y * radio * perspectiva;

        // Profundidad y brillo
        const brillo = (z + 1) / 2;
        const tamaño = punto.tamaño * perspectiva * 1.1;

        // Mostrar puntos frontales con contraste elegante sobre fondo claro u oscuro
        if (z > -0.3) {
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.18, tamaño), 0, Math.PI * 2);
          // Color azul/índigo nítido de alta precisión
          ctx.fillStyle = `rgba(3, 105, 161, ${0.25 + brillo * 0.75})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(dibujar);
    };

    dibujar();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div
      className={`relative rounded-full overflow-hidden flex items-center justify-center bg-transparent ${className}`}
      style={{ width: size, height: size }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};
