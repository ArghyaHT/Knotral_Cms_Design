import React from "react";
import styles from "./TrainingLandingPage.module.css"
import Link from "next/link";

const TrainingLandingPage = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <a href="#">Home</a>
          <span>›</span>
          <a href="#">Webinars</a>
          <span>›</span>
          <a href="#">Assessment</a>
          <span>›</span>
          <span className="current">Formative Assessment Strategies</span>
        </div>
      </div>

      <section className={styles.traininghero}>
        <div className="container">
          <div className={styles.traininglayout}>
            <div className={styles.trainingmain}>
              <div className={styles.trainingheader}>
                <div className={styles.trainingproviderlogo}>SME</div>
                <div className={styles.trainingtitle}>
                  <div
                    style={{ display: "flex", gap: "8px", marginBottom: "8px" }}
                  >
                    <span className="badge badgelive">LIVE</span>
                    <span className="badge badgefree">FREE</span>
                    <span className="badge badgecert">CERTIFICATE</span>
                  </div>
                  <h1>Formative Assessment Strategies That Actually Work</h1>
                  <div className={styles.trainingmeta}>
                    <div className={styles.trainingmetaitem}>📅 January 22, 2026</div>
                    <div className={styles.trainingmetaitem}>🕓 6:00 PM IST</div>
                    <div className={styles.trainingmetaitem}>⏱ 60 minutes</div>
                    <div className={styles.trainingmetaitem}>🌐 Online (Zoom)</div>
                  </div>
                </div>
              </div>

              {/* Who Should Attend */}
              <div className={styles.whoshouldattend}>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "var(--primary-navy)",
                  }}
                >
                  Who Should Attend
                </h2>
                <div className={styles.audiencecards}>
                  <div className={styles.audiencecard}>
                    <div className={styles.icon}>👩‍🏫</div>
                    <h4>Teachers</h4>
                    <p>
                      Learn practical assessment techniques you can use in your
                      classroom tomorrow
                    </p>
                  </div>
                  <div className={styles.audiencecard}>
                    <div className={styles.icon}>🏫</div>
                    <h4>School Leaders</h4>
                    <p>
                      Discover how to implement school-wide assessment practices
                      aligned with NEP 2020
                    </p>
                  </div>
                  <div className={styles.audiencecard}>
                    <div className={styles.icon}>🤝</div>
                    <h4>Resellers</h4>
                    <p>
                      Understand assessment solutions you can offer to your school
                      network
                    </p>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className={styles.learningoutcomes}>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "var(--primary-navy)",
                    marginBottom: "16px",
                  }}
                >
                  What You Will Learn
                </h2>

                <div className={styles.outcomeitem}>
                  <div className={styles.outcomecheck}>✓</div>
                  <div className={styles.outcometext}>
                    5 exit ticket techniques that take less than 5 minutes
                    <span className={styles.outcometag}>For Teachers</span>
                  </div>
                </div>

                <div className={styles.outcomeitem}>
                  <div className={styles.outcomecheck}>✓</div>
                  <div className={styles.outcometext}>
                    How to use real-time data to adjust your teaching mid-lesson
                    <span className={styles.outcometag}>For Teachers</span>
                  </div>
                </div>

                <div className={styles.outcomeitem}>
                  <div className={styles.outcomecheck}>✓</div>
                  <div className={styles.outcometext}>
                    School-wide implementation framework with admin dashboard
                    overview
                    <span className={styles.outcometag}>For Schools</span>
                  </div>
                </div>

                <div className={styles.outcomeitem}>
                  <div className={styles.outcomecheck}>✓</div>
                  <div className={styles.outcometext}>
                    ROI metrics and success stories for client conversations
                    <span className={styles.outcometag}>For Resellers</span>
                  </div>
                </div>
              </div>

              {/* Presenter */}
              <div className={styles.presentersection}>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "var(--primary-navy)",
                    marginBottom: "16px",
                  }}
                >
                  Your Presenter
                </h2>
                <div className={styles.presentercard}>
                  <div className={styles.presenteravatar}>👤</div>
                  <div className={styles.presenterinfo}>
                    <h4>Dr. Sarah Mitchell</h4>
                    <div className={styles.title}>
                      Head of Pedagogy, Save My Exams
                    </div>
                    <p>
                      Former classroom teacher with 15 years of experience. Sarah
                      has trained over 5,000 educators across 20 countries on
                      evidence-based assessment practices. She holds a Ph.D. in
                      Educational Assessment from Cambridge University.
                    </p>
                  </div>
                </div>
              </div>

              {/* Session Agenda */}
              <div style={{ margin: "40px 0" }}>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "var(--primary-navy)",
                    marginBottom: "16px",
                  }}
                >
                  Session Agenda
                </h2>
                <div
                  style={{
                    background: "var(--bg-light)",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "12px 0",
                      borderBottom: "1px solid var(--border-light)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        color: "var(--accent-teal)",
                        minWidth: "80px",
                      }}
                    >
                      0-10 min
                    </div>
                    <div>Welcome & The Assessment Challenge in Indian Classrooms</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "12px 0",
                      borderBottom: "1px solid var(--border-light)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        color: "var(--accent-teal)",
                        minWidth: "80px",
                      }}
                    >
                      10-30 min
                    </div>
                    <div>Live Demo: Teacher Dashboard + Admin Analytics</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "12px 0",
                      borderBottom: "1px solid var(--border-light)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        color: "var(--accent-teal)",
                        minWidth: "80px",
                      }}
                    >
                      30-45 min
                    </div>
                    <div>Implementation Pathways: Classroom → School → Reseller</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "12px 0",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        color: "var(--accent-teal)",
                        minWidth: "80px",
                      }}
                    >
                      45-60 min
                    </div>
                    <div>Success Stories + Live Q&A</div>
                  </div>
                </div>
              </div>

              {/* About Provider */}
              <div style={{ margin: "40px 0" }}>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "var(--primary-navy)",
                    marginBottom: "16px",
                  }}
                >
                  About Save My Exams
                </h2>
                <div
                  style={{
                    background: "white",
                    border: "1px solid var(--border-light)",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <p style={{ marginBottom: "16px" }}>
                    Save My Exams is a UK-based education technology company trusted
                    by over 2 million students and 50,000 teachers worldwide. Their
                    platform provides comprehensive revision resources, past papers,
                    and formative assessment tools aligned with major examination
                    boards.
                  </p>
                  <a
                    href="#"
                    style={{ color: "var(--accent-teal)", fontWeight: 500 }}
                  >
                    View all trainings by Save My Exams →
                  </a>
                </div>
              </div>
            </div>

            {/* Registration Sidebar */}
            <div className={styles.trainingsidebar}>
              <div className={styles.registrationcard}>
                <div className={styles.registrationcardheader}>
                  <div className={styles.date}>January 22, 2026</div>
                  <div className={styles.time}>Thursday • 6:00 PM IST</div>
                </div>
                <div className={styles.registrationcardbody}>
                  {/* Countdown */}
                  <div className={styles.countdown}>
                    <div className={styles.countdownitem}>
                      <div className={styles.number}>09</div>
                      <div className={styles.label}>Days</div>
                    </div>
                    <div className={styles.countdownitem}>
                      <div className={styles.number}>14</div>
                      <div className={styles.label}>Hours</div>
                    </div>
                    <div className={styles.countdownitem}>
                      <div className={styles.number}>35</div>
                      <div className={styles.label}>Mins</div>
                    </div>
                    <div className={styles.countdownitem}>
                      <div className={styles.number}>22</div>
                      <div className={styles.label}>Secs</div>
                    </div>
                  </div>

                  <div className={styles.registrationdetail}>
                    <div className={styles.registrationdetailicon}>⏱</div>
                    <div className={styles.registrationdetailtext}>
                      <div className={styles.label}>Duration</div>
                      <div className={styles.value}>60 minutes</div>
                    </div>
                  </div>

                  <div className={styles.registrationdetail}>
                    <div className={styles.registrationdetailicon}>🌐</div>
                    <div className={styles.registrationdetailtext}>
                      <div className={styles.label}>Platform</div>
                      <div className={styles.value}>Zoom Webinar</div>
                    </div>
                  </div>

                  <div className={styles.registrationdetail}>
                    <div className={styles.registrationdetailicon}>🎓</div>
                    <div className={styles.registrationdetailtext}>
                      <div className={styles.label}>Certificate</div>
                      <div className={styles.value}>Yes, upon completion</div>
                    </div>
                  </div>

                  <div className={styles.registrationdetail}>
                    <div className={styles.registrationdetailicon}>💰</div>
                    <div className={styles.registrationdetailtext}>
                      <div className={styles.label}>Price</div>
                      <div
                        className={styles.value}
                        style={{ color: "var(--free-green)", fontSize: "18px" }}
                      >
                        FREE
                      </div>
                    </div>
                  </div>

                  {/* Scarcity Element */}
                  <div className={styles.seatsremaining}>
                    <div className={styles.icon}>🔥</div>
                    <div className={styles.text}>Only 47 spots remaining!</div>
                  </div>

                  {/* Social Proof */}
                  <div className={styles.socialproof}>
                    <div className={styles.avatars}>
                      <div className={styles.avatar}>SM</div>
                      <div className={styles.avatar}>PK</div>
                      <div className={styles.avatar}>AR</div>
                      <div className={styles.avatar}>+</div>
                    </div>
                    <div className={styles.text}>453 educators registered</div>
                  </div>

                  <Link href="/register-training">
                    <button className="btn btnprimary btnlg btnblock">
                      Reserve My Spot
                    </button>
                  </Link>

                  <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                    <button
                      className="btn btnghost btnsm"
                      style={{ flex: 1 }}
                    >
                      📅 Add to Calendar
                    </button>
                    <button
                      className="btn btnghost btnsm"
                      style={{ flex: 1 }}
                    >
                      📤 Share
                    </button>
                  </div>

                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "16px",
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked
                      style={{ accentColor: "var(--accent-teal)" }}
                    />
                    Send me WhatsApp reminders
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingLandingPage;
