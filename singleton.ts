// singleton

class GameManagerSingleton {
  private static instance: GameManagerSingleton;

  private constructor() {}

  public static getInstance(): GameManagerSingleton {
    if (!GameManagerSingleton.instance) {
      GameManagerSingleton.instance = new GameManagerSingleton();
    }
    return GameManagerSingleton.instance;
  }

  public startGame(): void {
    console.log("Game started");
  }

  public endGame(): void {
    console.log("Game ended");
  }
}

const gm1 = GameManagerSingleton.getInstance();
gm1.startGame();
gm1.endGame();

const gm2 = GameManagerSingleton.getInstance();
gm2.startGame();

if (gm1 === gm1) {
  console.log("Singleton works, both variables contain the same instance.");
} else {
  console.log("Singleton failed, variables contain different instances.");
}
