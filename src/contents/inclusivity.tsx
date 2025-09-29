import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";

// 导入图片
import figure1Img from "/public/static/inclusivity/fig1.jpeg";
import figure2Img from "/public/static/inclusivity/fig2.jpeg";
import figure3Img from "/public/static/inclusivity/fig3.jpeg";

// 定义侧边栏链接
const sidebarLinks = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "blueocean-plan",
    title: "BlueOcean Plan (BOP) Educational Initiative",
  },
  {
    id: "inclusive-education",
    title: "Inclusive Education Approach",
  },
  {
    id: "community-engagement",
    title: "Community Engagement",
  },
  {
    id: "continuous-journey",
    title: "Continuous Journey",
  },
];

export function Inclusivity() {
  return (
    <ProjectPageLayout title="Inclusivity" sidebarLinks={sidebarLinks}>
      <section id="overview">
        <h2>Overview</h2>
        <hr className="heading-divider" />
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          Inclusivity is a cornerstone of our iGEM team's philosophy, and this
          year, we have made significant strides in fostering an inclusive
          environment through our BlueOcean Plan (BOP) educational initiative.
          Our team is deeply committed to making science accessible to everyone,
          regardless of their background or prior knowledge, and we believe that
          education is a powerful tool for creating a more inclusive and diverse
          scientific community.
        </p>
      </section>

      <section id="blueocean-plan">
        <h2>BlueOcean Plan (BOP) Educational Initiative</h2>
        <hr className="heading-divider" />
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          Our BOP series of educational outreach programs has been a remarkable
          journey, bringing the wonders of marine science and synthetic biology
          to students of various ages and backgrounds. Each session of the BOP
          series was meticulously designed to engage and inspire, ensuring that
          the joy and importance of scientific discovery were shared with as
          many young minds as possible.
        </p>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          We started with the basics, introducing marine organisms like corals,
          shells, and sea snails to spark curiosity. Through interactive
          sessions and hands-on activities, like using magnifying glasses to
          observe these marine specimens, we aimed to make science tangible and
          exciting for our young audience.
        </p>

        <div style={{ textAlign: "center", margin: "30px 0" }}>
          <img
            src={figure1Img}
            alt="BOP Educational Session"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.9rem",
              color: "#666",
              marginTop: "10px",
              fontStyle: "italic",
            }}
          >
            Figure 1: Students engaging in hands-on marine science activities
            during our BOP educational sessions
          </p>
        </div>
      </section>

      <section id="inclusive-education">
        <h2>Inclusive Education Approach</h2>
        <hr className="heading-divider" />
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          As we progressed, we delved into more complex topics, always mindful
          of the need to present them in an accessible and engaging manner. We
          used creative approaches, like incorporating popular culture
          references and interactive games, to explain concepts such as marine
          ecosystems, environmental issues, and the role of synthetic biology in
          addressing these challenges.
        </p>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          One of our sessions used the beloved character "SpongeBob" to
          introduce a variety of marine life, from sponges and starfish to
          microscopic plankton. This not only made the learning process fun but
          also helped students connect scientific concepts with their everyday
          experiences.
        </p>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          We also focused on addressing real-world problems through our
          educational outreach. One of our most impactful sessions involved
          teaching students about the phenomenon of "blue tears" and the
          underlying science of bioluminescent algae. By combining captivating
          visuals with hands-on experiments using glow sticks to simulate the
          bioluminescence, we were able to explain the beauty and potential
          dangers of such natural phenomena. This session not only highlighted
          the wonders of marine biology but also underscored the importance of
          environmental stewardship.
        </p>

        <div style={{ textAlign: "center", margin: "30px 0" }}>
          <img
            src={figure2Img}
            alt="Interactive Learning Session"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.9rem",
              color: "#666",
              marginTop: "10px",
              fontStyle: "italic",
            }}
          >
            Figure 2: Students participating in interactive learning activities
            and experiments
          </p>
        </div>
      </section>

      <section id="community-engagement">
        <h2>Community Engagement</h2>
        <hr className="heading-divider" />
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          Our commitment to inclusivity extended beyond the content of our
          lessons. We actively sought feedback from our young participants
          through surveys and interactive discussions, ensuring that our
          approach was resonating with them and making adjustments where needed.
          We also provided incentives, such as small gifts and certificates, to
          encourage participation and reward curiosity, creating a positive and
          supportive learning environment.
        </p>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          Moreover, we collaborated with various educational institutions and
          community organizations to reach a wider audience. By partnering with
          schools and after-school programs, we were able to bring our BOP
          series to different communities, breaking down barriers and making
          science education more accessible to all. Each session was an
          opportunity to inspire the next generation of scientists and
          environmental stewards, regardless of their socioeconomic background
          or prior exposure to scientific concepts.
        </p>

        <div style={{ textAlign: "center", margin: "30px 0" }}>
          <img
            src={figure3Img}
            alt="Community Partnership"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.9rem",
              color: "#666",
              marginTop: "10px",
              fontStyle: "italic",
            }}
          >
            Figure 3: Community partnerships and collaborative educational
            initiatives
          </p>
        </div>
      </section>

      <section id="continuous-journey">
        <h2>Continuous Journey</h2>
        <hr className="heading-divider" />
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          Inclusivity is not just a goal for us; it is a continuous journey.
          Through our BOP series and other outreach efforts, we strive to create
          a scientific community that is diverse, welcoming, and empowering. We
          believe that every individual, regardless of their background, has the
          potential to contribute to and benefit from the advancements in
          science.
        </p>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          By fostering an inclusive environment, we aim to nurture a generation
          of thinkers and doers who are equipped to tackle the complex
          challenges facing our planet. Our commitment to inclusivity drives us
          to continuously improve our educational approaches, expand our reach
          to underserved communities, and ensure that science remains accessible
          to all.
        </p>
      </section>

      <ScrollToTop />
    </ProjectPageLayout>
  );
}
