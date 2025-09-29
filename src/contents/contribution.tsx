import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";
import "./Contribution.css";

// 定义侧边栏链接
const sidebarLinks = [
  { id: "overview", title: "Overview" },
  {
    id: "optogenetic-control",
    title: "Development of Optogenetic Control Modules",
  },
  { id: "safe-by-design", title: "Safe-by-Design" },
  {
    id: "expanding-applications",
    title: "Expanding Synthetic Biology Applications",
  },
];

// 定义组件
export function Contribution() {
  return (
    <div className="contribution-page">
      <ProjectPageLayout title="Contribution" sidebarLinks={sidebarLinks}>
        <section id="overview">
          <h2>Overview</h2>
          <hr className="heading-divider" />
          <p>
            Our project makes significant contributions to the iGEM community
            and the broader synthetic biology field through the development of
            innovative optogenetic control systems, robust biosafety mechanisms,
            and novel applications for environmental protection. These
            contributions demonstrate our commitment to advancing the field
            while ensuring responsible and safe implementation of synthetic
            biology solutions.
          </p>
          <p>
            Through our work, we provide the community with reusable,
            well-characterized biological parts, comprehensive safety protocols,
            and practical applications that address real-world environmental
            challenges. Our contributions span from fundamental research tools
            to applied solutions that can be readily adapted by future iGEM
            teams and researchers worldwide.
          </p>
        </section>

        <section id="optogenetic-control">
          <h2>Development of Optogenetic Control Modules</h2>
          <hr className="heading-divider" />
          <p>
            We optimized dual light-remote control systems--pdawn (blue-light
            inducible) for Surfactin C14 production and pREDawn (red-light
            inducible) as a kill switch. Optogenetic modules are directly
            available to iGEM teams in the form of tunable, reversible, and
            precise genetic devices. They can readily be adapted by follow-up
            teams for bioproduction applications, therapeutics, or environmental
            biosensing.
          </p>
          <div className="contribution-highlight">
            <h4>Key Features:</h4>
            <ul>
              <li>
                <strong>Dual Control System:</strong> Blue-light activation for
                production, red-light activation for safety
              </li>
              <li>
                <strong>High Precision:</strong> Tunable and reversible control
                mechanisms
              </li>
              <li>
                <strong>Broad Applicability:</strong> Adaptable for various
                bioproduction and biosensing applications
              </li>
              <li>
                <strong>Community Ready:</strong> Well-characterized parts
                available in the iGEM Registry
              </li>
            </ul>
          </div>
        </section>

        <section id="safe-by-design">
          <h2>Safe-by-Design</h2>
          <hr className="heading-divider" />
          <p>
            Biosafety is a basis of iGEM. We ensure a robust safety design using
            a phage-based YonE protein to induce NADase-mediated lethality
            should it ever get loose in the environmental world. It is a
            two-light kill switch to offer a fresh, programmable biocontainment
            system, with a template for green engineering of microbes.
          </p>
          <div className="contribution-highlight">
            <h4>Safety Features:</h4>
            <ul>
              <li>
                <strong>YonE Kill Switch:</strong> Phage-based protein system
                for programmed cell death
              </li>
              <li>
                <strong>NADase-Mediated Lethality:</strong> Rapid depletion of
                intracellular NAD⁺ upon escape
              </li>
              <li>
                <strong>Two-Light Control:</strong> Dual activation system for
                enhanced safety
              </li>
              <li>
                <strong>Programmable Containment:</strong> Template for safe
                microbe engineering
              </li>
              <li>
                <strong>Environmental Protection:</strong> Prevents unintended
                release into natural ecosystems
              </li>
            </ul>
          </div>
        </section>

        <section id="expanding-applications">
          <h2>Expanding Synthetic Biology Applications</h2>
          <hr className="heading-divider" />
          <p>
            Utilizing synthetic <em>Bacillus subtilis</em> to mitigate
            detrimental algal blooms, we illustrate the potential of synthetic
            biology for addressing planetary environmental problems. This
            project illustrates the application of designed microbes as living
            devices for ecological systems protection and encourages others to
            address similar cross-disciplinary challenges.
          </p>
          <div className="contribution-highlight">
            <h4>Impact Areas:</h4>
            <ul>
              <li>
                <strong>Environmental Protection:</strong> Novel approach to
                harmful algal bloom mitigation
              </li>
              <li>
                <strong>Living Devices:</strong> Engineered microbes as active
                environmental protectors
              </li>
              <li>
                <strong>Cross-Disciplinary Innovation:</strong> Integration of
                synthetic biology with environmental science
              </li>
              <li>
                <strong>Planetary Scale Solutions:</strong> Addressing global
                environmental challenges
              </li>
              <li>
                <strong>Community Inspiration:</strong> Encouraging similar
                innovative approaches
              </li>
            </ul>
          </div>
          <div className="contribution-summary">
            <h4>Future Directions:</h4>
            <p>
              This work opens new possibilities for synthetic biology
              applications in environmental protection and provides a framework
              for developing living systems that can actively monitor and
              respond to environmental threats. The combination of predictive
              modeling, optogenetic control, and biosafety mechanisms creates a
              comprehensive platform for next-generation environmental
              biotechnology solutions.
            </p>
          </div>
        </section>
        <ScrollToTop />
      </ProjectPageLayout>
    </div>
  );
}
