// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(witdh = 80, height = 60) {this.width = witdh;this.height = height;}
export function Position(x = 0, y = 0) {this.x = x;this.y = y;}
Size.prototype.resize = function resize(witdh, height) {this.width = witdh;this.height = height;};
Position.prototype.move = function move(x, y) {this.x = x;this.y = y;};

export function changeWindow(programWindow) {
  programWindow.resize({ width: 400, height: 300 });
  programWindow.move({ x: 100, y: 150 });
  return programWindow;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    this.size.width = Math.min(Math.max(newSize.width, 1),this.screenSize.width - this.position.x);
    this.size.height = Math.min(Math.max(newSize.height, 1), this.screenSize.height - this.position.y);
  }

  move(newPosition) {
    this.position.x = Math.min(Math.max(newPosition.x, 0), this.screenSize.width - this.size.width);
    this.position.y = Math.min(Math.max(newPosition.y, 0), this.screenSize.height - this.size.height);
  }
}
