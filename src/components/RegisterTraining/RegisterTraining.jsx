import React from "react";
import styles from "./RegisterTraining.module.css"

const RegisterTraining = () => {
    return (
        <section className={styles.registrationpage}>
            <div className={styles.registrationcontainer}>

                {/* Progress Steps */}
                <div className={styles.registrationprogress}>
                    <div className={`${styles.progressstep} ${styles.completed}`}>
                        <div className={styles.number}>✓</div>
                        <div className={styles.label}>Select Training</div>
                    </div>
                    <div className={styles.progressconnector} style={{ background: "var(--free-green)" }}></div>
                        <div className={`${styles.progressstep} ${styles.active}`}>
                        <div className={styles.number}>2</div>
                        <div className={styles.label}>Your Details</div>
                    </div>
                    <div className={styles.progressconnector}></div>
                    <div className={styles.progressstep}>
                        <div className={styles.number}>3</div>
                        <div className={styles.label}>Confirmation</div>
                    </div>
                </div>

                <div className={styles.registrationformcard}>
                    <div className={styles.registrationformheader}>
                        <h2>Register for Training</h2>
                        <p>Formative Assessment Strategies • Jan 22, 2026 • 6:00 PM IST</p>
                    </div>

                    <div className={styles.registrationformbody}>

                        {/* Section 1: Basic Information */}
                        <div className={styles.formsection}>
                            <div className={styles.formsectiontitle}>Basic Information</div>

                            <div className={styles.formrow}>
                                <div className={styles.formgroup}>
                                    <label>First Name <span className={styles.required}>*</span></label>
                                    <input type="text" placeholder="Enter your first name" />
                                </div>
                                <div className={styles.formgroup}>
                                    <label>Last Name <span className={styles.required}>*</span></label>
                                    <input type="text" placeholder="Enter your last name" />
                                </div>
                            </div>

                            <div className={styles.formgroup}>
                                <label>Email Address <span className={styles.required}>*</span></label>
                                <input type="email" placeholder="you@school.edu" />
                                <div className="hint">We'll send the webinar link and resources here</div>
                            </div>

                            <div className={styles.formgroup}>
                                <label>WhatsApp Number <span className={styles.required}>*</span></label>
                                <input type="tel" placeholder="+91 98765 43210" />
                                <div className="hint">For session reminders and follow-up resources</div>
                            </div>

                            <div className={styles.formrow}>
                                <div className={styles.formgroup}>
                                    <label>School/Organization <span className={styles.required}>*</span></label>
                                    <input type="text" placeholder="Your school or organization name" />
                                </div>
                                <div className={styles.formgroup}>
                                    <label>City <span className={styles.required}>*</span></label>
                                    <input type="text" placeholder="Your city" />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Role & Context */}
                        <div className={styles.formsection}>
                            <div className={styles.formsectiontitle}>Tell Us About Yourself</div>

                            <div className={styles.formrow}>
                                <div className={styles.formgroup}>
                                    <label>Your Role <span className={styles.required}>*</span></label>
                                    <select>
                                        <option value="">Select your role...</option>
                                        <option>Teacher</option>
                                        <option>Academic Coordinator</option>
                                        <option>Head of Department</option>
                                        <option>Vice Principal</option>
                                        <option>Principal</option>
                                        <option>Curriculum Head</option>
                                        <option>Reseller / Distributor</option>
                                        <option>Education Consultant</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className={styles.formgroup}>
                                    <label>Primary Interest <span className={styles.required}>*</span></label>
                                    <select>
                                        <option value="">What brings you here?</option>
                                        <option>Learning classroom strategies for myself</option>
                                        <option>Exploring solutions for my school</option>
                                        <option>Evaluating for my reseller business</option>
                                        <option>General professional development</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formrow}>
                                <div className={styles.formgroup}>
                                    <label>Grade Levels You Work With</label>
                                    <select>
                                        <option value="">Select grade range...</option>
                                        <option>Pre-Primary (Nursery-KG)</option>
                                        <option>Primary (Classes 1-5)</option>
                                        <option>Middle School (Classes 6-8)</option>
                                        <option>Secondary (Classes 9-10)</option>
                                        <option>Senior Secondary (Classes 11-12)</option>
                                        <option>Multiple Levels</option>
                                    </select>
                                </div>
                                <div className={styles.formgroup}>
                                    <label>Subject Area</label>
                                    <select>
                                        <option value="">Select primary subject...</option>
                                        <option>Mathematics</option>
                                        <option>English / Language Arts</option>
                                        <option>Science</option>
                                        <option>Social Studies</option>
                                        <option>Computer Science / IT</option>
                                        <option>Multiple Subjects</option>
                                        <option>Administration (Non-Teaching)</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formrow}>
                                <div className={styles.formgroup}>
                                    <label>School Board</label>
                                    <select>
                                        <option value="">Select board affiliation...</option>
                                        <option>CBSE</option>
                                        <option>ICSE / ISC</option>
                                        <option>State Board</option>
                                        <option>IB (International Baccalaureate)</option>
                                        <option>Cambridge (IGCSE / A-Levels)</option>
                                        <option>Multiple Boards</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className={styles.formgroup}>
                                    <label>Decision Timeline</label>
                                    <select>
                                        <option value="">When might you implement?</option>
                                        <option>Just exploring / learning</option>
                                        <option>Within this academic year</option>
                                        <option>Next academic year (2026-27)</option>
                                        <option>Ready to start immediately</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Preferences */}
                        <div className={styles.formsection}>
                            <div className={styles.formsectiontitle}>Preferences & Follow-up</div>

                            <div className={styles.checkboxgroup}>
                                <input type="checkbox" id="whatsapp" defaultChecked />
                                <label htmlFor="whatsapp">Send me WhatsApp reminders for this session</label>
                            </div>

                            <div className={styles.checkboxgroup}>
                                <input type="checkbox" id="trial" defaultChecked />
                                <label htmlFor="trial">I'm interested in a free trial of Save My Exams</label>
                            </div>

                            <div className={styles.checkboxgroup}>
                                <input type="checkbox" id="school-info" />
                                <label htmlFor="school-info">Send me information about school-wide packages</label>
                            </div>

                            <div className={styles.checkboxgroup}>
                                <input type="checkbox" id="reseller-info" />
                                <label htmlFor="reseller-info">I'd like to explore reseller opportunities</label>
                            </div>

                            <div className={styles.checkboxgroup}>
                                <input type="checkbox" id="future" defaultChecked />
                                <label htmlFor="future">Keep me informed about future trainings</label>
                            </div>

                            <div className={styles.formgroup} style={{ marginTop: "20px" }}>
                                <label>Questions for the Presenter (Optional)</label>
                                <textarea placeholder="Any specific topics or questions you'd like covered?" />
                            </div>

                            <div className={styles.formgroup}>
                                <label>How did you hear about us? <span className={styles.required}>*</span></label>
                                <select>
                                    <option value="">Select one...</option>
                                    <option>WhatsApp message/group</option>
                                    <option>Facebook / Instagram</option>
                                    <option>LinkedIn</option>
                                    <option>Colleague recommendation</option>
                                    <option>School forwarded</option>
                                    <option>Google search</option>
                                    <option>Previous Knotral training</option>
                                    <option>Solution provider website</option>
                                    <option>DIDAC / Education event</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formdivider}></div>

                        <button className="btn btnprimary btnlg btnblock">Complete Registration</button>

                        <p style={{ textAlign: "center", fontSize: "12px", color: "var(--text-muted)", marginTop: "16px" }}>
                            By registering, you agree to Knotral's <a href="#" style={{ color: "var(--secondary-blue)" }}>Terms of Service</a> and <a href="#" style={{ color: "var(--secondary-blue)" }}>Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterTraining;
