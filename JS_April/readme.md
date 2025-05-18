<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Full Stack Developer Roadmap - README</title>
  <style>
    /* Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      background-color: #0d0d0d;
      color: #e0e0e0;
      padding: 2rem;
      line-height: 1.6;
    }

    h1, h2 {
      text-align: center;
      margin-bottom: 1rem;
      color: #00fff7;
      text-shadow:
        0 0 5px #00fff7,
        0 0 10px #00fff7,
        0 0 20px #00fff7,
        0 0 40px #0ff,
        0 0 80px #0ff;
      transition: color 0.3s ease;
      cursor: default;
    }

    h1:hover, h2:hover {
      color: #ff00ff;
      text-shadow:
        0 0 10px #ff00ff,
        0 0 20px #ff00ff,
        0 0 40px #ff00ff,
        0 0 80px #f0f,
        0 0 160px #f0f;
    }

    hr {
      border: none;
      border-top: 2px solid #00fff7;
      margin: 1.5rem auto;
      width: 80%;
      box-shadow:
        0 0 8px #00fff7;
    }

    section {
      max-width: 900px;
      margin: 0 auto 2rem auto;
      background: rgba(0, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem 2rem;
      box-shadow:
        0 0 10px #00fff7,
        0 0 20px #00fff7 inset;
      transition: box-shadow 0.4s ease;
    }

    section:hover {
      box-shadow:
        0 0 15px #ff00ff,
        0 0 30px #ff00ff inset;
    }

    ul {
      margin-left: 1.2rem;
      list-style: none;
    }

    ul li {
      padding: 0.4rem 0;
      position: relative;
      font-weight: 600;
    }

    ul li::before {
      content: "➤";
      position: absolute;
      left: -1.2rem;
      color: #00fff7;
      text-shadow: 0 0 5px #00fff7;
      transition: color 0.3s ease;
    }

    ul li:hover::before {
      color: #ff00ff;
      text-shadow: 0 0 10px #ff00ff;
    }

    p, li {
      font-size: 1.1rem;
      color: #c0c0c0;
    }

    /* Special styling for icons with text */
    .icon-text {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      color: #00fff7;
      margin-bottom: 0.7rem;
      user-select: none;
    }

    .icon-text:hover {
      color: #ff00ff;
      cursor: default;
    }

    /* Smooth transition for all text */
    body, h1, h2, p, li, ul li::before {
      transition: color 0.3s ease, text-shadow 0.3s ease;
    }

  </style>
</head>
<body>
  <h1>Full Stack Developer Roadmap — Code Repository</h1>

  <section>
    <p>Welcome to my <strong>Complete Web Development Roadmap</strong> repository!<br />
    This repo contains all the code and projects covering each phase of my learning journey — from core JavaScript, CSS, Next.js (React), backend APIs, to database integration.</p>
  </section>

  <hr />

  <section>
    <div class="icon-text">🚀 <h2>Repo Overview</h2></div>
    <ul>
      <li><strong>Phase 1:</strong> Core JavaScript projects & exercises</li>
      <li><strong>Phase 2:</strong> CSS styling & Responsive Design implementations</li>
      <li><strong>Phase 3:</strong> React & Next.js applications with hooks, routing, and state management</li>
      <li><strong>Phase 4:</strong> Backend development with Node.js & Express.js</li>
      <li><strong>Phase 5:</strong> Database integration (MongoDB / PostgreSQL)</li>
      <li><strong>Extras:</strong> API integrations, environment variables, deployment setups, and more</li>
    </ul>
  </section>

  <hr />

  <section>
    <div class="icon-text">🛠️ <h2>Tech Stack</h2></div>
    <ul>
      <li><strong>Frontend:</strong> JavaScript, CSS, Next.js (React)</li>
      <li><strong>Backend:</strong> Node.js, Express.js</li>
      <li><strong>Database:</strong> MongoDB / PostgreSQL</li>
      <li><strong>Tools:</strong> Git, npm/yarn, dotenv (environment variables management)</li>
    </ul>
  </section>

  <hr />

  <section>
    <div class="icon-text">💡 <h2>Usage Tips</h2></div>
    <ul>
      <li>Navigate through each phase folder to explore relevant projects and exercises</li>
      <li>Each folder may contain its own README or instructions</li>
      <li>Feel free to fork, modify, or extend projects as you learn</li>
      <li>Use Git branches to track your progress and experiments</li>
    </ul>
  </section>

  <hr />

  <section>
    <div class="icon-text">🤝 <h2>Contributing</h2></div>
    <p>Contributions, suggestions, and improvements are highly welcome!<br />
    Please open an issue or submit a pull request.</p>
  </section>
</body>
</html>
