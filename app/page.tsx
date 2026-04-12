import SignupForm from "./components/SignupForm";

async function getSignupCount(): Promise<number> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/count`, { cache: "no-store" });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.count ?? 0;
  } catch {
    return 0;
  }
}

export default async function Home() {
  const count = await getSignupCount();

  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <span className="nav-logo">Your<span>Product</span></span>
        <a href="#signup" className="nav-cta">Get Early Access</a>
      </nav>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="badge">
          <span className="badge-dot" />
          Now accepting early access signups
        </div>

        <h1>
          The smarter way to{" "}
          <span className="highlight">do what your product does</span>
        </h1>

        <p className="hero-sub">
          Replace this with a one-to-two sentence value proposition. What pain
          does this solve? Who is it for? Why should they care right now?
        </p>

        <div id="signup">
          <SignupForm initialCount={count} />
        </div>
      </div>

      {/* ── SOCIAL PROOF BAR ── */}
      <div className="social-proof">
        <div className="proof-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          No credit card required
        </div>
        <div className="proof-divider" />
        <div className="proof-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Free during beta
        </div>
        <div className="proof-divider" />
        <div className="proof-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Cancel anytime
        </div>
      </div>

      {/* ── PRODUCT DESCRIPTION ── */}
      <section className="product-section">
        <div className="section-inner product-layout">
          <div>
            <p className="section-label">What it is</p>
            <h2 className="section-title">Built for people who need this problem solved</h2>
            <p className="section-body">
              This is where you describe your product in 2–4 sentences. Explain
              the core problem it solves and who it's designed for. Be specific —
              vague descriptions don't convert. If someone reads this and
              immediately thinks "that's exactly what I need," you've nailed it.
            </p>
            <p className="section-body" style={{ marginTop: "16px" }}>
              Add a second paragraph if needed to describe the broader vision or
              what makes your approach different from what already exists.
            </p>
          </div>

          <div className="product-visual">
            <div className="product-visual-inner">
              <div className="product-icon">🚀</div>
              <span className="product-visual-label">Product screenshot / demo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <div className="section-inner">
          <p className="section-label">Features</p>
          <h2 className="section-title">Everything you need</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Feature One</h3>
              <p>
                Describe this feature in one or two sentences. Focus on the
                benefit to the user, not the technical implementation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Feature Two</h3>
              <p>
                Describe this feature in one or two sentences. Focus on the
                benefit to the user, not the technical implementation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Feature Three</h3>
              <p>
                Describe this feature in one or two sentences. Focus on the
                benefit to the user, not the technical implementation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Feature Four</h3>
              <p>
                Describe this feature in one or two sentences. Focus on the
                benefit to the user, not the technical implementation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Feature Five</h3>
              <p>
                Describe this feature in one or two sentences. Focus on the
                benefit to the user, not the technical implementation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Feature Six</h3>
              <p>
                Describe this feature in one or two sentences. Focus on the
                benefit to the user, not the technical implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section">
        <div className="section-inner">
          <p className="section-label">How it works</p>
          <h2 className="section-title">Up and running in minutes</h2>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign up</h3>
              <p>
                Describe the first step. Keep it short and action-oriented.
                What does the user actually do?
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Configure</h3>
              <p>
                Describe the second step. Emphasize how easy or fast this
                is — reduce perceived friction.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Get results</h3>
              <p>
                Describe what happens after — the payoff. This is where you
                reinforce the core value proposition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bottom-cta" id="signup-bottom">
        <div className="bottom-cta-inner">
          <h2>Ready to get started?</h2>
          <p>
            Join the waitlist today and be among the first to experience it when
            we launch.
          </p>
          <SignupForm initialCount={count} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <span>© {new Date().getFullYear()} YourProduct. All rights reserved.</span>
        <span>Made with ♥ — coming soon</span>
      </footer>
    </>
  );
}
