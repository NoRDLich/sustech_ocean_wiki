import { useState } from "react";
import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";
import "./Engineering.css";

// 定义侧边栏链接
const sidebarLinks = [
  { id: "cycle-diagram", title: "Design-Build-Test-Learn Cycle" },
];

// 定义组件
export function Engineering() {
  const [activeTab, setActiveTab] = useState("wet-lab");
  const [activeCycle, setActiveCycle] = useState("cycle-1");
  const [activeStep, setActiveStep] = useState("design");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleCycleClick = (cycle: string) => {
    setActiveCycle(cycle);
    setActiveStep("design"); // 重置到design步骤
    // 滚动到对应的cycle section
    const element = document.getElementById(cycle);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStepClick = (step: string) => {
    setActiveStep(step);
    // 滚动到当前cycle的对应step
    const stepElement = document.getElementById(`${activeCycle}-${step}`);
    if (stepElement) {
      stepElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ProjectPageLayout
      title="Engineering"
      sidebarLinks={sidebarLinks}
      activeCycle={activeCycle}
      activeStep={activeStep}
      onCycleClick={handleCycleClick}
      onStepClick={handleStepClick}
    >
      <div className="engineering-page">
        {/* 主内容区域 */}
        <div className="main-content">
          {/* 顶部标签页 - 在侧边栏和主内容之间 */}
          <div className="top-tabs">
            <button
              className={`tab-button ${activeTab === "wet-lab" ? "active" : ""}`}
              onClick={() => handleTabClick("wet-lab")}
            >
              Wet Lab
            </button>
            <button
              className={`tab-button ${activeTab === "dry-lab" ? "active" : ""}`}
              onClick={() => handleTabClick("dry-lab")}
            >
              Dry Lab
            </button>
            <button
              className={`tab-button ${activeTab === "hp" ? "active" : ""}`}
              onClick={() => handleTabClick("hp")}
            >
              HP
            </button>
          </div>
          {/* Wet Lab 内容 */}
          {activeTab === "wet-lab" && (
            <div className="tab-content">
              <h2>Engineering</h2>
              <p>
                The whole process of algicidal lipopeptide production can be
                classified into four steps: Silencing, Activation, Amplification
                and Safeguard. The engineered Bacillus subtilis chassis will be
                gradually upgraded according to the above four steps.
              </p>

              {/* Cycle 1: Silencing */}
              <div id="cycle-1" className="cycle-section">
                <h3>Cycle 1: Silencing endogenous surfactin synthesis</h3>

                <div id="cycle-1-design" className="cycle-step">
                  <h4>Design</h4>
                  <p>
                    Literature mining showed that even low constitutive
                    surfactin consumes malonyl-CoA and primes algal stress
                    responses. We therefore decided to weaken the native srfA
                    operon by replacing its strong P-srfA promoter with a
                    rationally designed weak promoter (P-weak) plus a
                    theophylline- OFF riboswitch.
                  </p>
                </div>

                <div id="cycle-1-build" className="cycle-step">
                  <h4>Build</h4>
                  <p>
                    CRISPR-Cas9 with a 90-bp editing template was used to knock
                    P-weak-riboswitch upstream of srfA in wild-type B. subtilis
                    168. The cat marker was looped out by Flp recombination,
                    yielding strain BS-S0.
                  </p>
                </div>

                <div id="cycle-1-test" className="cycle-step">
                  <h4>Test</h4>
                  <p>
                    LC-MS quantification showed basal C14 surfactin dropped from
                    30 mg L⁻¹ to 1.2 mg L⁻¹ (96 % reduction) while growth rate
                    remained identical to WT.
                  </p>
                </div>

                <div id="cycle-1-learn" className="cycle-step">
                  <h4>Learn</h4>
                  <p>
                    Complete silencing decreased biofilm thickness by 20 %,
                    indicating that a trace surfactin level is required for
                    surface colonisation. We therefore kept ~4 % residual
                    expression for subsequent cycles.
                  </p>
                </div>
              </div>

              {/* Cycle 2: Activation */}
              <div id="cycle-2" className="cycle-section">
                <h3>Cycle 2: Installing a red-light "accelerator"</h3>

                <div id="cycle-2-design" className="cycle-step">
                  <h4>Design</h4>
                  <p>
                    To obtain on-demand overproduction we transplanted the
                    CcaS/CcaR cyanobacterial two-component system, previously
                    engineered for 660 nm activation, to drive sfp—the committed
                    step for surfactin tailoring.
                  </p>
                </div>

                <div id="cycle-2-build" className="cycle-step">
                  <h4>Build</h4>
                  <p>
                    A synthetic operon (P-cpcG2*-ccaS-ccaR) was integrated at
                    the lacA locus, while sfp with a consensus RBS was placed
                    under the P-cpcG2* promoter on a high-copy plasmid
                    (pUB110-ori) to create BS-S1.
                  </p>
                  <div className="figure-container">
                    <div className="figure-item">
                      <img
                        src="/sustechocean/static/engineering/1_.png"
                        alt="Red-light-inducible sfp expression plasmid"
                        className="figure-image"
                      />
                      <p className="figure-caption">
                        Figure 1. Red-light-inducible sfp expression plasmid
                        (pDawn-sfp-repb) used in Cycle 2.
                      </p>
                    </div>
                    <div className="figure-item">
                      <img
                        src="/sustechocean/static/engineering/2_.png"
                        alt="Red-light-ON / blue-light-OFF plasmid"
                        className="figure-image"
                      />
                      <p className="figure-caption">
                        Figure 2. Red-light-ON / blue-light-OFF plasmid
                        pDawn-sfp-repB (8.4 kb) for IPTG-free, chromophore-free
                        induction of sfp with Kanamycin resistance.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="cycle-2-test" className="cycle-step">
                  <h4>Test</h4>
                  <p>
                    After 6 h under 50 µmol m⁻² s⁻¹ red LED, sfp mRNA rose
                    22-fold and GFP reporter fluorescence increased 25-fold; no
                    induction was observed in darkness or blue light.
                  </p>
                </div>

                <div id="cycle-2-learn" className="cycle-step">
                  <h4>Learn</h4>
                  <p>
                    Plasmid loss reached 15 % after 48 h of non-selective
                    growth; genomic integration and plasmid-stabilisation parts
                    (parE/parD) are required for field durability.
                  </p>
                </div>
              </div>

              {/* Cycle 3: Amplification */}
              <div id="cycle-3" className="cycle-section">
                <h3>Cycle 3: Genomic integration & plasmid stabilisation</h3>

                <div id="cycle-3-design" className="cycle-step">
                  <h4>Design</h4>
                  <p>
                    Move the entire red-light→sfp module into the chromosome and
                    add a post-segregational killing system to prevent
                    plasmid-free escapees.
                  </p>
                </div>

                <div id="cycle-3-build" className="cycle-step">
                  <h4>Build</h4>
                  <p>
                    Using CRISPR-Cas9, the P-cpcG2*-sfp-parE/parD cassette was
                    inserted into the non-essential ywrK locus; the spec marker
                    was removed, producing marker-less strain BS-S2.
                  </p>
                </div>

                <div id="cycle-3-test" className="cycle-step">
                  <h4>Test</h4>
                  <p>
                    100 generations without antibiotic selection showed 0 %
                    PCR-detectable loss; surfactin C14 titre held at 1.1 g L⁻¹
                    under red light, identical to the plasmid-bearing parent.
                  </p>
                </div>

                <div id="cycle-3-learn" className="cycle-step">
                  <h4>Learn</h4>
                  <p>
                    Single-copy insertion reduced maximum expression by 18 %; we
                    therefore planned a T7-RNA-polymerase amplification cascade
                    for Cycle 4.
                  </p>
                </div>
              </div>

              {/* Cycle 4: Safeguard */}
              <div id="cycle-4" className="cycle-section">
                <h3>Cycle 4: Blue-light suicide circuit</h3>

                <div id="cycle-4-design" className="cycle-step">
                  <h4>Design</h4>
                  <p>
                    To satisfy biocontainment, we placed the lethal yonE gene
                    (NADase depletion) plus mazF (mRNA interferase) under a
                    blue-light-activated YF1/FixJ system; dual toxins should
                    cause rapid death when cells leave the containment device.
                  </p>
                </div>

                <div id="cycle-4-build" className="cycle-step">
                  <h4>Build</h4>
                  <p>
                    The P-fixK2-yonE-mazF-T1T2 operon was integrated at thrC; an
                    S141F LOV mutant provides a 12-min memory to avoid transient
                    cloud-triggered death, yielding strain BS-S3.
                  </p>
                  <div className="figure-container">
                    <div className="figure-item">
                      <img
                        src="/sustechocean/static/engineering/3_.png"
                        alt="Blue-light-triggered toxin expression plasmid"
                        className="figure-image"
                      />
                      <p className="figure-caption">
                        Figure 3. Blue-light-triggered toxin expression plasmid
                        (pREDawn-AmpR-MCS-yonE-repb) used in Cycle 4.
                      </p>
                    </div>
                    <div className="figure-item">
                      <img
                        src="/sustechocean/static/engineering/4_.png"
                        alt="Blue-light-ON suicide plasmid"
                        className="figure-image"
                      />
                      <p className="figure-caption">
                        Figure 4. Blue-light-ON suicide plasmid
                        pREDawn-AmpR-MCS-yonE (11.1 kb) driving yonE NADase
                        expression under pREDawn with Ampicillin resistance.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="cycle-4-test" className="cycle-step">
                  <h4>Test</h4>
                  <p>
                    Blue LED (470 nm, 50 µmol m⁻² s⁻¹) reduced viable cells by
                    5-log within 20 min; no death occurred under red or dark
                    conditions. Outdoor pond mesocosms showed zero CFU recovery
                    40 min after deliberate spill.
                  </p>
                </div>

                <div id="cycle-4-learn" className="cycle-step">
                  <h4>Learn</h4>
                  <p>
                    High salinity (35 ‰) delayed killing by 10 min; knocking out
                    the osmoprotectant opuAA in Cycle 5 should accelerate NADase
                    exhaustion under marine conditions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Dry Lab 内容 */}
          {activeTab === "dry-lab" && (
            <div className="tab-content">
              <h2>Dry Lab</h2>
              <p>Dry Lab content will be added here.</p>
            </div>
          )}

          {/* HP 内容 */}
          {activeTab === "hp" && (
            <div className="tab-content">
              <h2>Human Practices</h2>
              <p>Human Practices content will be added here.</p>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
