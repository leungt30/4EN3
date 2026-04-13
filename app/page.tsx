import SignupForm from "./components/SignupForm";
import StatsBar from "./components/StatsBar";
import { supabase } from "@/lib/supabase";

async function getSignupCount(): Promise<number> {
  try {
    const { count } = await supabase
      .from("signups")
      .select("*", { count: "exact", head: true });
    return count ?? 0;
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
        <div className="nav-logo">
          <span className="nav-logo-icon">🌊</span>
          <span>Flood<span>Watch</span></span>
          <span className="nav-location">Dixie-Dundas, Mississauga</span>
        </div>
        <a href="#" className="nav-cta">Join the Network</a>
      </nav>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="badge">
          <span className="badge-dot" />
          Community Early-Warning Network
        </div>

        <h1>
          Know before the{" "}
          <span className="highlight">flood reaches your street</span>
        </h1>

        <p className="hero-sub">
          FloodWatch is a hyperlocal alert and preparedness network built
          specifically for the Dixie-Dundas community. Get flood warnings,
          evacuation routes, and emergency resources tailored to your
          neighbourhood, before, during, and after a flood event.
        </p>

        <div id="signup">
          <SignupForm initialCount={count} />
        </div>

        <div className="social-proof">
          <div className="proof-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Free for all residents
          </div>
          <div className="proof-divider" />
          <div className="proof-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            No app download needed
          </div>
          <div className="proof-divider" />
          <div className="proof-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Mississauga-specific resources
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <StatsBar count={count} />

      {/* ── PRODUCT DESCRIPTION ── */}
      <section className="product-section">
        <div className="section-inner product-layout">
          <div>
            <p className="section-label">The Problem</p>
            <h2 className="section-title">Generic alerts don&apos;t tell you what to do next</h2>
            <p className="section-body">
              When flooding threatens Dixie-Dundas, Environment Canada&apos;s weather
              alerts tell you a storm is coming, but not which streets will flood
              first, where to go, or who to call for help in Mississauga.
            </p>
            <p className="section-body" style={{ marginTop: "16px" }}>
              FloodWatch fills that gap. We deliver neighbourhood-specific
              warnings and connect residents (especially seniors and those with
              home damage risk) to the exact resources they need, right when
              they need them.
            </p>

            <div className="alert-banner">
              <span className="alert-banner-icon">📍</span>
              <p className="alert-banner-text">
                <strong>Built for Dixie-Dundas.</strong> Our alerts reference
                real local landmarks, shelters, and City of Mississauga emergency
                contacts, not generic province-wide guidance.
              </p>
            </div>
          </div>

          {/* Mock alert preview */}
          <div className="product-visual">
            <div className="mock-alert">
              <span className="mock-alert-icon">🟠</span>
              <div className="mock-alert-body">
                <p className="mock-alert-title warning">Flood Watch: Dixie-Dundas</p>
                <p className="mock-alert-desc">
                  Water levels rising near Cooksville Creek. Residents on Derry Rd
                  W between Dixie and Cawthra advised to move valuables to upper floors.
                </p>
                <span className="mock-alert-tag">Issued 2 min ago</span>
              </div>
            </div>

            <div className="mock-alert">
              <span className="mock-alert-icon">🔵</span>
              <div className="mock-alert-body">
                <p className="mock-alert-title info">Evacuation Route Active</p>
                <p className="mock-alert-desc">
                  Dundas St W eastbound open. Recommended shelter: Mississauga
                  Valley Community Centre (1275 Mississauga Valley Blvd).
                </p>
                <span className="mock-alert-tag">Resource</span>
              </div>
            </div>

            <div className="mock-alert">
              <span className="mock-alert-icon">🟢</span>
              <div className="mock-alert-body">
                <p className="mock-alert-title success">Senior Assistance Available</p>
                <p className="mock-alert-desc">
                  Need help evacuating? Call Peel Region Emergency at
                  905-453-3311 or reply HELP to this alert for a callback.
                </p>
                <span className="mock-alert-tag">For seniors &amp; those with mobility needs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOOD RISK MAP ── */}
      <section className="map-section">
        <div className="section-inner">
          <p className="section-label">Flood Risk Area</p>
          <h2 className="section-title">See if your home is in the flood zone</h2>
          <p className="section-body">
            The blue areas below show the official TRCA floodplain for Dixie-Dundas.
            land at risk of flooding from Little Etobicoke Creek. If your street
            falls within this zone, you are especially encouraged to sign up for early alerts.
          </p>

          <div className="map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://trcaca.s3.ca-central-1.amazonaws.com/app/uploads/2020/02/13141653/dixie-dundas-map-viewer-new.jpg"
              alt="TRCA floodplain map of the Dixie-Dundas area in Mississauga, showing blue flood risk zones around Little Etobicoke Creek near Dundas St and Dixie Rd"
              className="map-image"
            />
            <div className="map-legend">
              <div className="map-legend-item">
                <span className="map-legend-swatch flood" />
                Floodplain (at-risk area)
              </div>
              <div className="map-legend-item">
                <span className="map-legend-swatch boundary" />
                Special Policy Area boundary
              </div>
            </div>
            <div className="map-attribution">
              Map data © Toronto and Region Conservation Authority (TRCA), 2020.
              For precise flood plain limits, use the interactive viewer.
            </div>
          </div>

          <a
            href="https://trca.ca/conservation/flood-risk-management/flood-plain-map-viewer/#use-now"
            target="_blank"
            rel="noopener noreferrer"
            className="map-cta-link"
          >
            View Interactive Flood Plain Map
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <div className="section-inner">
          <p className="section-label">What we provide</p>
          <h2 className="section-title">Everything your neighbourhood needs</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌊</div>
              <h3>Hyperlocal Flood Alerts</h3>
              <p>
                Street-level warnings for Dixie-Dundas, not just city-wide
                advisories. Know if your block is at risk before water arrives.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Evacuation Routes</h3>
              <p>
                Pre-planned, real-time updated routes out of the area with
                live road closure info specific to Mississauga.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Home Protection Guides</h3>
              <p>
                Step-by-step instructions for protecting your home before
                and during a flood, tailored to common housing in the area.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👴</div>
              <h3>Senior &amp; Accessibility Support</h3>
              <p>
                Dedicated resources and direct assistance connections for
                elderly residents and those with mobility or accessibility needs.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>Local Emergency Contacts</h3>
              <p>
                The right local hotlines, shelters, and services for Mississauga
                and Peel Region. The right number, right away.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Post-Flood Recovery</h3>
              <p>
                Damage assessment resources, insurance guidance, and City of
                Mississauga recovery programs to help you rebuild faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section">
        <div className="section-inner">
          <p className="section-label">How it works</p>
          <h2 className="section-title">Simple. Local. Life-saving.</h2>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign up for free</h3>
              <p>
                Enter your email to join the Dixie-Dundas community network.
                No app download, no account setup required.
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Receive targeted alerts</h3>
              <p>
                Get notified the moment flood conditions are detected in your
                area, with specific guidance on what to do right now.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Access local resources</h3>
              <p>
                Follow links directly to Mississauga shelters, evacuation
                routes, senior assistance, and recovery programs. No searching needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bottom-cta" id="signup-bottom">
        <div className="bottom-cta-inner">
          <h2>Protect yourself and your neighbours</h2>
          <p>
            Flooding in Dixie-Dundas is getting more frequent. The best time
            to prepare is before the next event. Join the network today.
          </p>
          <SignupForm initialCount={count} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <span>© {new Date().getFullYear()} FloodWatch Dixie-Dundas. All rights reserved.</span>
        <span className="footer-location">
          📍 Dixie-Dundas, Mississauga, ON
        </span>
      </footer>
    </>
  );
}
