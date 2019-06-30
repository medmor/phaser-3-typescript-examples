import "phaser";

export const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "gameDiv",
  physics: { default: "arcade" }
};

export interface I_initialData {
  player: string;
  topScore: number;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const initialData: I_initialData = {
  player: "med",
  topScore: 0,
  level: 1
};

export const levels = {
  1: {
    rows: 3,
    cols: 5,
    v0: 100
  },
  2: {
    rows: 4,
    cols: 7,
    v0: 200
  },
  3: {
    rows: 5,
    cols: 9,
    v0: 300
  },
  4: {
    rows: 5,
    cols: 11,
    v0: 400
  },
  5: {
    rows: 5,
    cols: 13,
    v0: 500
  },
  6: {
    rows: 5,
    cols: 15,
    v0: 600
  }
};
