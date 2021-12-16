class PyramidRectangle {
  constructor(pRect_width, pRect_length, pRect_height) {
    this.pRect_width = pRect_width;
    this.pRect_length = pRect_length;
    this.pRect_height = pRect_height;
  }
  Volume() {
    const baseArea = this.pRect_width * this.pRect_length;
    return (baseArea * this.pRect_height) / 3;
  }
}
class PyramidSquare {
  constructor(pSqu_width, pSqu_height) {
    this.pSqu_width = pSqu_width;
    this.pSqu_height = pSqu_height;
  }
  Volume() {
    const baseArea = this.pSqu_width * this.pSqu_width;
    return (baseArea * this.pSqu_height) / 3;
  }
}
class PyramidTriangle {
  constructor(pTri_width, pTri_length, pTri_height) {
    this.pTri_width = pTri_width;
    this.pTri_length = pTri_length;
    this.pTri_height = pTri_height;
  }
  Volume() {
    const baseArea = (this.pTri_width * this.pTri_length) / 2;
    return (baseArea * this.pTri_height) / 3;
  }
}

class Cuboid {
  constructor(cub_length, cub_width, cub_height) {
    this.cub_length = cub_length;
    this.cub_width = cub_width;
    this.cub_height = cub_height;
  }
  Volume() {
    return this.cub_length * this.cub_width * this.cub_height;
  }
}

class Cylinder {
  constructor(cyl_radius, cyl_height) {
    this.cyl_radius = cyl_radius;
    this.cyl_height = cyl_height;
  }
  Volume() {
    return Math.PI * (this.cyl_radius * this.cyl_radius) * this.cyl_height;
  }
}


const handleSubmissionCylinder = () => {
  const radius = document.getElementById("cyl_input_radius").value;
  const height = document.getElementById("cyl_input_height").value;
  const cyl = new Cylinder(radius, height);
  const cylOutput = Math.PI.toFixed(3) + ' * (' + cyl.cyl_radius + ' * ' + cyl.cyl_radius + ') * ' + cyl.cyl_height + ' = ' + '<strong>' + cyl.Volume().toFixed(3) + '</strong>';
  document.getElementById("cyl").style.display = 'block';
  document.getElementById("cyl").innerHTML = cylOutput;
}

const handleSubmissionCuboid = () => {
  const length = document.getElementById("cub_input_length").value;
  const width = document.getElementById("cub_input_width").value;
  const height = document.getElementById("cub_input_height").value;
  const cub = new Cuboid(length, width, height);
  const cubOutput = cub.cub_length + ' * ' + cub.cub_width + ' * ' + cub.cub_height + ' = ' + '<strong>' + cub.Volume().toFixed(3) + '</strong>';
  document.getElementById("cub").style.display = 'block';
  document.getElementById("cub").innerHTML = cubOutput;
}

const handleSubmissionPyramidTriangle = () => {
  const baseLength = document.getElementById("pTri_input_baseLength").value;
  const baseHeight = document.getElementById("pTri_input_baseHeight").value;
  const height = document.getElementById("pTri_input_height").value;
  const pTri = new PyramidTriangle(baseLength, baseHeight, height);
  const pTriOutput = '(1 / 3) * ((1 / 2) * (' + pTri.pTri_width + ' * ' + pTri.pTri_length + ')) * ' + pTri.pTri_height + ' = ' + '<strong>' + pTri.Volume().toFixed(3) + '</strong>';
  document.getElementById("pTri").style.display = 'block';
  document.getElementById("pTri").innerHTML = pTriOutput;
}

const handleSubmissionPyramidSquare = () => {
  const baseLength = document.getElementById("pSqu_input_baseLength").value;
  const height = document.getElementById("pSqu_input_height").value;
  const pSqu = new PyramidSquare(baseLength, height);
  const pSquOutput = '(1 / 3) * (' + pSqu.pSqu_width + ' * ' + pSqu.pSqu_width + ') * ' + pSqu.pSqu_height + ' = ' + '<strong>' + pSqu.Volume().toFixed(3) + '</strong>';
  document.getElementById("pSqu").style.display = 'block';
  document.getElementById("pSqu").innerHTML = pSquOutput;
}

const handleSubmissionPyramidRectangle = () => {
  const baseLength = document.getElementById("pRect_input_baseLength").value;
  const baseHeight = document.getElementById("pRect_input_baseHeight").value;
  const height = document.getElementById("pRect_input_height").value;
  const pRect = new PyramidRectangle(baseLength, baseHeight, height);
  const pRectOutput = '(1 / 3) * (' + pRect.pRect_width + ' * ' + pRect.pRect_length + ') * ' + pRect.pRect_height + ' = ' + '<strong>' + pRect.Volume().toFixed(3) + '</strong>';
  document.getElementById("pRect").style.display = 'block';
  document.getElementById("pRect").innerHTML = pRectOutput;
}

const handlePyramidChooser = () => {
  const value = document.getElementById("pyramidChooser").value;
  if (value === "triangle") {
    document.getElementById("pyramidFormTriangle").style.display = "flex";
    document.getElementById("pyramidFormSquare").style.display = "none";
    document.getElementById("pyramidFormRectangle").style.display = "none";
  }
  if (value === "square") {
    document.getElementById("pyramidFormTriangle").style.display = "none";
    document.getElementById("pyramidFormSquare").style.display = "flex";
    document.getElementById("pyramidFormRectangle").style.display = "none";
  }
  if (value === "rectangle") {
    document.getElementById("pyramidFormTriangle").style.display = "none";
    document.getElementById("pyramidFormSquare").style.display = "none";
    document.getElementById("pyramidFormRectangle").style.display = "flex";
  }
}