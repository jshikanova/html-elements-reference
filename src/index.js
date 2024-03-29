/**
 * Credit to Raymond Zhou [@raymond-zhou](https://stackoverflow.com/users/2371813/raymond-zhou)
 * @see https://stackoverflow.com/a/16494384
 */
const drawOnCanvas = () => {
  const canvasElement = document.getElementById("canvas");

  if (canvasElement) {
    const context = canvasElement.getContext("2d");

    const x = 240;
    const y = 160;
    const innerRadius = 0;
    const outerRadius = 120;
    const radius = 120;

    var gradient = context.createRadialGradient(
      x,
      y,
      innerRadius,
      x,
      y,
      outerRadius
    );
    gradient.addColorStop(0, "white");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(1, "gold");

    context.arc(x, y, radius, 0, 2 * Math.PI);

    context.fillStyle = gradient;
    context.fill();
  }
};

drawOnCanvas();
