import { useEffect, useMemo, useState } from "react";
import "./App.css";
import logo from "./assets/logo.jpg";
import sofo from "./assets/sofo.jpg";
import natia from "./assets/natia.jpg";
import ana from "./assets/ana.jpg";
import mari from "./assets/mari.jpg";
import service1 from "./assets/ser1.jpg";
import service2 from "./assets/ser2.jpg";
import service3 from "./assets/ser3.jpg";
import service4 from "./assets/ser4.jpg";
import service5 from "./assets/ser5.jpg";
import service6 from "./assets/ser6.jpg";
import service7 from "./assets/ser7.jpg";
import service8 from "./assets/ser8.jpg";

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
                            <div className="logoBox" aria-hidden="true">
                                <img className="logoImg" src={logo} alt="ახალი ნაბიჯი" />
                            </div>
                            <div className="brandText">
                                <div className="brandName">ახალი ნაბიჯი</div>
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
                        „ახალი ნაბიჯი“ არის ბავშვთა და მოზარდთა რეაბილიტაციისა და აბილიტაციის არაკომერციული ცენტრი, რომელიც 0–18 წლის ასაკის ბავშვებს ეხმარება ფიზიკურ, ფსიქოლოგიურ და საგანმანათლებლო განვითარებაში.

                        ცენტრი უზრუნველყოფს ინდივიდუალურად მორგებულ სარეაბილიტაციო პროგრამებს, სპეციალიზებულ თერაპიულ მომსახურებებს და პროფესიულ კონსულტაციებს მშობლებისა და მომვლელებისთვის. ჩვენი მულტიდისციპლინური მიდგომა ეფუძნება თითოეული ბავშვის უნიკალურ საჭიროებებს, შესაძლებლობებსა და განვითარების მიზნებს.

                        ჩვენი მისიაა ბავშვების განვითარების ხელშეწყობა, სოციალური ინკლუზიის გაძლიერება და მათი პოტენციალის სრულად რეალიზება თანამედროვე, მტკიცებულებებზე დაფუძნებული მეთოდების გამოყენებით. ორგანიზაციის ფინანსური რესურსები სრულად ხმარდება ბავშვთა განვითარების, რეაბილიტაციისა და საგანმანათლებლო პროგრამების განხორციელებას.

                    </p>
                </Section>

                <Section id="team" title="გუნდი">
                    <div className="grid4">
                        <div className="card">
                            <img className="avatar" src={sofo}></img>
                            <div>
                                <h4>სოფიკო ძამუკაშვილი</h4>
                                <p>ცენტრის დირექტორი</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="avatar" src={natia}></img>
                            <div>
                                <h4>ნათია კაშია</h4>
                                <p>სენსორული თერაპიის სუპერვიზორი</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="avatar" src={ana}></img>
                            <div>
                                <h4>ანა ყოჩაშვილი</h4>
                                <p>ენისა და მეტყველების თერაპევტი</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="avatar" src={mari}></img>
                            <div>
                                <h4>მარი გაბიტაშვილი</h4>
                                <p>ქცევითი თერაპევტი</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="services" title="სერვისები">
                    <div className="servicesRows">
                        {/* Row 1 */}
                        <div className="grid4">
                            <div className="card serviceCard">
                                <img className="avatar serviceAvatar" src={service1} alt="სერვისი 1" />
                                <h4 className="serviceName">AbA თერაპია</h4>
                            </div>

                            <div className="card serviceCard">
                                <img className="avatar serviceAvatar" src={service2} alt="სერვისი 2" />
                                <h4 className="serviceName">ფსიქო თერაპია</h4>
                            </div>

                            <div className="card serviceCard">
                                <img className="avatar serviceAvatar" src={service3} alt="სერვისი 3" />
                                <h4 className="serviceName">არტ თერაპია</h4>
                            </div>

                            <div className="card serviceCard">
                                <img className="avatar serviceAvatar" src={service4} alt="სერვისი 4" />
                                <h4 className="serviceName">აკადემიური უნარების თერაპია</h4>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid4">
                            <div className="card serviceCard">
                                <img className="avatar serviceAvatar" src={service5} alt="სერვისი 5" />
                                <h4 className="serviceName">სენსორული თერაპია</h4>
                            </div>

                            <div className="card serviceCard">
                                <img className="avatar serviceAvatar" src={service6} alt="სერვისი 6" />
                                <h4 className="serviceName">ფიზიკური თერაპია</h4>
                            </div>

                            <div className="card serviceCard">
                                <img className="avatar serviceAvatar" src={service7} alt="სერვისი 7" />
                                <h4 className="serviceName">მეტყველებითი თერაპია</h4>
                            </div>

                            <div className="card serviceCard">
                                <img className="avatar serviceAvatar" src={service8} alt="სერვისი 8" />
                                <h4 className="serviceName">მუსიკა თერაპია</h4>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="donors" title="დონორები">
                    <div className="grid4">
                        <div className="pill">დონორები ვერ მოიძებნა</div>
                        {/*<div className="pill">Donor 2</div>*/}
                        {/*<div className="pill">Donor 3</div>*/}
                        {/*<div className="pill">Donor 4</div>*/}
                    </div>
                </Section>

                <Section id="projects" title="პროექტები">
                    <div className="grid4">
                        <div className="pill">პროექტები ვერ მოიძებნა</div>
                        {/*<div className="project">*/}
                        {/*    <h4>პროექტი 1</h4>*/}
                        {/*    <p>მოკლე აღწერა, მიზანი და შედეგი.</p>*/}
                        {/*</div>*/}
                        {/*<div className="project">*/}
                        {/*    <h4>პროექტი 2</h4>*/}
                        {/*    <p>მოკლე აღწერა, მიზანი და შედეგი.</p>*/}
                        {/*</div>*/}
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

                    <div className="footerRight">
                        <small className="footerCredit">
                            Site by <strong>Shalva Khechoshvili</strong>
                        </small>
                        <button className="btn ghost" onClick={() => scrollToId("top")}>ზემოთ ↑</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
