import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";

// 定义侧边栏链接
const sidebarLinks = [
  { id: "overview", title: "Overview" },
  { id: "safety-assessment", title: "Safety Assessment" },
  { id: "containment", title: "Containment" },
  { id: "environmental-impact", title: "Environmental Impact" },
  { id: "security", title: "Security" },
  { id: "compliance", title: "Compliance" },
];

// 定义组件
export function SafetyAndSecurity() {
  return (
    <ProjectPageLayout title="Safety and Security" sidebarLinks={sidebarLinks}>
      <section id="overview">
        <h2>Overview</h2>
        <hr className="heading-divider" />
        <p>
          Synthetic biology will need to be used safely and securely if local
          people are to solve local problems all around the world. The Safety
          and Security Committee is challenging teams to apply biological
          engineering approaches to manage risks associated with synthetic
          biology.
        </p>
        <div
          style={{
            backgroundColor: "#e7f3ff",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h4>Safety and Security Award</h4>
          <p>
            Can you take the next step in progress towards knowledge,
            understanding, and tools that will make the use of synthetic biology
            safer and more secure?
          </p>
          <p>
            Visit the{" "}
            <a
              href="https://competition.igem.org/judging/special-prizes"
              target="_blank"
              rel="noopener noreferrer"
            >
              iGEM 2024 Special Prizes page
            </a>{" "}
            to learn more about this award.
          </p>
        </div>
        <p>
          Our project prioritizes safety and security in all aspects of
          synthetic biology development, ensuring responsible innovation for
          marine environmental protection.
        </p>
        <div
          style={{
            backgroundColor: "#fff3cd",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <p>
            <strong>Important:</strong> Ensure that your project adheres to all
            safety requirements outlined in the{" "}
            <a
              href="https://responsibility.igem.org/safety-policies"
              target="_blank"
              rel="noopener noreferrer"
            >
              iGEM Safety Policies page
            </a>
            .
          </p>
        </div>
      </section>

      <section id="safety-assessment">
        <h2>Safety Assessment</h2>
        <hr className="heading-divider" />
        <p>
          We conducted comprehensive safety assessments for all biological
          components and processes in our project:
        </p>
        <ul>
          <li>
            <strong>Biological Risks:</strong> Evaluation of potential
            pathogenicity, toxicity, and environmental impact
          </li>
          <li>
            <strong>Chemical Risks:</strong> Assessment of hazardous material
            handling and disposal
          </li>
          <li>
            <strong>Physical Risks:</strong> Analysis of equipment safety and
            laboratory procedures
          </li>
          <li>
            <strong>Security Risks:</strong> Evaluation of potential misuse of
            technology
          </li>
        </ul>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h4>Safety Features Incorporated</h4>
          <ul>
            <li>
              Choice of non-pathogenic bacterial chassis (Bacillus subtilis)
            </li>
            <li>
              Selection of parts that minimize harm to humans, animals, and
              plants
            </li>
            <li>Substitution of safer materials in experiments</li>
            <li>
              Implementation of "kill-switch" mechanisms and other safety
              controls
            </li>
          </ul>
        </div>
        <p>
          Our safety assessment ensures that all potential risks are identified,
          evaluated, and mitigated through appropriate design choices and
          protocols.
        </p>
      </section>

      <section id="containment">
        <h2>Containment</h2>
        <hr className="heading-divider" />
        <p>
          We implemented multiple layers of containment to prevent unintended
          release of engineered organisms into the environment:
        </p>
        <ul>
          <li>
            <strong>Physical Containment:</strong> Secure laboratory facilities
            with appropriate biosafety levels
          </li>
          <li>
            <strong>Biological Containment:</strong> Engineered kill switches
            and auxotrophy systems
          </li>
          <li>
            <strong>Environmental Barriers:</strong> Controlled release
            mechanisms and monitoring systems
          </li>
          <li>
            <strong>Genetic Safeguards:</strong> Multiple redundant safety
            mechanisms in engineered strains
          </li>
          <li>
            <strong>Monitoring Systems:</strong> Real-time tracking and
            detection of containment breaches
          </li>
        </ul>
        <p>
          Our containment strategy ensures that engineered organisms remain
          under strict control throughout the project lifecycle and beyond.
        </p>
      </section>

      <section id="environmental-impact">
        <h2>Environmental Impact</h2>
        <hr className="heading-divider" />
        <p>
          We carefully evaluated the environmental impact of our synthetic
          biology solution:
        </p>
        <ul>
          <li>
            <strong>Ecosystem Analysis:</strong> Study of potential effects on
            marine food webs
          </li>
          <li>
            <strong>Biodiversity Assessment:</strong> Evaluation of impact on
            non-target species
          </li>
          <li>
            <strong>Long-term Monitoring:</strong> Plans for ongoing
            environmental surveillance
          </li>
          <li>
            <strong>Mitigation Strategies:</strong> Development of measures to
            minimize negative impacts
          </li>
          <li>
            <strong>Stakeholder Engagement:</strong> Consultation with
            environmental groups and local communities
          </li>
        </ul>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h4>Environmental Benefits</h4>
          <ul>
            <li>
              Reduction in harmful algal blooms and their ecological
              consequences
            </li>
            <li>Minimization of chemical treatment requirements</li>
            <li>Promotion of natural ecosystem balance restoration</li>
            <li>Support for sustainable marine resource management</li>
          </ul>
        </div>
      </section>

      <section id="security">
        <h2>Security</h2>
        <hr className="heading-divider" />
        <p>
          We implemented security measures to prevent misuse of our synthetic
          biology tools:
        </p>
        <ul>
          <li>
            <strong>Access Control:</strong> Restricted access to sensitive
            biological materials and data
          </li>
          <li>
            <strong>Data Security:</strong> Secure storage and transmission of
            genetic information
          </li>
          <li>
            <strong>Material Tracking:</strong> Comprehensive inventory and
            tracking of biological components
          </li>
          <li>
            <strong>Personnel Screening:</strong> Background checks and security
            clearances for team members
          </li>
          <li>
            <strong>Dual-use Awareness:</strong> Training on potential misuse
            scenarios and prevention
          </li>
        </ul>
        <p>
          Our security approach ensures that our synthetic biology innovations
          are used only for their intended beneficial purposes.
        </p>
      </section>

      <section id="compliance">
        <h2>Compliance</h2>
        <hr className="heading-divider" />
        <p>
          We ensure full compliance with all relevant regulations and
          guidelines:
        </p>
        <ul>
          <li>
            <strong>Regulatory Compliance:</strong> Adherence to local and
            international biosafety regulations
          </li>
          <li>
            <strong>Ethical Guidelines:</strong> Following established ethical
            frameworks for synthetic biology
          </li>
          <li>
            <strong>iGEM Standards:</strong> Compliance with iGEM safety and
            security requirements
          </li>
          <li>
            <strong>Institutional Review:</strong> Regular review by
            institutional biosafety committees
          </li>
          <li>
            <strong>Documentation:</strong> Comprehensive record-keeping of all
            safety and security measures
          </li>
        </ul>
        <p>
          Our commitment to compliance ensures that our project meets the
          highest standards for responsible synthetic biology research and
          development.
        </p>
      </section>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
