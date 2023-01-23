type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side is less than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('This is not a valid triangle');
    }
  }

  getArea():number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(
      semiPerimeter
    * (semiPerimeter - this.a)
    * (semiPerimeter - this.b)
    * (semiPerimeter - this.c),
    );

    return Math.round((square) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is less than 0');
    }
  }

  getArea():number {
    const square = Math.floor(
      (Math.PI * this.radius * this.radius) * 100,
    ) / 100;

    return square;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side is less than 0');
    }
  }

  getArea():number {
    const square = Math.round((this.width * this.height) * 100) / 100;

    return square;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
