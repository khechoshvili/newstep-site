import { useEffect, useMemo, useState } from "react";
import "./App.css";

const NAV = [
    { id: "about", label: "ორგანიზაციის შესახებ" },
    { id: "team", label: "გუნდი" },
    { id: "services", label: "სერვისები" },
    { id: "donors", label: "დონორები" },
    { id: "projects", label: "პროექტები" },
    { id: "contact", label: "საკონტაქტო" },
];

const slidesSeed = [
    {
        title: "კეთილი იყოს თქვენი მობრძანება",
        text: "ჩვენ ვქმნით რეალურ ცვლილებას თემისთვის.",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "გუნდთან ერთად",
        text: "პროექტები, სერვისები და პარტნიორობა.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "დონორები და მხარდაჭერა",
        text: "გმადლობთ მხარდაჭერისთვის.",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    },
];

function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Carousel({ slides, intervalMs = 4500 }) {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIdx((v) => (v + 1) % slides.length), intervalMs);
        return () => clearInterval(t);
    }, [slides.length, intervalMs]);

    const current = slides[idx];

    return (
        <section className="carousel" aria-label="Carousel">
            <div className="carouselSlide" style={{ backgroundImage: `url(${current.img})` }}>
                <div className="carouselOverlay" />
                <div className="carouselContent">
                    <h2>{current.title}</h2>
                    <p>{current.text}</p>
                    <div className="carouselControls">
                        <button
                            className="btn ghost"
                            onClick={() => setIdx((v) => (v - 1 + slides.length) % slides.length)}
                            aria-label="Previous slide"
                        >
                            ◀
                        </button>
                        <div className="dots" role="tablist" aria-label="Slide selector">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    className={`dot ${i === idx ? "active" : ""}`}
                                    onClick={() => setIdx(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            className="btn ghost"
                            onClick={() => setIdx((v) => (v + 1) % slides.length)}
                            aria-label="Next slide"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Section({ id, title, children }) {
    return (
        <section id={id} className="section">
            <div className="container">
                <h3 className="sectionTitle">{title}</h3>
                <div className="sectionBody">{children}</div>
            </div>
        </section>
    );
}

export default function App() {
    const slides = useMemo(() => slidesSeed, []);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 900) setMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <div className="page">
            <header className="header">
                <div className="topbar">
                    <div className="container topbarInner">
                        <div
                            className="brand"
                            onClick={() => scrollToId("top")}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="logoBox">NS</div>
                            <div className="brandText">
                                <div className="brandName">NewStep</div>
                                <div className="brandTag">newstep.ge</div>
                            </div>
                        </div>

                        <div className="rightArea">
                            <div className="contactRight">
                                <a className="contactItem" href="tel:+995555000000">
                                    📞 +995 555 00 00 00
                                </a>
                                <a className="contactItem" href="mailto:info@newstep.ge">
                                    ✉️ info@newstep.ge
                                </a>
                            </div>

                            <button
                                className="menuBtn"
                                onClick={() => setMenuOpen((v) => !v)}
                                aria-label="Toggle menu"
                                aria-expanded={menuOpen}
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="nav" aria-label="Main navigation">
                    <div className="container navInner desktopNav">
                        {NAV.map((item) => (
                            <button
                                key={item.id}
                                className="navLink"
                                onClick={() => scrollToId(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile dropdown */}
                    <div className={`mobileNav ${menuOpen ? "open" : ""}`}>
                        <div className="container mobileNavInner">
                            {NAV.map((item) => (
                                <button
                                    key={item.id}
                                    className="mobileNavLink"
                                    onClick={() => {
                                        scrollToId(item.id);
                                        setMenuOpen(false);
                                    }}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            <main id="top">
                <Carousel slides={slides} />

                <Section id="about" title="ორგანიზაციის შესახებ">
                    <p>
                        აქ ჩაწერეთ ორგანიზაციის მოკლე აღწერა: მისია, ხედვა და მთავარი მიზნები.
                    </p>
                </Section>

                <Section id="team" title="გუნდი">
                    <div className="grid3">
                        <div className="card">
                            <div className="avatar">A</div>
                            <div>
                                <h4>სახელი გვარი</h4>
                                <p>პოზიცია / როლი</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="avatar">B</div>
                            <div>
                                <h4>სახელი გვარი</h4>
                                <p>პოზიცია / როლი</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="avatar">C</div>
                            <div>
                                <h4>სახელი გვარი</h4>
                                <p>პოზიცია / როლი</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="services" title="სერვისები">
                    <ul className="list">
                        <li>სერვისი #1 — მოკლე აღწერა</li>
                        <li>სერვისი #2 — მოკლე აღწერა</li>
                        <li>სერვისი #3 — მოკლე აღწერა</li>
                    </ul>
                </Section>

                <Section id="donors" title="დონორები">
                    <div className="grid4">
                        <div className="pill">Donor 1</div>
                        <div className="pill">Donor 2</div>
                        <div className="pill">Donor 3</div>
                        <div className="pill">Donor 4</div>
                    </div>
                </Section>

                <Section id="projects" title="პროექტები">
                    <div className="grid2">
                        <div className="project">
                            <h4>პროექტი 1</h4>
                            <p>მოკლე აღწერა, მიზანი და შედეგი.</p>
                        </div>
                        <div className="project">
                            <h4>პროექტი 2</h4>
                            <p>მოკლე აღწერა, მიზანი და შედეგი.</p>
                        </div>
                    </div>
                </Section>

                <Section id="contact" title="საკონტაქტო">
                    <div className="grid2">
                        <div className="project">
                            <h4>კონტაქტი</h4>
                            <p>📞 +995 555 00 00 00</p>
                            <p>✉️ info@newstep.ge</p>
                            <p>📍 მისამართი: თბილისი, საქართველო</p>
                        </div>

                        <form className="form" onSubmit={(e) => e.preventDefault()}>
                            <input placeholder="სახელი" />
                            <input placeholder="ელ-ფოსტა" type="email" />
                            <textarea placeholder="შეტყობინება" rows={4} />
                            <button className="btn primary" type="submit">გაგზავნა</button>
                            <small className="hint">ფორმა ახლა დემოა. მოგვიანებით დავუკავშირებთ რეალურ გაგზავნას.</small>
                        </form>
                    </div>
                </Section>
            </main>

            <footer className="footer">
                <div className="container footerInner">
                    <span>© {new Date().getFullYear()} NewStep</span>
                    <button className="btn ghost" onClick={() => scrollToId("top")}>ზემოთ ↑</button>
                </div>
            </footer>
        </div>
    );
}
