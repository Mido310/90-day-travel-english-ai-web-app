const PROJECT_NAME = "90-Day Travel English AI Coaching System";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="status-card" aria-labelledby="project-title">
        <p className="eyebrow">Task001 deployment verification</p>
        <h1 id="project-title">{PROJECT_NAME}</h1>
        <p className="status-message">
          The Next.js application is running successfully.
        </p>
      </section>
    </main>
  );
}
