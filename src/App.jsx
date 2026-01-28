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

const PHONE_DISPLAY = "+995 598 711 276";
const PHONE_TEL = "+995598711276";
const EMAIL = "akhalinabiji@yahoo.com";
const CONTACT_DISABLED = true;

const I18N = {
    ka: {
        brandName: "ახალი ნაბიჯი",
        brandTag: "newstep.ge",

        nav: [
            { id: "about", label: "ორგანიზაციის შესახებ" },
            { id: "team", label: "გუნდი" },
            { id: "services", label: "სერვისები" },
            { id: "donors", label: "დონორები" },
            { id: "projects", label: "პროექტები" },
            { id: "contact", label: "საკონტაქტო" },
        ],

        slides: [
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
        ],

        about: {
            title: "ორგანიზაციის შესახებ",
            short: `„ახალი ნაბიჯი“ არის ბავშვთა და მოზარდთა რეაბილიტაციისა და აბილიტაციის არაკომერციული ცენტრი, რომელიც 0–18 წლის ასაკის ბავშვებს ეხმარება ფიზიკურ, ფსიქოლოგიურ და საგანმანათლებლო განვითარებაში.

ცენტრი უზრუნველყოფს ინდივიდუალურად მორგებულ სარეაბილიტაციო პროგრამებს, სპეციალიზებულ თერაპიულ მომსახურებებს და პროფესიულ კონსულტაციებს მშობლებისა და მომვლელებისთვის. ჩვენი მულტიდისციპლინური მიდგომა ეფუძნება თითოეული ბავშვის უნიკალურ საჭიროებებს, შესაძლებლობებსა და განვითარების მიზნებს.

ჩვენი მისიაა ბავშვების განვითარების ხელშეწყობა, სოციალური ინკლუზიის გაძლიერება და მათი პოტენციალის სრულად რეალიზება თანამედროვე, მტკიცებულებებზე დაფუძნებული მეთოდების გამოყენებით.`,
            full: `„ახალი ნაბიჯი“ არის ბავშვთა და მოზარდთა რეაბილიტაციისა და აბილიტაციის არაკომერციული ცენტრი, რომელიც 0–18 წლის ასაკის ბავშვებს ეხმარება ფიზიკურ, ფსიქოლოგიურ და საგანმანათლებლო განვითარებაში.

ცენტრი უზრუნველყოფს ინდივიდუალურად მორგებულ სარეაბილიტაციო პროგრამებს, სპეციალიზებულ თერაპიულ მომსახურებებს და პროფესიულ კონსულტაციებს მშობლებისა და მომვლელებისთვის. ჩვენი მულტიდისციპლინური მიდგომა ეფუძნება თითოეული ბავშვის უნიკალურ საჭიროებებს, შესაძლებლობებსა და განვითარების მიზნებს.

ჩვენი მისიაა ბავშვების განვითარების ხელშეწყობა, სოციალური ინკლუზიის გაძლიერება და მათი პოტენციალის სრულად რეალიზება თანამედროვე, მტკიცებულებებზე დაფუძნებული მეთოდების გამოყენებით. ორგანიზაციის ფინანსური რესურსები სრულად ხმარდება ბავშვთა განვითარების, რეაბილიტაციისა და საგანმანათლებლო პროგრამების განხორციელებას.`,
            readMore: "ვრცლად",
        },

        sectionTitles: {
            team: "გუნდი",
            services: "სერვისები",
            donors: "დონორები",
            projects: "პროექტები",
            contact: "საკონტაქტო",
        },

        services: [
            "ABA თერაპია",
            "ფსიქოთერაპია",
            "არტ თერაპია",
            "აკადემიური უნარების თერაპია",
            "სენსორული თერაპია",
            "ფიზიკური თერაპია",
            "მეტყველებითი თერაპია",
            "მუსიკოთერაპია",
        ],

        empty: {
            donors: "დონორები ვერ მოიძებნა",
            projects: "პროექტები ვერ მოიძებნა",
        },

        contact: {
            cardTitle: "კონტაქტი",
            address: "📍 მისამართი: მარჯანიშვილის ქუჩა, გურჯაანი, საქართველო",
            form: {
                name: "სახელი",
                email: "ელ-ფოსტა",
                message: "შეტყობინება",
                send: "გაგზავნა",
            },
        },

        footer: {
            top: "ზემოთ ↑",
            copyright: (year) => `© ${year} NewStep`,
            siteBy: "Site by",
        },

        langSwitch: "EN",
        slidePrev: "წინა სლაიდი",
        slideNext: "შემდეგი სლაიდი",
    },

    en: {
        brandName: "New Step",
        brandTag: "newstep.ge",

        nav: [
            { id: "about", label: "About" },
            { id: "team", label: "Team" },
            { id: "services", label: "Services" },
            { id: "donors", label: "Donors" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
        ],

        slides: [
            {
                title: "Welcome",
                text: "We create real change for the community.",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
            },
            {
                title: "Together with our team",
                text: "Projects, services, and partnerships.",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
            },
            {
                title: "Donors & support",
                text: "Thank you for your support.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
            },
        ],

        about: {
            title: "About the Organization",
            short: `“New Step” is a non-profit rehabilitation and habilitation center for children and adolescents (0–18). We support children’s physical, psychological, and educational development.

The center provides individualized rehabilitation programs, specialized therapeutic services, and professional consultation for parents and caregivers. Our multidisciplinary approach is based on each child’s unique needs, abilities, and developmental goals.

Our mission is to promote children’s development, strengthen social inclusion, and help them reach their full potential using modern, evidence-based methods.`,
            full: `“New Step” is a non-profit rehabilitation and habilitation center for children and adolescents (0–18). We support children’s physical, psychological, and educational development.

The center provides individualized rehabilitation programs, specialized therapeutic services, and professional consultation for parents and caregivers. Our multidisciplinary approach is based on each child’s unique needs, abilities, and developmental goals.

Our mission is to promote children’s development, strengthen social inclusion, and help them reach their full potential using modern, evidence-based methods. All financial resources of the organization are fully directed toward implementing rehabilitation and educational programs for children.`,
            readMore: "Read more",
        },

        sectionTitles: {
            team: "Team",
            services: "Services",
            donors: "Donors",
            projects: "Projects",
            contact: "Contact",
        },

        services: [
            "ABA Therapy",
            "Psychotherapy",
            "Art Therapy",
            "Academic Skills Therapy",
            "Sensory Therapy",
            "Physical Therapy",
            "Speech & Language Therapy",
            "Music Therapy",
        ],

        empty: {
            donors: "No donors found",
            projects: "No projects found",
        },

        contact: {
            cardTitle: "Contact",
            address: "📍 Address: Tbilisi, Georgia",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send",
            },
        },

        footer: {
            top: "Back to top ↑",
            copyright: (year) => `© ${year} NewStep`,
            siteBy: "Site by",
        },

        langSwitch: "KA",
        slidePrev: "Previous slide",
        slideNext: "Next slide",
    },
};

function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Carousel({ slides, intervalMs = 4500, labels }) {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (!slides?.length) return;
        const t = setInterval(() => setIdx((v) => (v + 1) % slides.length), intervalMs);
        return () => clearInterval(t);
    }, [slides?.length, intervalMs]);

    if (!slides?.length) return null;

    const current = slides[idx];

    return (
        <section className="carousel" aria-label="Carousel">
            <div className="carouselSlide" style={{ backgroundImage: `url(${current.img})` }}>
                <div className="carouselOverlay" />
                <div className="carouselContent">
                    <h2>{current.title}</h2>
                    <p>{current.text}</p>
                </div>
                <div className="carouselControls">
                    <button
                        className="carouselArrow left"
                        onClick={() => setIdx((v) => (v - 1 + slides.length) % slides.length)}
                        aria-label="Previous slide"
                    >
                        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div className="dotsBottom" role="tablist" aria-label="Slide selector">
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
                        className="carouselArrow right"
                        onClick={() => setIdx((v) => (v + 1) % slides.length)}
                        aria-label="Next slide"
                    >
                        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
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
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "ka" || saved === "en") return saved;
        return navigator.language?.toLowerCase().startsWith("ka") ? "ka" : "en";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const t = I18N[lang];

    const slides = useMemo(() => t.slides, [t]);
    const NAV = useMemo(() => t.nav, [t]);

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMember, setActiveMember] = useState(null);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const TEAM = useMemo(
        () => [
            {
                id: "sofo",
                name: "სოფიკო ძამუკაშვილი",
                nameEn: "Sophiko Dzamukashvili",
                role: {
                    ka: "ცენტრის დირექტორი",
                    en: "Center Director",
                },
                img: sofo,
                bio: {
                    ka:
                        "საერთაშორისო ქცევის ანალიტიკოსი (IBA)\n" +
                        "ქცევის თერაპიის სუპერვიზორი\n\n" +
                        "მოკლე პროფესიული აღწერა\n\n" +
                        "სოფიკო ძამუკაშვილი არის ბავშვთა და მოზარდთა განვითარების სფეროში მრავალწლიანი გამოცდილების მქონე სპეციალისტი. იგი ხელმძღვანელობს ცენტრის სტრატეგიულ და კლინიკურ საქმიანობას და უზრუნველყოფს ინდივიდუალურ, მტკიცებულებებზე დაფუძნებულ სარეაბილიტაციო სერვისებს.\n\n" +
                        "განათლება\n\n" +
                        "ბაკალავრიატი\n" +
                        "ილიას სახელმწიფო უნივერსიტეტი\n" +
                        "მეცნიერებათა და ხელოვნების ფაკულტეტი\n" +
                        "სპეციალობა: გამოყენებითი ფსიქოლოგია\n" +
                        "2013–2017\n\n" +
                        "მაგისტრატურა\n" +
                        "საქართველოს ანდრია პირველწოდებულის სახელობის ქართული უნივერსიტეტი\n" +
                        "ბიზნესის, კომპიუტინგისა და სოციალურ მეცნიერებათა სკოლა\n" +
                        "სპეციალობა: ფსიქოდიაგნოსტიკა და კონსულტირება\n" +
                        "2017–2020\n\n" +
                        "სერტიფიკატები და ტრენინგები\n\n" +
                        "საერთაშორისო ქცევის ანალიტიკოსი (IBA), 2025\n" +
                        "უილიას სახელმწიფო უნივერსიტეტი\n\n" +
                        "ბავშვის განვითარების ინსტიტუტი – სასერტიფიკატო პროგრამა\n" +
                        "„ქცევის გამოყენებითი ანალიზი (ABA)”\n" +
                        "(ქცევის ანალიზის საერთაშორისო ასოციაციის მიერ აღიარებული – #51404, BCBA 5th Edition)\n\n" +
                        "კამილიელთა სამედიცინო ცენტრი –\n" +
                        "„სენსორული ინტეგრაციის ნეირობიოლოგიური საფუძვლები“ (40 საათი)\n\n" +
                        "ნატა მეფარიშვილის ფსიქოლოგიური დახმარების ცენტრი –\n" +
                        "სქესობრივი განათლება განსაკუთრებული საჭიროების მქონე ბავშვებსა და მოზარდებში\n\n" +
                        "Florida Institute of Technology (FLORIDA TECH):\n\n" +
                        "Applications of Verbal Behavior: Language Assessment\n" +
                        "Applications of Verbal Behavior: Language Intervention\n\n" +
                        "საქართველოს ქცევით ანალიტიკოსთა ასოციაცია –\n" +
                        "ტრენინგი: „ქცევის ფუნქციური ანალიზის გამოყენების პერსპექტივები“\n" +
                        "(ტრენერი: ტრევორ ფ. სტოუკი)\n\n" +
                        "სპეციალური მასწავლებლის კვალიფიკაცია (FROSY)\n\n" +
                        "სამუშაო გამოცდილება\n\n" +
                        "ბავშვთა და მოზარდთა აბილიტაციის ცენტრი „ფაზლი“\n" +
                        "ქცევითი თერაპევტი | 2017–2024\n\n" +
                        "კამილიელთა სამედიცინო ცენტრი\n" +
                        "ქცევის თერაპიის სუპერვიზორი | 2024 – დღემდე\n\n" +
                        "აიპ. „დობადონა“\n" +
                        "ქცევის თერაპიის სუპერვიზორი | 2022 – დღემდე\n\n" +
                        "„ჰარმონია“ – ბავშვთა ნევროლოგიური ცენტრი\n" +
                        "კლინიკური ხელმძღვანელი, ქცევის თერაპიის სუპერვიზორი | 2024–2025\n",
                    en:
                        "International Behavior Analyst (IBA)\n" +
                        "Behavior Therapy Supervisor\n\n" +
                        "Short professional profile\n\n" +
                        "Sophiko Dzamukashvili is a specialist with many years of experience in child and adolescent development. She leads the center’s strategic and clinical work and provides individualized, evidence-based rehabilitation services.\n\n" +
                        "Education\n\n" +
                        "Bachelor’s degree\n" +
                        "Ilia State University\n" +
                        "Faculty of Arts and Sciences\n" +
                        "Major: Applied Psychology\n" +
                        "2013–2017\n\n" +
                        "Master’s degree\n" +
                        "Georgian University named after St. Andrew the First-Called\n" +
                        "School of Business, Computing and Social Sciences\n" +
                        "Major: Psychodiagnostics and Counseling\n" +
                        "2017–2020\n\n" +
                        "Certificates & trainings\n\n" +
                        "International Behavior Analyst (IBA), 2025\n" +
                        "Wilia State University\n\n" +
                        "Child Development Institute – Certificate Program\n" +
                        "Applied Behavior Analysis (ABA)\n" +
                        "(recognized by an international behavior analysis association – #51404, BCBA 5th Edition)\n\n" +
                        "Camillians Medical Center – Neurobiological Foundations of Sensory Integration (40 hours)\n\n" +
                        "Nata Meparishvili Psychological Support Center – Sexual education for children/adolescents with special needs\n\n" +
                        "Florida Institute of Technology (Florida Tech):\n" +
                        "Applications of Verbal Behavior: Language Assessment\n" +
                        "Applications of Verbal Behavior: Language Intervention\n\n" +
                        "Georgian Association of Behavior Analysts – Training: Prospects of using functional behavior analysis\n" +
                        "(Trainer: Trevor F. Stokes)\n\n" +
                        "Special Education Teacher Qualification (FROSY)\n\n" +
                        "Work experience\n\n" +
                        "“Puzzle” Habilitation Center for Children and Adolescents\n" +
                        "Behavior Therapist | 2017–2024\n\n" +
                        "Camillians Medical Center\n" +
                        "Behavior Therapy Supervisor | 2024 – present\n\n" +
                        "NPO “Dobadona”\n" +
                        "Behavior Therapy Supervisor | 2022 – present\n\n" +
                        "“Harmony” – Children’s Neurological Center\n" +
                        "Clinical Lead, Behavior Therapy Supervisor | 2024–2025\n",
                },
            },

            {
                id: "natia",
                name: "ნათია კაშია",
                nameEn: "Natia Kashia",
                role: {
                    ka: "სენსორული თერაპიის სუპერვიზორი",
                    en: "Sensory Therapy Supervisor",
                },
                img: natia,
                bio: {
                    ka:
                        "მოკლე პროფესიული აღწერა\n" +
                        "ნათია კაშია არის სენსორული თერაპიის, ფსიქოლოგიისა და მეტყველების თერაპიის სფეროში მრავალწლიანი გამოცდილების მქონე სპეციალისტი. იგი ხელმძღვანელობს სენსორული თერაპიის მიმართულებას და მონაწილეობს ბავშვთა ინდივიდუალური განვითარების გეგმების შემუშავებასა და განხორციელებაში.\n\n" +
                        "განათლება\n" +
                        "უმაღლესი განათლება\n" +
                        "ქ. მოსკოვის „სახელმწიფო საერთაშორისო ურთიერთობათა უნივერსიტეტი“\n" +
                        "კვალიფიკაცია:\n" +
                        "• ფსიქოლოგიის მაგისტრი\n" +
                        "• სენსორული თერაპევტი\n" +
                        "• სამედიცინო ლოგოპედი\n" +
                        "2004–2009\n\n" +
                        "ტრენინგები და პროფესიული განვითარება\n" +
                        "• „შეზღუდული შესაძლებლობების მქონე ბავშვთა დღის ცენტრების მომსახურების საფუძვლები“ (2011–2012)\n" +
                        "• მაკლეინის ასოციაცია ბავშვებისთვის (2012)\n" +
                        "• „ინკლუზური განათლება“ (2018)\n" +
                        "• „გამოყენებითი ქცევითი ანალიზის საბაზისო კურსი“ – 40 საათი (2019)\n" +
                        "• „კოგნიტური უნარების განმავითარებელი ახალი სასწავლო სტრატეგიები“ (2019)\n" +
                        "• სპეციალური პედაგოგის საბაზისო კურსი – 60 საათი (2020)\n" +
                        "• ბავშვთა და მოზარდთა განვითარების ფსიქოლოგის საბაზისო ტრენინგ-კურსი (2021)\n" +
                        "• PECS – თეორიული მიმოხილვა (2021)\n" +
                        "• ბავშვის ვერბალური უნარების შეფასება და პროგრამების შედგენა (2021)\n" +
                        "• ენისა და მეტყველების თერაპიის საბაზისო კურსი – 60 საათი (2021)\n" +
                        "• „რთული ქცევის მართვის ტრენინგი“ (2022)\n" +
                        "• ABLLS-R – 30 საათი (2023)\n" +
                        "• Collaborative for Leadership in Ayres Sensory Integration – 180 საათი (2025)\n" +
                        "• Feeding and Nutrition for Children with Autism Spectrum Disorder (2025)\n" +
                        "• Psychology of Relationships with Children: School-Age Crises (2025)\n" +
                        "• Ethical Practice in Designing Sensory-Friendly ABA Environments (2025)\n",
                    en:
                        "Short professional profile\n" +
                        "Natia Kashia is a specialist with many years of experience in sensory therapy, psychology, and speech therapy. She leads the sensory therapy direction and participates in developing and implementing individualized development plans for children.\n\n" +
                        "Education\n" +
                        "Moscow State Institute of International Relations (MGIMO)\n" +
                        "Qualifications:\n" +
                        "• Master’s in Psychology\n" +
                        "• Sensory Therapist\n" +
                        "• Medical Speech Therapist\n" +
                        "2004–2009\n\n" +
                        "Training & professional development\n" +
                        "• Fundamentals of services in day centers for children with disabilities (2011–2012)\n" +
                        "• McLean Association for Children (2012)\n" +
                        "• Inclusive Education (2018)\n" +
                        "• Introductory course in Applied Behavior Analysis (40 hours) (2019)\n" +
                        "• New learning strategies for developing cognitive skills (2019)\n" +
                        "• Basic course in Special Education (60 hours) (2020)\n" +
                        "• Foundational training in Child & Adolescent Development Psychology (2021)\n" +
                        "• PECS: theoretical overview (2021)\n" +
                        "• Assessment of verbal skills and program planning (2021)\n" +
                        "• Basic course in Speech & Language Therapy (60 hours) (2021)\n" +
                        "• Managing challenging behavior (2022)\n" +
                        "• ABLLS-R (30 hours) (2023)\n" +
                        "• Collaborative for Leadership in Ayres Sensory Integration (180 hours) (2025)\n" +
                        "• Feeding and Nutrition for Children with Autism Spectrum Disorder (2025)\n" +
                        "• Psychology of relationships with children: school-age crises (2025)\n" +
                        "• Ethical practice in designing sensory-friendly ABA environments (2025)\n",
                },
            },

            {
                id: "ana",
                name: "ანა ყოჩაშვილი",
                nameEn: "Ana Kochashvili",
                role: {
                    ka: "ენისა და მეტყველების თერაპევტი",
                    en: "Speech & Language Therapist",
                },
                img: ana,
                bio: {
                    ka:
                        "ილიას სახელმწიფო უნივერსიტეტის, მეცნიერებათა და ხელოვნების ფაკულტეტის პირველი კურსის მაგისტრი. მიმართულება — კომუნიკაციის, ენისა და მეტყველების თერაპია.\n\n" +
                        "ბაკალავრი — საქართველოს საპატრიარქოს წმიდა ანდრია პირველწოდებულის სახელობის ქართული უნივერსიტეტი, ბიზნესის, კომპიუტინგის და სოციალურ მეცნიერებათა სკოლა.\n" +
                        "ფაკულტეტი — ფსიქოლოგია.\n\n" +
                        "სამუშაო გამოცდილება\n" +
                        "• ფსიქიკური ჯანმრთელობის ცენტრი: კლინიკური პრაქტიკა ფსიქიატრიაში (2020)\n" +
                        "• ბავშის განვითარების ინსტიტუტი (2022): კლინიკური პრაქტიკა — ენის/კომუნიკაციის შეფასება და ინტერვენცია; მეტყველება და ორალურ-მოტორული დარღვევები; მეტყველების მოქნილობის დარღვევები.\n\n" +
                        "კომუნიკაციის, ენისა და მეტყველების თერაპევტი:\n" +
                        "• „ჰარმონია“ — ბავშვთა ნევროლოგიური ცენტრი (2024–2026)\n" +
                        "• სსიპ — გურამ ჭილაშვილის სახელობის ქ. გურჯაანის №4 საჯარო სკოლა (2025–დღემდე)\n\n" +
                        "ფსიქოლოგი:\n" +
                        "• სსიპ — ქ. გურჯაანის №1 საჯარო სკოლა (2025–დღემდე)\n\n" +
                        "ტრენინგები\n" +
                        "• სუზან ჯონსტონის ტრენინგი — ალტერნატიული და აუგმენტური კომუნიკაციის გამოყენება\n" +
                        "• MWRAT-R — აკადემიური უნარების შესაფასებელი ინსტრუმენტი\n",
                    en:
                        "Master’s student (1st year) at Ilia State University, Faculty of Arts and Sciences.\n" +
                        "Specialization: Communication, Speech and Language Therapy.\n\n" +
                        "Bachelor’s degree — Georgian University named after St. Andrew the First-Called (Patriarchate of Georgia), School of Business, Computing and Social Sciences.\n" +
                        "Faculty: Psychology.\n\n" +
                        "Work experience\n" +
                        "• Mental Health Center: Clinical practice in psychiatry (2020)\n" +
                        "• Child Development Institute (2022): Clinical practice — language assessment and intervention; communication assessment and intervention; speech and oral-motor disorders; speech fluency disorders.\n\n" +
                        "Speech & Language Therapist:\n" +
                        "• “Harmony” — Children’s Neurological Center (2024–2026)\n" +
                        "• LEPL — Guram Chilashvili Public School #4 (Gurjaani) (2025–present)\n\n" +
                        "Psychologist:\n" +
                        "• LEPL — Public School #1 (Gurjaani) (2025–present)\n\n" +
                        "Trainings\n" +
                        "• Susan Johnston training — use of Augmentative and Alternative Communication (AAC)\n" +
                        "• MWRAT-R training — academic skills assessment tool\n",
                },
            },

            {
                id: "mari",
                name: "მარი გაბიტაშვილი",
                nameEn: "Mari Gabitashvili",
                role: {
                    ka: "ქცევითი თერაპევტი",
                    en: "Behavior Therapist",
                },
                img: mari,
                bio: {
                    ka:
                        "განათლება\n" +
                        "ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი\n" +
                        "ფსიქოლოგიისა და განათლების მეცნიერებათა ფაკულტეტი\n" +
                        "სპეციალობა: ფსიქოლოგია\n\n" +
                        "სამუშაო გამოცდილება\n" +
                        "ფსიქოლოგი — ჯანმრთელობის დაცვისა და სოციალური მომსახურების სამსახური\n" +
                        "ბავშვის უფლებათა დაცვის განყოფილება (01.10.2023–დღემდე)\n\n" +
                        "ფსიქოლოგი — სსიპ ქალაქ გურჯაანის №2 საჯარო სკოლა (03.2022–01.10.2025)\n\n" +
                        "გურჯაანის შშმ პირთა ასოციაცია\n" +
                        "პოზიცია: მიწვეული სპეციალისტი (ფსიქოლოგი) (21.11.2020–21.07.2023)\n\n" +
                        "ტრენინგები და პროფესიული განვითარება\n" +
                        "• კონსტრუქციული ურთიერთობების ჩამოყალიბება\n" +
                        "• მასწავლებლის სახლის ფსიქოლოგთა გადამზადების ტრენინგი\n" +
                        "• დამოუკიდებელი ცხოვრებისათვის მომზადება\n" +
                        "• დღის ცენტრებისა და მცირე საოჯახო სახლების სპეციალისტთა ტრენინგი\n" +
                        "• ქცევის მართვა\n" +
                        "• სენსორული ინტეგრაციის ელემენტები და სახალისო აქტივობები\n",
                    en:
                        "Education\n" +
                        "Ivane Javakhishvili Tbilisi State University\n" +
                        "Faculty of Psychology and Educational Sciences\n" +
                        "Major: Psychology\n\n" +
                        "Work experience\n" +
                        "Psychologist — Health Care and Social Service Department\n" +
                        "Child Rights Protection Division (01.10.2023–present)\n\n" +
                        "Psychologist — Public School #2, Gurjaani (03.2022–01.10.2025)\n\n" +
                        "Gurjaani Association of Persons with Disabilities\n" +
                        "Position: Invited specialist (Psychologist) (21.11.2020–21.07.2023)\n\n" +
                        "Trainings & professional development\n" +
                        "• Building constructive relationships\n" +
                        "• Retraining program for psychologists (Teacher’s House)\n" +
                        "• Preparation for independent living\n" +
                        "• Training for specialists working in day centers and small family-type homes\n" +
                        "• Behavior management\n" +
                        "• Sensory integration elements and engaging activities\n",
                },
            },

            {
                id: "ketevan",
                name: "ქეთევან ქოქაშვილი",
                nameEn: "Ketevan Kokashvili",
                role: {
                    ka: "ფსიქოთერაპევტი და არტ თერაპევტი",
                    en: "Psychotherapist & Art Therapist",
                },
                img: ketevan,
                bio: {
                    ka:
                        "განათლება — ქრისტიანული ფსიქოლოგიის ბაკალავრის აკადემიური ხარისხი.\n\n" +
                        "სამუშაო გამოცდილება\n" +
                        "• ფსიქოლოგი — კოდის საბავშვო ბაღი\n" +
                        "• ფსიქოლოგი — IBEL AKADEMY\n\n" +
                        "ტრენინგები\n" +
                        "• პოზიტიური და ტრანსკულტურული ფსიქოთერაპიისა და ფსიქოკონსულტირების საბაზისო კურსი (2022)\n" +
                        "• IDC ფსიქოლოგია, ქოუჩინგის სასწავლო ცენტრი — პოზიტიური ფსიქოთერაპიის მასტერის სამწლიანი კურსი\n" +
                        "• არტ თერაპიის ერთწლიანი კურსი (2022)\n" +
                        "• მეტაფრული ბარათები ფსიქოკონსულტირებაში და ქოუჩინგში (2020)\n" +
                        "• N.L.P პრაქტიკოსის ტრენინგი (2019)\n" +
                        "• შშმ ბავშვთა/მოზარდთა/მოზრდილთა ინკლუზიისა და ინტეგრაციის თეორიული და პრაქტიკული საფუძვლები (2015)\n" +
                        "• გეშტალტ თერაპიის თეორია და პრაქტიკა — 18 საათი (2014)\n",
                    en:
                        "Education — Bachelor’s degree in Christian Psychology.\n\n" +
                        "Work experience\n" +
                        "• Psychologist — Kodi Kindergarten\n" +
                        "• Psychologist — IBEL Academy\n\n" +
                        "Trainings\n" +
                        "• Basic course in Positive and Transcultural Psychotherapy & Psychological Counseling (2022)\n" +
                        "• IDC Psychology Coaching Training Center — 3-year Master program in Positive Psychotherapy\n" +
                        "• One-year Art Therapy course (2022)\n" +
                        "• Metaphorical cards in counseling and coaching (2020)\n" +
                        "• NLP Practitioner training (2019)\n" +
                        "• Theoretical and practical foundations of inclusion/integration of children, adolescents and adults with disabilities (2015)\n" +
                        "• Gestalt therapy theory and practice — 18 hours (2014)\n",
                },
            },
        ],
        []
    );

    const SERVICES_MEDIA = useMemo(
        () => [
            { img: service1 },
            { img: service2 },
            { img: service3 },
            { img: service4 },
            { img: service5 },
            { img: service6 },
            { img: service7 },
            { img: service8 },
        ],
        []
    );

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 900) setMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const teamDisplayName = (m) => (lang === "en" ? m.nameEn || m.name : m.name);

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
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") scrollToId("top");
                            }}
                        >
                            <div className="logoBox" aria-hidden="true">
                                <img className="logoImg" src={logo} alt={t.brandName} />
                            </div>
                            <div className="brandText">
                                <div className="brandName">{t.brandName}</div>
                                <div className="brandTag">{t.brandTag}</div>
                            </div>
                        </div>

                        <div className="rightArea">
                            <div className="contactRight">
                                <a className="contactItem" href={`tel:${PHONE_TEL}`}>
                                    📞 {PHONE_DISPLAY}
                                </a>
                                <a className="contactItem" href={`mailto:${EMAIL}`}>
                                    ✉️ {EMAIL}
                                </a>
                            </div>

                            <button
                                className="btn ghost"
                                type="button"
                                onClick={() => setLang((v) => (v === "ka" ? "en" : "ka"))}
                                aria-label="Switch language"
                                style={{ marginRight: 8 }}
                            >
                                {t.langSwitch}
                            </button>

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
                            <button key={item.id} className="navLink" onClick={() => scrollToId(item.id)}>
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
                <Carousel
                    slides={slides}
                    labels={{ prev: t.slidePrev, next: t.slideNext }}
                />

                <Section id="about" title={t.about.title}>
                    <p style={{ whiteSpace: "pre-line" }}>{t.about.short}</p>
                    <button className="btn primary" type="button" onClick={() => setAboutOpen(true)}>
                        {t.about.readMore}
                    </button>
                </Section>

                <Section id="team" title={t.sectionTitles.team}>
                    <div className="teamRows">
                        <div className="grid4">
                            {TEAM.slice(0, 4).map((m) => (
                                <button
                                    key={m.id}
                                    className="card teamCardBtn"
                                    type="button"
                                    onClick={() => setActiveMember(m)}
                                >
                                    <img className="avatar" src={m.img} alt={teamDisplayName(m)} />
                                    <div className="teamText">
                                        <h4>{teamDisplayName(m)}</h4>
                                        <p>{m.role?.[lang] || ""}</p>
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
                                    <img className="avatar" src={m.img} alt={teamDisplayName(m)} />
                                    <div className="teamText">
                                        <h4>{teamDisplayName(m)}</h4>
                                        <p>{m.role?.[lang] || ""}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </Section>

                <Section id="services" title={t.sectionTitles.services}>
                    <div className="servicesRows">
                        <div className="grid4">
                            {t.services.slice(0, 4).map((label, i) => (
                                <div key={label} className="card serviceCard">
                                    <img
                                        className="avatar serviceAvatar"
                                        src={SERVICES_MEDIA[i].img}
                                        alt={label}
                                    />
                                    <h4 className="serviceName">{label}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="grid4">
                            {t.services.slice(4, 8).map((label, j) => {
                                const i = j + 4;
                                return (
                                    <div key={label} className="card serviceCard">
                                        <img
                                            className="avatar serviceAvatar"
                                            src={SERVICES_MEDIA[i].img}
                                            alt={label}
                                        />
                                        <h4 className="serviceName">{label}</h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Section>

                <Section id="donors" title={t.sectionTitles.donors}>
                    <div className="grid4">
                        <div className="pill">{t.empty.donors}</div>
                    </div>
                </Section>

                <Section id="projects" title={t.sectionTitles.projects}>
                    <div className="grid4">
                        <div className="pill">{t.empty.projects}</div>
                    </div>
                </Section>

                <Section id="contact" title={t.sectionTitles.contact}>
                    <div className="grid2">
                        <div className="project">
                            <h4>{t.contact.cardTitle}</h4>
                            <p>📞 {PHONE_DISPLAY}</p>
                            <p>✉️ {EMAIL}</p>
                            <p>{t.contact.address}</p>
                        </div>

                        <form className="form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                placeholder={t.contact.form.name}
                                value={form.name}
                                onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                                disabled={CONTACT_DISABLED}
                            />
                            <input
                                placeholder={t.contact.form.email}
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                                disabled={CONTACT_DISABLED}
                            />
                            <textarea
                                placeholder={t.contact.form.message}
                                rows={4}
                                value={form.message}
                                onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                                disabled={CONTACT_DISABLED}
                            />

                            {CONTACT_DISABLED && (
                                <div className="formStatus bad">
                                    {lang === "en"
                                        ? "Contact form is temporarily disabled."
                                        : "საკონტაქტო ფორმა დროებით გამორთულია."}
                                </div>
                            )}

                            <button className="btn primary" type="submit" disabled={CONTACT_DISABLED}>
                                {t.contact.form.send}
                            </button>
                        </form>
                    </div>
                </Section>
            </main>

            <footer className="footer">
                <div className="container footerInner">
                    <span>{t.footer.copyright(new Date().getFullYear())}</span>

                    <div className="footerRight">
                        <small className="footerCredit">
                            {t.footer.siteBy} <strong>Shalva Khechoshvili</strong>
                        </small>
                        <button className="btn ghost" onClick={() => scrollToId("top")}>
                            {t.footer.top}
                        </button>
                    </div>
                </div>
            </footer>

            <Modal open={aboutOpen} onClose={() => setAboutOpen(false)} title={t.about.title}>
                <p style={{ marginTop: 0, marginBottom: 0, whiteSpace: "pre-line" }}>{t.about.full}</p>
            </Modal>

            <Modal
                open={!!activeMember}
                onClose={() => setActiveMember(null)}
                title={activeMember ? teamDisplayName(activeMember) : ""}
            >
                <p style={{ marginTop: 0, color: "var(--muted)", whiteSpace: "pre-line" }}>
                    {activeMember?.role?.[lang] || ""}
                </p>
                <p style={{ marginBottom: 0, color: "var(--text)", whiteSpace: "pre-line" }}>
                    {activeMember?.bio?.[lang] || ""}
                </p>
            </Modal>
        </div>
    );
}
