import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";

// 定义侧边栏链接
const sidebarLinks = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "educational-materials",
    title: "Educational Materials",
    subsections: [
      { id: "interactive-tools", title: "Interactive Tools" },
      { id: "workshop-materials", title: "Workshop Materials" },
      { id: "online-resources", title: "Online Resources" },
    ],
  },
  {
    id: "outreach-activities",
    title: "Outreach Activities",
    subsections: [
      { id: "school-programs", title: "School Programs" },
      { id: "public-engagement", title: "Public Engagement" },
      { id: "community-workshops", title: "Community Workshops" },
    ],
  },
  {
    id: "impact-assessment",
    title: "Impact Assessment",
    subsections: [
      { id: "learning-outcomes", title: "Learning Outcomes" },
      { id: "feedback-analysis", title: "Feedback Analysis" },
      { id: "future-improvements", title: "Future Improvements" },
    ],
  },
];

export function Education() {
  return (
    <ProjectPageLayout title="Education" sidebarLinks={sidebarLinks}>
      <section id="overview">
        <h2>Overview</h2>
        <hr className="heading-divider" />
        <p>
          Our education program aims to promote scientific learning and
          establish a two-way dialogue with communities about synthetic biology
          and environmental science. Through innovative educational tools and
          outreach activities, we strive to include more people in shaping the
          future of synthetic biology.
        </p>
        <div className="bd-callout bd-callout-info">
          <h4>Best Education</h4>
          <p>
            Innovative educational tools and outreach activities have the
            ability to establish a two-way dialogue with new communities by
            discussing public values and the science behind synthetic biology.
            How have you developed new opportunities to include more people in
            shaping synthetic biology? Education activities do not have to be
            directly related to your project but may look at wider issues of
            iGEM or synthetic biology. Education activities must promote
            scientific learning and avoid simply proselytizing or marketing
            synthetic biology and/or iGEM. Document your approach, and what was
            learned by everyone involved, to compete for this award.
          </p>
          <hr />
          <p>
            Visit the{" "}
            <a href="https://competition.igem.org/judging/special-prizes">
              Special Prizes page
            </a>{" "}
            for more information.
          </p>
        </div>
      </section>

      <section id="educational-materials">
        <h2>Educational Materials</h2>
        <hr className="heading-divider" />

        <div id="interactive-tools">
          <h3>Interactive Tools</h3>
          <p>
            We developed interactive educational tools that allow students and
            the public to explore synthetic biology concepts through hands-on
            activities and simulations. These tools make complex scientific
            concepts accessible and engaging.
          </p>
        </div>

        <div id="workshop-materials">
          <h3>Workshop Materials</h3>
          <p>
            Our comprehensive workshop materials include presentations, hands-on
            activities, and assessment tools designed for different age groups
            and educational levels. These materials are freely available for
            educators to use in their own programs.
          </p>
        </div>

        <div id="online-resources">
          <h3>Online Resources</h3>
          <p>
            We created a variety of online resources including videos,
            tutorials, and interactive content that can be accessed by anyone
            interested in learning about synthetic biology and environmental
            science.
          </p>
        </div>
      </section>

      <section id="outreach-activities">
        <h2>Outreach Activities</h2>
        <hr className="heading-divider" />

        <div id="school-programs">
          <h3>School Programs</h3>
          <p>
            We conducted educational programs in local schools, working with
            teachers to integrate synthetic biology concepts into existing
            curricula. These programs reached students from elementary to high
            school levels.
          </p>
        </div>

        <div id="public-engagement">
          <h3>Public Engagement</h3>
          <p>
            Through public talks, science festivals, and community events, we
            engaged with diverse audiences to discuss the potential and
            challenges of synthetic biology in addressing environmental issues.
          </p>
        </div>

        <div id="community-workshops">
          <h3>Community Workshops</h3>
          <p>
            We organized hands-on workshops for community members, providing
            opportunities for direct interaction with synthetic biology concepts
            and our project work.
          </p>
        </div>
      </section>

      <section id="impact-assessment">
        <h2>Impact Assessment</h2>
        <hr className="heading-divider" />

        <div id="learning-outcomes">
          <h3>Learning Outcomes</h3>
          <p>
            We assessed the effectiveness of our educational activities through
            pre and post-activity surveys, interviews, and observation. Our
            results show significant improvements in participants' understanding
            of synthetic biology concepts.
          </p>
        </div>

        <div id="feedback-analysis">
          <h3>Feedback Analysis</h3>
          <p>
            We collected and analyzed feedback from participants, educators, and
            community members to continuously improve our educational approach
            and materials.
          </p>
        </div>

        <div id="future-improvements">
          <h3>Future Improvements</h3>
          <p>
            Based on our assessment results and feedback, we have identified
            areas for improvement and developed plans for expanding our
            educational impact in future iterations of our program.
          </p>
        </div>
      </section>

      <ScrollToTop />
    </ProjectPageLayout>
  );
}
