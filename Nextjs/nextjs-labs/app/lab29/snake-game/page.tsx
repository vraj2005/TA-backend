"use client"

import { useEffect, useMemo, useRef, useState } from "react";

type Position = { x: number; y: number };

const GRID_SIZE = 15;
const TICK_MS = 140;

const INITIAL_SNAKE: Position[] = [
  { x: 7, y: 7 },
  { x: 6, y: 7 },
  { x: 5, y: 7 },
];

const INITIAL_DIR: Position = { x: 1, y: 0 };

const getRandomFood = (snake: Position[]) => {
  while (true) {
    const food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };

    if (!snake.some((segment) => segment.x === food.x && segment.y === food.y)) {
      return food;
    }
  }
};

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Position>(INITIAL_DIR);
  const directionRef = useRef<Position>(INITIAL_DIR);
  const [food, setFood] = useState<Position>(() => getRandomFood(INITIAL_SNAKE));
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const gridCells = useMemo(() => Array.from({ length: GRID_SIZE * GRID_SIZE }), []);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const next =
        key === "arrowup" || key === "w"
          ? { x: 0, y: -1 }
          : key === "arrowdown" || key === "s"
          ? { x: 0, y: 1 }
          : key === "arrowleft" || key === "a"
          ? { x: -1, y: 0 }
          : key === "arrowright" || key === "d"
          ? { x: 1, y: 0 }
          : null;

      if (!next) return;

      const current = directionRef.current;
      if (current.x + next.x === 0 && current.y + next.y === 0) return;
      setDirection(next);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isRunning || gameOver) return;

    const tick = () => {
      setSnake((prev) => {
        const head = prev[0];
        const move = directionRef.current;
        const nextHead = { x: head.x + move.x, y: head.y + move.y };

        if (
          nextHead.x < 0 ||
          nextHead.y < 0 ||
          nextHead.x >= GRID_SIZE ||
          nextHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          setIsRunning(false);
          return prev;
        }

        if (prev.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y)) {
          setGameOver(true);
          setIsRunning(false);
          return prev;
        }

        const nextSnake = [nextHead, ...prev];
        const ateFood = nextHead.x === food.x && nextHead.y === food.y;

        if (!ateFood) {
          nextSnake.pop();
        } else {
          setScore((current) => current + 1);
          setFood(getRandomFood(nextSnake));
        }

        return nextSnake;
      });
    };

    const interval = setInterval(tick, TICK_MS);
    return () => clearInterval(interval);
  }, [food.x, food.y, gameOver, isRunning]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIR);
    directionRef.current = INITIAL_DIR;
    setFood(getRandomFood(INITIAL_SNAKE));
    setScore(0);
    setGameOver(false);
    setIsRunning(false);
  };

  return (
    <div className="page">
      <div className="panel">
        <header>
          <p className="eyebrow">Lab 29</p>
          <h2>Snake Grid</h2>
          <p className="sub">Use arrow keys or WASD. Eat the orb, avoid walls.</p>
        </header>

        <div className="hud">
          <div>
            <span>Score</span>
            <strong>{score}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{gameOver ? "Game Over" : isRunning ? "Running" : "Paused"}</strong>
          </div>
        </div>

        <div className="board">
          {gridCells.map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            const isHead = snake[0]?.x === x && snake[0]?.y === y;
            const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={`${x}-${y}`}
                className={`cell ${isSnake ? "snake" : ""} ${isHead ? "head" : ""} ${
                  isFood ? "food" : ""
                }`}
              />
            );
          })}

          {gameOver && <div className="overlay">Press Reset to try again</div>}
        </div>

        <div className="controls">
          <button
            className="primary"
            onClick={() => {
              if (gameOver) return;
              setIsRunning((current) => !current);
            }}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="ghost" onClick={resetGame}>Reset</button>
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          background: radial-gradient(900px 600px at 15% 20%, #f6f1e8, #edf6f4);
        }

        .page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 32px 16px 48px;
          color: #1e2a33;
          font-family: "Bricolage Grotesque", "Segoe UI", sans-serif;
        }

        .panel {
          width: min(760px, 100%);
          background: #ffffff;
          border-radius: 22px;
          border: 1px solid #e5ded4;
          box-shadow: 0 24px 48px rgba(22, 38, 46, 0.12);
          padding: 26px;
          display: grid;
          gap: 20px;
        }

        header {
          display: grid;
          gap: 6px;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 12px;
          color: #7b6f60;
          margin: 0;
        }

        header h2 {
          margin: 0;
          font-size: clamp(28px, 4vw, 36px);
        }

        .sub {
          margin: 0;
          color: #51606c;
        }

        .hud {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          font-family: "IBM Plex Mono", "Segoe UI", monospace;
        }

        .hud div {
          background: #f7f1e7;
          border-radius: 14px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          color: #38424a;
        }

        .hud strong {
          font-size: 16px;
        }

        .board {
          position: relative;
          display: grid;
          grid-template-columns: repeat(${GRID_SIZE}, 1fr);
          aspect-ratio: 1 / 1;
          background: #111b1f;
          border-radius: 16px;
          padding: 10px;
          gap: 6px;
          border: 1px solid #203239;
        }

        .cell {
          border-radius: 6px;
          background: #1c2b31;
          transition: transform 0.1s ease;
        }

        .cell.snake {
          background: linear-gradient(140deg, #69d2b4, #2b9c8a);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .cell.head {
          background: linear-gradient(140deg, #f2c867, #f39b6a);
          transform: scale(1.06);
        }

        .cell.food {
          background: radial-gradient(circle at 40% 40%, #ffffff, #f15b4a 70%);
          box-shadow: 0 0 12px rgba(241, 91, 74, 0.6);
        }

        .overlay {
          position: absolute;
          inset: 10px;
          background: rgba(12, 18, 21, 0.72);
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #f8f1e7;
          font-size: 16px;
          text-align: center;
          padding: 12px;
        }

        .controls {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        button {
          border: none;
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        button.primary {
          background: #1e2a33;
          color: #fff;
        }

        button.ghost {
          background: #f4eee4;
          color: #1e2a33;
          border: 1px solid #d6cdc2;
        }

        button:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 20px rgba(30, 42, 51, 0.2);
        }

        @media (max-width: 520px) {
          .panel {
            padding: 20px;
          }

          .board {
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
}