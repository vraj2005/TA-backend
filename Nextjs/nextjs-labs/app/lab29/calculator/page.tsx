"use client"

import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="page">
      <div className="card">
        <div className="header">
          <p className="eyebrow">Lab 29</p>
          <h2>Basic Calculator</h2>
          <p className="sub">Quick arithmetic with clean inputs and clear results.</p>
        </div>

        <div className="inputs">
          <label>
            <span>First number</span>
            <input
              type="number"
              placeholder="0"
              onChange={(e) => setA(Number(e.target.value))}
            />
          </label>

          <label>
            <span>Second number</span>
            <input
              type="number"
              placeholder="0"
              onChange={(e) => setB(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="actions">
          <button onClick={() => setResult(a + b)}>Add</button>
          <button onClick={() => setResult(a - b)}>Subtract</button>
          <button onClick={() => setResult(a * b)}>Multiply</button>
          <button onClick={() => setResult(a / b)}>Divide</button>
        </div>

        <div className="result">
          <span>Result</span>
          <strong>{result}</strong>
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          background: radial-gradient(1200px 600px at 10% 10%, #f6f2e8, #f2f7fb);
        }

        .page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 40px 16px;
          color: #1f2933;
          font-family: "Fraunces", "Iowan Old Style", "Palatino", serif;
        }

        .card {
          width: min(720px, 100%);
          background: #ffffff;
          border: 1px solid #e7e2d9;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(31, 41, 51, 0.08);
          padding: 28px;
          display: grid;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }

        .card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(255, 200, 87, 0.12), rgba(0, 181, 204, 0.1));
          pointer-events: none;
        }

        .header {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 8px;
        }

        .eyebrow {
          text-transform: uppercase;
          font-family: "Space Grotesk", "Segoe UI", sans-serif;
          font-size: 12px;
          letter-spacing: 0.24em;
          color: #7a6d5d;
          margin: 0;
        }

        .header h2 {
          margin: 0;
          font-size: clamp(28px, 4vw, 36px);
          color: #1c2b33;
        }

        .sub {
          margin: 0;
          font-family: "Space Grotesk", "Segoe UI", sans-serif;
          color: #5b6670;
        }

        .inputs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        label {
          display: grid;
          gap: 8px;
          font-family: "Space Grotesk", "Segoe UI", sans-serif;
          color: #3d4c57;
          font-size: 14px;
        }

        input {
          border: 1px solid #d8d2c7;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 16px;
          font-family: "Space Grotesk", "Segoe UI", sans-serif;
          background: #fdfbf7;
          transition: border 0.2s ease, box-shadow 0.2s ease;
        }

        input:focus {
          outline: none;
          border-color: #00b5cc;
          box-shadow: 0 0 0 3px rgba(0, 181, 204, 0.2);
        }

        .actions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        button {
          border: none;
          border-radius: 999px;
          padding: 10px 14px;
          font-family: "Space Grotesk", "Segoe UI", sans-serif;
          font-weight: 600;
          background: #1c2b33;
          color: #fff;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        button:hover {
          background: #243743;
          box-shadow: 0 10px 18px rgba(28, 43, 51, 0.2);
          transform: translateY(-1px);
        }

        .result {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 16px 18px;
          border-radius: 14px;
          background: #f8f1e6;
          font-family: "Space Grotesk", "Segoe UI", sans-serif;
          color: #1c2b33;
        }

        .result strong {
          font-size: 24px;
        }

        @media (max-width: 480px) {
          .result {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}