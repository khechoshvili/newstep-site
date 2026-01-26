import { useEffect, useMemo, useState } from "react";
import "./App.css";
import logo from "./assets/logo.jpg";
import sofo from "./assets/sofo.jpg";
import natia from "./assets/natia.jpg";
import ana from "./assets/ana.jpg";
import mari from "./assets/mari.jpg";
import ketevan from "./assets/ketevan.jpg";
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

function Modal({ open, onClose, title, children }) {
    useEffect(() => {
        if (!open) return;

        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="modalBackdrop" onClick={onClose} role="dialog" aria-modal="true">
            <div className="modalCard" onClick={(e) => e.stopPropagation()}>
                <div className="modalHeader">
                    <h3 className="modalTitle">{title}</h3>
                    <button className="btn ghost modalClose" onClick={onClose} aria-label="Close">
                        ✕
                    </button>
                </div>

                <div className="modalBody">{children}</div>
            </div>
        </div>
    );
}

export default function App() {
    const slides = useMemo(() => slidesSeed, []);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMember, setActiveMember] = useState(null);
    const [aboutOpen, setAboutOpen] = useState(false);

    const ABOUT_FULL = `„ახალი ნაბიჯი“ არის ბავშვთა და მოზარდთა რეაბილიტაციისა და აბილიტაციის არაკომერციული ცენტრი, რომელიც 0–18 წლის ასაკის ბავშვებს ეხმარება ფიზიკურ, ფსიქოლოგიურ და საგანმანათლებლო განვითარებაში.

ცენტრი უზრუნველყოფს ინდივიდუალურად მორგებულ სარეაბილიტაციო პროგრამებს, სპეციალიზებულ თერაპიულ მომსახურებებს და პროფესიულ კონსულტაციებს მშობლებისა და მომვლელებისთვის. ჩვენი მულტიდისციპლინური მიდგომა ეფუძნება თითოეული ბავშვის უნიკალურ საჭიროებებს, შესაძლებლობებსა და განვითარების მიზნებს.

ჩვენი მისიაა ბავშვების განვითარების ხელშეწყობა, სოციალური ინკლუზიის გაძლიერება და მათი პოტენციალის სრულად რეალიზება თანამედროვე, მტკიცებულებებზე დაფუძნებული მეთოდების გამოყენებით. ორგანიზაციის ფინანსური რესურსები სრულად ხმარდება ბავშვთა განვითარების, რეაბილიტაციისა და საგანმანათლებლო პროგრამების განხორციელებას.
`;


    const TEAM = [
        {
            id: "sofo",
            name: "სოფიკო ძამუკაშვილი",
            role: "ცენტრის დირექტორი",
            img: sofo,
            bio: "საერთაშორისო ქცევის ანალიტიკოსი (IBA)\n" +
                "ქცევის თერაპიის სუპერვიზორი\n" +
                "\n" +
                "მოკლე პროფესიული აღწერა\n" +
                "\n" +
                "სოფიკო ძამუკაშვილი არის ბავშვთა და მოზარდთა განვითარების სფეროში მრავალწლიანი გამოცდილების მქონე სპეციალისტი. იგი ხელმძღვანელობს ცენტრის სტრატეგიულ და კლინიკურ საქმიანობას და უზრუნველყოფს ინდივიდუალურ, მტკიცებულებებზე დაფუძნებულ სარეაბილიტაციო სერვისებს.\n" +
                "\n" +
                "განათლება\n" +
                "\n" +
                "ბაკალავრიატი\n" +
                "ილიას სახელმწიფო უნივერსიტეტი\n" +
                "მეცნიერებათა და ხელოვნების ფაკულტეტი\n" +
                "სპეციალობა: გამოყენებითი ფსიქოლოგია\n" +
                "2013–2017\n" +
                "\n" +
                "მაგისტრატურა\n" +
                "საქართველოს ანდრია პირველწოდებულის სახელობის ქართული უნივერსიტეტი\n" +
                "ბიზნესის, კომპიუტინგისა და სოციალურ მეცნიერებათა სკოლა\n" +
                "სპეციალობა: ფსიქოდიაგნოსტიკა და კონსულტირება\n" +
                "2017–2020\n" +
                "\n" +
                "სერტიფიკატები და ტრენინგები\n" +
                "\n" +
                "საერთაშორისო ქცევის ანალიტიკოსი (IBA), 2025\n" +
                "უილიას სახელმწიფო უნივერსიტეტი\n" +
                "\n" +
                "ბავშვის განვითარების ინსტიტუტი – სასერტიფიკატო პროგრამა\n" +
                "„ქცევის გამოყენებითი ანალიზი (ABA)”\n" +
                "(ქცევის ანალიზის საერთაშორისო ასოციაციის მიერ აღიარებული – #51404, BCBA 5th Edition)\n" +
                "\n" +
                "კამილიელთა სამედიცინო ცენტრი –\n" +
                "„სენსორული ინტეგრაციის ნეირობიოლოგიური საფუძვლები“ (40 საათი)\n" +
                "\n" +
                "ნატა მეფარიშვილის ფსიქოლოგიური დახმარების ცენტრი –\n" +
                "სქესობრივი განათლება განსაკუთრებული საჭიროების მქონე ბავშვებსა და მოზარდებში\n" +
                "\n" +
                "Florida Institute of Technology (FLORIDA TECH):\n" +
                "\n" +
                "Applications of Verbal Behavior: Language Assessment\n" +
                "\n" +
                "Applications of Verbal Behavior: Language Intervention\n" +
                "\n" +
                "საქართველოს ქცევით ანალიტიკოსთა ასოციაცია –\n" +
                "ტრენინგი: „ქცევის ფუნქციური ანალიზის გამოყენების პერსპექტივები“\n" +
                "(ტრენერი: ტრევორ ფ. სტოუკი)\n" +
                "\n" +
                "სპეციალური მასწავლებლის კვალიფიკაცია (FROSY)\n" +
                "\n" +
                "სამუშაო გამოცდილება\n" +
                "\n" +
                "ბავშვთა და მოზარდთა აბილიტაციის ცენტრი „ფაზლი“\n" +
                "ქცევითი თერაპევტი | 2017–2024\n" +
                "\n" +
                "კამილიელთა სამედიცინო ცენტრი\n" +
                "ქცევის თერაპიის სუპერვიზორი | 2024 – დღემდე\n" +
                "\n" +
                "აიპ. „დობადონა“\n" +
                "ქცევის თერაპიის სუპერვიზორი | 2022 – დღემდე\n" +
                "\n" +
                "„ჰარმონია“ – ბავშვთა ნევროლოგიური ცენტრი\n" +
                "კლინიკური ხელმძღვანელი, ქცევის თერაპიის სუპერვიზორი | 2024–2025\n",
        },
        {
            id: "natia",
            name: "ნათია კაშია",
            role: "სენსორული თერაპიის სუპერვიზორი",
            img: natia,
            bio: "მოკლე პროფესიული აღწერა\n" +
                "ნათია კაშია არის სენსორული თერაპიის, ფსიქოლოგიისა და მეტყველების თერაპიის სფეროში მრავალწლიანი გამოცდილების მქონე სპეციალისტი. იგი ხელმძღვანელობს სენსორული თერაპიის მიმართულებას და მონაწილეობს ბავშვთა ინდივიდუალური განვითარების გეგმების შემუშავებასა და განხორციელებაში.\n" +
                "განათლება\n" +
                "უმაღლესი განათლება\n" +
                "ქ. მოსკოვის „სახელმწიფო საერთაშორისო ურთიერთობათა უნივერსიტეტი“\n" +
                "კვალიფიკაცია:\n" +
                "•\tფსიქოლოგიის მაგისტრი\n" +
                "•\tსენსორული თერაპევტი\n" +
                "•\tსამედიცინო ლოგოპედი\n" +
                "2004–2009\n" +
                "________________________________________\n" +
                "ტრენინგები და პროფესიული განვითარება\n" +
                "•\t„შეზღუდული შესაძლებლობების მქონე ბავშვთა დღის ცენტრების მომსახურების საფუძვლები“\n" +
                "2011–2012\n" +
                "•\tმაკლეინის ასოციაცია ბავშვებისთვის\n" +
                "2012\n" +
                "•\t„ინკლუზური განათლება“\n" +
                "2018\n" +
                "•\t„გამოყენებითი ქცევითი ანალიზის საბაზისო კურსი“ (40 საათი)\n" +
                "2019\n" +
                "•\t„კოგნიტური უნარების განმავითარებელი ახალი სასწავლო სტრატეგიები“\n" +
                "2019\n" +
                "•\tსპეციალური პედაგოგის საბაზისო კურსი (60 საათი)\n" +
                "2020\n" +
                "•\tბავშვთა და მოზარდთა განვითარების ფსიქოლოგის საბაზისო ტრენინგ-კურსი\n" +
                "2021\n" +
                "•\t„სურათებით კომუნიკაციის სისტემის (PECS) თეორიული მიმოხილვა“\n" +
                "2021\n" +
                "•\t„ბავშვის ვერბალური უნარების შეფასება და განმავითარებელი პროგრამების შედგენა“\n" +
                "2021\n" +
                "•\tენისა და მეტყველების თერაპიის საბაზისო ტრენინგ-კურსი (60 საათი)\n" +
                "2021\n" +
                "•\t„რთული ქცევის მართვის ტრენინგი“\n" +
                "2022\n" +
                "•\tThe Assessment of Basic Language and Learning Skills – Revised (ABLLS-R)\n" +
                "30 საათი | 2023\n" +
                "•\tCollaborative for Leadership in Ayres Sensory Integration\n" +
                "180 საათი | 2025\n" +
                "•\tFeeding and Nutrition for Children with Autism Spectrum Disorder\n" +
                "2025\n" +
                "•\tPsychology of Relationships with Children: School-Age Crises\n" +
                "2025\n" +
                "•\tEthical Practice in Designing Sensory-Friendly ABA Environments\n" +
                "2025\n"},
        {
            id: "ana",
            name: "ანა ყოჩაშვილი",
            role: "ენისა და მეტყველების თერაპევტი",
            img: ana,
            bio: "ილიას სახელმწიფო უნივერსიტეტის, მეცნიერებათა და ხელოვნების ფაკულტეტის პირველი კურსის მაგისტრი. მიმართულება- კომუნიკაციის, ენისა და მეტყველების თერაპია\n" +
                "•\tბაკალავრი-საქართველოს საპატრიარქოს წმიდა ანდრია პირველწოდებულის სახელობის ქართული უნივერსიტეტი,ბიზნესის,კომპიუტინგის და სოციალურ მეცნიერებათა სკოლის კურსდამთავრებული.\n" +
                "ფაკულტეტი-ფსიქოლოგია\n" +
                "\n" +
                "სამუშაო გამოცდილება-•\n" +
                "\tფსიქიკური ჯანმრთელობის ცენტრი: კლინიკური პრაქტიკა ფსიქიატრიაში (2020წ.);\n" +
                "\n" +
                "•\tბავშის განვითარების ინსტიტუტი (2022წ.):\n" +
                "•\tკლინიკური პრაქტიკა: ენის შეფასება და ინტერვენცია;\n" +
                "•\tკლინიკური პრაქტიკა: კომუნიკაციის შეფასება და ინტერვენცია;\n" +
                "•\tკლინიკური პრაქტიკა: მეტყველება და ორალურ-მოტორული დარღვევები: შეფასება და ინტერვენცია;\n" +
                "•\tკლინიკური პრაქტიკა: მეტყველების მოქნილობის დარღვევები: შეფასება და ინტერვენცია.\n" +
                "\n" +
                "•\tკომუნიკაციის, ენისა და მეტყველების თერაპევტი:\n" +
                "•\tჰარმონია - ბავშვთა ნევროლოგიური ცენტრი (2024-2026წ.);\n" +
                "•\tსსიპ - გურამ ჭილაშვილის სახელობის ქალაქ გურჯაანის №4 საჯარო სკოლა (2025 წლიდან- დღემდე).\n" +
                "\n" +
                "•\tფსიქოლოგი:\n" +
                "•\tსსიპ - ქალაქ გურჯაანის №1 საჯარო სკოლა (2025 წლიდან - დღემდე).\n" +
                "\n" +
                "ტრენინგები\n" +
                "•\tსუზან ჯონსტონის ტრენინგი, ალტერნატიული და აუგმენტური კომუნიკაციის გამოყენება;\n" +
                "•\tMWRAT-R ტრენინგი - აკადემიური უნარების შესაფასებელი ინსტრუმენტი.\n"},
        {
            id: "mari",
            name: "მარი გაბიტაშვილი",
            role: "ქცევითი თერაპევტი",
            img: mari,
            bio: "განათლება\n" +
                "ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი\n" +
                "ფსიქოლოგიისა და განათლების მეცნიერებათა ფაკულტეტი\n" +
                "სპეციალობა: ფსიქოლოგია\n" +
                "\n" +
                "სამუშაო გამოცდილება\n" +
                "\n" +
                "\n" +
                "ფსიქოლოგი-ჯანმრთელობის დაცვისა და სოციალური მომსახურების სამსახური\n" +
                "ბავშვის უფლებათა დაცვის განყოფილება 01.10.2023-დღემდე\n" +
                "ფსიქოლოგი-სსიპ – ქალაქ გურჯაანის №2 საჯარო სკოლა  03.2022-01.10.2025\n" +
                "გურჯაანის შშმ პირთა ასოციაცია\n" +
                "პოზიცია: მიწვეული სპეციალისტი (ფსიქოლოგი)-21.11.2020 – 21.07.2023\n" +
                "\n" +
                "ტრენინგები და პროფესიული განვითარება\n" +
                "\n" +
                "კონსტრუქციული ურთიერთობების ჩამოყალიბება\n" +
                "\n" +
                "მასწავლებლის სახლის ფსიქოლოგთა გადამზადების ტრენინგი\n" +
                "\n" +
                "დამოუკიდებელი ცხოვრებისათვის მომზადება\n" +
                "\n" +
                "დღის ცენტრებისა და მცირე საოჯახო სახლების შეზღუდული შესაძლებლობის მქონე ბავშვებთან მომუშავე სპეციალისტების ტრენინგი\n" +
                "\n" +
                "ქცევის მართვა\n" +
                "\n" +
                "სენსორული ინტეგრაციის ელემენტები და სახალისო აქტივობები\n"},
        {
            id: "ketevan",
            name: "ქეთევან ქოქაშვილი",
            role: "ფსიქოთერაპევტი და არტ თერაპევტი",
            img: ketevan,
            bio: "განათლება-ქრისტიანული ფსიქოლოგიის ბაკალავრის აკადემიური ხარისხი.\n" +
                "სამუშაო გამოცდილება-ფსიქოლოგი-კოდის საბავშვო ბაღი\n" +
                "                                                ფსიქოლოგი- IBEL AKADEMY\n" +
                "ტრენინგები\n" +
                "პოზიტიური  და ტრანსკულტურული ფსიქოთერაპიისა და ფსიქოკონსულტირების საბაზისო კურსი.-2022\n" +
                "IDC ფსიქოლოგია, ქოუჩინგის სასწავლო ცენტრი- პოზიტიური ფსიქოთერაპიის მასტერის სამწლიანი კურსი.\n" +
                "არტ თერაპიის ერთ წლიანი კურსი-2022\n" +
                "მეტაფრული ბარათები ფსიქოკონსულტირებაში და ქოუჩინგში-2020\n" +
                "N.L.P პრაქტიკოსის ტრენინგი.-2019\n" +
                "შშმ ბავშვთა,  მოზარდთა და მოზრდილთა ინკლუზიისსა და ინტეგრაციის თეორიული და პრაქტიკული საფუძვლები.-2015\n" +
                "გეშტალტ თერაპიის თეორია და პრაქტიკა. 18 საათი-2014\n"
        }
    ];

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
                                <a className="contactItem" href="tel:+995577987280">
                                    📞 +995 577 987 280
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
                    <button className="btn primary" type="button" onClick={() => setAboutOpen(true)}>
                        ვრცლად
                    </button>
                </Section>

                <Section id="team" title="გუნდი">
                    <div className="teamRows">
                        <div className="grid4">
                            {TEAM.slice(0, 4).map((m) => (
                                <button
                                    key={m.id}
                                    className="card teamCardBtn"
                                    type="button"
                                    onClick={() => setActiveMember(m)}
                                >
                                    <img className="avatar" src={m.img} alt={m.name} />
                                    <div className="teamText">
                                        <h4>{m.name}</h4>
                                        <p>{m.role}</p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="grid4">
                            {TEAM.slice(4).map((m) => (
                                <button
                                    key={m.id}
                                    className="card teamCardBtn"
                                    type="button"
                                    onClick={() => setActiveMember(m)}
                                >
                                    <img className="avatar" src={m.img} alt={m.name} />
                                    <div className="teamText">
                                        <h4>{m.name}</h4>
                                        <p>{m.role}</p>
                                    </div>
                                </button>
                            ))}
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
                            <p>📞 +995 577 987 280</p>
                            <p>✉️ info@newstep.ge</p>
                            <p>📍 მისამართი: თბილისი, საქართველო</p>
                        </div>

                        <form className="form" onSubmit={(e) => e.preventDefault()}>
                            <input placeholder="სახელი" />
                            <input placeholder="ელ-ფოსტა" type="email" />
                            <textarea placeholder="შეტყობინება" rows={4} />
                            <button className="btn primary" type="submit">გაგზავნა</button>
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
            <Modal
                open={aboutOpen}
                onClose={() => setAboutOpen(false)}
                title="ორგანიზაციის შესახებ"
            >
                <p style={{ marginTop: 0, marginBottom: 0 }}>
                    {ABOUT_FULL}
                </p>
            </Modal>
            <Modal
                open={!!activeMember}
                onClose={() => setActiveMember(null)}
                title={activeMember?.name || ""}
            >
                <p style={{ marginTop: 0, color: "var(--muted)" }}>
                    {activeMember?.role}
                </p>
                <p style={{ marginBottom: 0, color: "var(--text)" }}>
                    {activeMember?.bio}
                </p>
            </Modal>
        </div>
    );
}
