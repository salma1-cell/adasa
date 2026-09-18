import {
  FaBookOpen,
  FaPenNib,
  FaNewspaper,
  FaUsers,
  FaArrowsRotate,
  FaHandshake,
  FaBolt,
  FaBullseye,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaCheck,
} from "react-icons/fa6";

function About() {
  const values = [
    {
      icon: <FaBullseye />,
      title: "الجودة أولاً",
      text: "محتوى مدروس ومكتوب بخبرة",
    },
    {
      icon: <FaBolt />,
      title: "تركيز عملي",
      text: "أمثلة واقعية يمكنك تطبيقها اليوم",
    },
    {
      icon: <FaHandshake />,
      title: "المجتمع",
      text: "نتعلم معاً من آلاف المصورين",
    },
    {
      icon: <FaArrowsRotate />,
      title: "دائماً محدث",
      text: "أحدث الاتجاهات وأفضل الممارسات",
    },
  ];

  const team = [
    {
      name: "سالم أحمد",
      job: "مصور محترف",
      image: "https://i.pravatar.cc/300?img=11",
    },
    {
      name: "محمد علي",
      job: "مصور بورتريه",
      image: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "إبراهيم حسن",
      job: "مصور طبيعة",
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      name: "داود خالد",
      job: "مدرب تصوير",
      image: "https://i.pravatar.cc/300?img=14",
    },
    {
      name: "ليث محمود",
      job: "فنان بصري",
      image: "https://i.pravatar.cc/300?img=15",
    },
    {
      name: "جمال عبدالله",
      job: "مصور ومراجع تقني",
      image: "https://i.pravatar.cc/300?img=16",
    },
    {
      name: "خالد الفيصل",
      job: "مصور فلكي",
      image: "https://i.pravatar.cc/300?img=17",
    },
    {
      name: "نادر سعيد",
      job: "مصور شوارع",
      image: "https://i.pravatar.cc/300?img=18",
    },
    {
      name: "هاني الشمري",
      job: "مصور طعام",
      image: "https://i.pravatar.cc/300?img=19",
    },
    {
      name: "سامي الحربي",
      job: "خبير تعديل صور",
      image: "https://i.pravatar.cc/300?img=20",
    },
    {
      name: "فارس العلي",
      job: "فنان فوتوغرافي",
      image: "https://i.pravatar.cc/300?img=21",
    },
    {
      name: "عمر الراشد",
      job: "مصور حياة برية",
      image: "https://i.pravatar.cc/300?img=22",
    },
  ];

  return (
    <main className="about-page" dir="rtl">

      {/* ================= HERO ================= */}

      <section className="about-hero">
        <div className="about-grid-bg"></div>

        <div className="about-hero-content">

          <div className="about-badge">
            <span></span>
            من نحن
            <span></span>
          </div>

          <h1>
            مهمتنا هي <span>الإعلام والإلهام</span>
          </h1>

          <p>
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
            المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
            المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى
            عالي الجودة.
          </p>

          <div className="about-stats">

            <div className="about-stat">
              <FaUsers className="stat-icon" />
              <strong>+2 مليون</strong>
              <span>قارئ شهرياً</span>
            </div>

            <div className="about-stat">
              <FaNewspaper className="stat-icon" />
              <strong>500+</strong>
              <span>مقالة منشورة</span>
            </div>

            <div className="about-stat">
              <FaPenNib className="stat-icon" />
              <strong>50+</strong>
              <span>كاتب خبير</span>
            </div>

            <div className="about-stat">
              <FaBookOpen className="stat-icon" />
              <strong>15+</strong>
              <span>تصنيف</span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= VALUES ================= */}

      <section className="values-section">

        <div className="section-title">

          <h2>
            <span></span>
            قيمنا
            <span></span>
          </h2>

          <p>
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>

        </div>

        <div className="values-grid">

          {values.map((value, index) => (
            <div className="value-card" key={index}>

              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ================= TEAM ================= */}

      <section className="team-section">

        <div className="team-heading">

          <div className="about-badge">
            <span></span>
            فريقنا
            <span></span>
          </div>

          <h2>تعرف على كتابنا</h2>

          <p>
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة
            معرفتهم مع المجتمع.
          </p>

        </div>


        <div className="team-grid">

          {team.map((member, index) => (

            <div className="team-card" key={index}>

              <div className="team-image-wrapper">

                <img
                  src={member.image}
                  alt={member.name}
                />

                <span className="team-check">
                  <FaCheck />
                </span>

              </div>

              <h3>{member.name}</h3>

              <p>{member.job}</p>

              <div className="team-socials">

                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>

                <a href="#" aria-label="GitHub">
                  <FaGithub />
                </a>

                <a href="#" aria-label="X">
                  <FaXTwitter />
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default About;