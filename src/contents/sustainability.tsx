import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";

// 定义侧边栏链接
const sidebarLinks = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "sdg-alignment",
    title: "SDG Alignment",
    subsections: [
      { id: "life-below-water", title: "Life Below Water (SDG 14)" },
      { id: "climate-action", title: "Climate Action (SDG 13)" },
      { id: "clean-water", title: "Clean Water (SDG 6)" },
    ],
  },
  {
    id: "environmental-impact",
    title: "Environmental Impact",
    subsections: [
      { id: "ecosystem-protection", title: "Ecosystem Protection" },
      { id: "biodiversity-conservation", title: "Biodiversity Conservation" },
      { id: "carbon-footprint", title: "Carbon Footprint" },
    ],
  },
  {
    id: "sustainable-practices",
    title: "Sustainable Practices",
    subsections: [
      { id: "resource-efficiency", title: "Resource Efficiency" },
      { id: "waste-reduction", title: "Waste Reduction" },
      { id: "long-term-viability", title: "Long-term Viability" },
    ],
  },
];

export function Sustainability() {
  return (
    <ProjectPageLayout title="Sustainability" sidebarLinks={sidebarLinks}>
      <section id="overview">
        <h2>Overview</h2>
        <hr className="heading-divider" />
        <p>
          Our project is designed with sustainability at its core, addressing
          critical environmental challenges while ensuring long-term viability
          and positive impact. We have carefully evaluated our project against
          the United Nations Sustainable Development Goals (SDGs) and
          implemented practices that contribute to a more sustainable future.
        </p>
        <div className="bd-callout bd-callout-info">
          <h4>Best Sustainable Development Impact</h4>
          <p>
            The Sustainable Development Goals (SDGs) are a call to action to
            integrally address global environmental, social, and economic
            challenges. iGEM teams can answer this call with this prize.
            Demonstrate how you have evaluated your project ideas against one or
            more of the SDGs, how you've consulted with SDG stakeholders, and
            how you've begun to form collaborations with other iGEM teams around
            the SDGs. You're encouraged to look back at previous iGEM projects
            to evaluate them against the SDGs, and build upon them.
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

      <section id="sdg-alignment">
        <h2>SDG Alignment</h2>
        <hr className="heading-divider" />

        <div id="life-below-water">
          <h3>Life Below Water (SDG 14)</h3>
          <p>
            Our project directly addresses SDG 14 by protecting marine
            ecosystems from harmful algal blooms. By developing early warning
            systems and targeted remediation strategies, we contribute to the
            conservation and sustainable use of oceans, seas, and marine
            resources.
          </p>
        </div>

        <div id="climate-action">
          <h3>Climate Action (SDG 13)</h3>
          <p>
            Our approach to red tide management helps mitigate climate-related
            impacts on marine ecosystems. By preventing large-scale algal
            blooms, we reduce the release of greenhouse gases and protect carbon
            sinks in marine environments.
          </p>
        </div>

        <div id="clean-water">
          <h3>Clean Water (SDG 6)</h3>
          <p>
            Our project contributes to SDG 6 by ensuring clean and safe water
            resources. By preventing harmful algal blooms, we protect water
            quality and ensure access to clean water for both human consumption
            and ecosystem health.
          </p>
        </div>
      </section>

      <section id="environmental-impact">
        <h2>Environmental Impact</h2>
        <hr className="heading-divider" />

        <div id="ecosystem-protection">
          <h3>Ecosystem Protection</h3>
          <p>
            Our project is designed to protect marine ecosystems from the
            devastating effects of harmful algal blooms. By providing early
            warning and targeted intervention, we help maintain the delicate
            balance of marine ecosystems and protect marine biodiversity.
          </p>
        </div>

        <div id="biodiversity-conservation">
          <h3>Biodiversity Conservation</h3>
          <p>
            Through our targeted approach to red tide management, we help
            preserve marine biodiversity by preventing the mass mortality events
            associated with harmful algal blooms. This contributes to the
            overall health and resilience of marine ecosystems.
          </p>
        </div>

        <div id="carbon-footprint">
          <h3>Carbon Footprint</h3>
          <p>
            We have carefully considered the carbon footprint of our project,
            implementing energy-efficient protocols and sustainable laboratory
            practices. Our approach minimizes environmental impact while
            maximizing positive outcomes for marine ecosystems.
          </p>
        </div>
      </section>

      <section id="sustainable-practices">
        <h2>Sustainable Practices</h2>
        <hr className="heading-divider" />

        <div id="resource-efficiency">
          <h3>Resource Efficiency</h3>
          <p>
            Our project emphasizes resource efficiency through optimized
            protocols and minimal resource consumption. We have developed
            streamlined processes that maximize effectiveness while minimizing
            waste and resource use.
          </p>
        </div>

        <div id="waste-reduction">
          <h3>Waste Reduction</h3>
          <p>
            We implemented comprehensive waste reduction strategies throughout
            our project development. This includes recycling laboratory
            materials, minimizing single-use plastics, and developing protocols
            that generate minimal waste.
          </p>
        </div>

        <div id="long-term-viability">
          <h3>Long-term Viability</h3>
          <p>
            Our project is designed for long-term viability and sustainability.
            We have developed scalable solutions that can be implemented
            globally while maintaining environmental responsibility and economic
            feasibility.
          </p>
        </div>
      </section>

      <ScrollToTop />
    </ProjectPageLayout>
  );
}
