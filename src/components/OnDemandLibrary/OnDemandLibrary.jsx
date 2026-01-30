import React from "react";
import styles from "./OnDemandLibrary.module.css";
import Link from "next/link";

const videos = [
    {
        id: 1,
        title: "Formative Assessment Strategies That Actually Work",
        slug: "formative-assessment-strategies",
        duration: "45:00",
        views: "2.4k",
        rating: 4.9,
        provider: "Save My Exams",
        badges: ["FREE", "CERTIFICATE"],
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
        id: 2,
        title: "Building SEL Skills Through Daily Activities",
        slug: "building-sel-skills-daily-activities",
        duration: "52:30",
        views: "1.8k",
        rating: 4.8,
        provider: "Tilli Kids",
        badges: ["FREE"],
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
        id: 3,
        title: "Differentiated Reading Instruction for Every Learner",
        slug: "differentiated-reading-instruction",
        duration: "38:15",
        views: "3.1k",
        rating: 4.9,
        provider: "IDL Group",
        badges: ["FREE", "CERTIFICATE"],
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
        id: 4,
        title: "Interactive Math: Engaging the Reluctant Learner",
        slug: "interactive-math-reluctant-learner",
        duration: "41:00",
        views: "1.5k",
        rating: 4.7,
        provider: "Number Hive",
        badges: ["FREE"],
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
        id: 5,
        title: "NEP 2020: Competency-Based Assessment",
        slug: "nep-2020-competency-based-assessment",
        duration: "55:00",
        views: "890",
        rating: 4.8,
        provider: "Knotral Academy",
        badges: ["FREE", "NEW"],
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
        id: 6,
        title: "Early Years: Play-Based Learning Strategies",
        slug: "early-years-play-based-learning",
        duration: "48:20",
        views: "2.2k",
        rating: 4.9,
        provider: "WeSkool House",
        badges: ["FREE"],
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
    {
        id: 7,
        title: "Spelling That Sticks: Evidence-Based Approaches",
        slug: "spelling-evidence-based-approaches",
        duration: "35:45",
        views: "1.2k",
        rating: 4.6,
        provider: "EdShed",
        badges: ["FREE", "CERTIFICATE"],
        gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    },
    {
        id: 8,
        title: "UK-Certified English Program Implementation",
        slug: "uk-certified-english-program",
        duration: "42:30",
        views: "980",
        rating: 4.7,
        provider: "Hamilton House",
        badges: ["FREE"],
        gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    },
    {
        id: 9,
        title: "Inclusive Classrooms: Universal Design for Learning",
        slug: "inclusive-classrooms-universal-design",
        duration: "39:10",
        views: "1.6k",
        rating: 4.8,
        provider: "Global Schools",
        badges: ["FREE"],
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    },
];



const OnDemandLibrary = () => {

    return (
        <>
            {/* HERO SECTION */}
            <section className={styles.libraryhero}>
                <div className="container">
                    <h1>Learn Anytime, Anywhere</h1>
                    <p>
                        Access 150+ professional development sessions on-demand. Watch at your
                        pace, earn certificates.
                    </p>

                    <div className={styles.librarysearch}>
                        <input
                            type="text"
                            placeholder="Search by topic, skill, or provider..."
                        />
                        <button className="btn btnprimary">
                            Search
                        </button>
                    </div>

                    <div className={styles.herostats} style={{ marginTop: 40 }}>
                        <div className={styles.herostat}>
                            <div className={styles.herostatvalue}>150+</div>
                            <div className={styles.herostatlabel}>Sessions Available</div>
                        </div>
                        <div className={styles.herostat}>
                            <div className={styles.herostatvalue}>45+</div>
                            <div className={styles.herostatlabel}>Global Brands</div>
                        </div>
                        <div className={styles.herostat}>
                            <div className={styles.herostatvalue}>12,000+</div>
                            <div className={styles.herostatlabel}>Teachers Trained</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FILTERS + CONTENT */}
            <section style={{ padding: "40px 0" }}>
                <div className="container">
                    <div className={styles.libraryfilters}>
                        <select>
                            <option>All Categories</option>
                            <option>Mathematics</option>
                            <option>Literacy</option>
                            <option>Science</option>
                            <option>EdTech</option>
                            <option>SEL & Wellbeing</option>
                            <option>NEP 2020</option>
                            <option>Early Years</option>
                        </select>

                        <select>
                            <option>All Durations</option>
                            <option>Under 30 min</option>
                            <option>30-60 min</option>
                            <option>Over 60 min</option>
                        </select>

                        <select>
                            <option>All Providers</option>
                            <option>Save My Exams</option>
                            <option>IDL Group</option>
                            <option>EdShed</option>
                            <option>Tilli Kids</option>
                            <option>Hamilton House</option>
                            <option>Number Hive</option>
                            <option>WeSkool House</option>
                            <option>Express Publishing</option>
                        </select>

                        <select>
                            <option>Sort: Most Popular</option>
                            <option>Sort: Newest First</option>
                            <option>Sort: Highest Rated</option>
                            <option>Sort: Shortest First</option>
                        </select>

                        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <input type="checkbox" />
                            Certificate Eligible Only
                        </label>

                        <div className={styles.resultscount}>Showing 147 sessions</div>
                    </div>

                    {/* CONTINUE WATCHING */}
                    <div className={styles.continuewatching}>
                        <h3>📺 Continue Watching</h3>
                        <div className="grid-4">
                            <div className={styles.videocard}>
                                <div className={styles.videothumbnail} style={{ height: 120 }}>
                                    <div className={styles.playbtn}>▶</div>
                                    <div className={styles.duration}>18:34 left</div>
                                </div>
                                <div className={styles.videocardbody} style={{ padding: 12 }}>
                                    <h3 style={{ fontSize: 13 }}>
                                        Formative Assessment Strategies
                                    </h3>
                                    <div className={styles.progressbar} style={{ marginTop: 8 }}>
                                        <div
                                            className={styles.progressbarfill}
                                            style={{ width: "65%" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.videocard}>
                                <div
                                    className={styles.videothumbnail}
                                    style={{
                                        height: 120,
                                        background:
                                            "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
                                    }}
                                >
                                    <div className={styles.playbtn}>▶</div>
                                    <div className={styles.duration}>32:10 left</div>
                                </div>

                                <div className={styles.videocardbody} style={{ padding: 12 }}>
                                    <h3 style={{ fontSize: 13 }}>SEL in the Classroom</h3>

                                    <div className={styles.progressbar} style={{ marginTop: 8 }}>
                                        <div
                                            className={styles.progressbarfill}
                                            style={{ width: "35%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ALL SESSIONS */}
                    <h3 style={{ margin: "32px 0 20px" }}>All Sessions</h3>

                    <div className="grid-4">
                        {videos.map((video) => (
                            <Link
                                key={video.id}
                                href={`/training/${video.slug}`}
                                className={styles.videocard} // style the Link directly
                            >
                                <div
                                    className={styles.videothumbnail}
                                    style={{ background: video.gradient }}
                                >
                                    <div className={styles.playbtn}>▶</div>
                                    <div className={styles.duration}>{video.duration}</div>
                                </div>

                                <div className={styles.videocardbody}>
                                    <div className={styles.badgegroup}>
                                        {video.badges.map((badge) => (
                                            <span
                                                key={badge}
                                                className={
                                                    badge === "FREE"
                                                        ? "badge badgefree"
                                                        : badge === "CERTIFICATE"
                                                            ? "badge badgecert"
                                                            : "badge badgenew"
                                                }
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    <h3>{video.title}</h3>

                                    <div className={styles.videometa}>
                                        <span>👁 {video.views} views</span>
                                        <span className={styles.videorating}>★ {video.rating}</span>
                                    </div>

                                    <div className={styles.videoprovider}>
                                        <img src="" alt="Provider" />
                                        <span>{video.provider}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>



                    <div style={{ textAlign: "center", marginTop: 40 }}>
                        <button className="btn btnoutline">Load More Sessions</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OnDemandLibrary;
