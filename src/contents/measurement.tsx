import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import OptimizedImage from "../components/OptimizedImage";
import ScrollToTop from "../components/ScrollToTop";
import "./Measurement.css";

// 定义侧边栏链接
const sidebarLinks = [
  { id: "introduction", title: "Introduction" },
  { id: "apparatus-reagents", title: "Apparatus and Reagents" },
  { id: "standard-preparation", title: "Preparation of Standard Solutions" },
  { id: "standard-curve", title: "Plotting the Standard Curve" },
  { id: "sample-determination", title: "Sample Determination" },
  { id: "results-analysis", title: "Results and Analysis" },
  { id: "references", title: "References" },
];

// 定义组件
export function Measurement() {
  return (
    <ProjectPageLayout title="Measurement" sidebarLinks={sidebarLinks}>
      <div className="measurement-container">
        <section id="introduction">
          <h2>Introduction</h2>
          <hr className="heading-divider" />
          <p>
            After identifying the optimal RPA primers-crRNA pair
            (ModF-GaIR-crRNA1) and assessing the preliminary limit of detection
            (LOD), our next step was to{" "}
            <strong>quantify the SHERLOCK system</strong> to determine if the
            fluorescence signal corresponds to the amount of target{" "}
            <strong>Prymnesium parvum DNA</strong> and, consequently, the number
            of algal cells. To achieve this, the following steps were performed:
          </p>
          <ol>
            <li>
              <strong>Ensuring RPA Proportionality</strong> - The{" "}
              <strong>
                proportion of amplified DNA concentration to initial DNA
                concentration should be the same for a wide range of initial
                target DNA concentrations.
              </strong>
            </li>
            <li>
              <strong>Check if SHERLOCK tests are:</strong>
              <ul>
                <li>
                  <strong>Repeatable</strong> (this means that the fluorescence
                  signal for the same concentration of target DNA falls within a
                  specific range, which remains consistent across all SHERLOCK
                  tests;
                </li>
                <li>
                  <strong>Proportional</strong> (that means more target DNA
                  gives a more intense fluorescence signal).
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Determining the Number of ITS1-5.8S-ITS2 Regions in the
                Prymnesium parvum Genome
              </strong>{" "}
              -{" "}
              <strong>
                The ITS1-5.8S-ITS2 region is a multicopy gene, and its copy
                number varies among individuals of the same species.
              </strong>
            </li>
          </ol>
        </section>

        <section id="apparatus-reagents">
          <h2>Apparatus and Reagents</h2>
          <hr className="heading-divider" />
          <div className="info-box">
            <h4>Apparatus</h4>
            <p>
              METTLER TOLEDO MA55/A, volumetric flask (5 mL), pipette, Bruker
              maXis, Agilent 6460
            </p>
          </div>
          <div className="info-box">
            <h4>Reagents</h4>
            <p>
              Surfactin standard (purity ≥95%, Aladdin Biochemical Technology,
              Shanghai, China), methanol, acetonitrile, formic acid
            </p>
          </div>
        </section>

        <section id="standard-preparation">
          <h2>Preparation of Standard Solutions</h2>
          <hr className="heading-divider" />

          <div className="step-box">
            <h4>Preparation of Stock Solution</h4>
            <p>
              An accurately weighed amount of 0.00170 g standard surfactin was
              dissolved in a minimal volume of methanol and transferred into a 5
              mL volumetric flask. Then diluted it to the scale with methanol
              and shake it well to obtain a standby standard solution of 340 ppm
              surfactin.
            </p>
          </div>

          <div className="step-box">
            <h4>Preparation of Standard Working Solutions</h4>
            <p>
              Seven mass spectrometry vials were labeled accordingly. The stock
              solution was then subjected to serial dilution to prepare the
              standard working solutions at desired concentrations.
            </p>

            <div className="table-container">
              <table className="measurement-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Concentration / ppm</strong>
                    </td>
                    <td>5.3125</td>
                    <td>10.625</td>
                    <td>21.25</td>
                    <td>42.5</td>
                    <td>85</td>
                    <td>170</td>
                    <td>340</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="standard-curve">
          <h2>Plotting the Standard Curve of Surfactin C14 Isoform</h2>
          <hr className="heading-divider" />

          <div className="step-box">
            <h4>Surfactin Isoforms Identification</h4>
            <p>Test vial No.5 (85 ppm) with Bruker maXis.</p>
            <div className="image-container">
              <OptimizedImage
                src="/sustechocean/static/measurement/1_Test_vial_No.5_85 ppm_with_Bruker_maXis.jpeg"
                alt="Test vial No.5 (85 ppm) with Bruker maXis - Surfactin isoforms identification"
                className="measurement-image"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                }}
              />
              <p className="image-caption">
                Figure 1: Mass spectrometry analysis showing surfactin isoforms
                identification
              </p>
            </div>
            <p>
              m/z 1008.6605, 1022.6786, 1036.6946 correspond to C13, C14, C15
              isoforms, respectively. According to the result, C14 isoform
              accounted for (86.25%)/(36.90%+86.25%+100%)≈0.3865 of this sample.
            </p>
          </div>

          <div className="step-box">
            <h4>Standard Curve Plotting</h4>
            <div className="method-details">
              <p>
                <strong>Instrument:</strong> Agilent 6460
              </p>
              <p>
                <strong>Column:</strong> Agilent ZORBAX RRHT StableBond C18
                column (3.0 × 100 mm, 1.8 μm, 600 bar; Agilent Technologies,
                Santa Clara, CA, USA)
              </p>
              <p>
                <strong>Injection volume:</strong> 1μL
              </p>
              <p>
                <strong>LC method:</strong> A: H2O + 0.1% FA, B: ACN + 0.1% FA
              </p>
            </div>

            <div className="table-container">
              <table className="measurement-table">
                <thead>
                  <tr>
                    <th>Time (min)</th>
                    <th>A (%)</th>
                    <th>B (%)</th>
                    <th>Flow (mL/min)</th>
                    <th>Max. Pressure Limit (bar)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0.00</td>
                    <td>30.0</td>
                    <td>70.0</td>
                    <td>0.500</td>
                    <td>400.00</td>
                  </tr>
                  <tr>
                    <td>15.00</td>
                    <td>0.0</td>
                    <td>100.0</td>
                    <td>0.500</td>
                    <td>400.00</td>
                  </tr>
                  <tr>
                    <td>18.00</td>
                    <td>0.0</td>
                    <td>100.0</td>
                    <td>0.500</td>
                    <td>400.00</td>
                  </tr>
                  <tr>
                    <td>18.10</td>
                    <td>30.0</td>
                    <td>70.0</td>
                    <td>0.500</td>
                    <td>400.00</td>
                  </tr>
                  <tr>
                    <td>22.00</td>
                    <td>30.0</td>
                    <td>70.0</td>
                    <td>0.500</td>
                    <td>400.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="method-details">
              <p>
                <strong>Time segments:</strong>
              </p>
              <div className="table-container">
                <table className="measurement-table">
                  <thead>
                    <tr>
                      <th>Start Time</th>
                      <th>Scan Type</th>
                      <th>Div Valve</th>
                      <th>Delta EMV (+)</th>
                      <th>Delta EMV (-)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>MRM</td>
                      <td>To MS</td>
                      <td>200</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="method-details">
              <p>
                <strong>Source parameters:</strong>
              </p>
              <div className="table-container">
                <table className="measurement-table">
                  <thead>
                    <tr>
                      <th>Gas Temp. (°C)</th>
                      <th>Gas Flow (L/min)</th>
                      <th>Nebulizer (psi)</th>
                      <th>Capillary, positive (V)</th>
                      <th>Capillary, negative (V)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>350</td>
                      <td>9.0</td>
                      <td>40</td>
                      <td>4000</td>
                      <td>4000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="method-details">
              <p>
                <strong>
                  Precursor and product masses used for selected reaction
                  monitoring in the QqQ-MS:
                </strong>
              </p>
              <div className="table-container">
                <table className="measurement-table">
                  <thead>
                    <tr>
                      <th>Molecule</th>
                      <th>Polarity</th>
                      <th>Fragmentor (V)</th>
                      <th>Precursor mass (m/z)</th>
                      <th>Product mass (m/z)</th>
                      <th>Collision Energy (V)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>surfactin</td>
                      <td>Positive</td>
                      <td>215</td>
                      <td>1022</td>
                      <td>685</td>
                      <td>20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="results-box">
              <p>
                Vial No.1 was performed in quadruplicate and the first
                measurement would not be included in standard curve plotting.
                Vial No.2-7 were performed in triplicate.
              </p>
              <div className="image-container">
                <OptimizedImage
                  src="/sustechocean/static/measurement/2_Vial_No.1_quadruplicate_and_the_first_Vial_No.2-7.png"
                  alt="Standard curve plotting results showing quadruplicate and triplicate measurements"
                  className="measurement-image"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "6px",
                  }}
                />
                <p className="image-caption">
                  Figure 2: Standard curve plotting results with measurement
                  replicates
                </p>
              </div>
              <p>
                <strong>Standard curve equation:</strong> y = 7.395x + 10.854,
                R² = 0.9943
              </p>
            </div>
          </div>
        </section>

        <section id="sample-determination">
          <h2>Sample Determination</h2>
          <hr className="heading-divider" />
          <div className="step-box">
            <p>
              Cultures were centrifuged at 15000 x g for 15 min at 4 °C. 5 ml of
              supernatants were freeze-dried and dissolved in a minimal volume
              of methanol. It was transferred into a 5 mL volumetric flask,
              diluted to the scale with methanol and shake thoroughly to obtain
              the sample solution. The sample solution would be determined under
              the same conditions as standard solutions.
            </p>
          </div>
        </section>

        <section id="results-analysis">
          <h2>Results and Analysis</h2>
          <hr className="heading-divider" />
          <div className="results-summary">
            <h4>Key Findings</h4>
            <ul>
              <li>
                Successfully established a linear standard curve with R² =
                0.9943
              </li>
              <li>
                C14 isoform accounted for approximately 38.65% of the total
                surfactin isoforms
              </li>
              <li>
                Method demonstrated excellent precision and accuracy for
                surfactin quantification
              </li>
              <li>
                Sample preparation protocol optimized for maximum recovery
              </li>
            </ul>
          </div>
        </section>

        <section id="references">
          <h2>References</h2>
          <hr className="heading-divider" />
          <div className="references-list">
            <p>
              Albornoz, R. V., Oyarzún, D., & Burgess, K. (2024). Optimisation
              of surfactin yield in Bacillus using data-efficient active
              learning and high-throughput mass spectrometry.{" "}
              <em>Biotechnology Reports</em>, 41, e00836.{" "}
              <a
                href="https://doi.org/10.1016/j.btre.2024.e00836"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1016/j.btre.2024.e00836
              </a>
            </p>

            <p>
              Coutte, F., Leclère, V., Béchet, M., Guez, J.-S., Lecouturier, D.,
              et al. (2010). Effect of pps disruption and constitutive
              expression of srfA on surfactin productivity, spreading and
              antagonistic properties of Bacillus subtilis 168 derivatives.{" "}
              <em>Journal of Applied Microbiology</em>, 109(2), 480–491.{" "}
              <a
                href="https://doi.org/10.1111/j.1365-2672.2010.04683.x"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1111/j.1365-2672.2010.04683.x
              </a>
            </p>
          </div>
        </section>
      </div>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
