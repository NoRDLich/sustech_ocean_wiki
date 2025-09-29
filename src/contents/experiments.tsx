import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import "./Experiments.css";

// 定义实验协议数据类型
interface Protocol {
  id: string;
  title: string;
  content: React.ReactNode;
}

// 定义组件
export function Experiments() {
  const [expandedProtocols, setExpandedProtocols] = useState<Set<string>>(
    new Set()
  );

  const toggleProtocol = (protocolId: string) => {
    const newExpanded = new Set(expandedProtocols);
    if (newExpanded.has(protocolId)) {
      newExpanded.delete(protocolId);
    } else {
      newExpanded.add(protocolId);
    }
    setExpandedProtocols(newExpanded);
  };

  // 培养基协议
  const mediumProtocols: Protocol[] = [
    {
      id: "lb-medium",
      title: "LB (Luria-Bertani) Medium",
      content: (
        <div className="protocol-content">
          <div className="table-container">
            <table className="protocol-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NaCl</td>
                  <td>10.0 g/L</td>
                </tr>
                <tr>
                  <td>Tryptone</td>
                  <td>10.0 g/L</td>
                </tr>
                <tr>
                  <td>Yeast Extract</td>
                  <td>5.0 g/L</td>
                </tr>
                <tr>
                  <td>Agar</td>
                  <td>20.0 g/L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "guillard-f2",
      title: "Guillard F/2 Medium",
      content: (
        <div className="protocol-content">
          <div className="table-container">
            <table className="protocol-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NaNO₃</td>
                  <td>75.0 mg/L</td>
                </tr>
                <tr>
                  <td>NaH₂PO₄·H₂O</td>
                  <td>5.0 mg/L</td>
                </tr>
                <tr>
                  <td>Na₂SiO₃·9H₂O</td>
                  <td>30.0 mg/L</td>
                </tr>
                <tr>
                  <td>Na₂EDTA·2H₂O</td>
                  <td>4.36 mg/L</td>
                </tr>
                <tr>
                  <td>FeCl₃·6H₂O</td>
                  <td>3.15 mg/L</td>
                </tr>
                <tr>
                  <td>CuSO₄·5H₂O</td>
                  <td>0.0098 mg/L</td>
                </tr>
                <tr>
                  <td>ZnSO₄·7H₂O</td>
                  <td>0.022 mg/L</td>
                </tr>
                <tr>
                  <td>CoCl₂·6H₂O</td>
                  <td>0.010 mg/L</td>
                </tr>
                <tr>
                  <td>MnCl₂·4H₂O</td>
                  <td>0.18 mg/L</td>
                </tr>
                <tr>
                  <td>Na₂MoO₄·2H₂O</td>
                  <td>0.0063 mg/L</td>
                </tr>
                <tr>
                  <td>Thiamine HCl</td>
                  <td>0.1 mg/L</td>
                </tr>
                <tr>
                  <td>Cyanocobalamin</td>
                  <td>0.0005 mg/L</td>
                </tr>
                <tr>
                  <td>Biotin</td>
                  <td>0.0005 mg/L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "artificial-seawater",
      title: "Artificial Sea Water",
      content: (
        <div className="protocol-content">
          <div className="table-container">
            <table className="protocol-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Final concentration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NaCl</td>
                  <td>23.477 g</td>
                </tr>
                <tr>
                  <td>Na₂SO₄</td>
                  <td>3.917 g</td>
                </tr>
                <tr>
                  <td>MgCl₂·6H₂O</td>
                  <td>4.981 g</td>
                </tr>
                <tr>
                  <td>CaCl₂</td>
                  <td>1.102 g</td>
                </tr>
                <tr>
                  <td>NaHCO₃</td>
                  <td>192.0 mg</td>
                </tr>
                <tr>
                  <td>KCl</td>
                  <td>664.0 mg</td>
                </tr>
                <tr>
                  <td>KBr</td>
                  <td>6.0 mg</td>
                </tr>
                <tr>
                  <td>H₃BO₃</td>
                  <td>26.0 mg</td>
                </tr>
                <tr>
                  <td>SrCl₂</td>
                  <td>24.0 mg</td>
                </tr>
                <tr>
                  <td>NaF</td>
                  <td>3.0 mg</td>
                </tr>
                <tr>
                  <td>DI Water</td>
                  <td>1000.0 mL</td>
                </tr>
                <tr>
                  <td>pH</td>
                  <td>7.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ];

  // 培养实验协议
  const cultivationProtocols: Protocol[] = [
    {
      id: "skeletonema-culture",
      title: "Skeletonema costatum Culture",
      content: (
        <div className="protocol-content">
          <h4>Introduction</h4>
          <p>
            This procedure outlines the routine first-level seed culture of the
            coastal marine diatom Skeletonema costatum for rapid,
            contamination-free biomass production.
          </p>

          <h4>Materials</h4>
          <ul>
            <li>Skeletonema costatum strain</li>
            <li>Diatom-specific F/2-silicate medium (10 g per package)</li>
            <li>Sterile Erlenmeyer flasks (250 mL or 500 mL)</li>
            <li>Sterile pipettes / pipette tips</li>
            <li>
              Illuminated incubator (20–25 °C, 3 000–8 000 lux adjustable)
            </li>
            <li>Laminar-flow hood</li>
            <li>Alcohol lamp + 75 % ethanol cotton</li>
            <li>pH meter or pH strips (target 7.8–8.2)</li>
            <li>Hemocytometer or spectrophotometer (OD₆₈₀)</li>
          </ul>

          <h4>Procedure</h4>
          <ol>
            <li>
              Sterilize flask necks and pipettes by flame inside the
              laminar-flow hood.
            </li>
            <li>
              Add 400 mL sterile distilled water (or natural seawater for marine
              strains), 10 g F/2-silicate medium, and 100 mL S. costatum
              inoculum.
            </li>
            <li>
              Incubate at 20–25 °C under 3 000–5 000 lux (12 h:12 h or
              continuous light; extend to 18 h on day 1 if desired).
            </li>
            <li>
              Observe daily: verify yellow-brown colour and microscopically
              confirm intact cell chains and absence of contaminants.
            </li>
            <li>Measure cell density with hemocytometer or OD₆₈₀.</li>
            <li>
              When log-phase growth is reached (3–7 days), use directly for
              scale-up or maintenance.
            </li>
            <li>
              If contamination (turbidity, off-odour) appears, discard the
              culture and resterilise all equipment before restarting.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "bacillus-culture",
      title: "Bacillus subtilis LB Culture Protocol",
      content: (
        <div className="protocol-content">
          <h4>Introduction</h4>
          <p>
            LB (Luria-Bertani) medium supports rapid, non-sporulating growth of
            Bacillus subtilis and is the standard choice for routine
            propagation, plasmid maintenance and competent-cell preparation.
          </p>

          <h4>Materials</h4>
          <ul>
            <li>B. subtilis strain (single colony or –80 °C glycerol stock)</li>
            <li>
              LB medium (per litre): Tryptone 10 g, Yeast extract 5 g, NaCl 10
              g, pH 7.0–7.2
            </li>
            <li>LB-agar (add 20 g agar per litre)</li>
            <li>Sterile 250 mL baffled flasks, 1.5 mL tubes, Petri dishes</li>
            <li>Incubator/shaker 37 °C, 200–250 rpm</li>
            <li>
              Ice, 87 % glycerol, 0.22 µm filters (for antibiotics if required)
            </li>
          </ul>

          <h4>Procedure</h4>
          <h5>1. Starter culture</h5>
          <ol>
            <li>
              Pick a single colony into 5 mL LB; incubate 37 °C, 220 rpm, 12–16
              h.
            </li>
            <li>
              For frozen stock: mix 0.5 mL overnight culture + 0.5 mL 87 %
              glycerol, freeze in liquid N₂, store at –80 °C.
            </li>
          </ol>

          <h5>2. Scale-up</h5>
          <ol>
            <li>
              Inoculate 1 % (v/v) of starter into fresh LB (e.g., 50 mL/250 mL
              flask).
            </li>
            <li>Incubate 37 °C, 200rpm; monitor OD₆₀₀ every 30 min.</li>
            <li>
              Mid-log phase: OD₆₀₀ 0.6–0.8 (≈ 2–3 h); early stationary: OD₆₀₀
              1.0–1.2 (≈ 4–5 h).
            </li>
          </ol>

          <h5>3. Harvest & storage</h5>
          <ol>
            <li>
              For plasmid extraction: spin 1.5 mL at 12 000 × g, 1 min; discard
              supernatant.
            </li>
            <li>
              For competent cells: chill culture on ice 10 min, then proceed to
              CaCl₂ or electroporation protocol.
            </li>
            <li>
              For glycerol stock: combine equal volumes of culture and 50 %
              glycerol, freeze –80 °C.
            </li>
          </ol>
        </div>
      ),
    },
  ];

  // 分子实验协议
  const molecularProtocols: Protocol[] = [
    {
      id: "pcr",
      title: "PCR (Polymerase chain reaction)",
      content: (
        <div className="protocol-content">
          <h4>Introduction</h4>
          <p>
            This step is to amplify the 8 kb and 11 kb high-GC content fragments
            from the template DNA by PCR reaction. PCR enables the
            high-GC-specific primers to bind and extend through the challenging
            regions in optimized thermal cycles.
          </p>

          <h4>Procedure</h4>
          <ol>
            <li>Add 10 μL of 5×SF Buffer (with 10 mM MgSO₄) to each tube.</li>
            <li>
              Add 2 μL of upstream primer (10 μM) and 2 μL of downstream primer
              (10 μM) to each tube.
            </li>
            <li>Add x μL of template DNA to each tube.</li>
            <li>Add 1 μL of dNTP Mix (10 mM each) to each tube.</li>
            <li>(Optional) Add DMSO and/or 5×PCR Enhancer if needed.</li>
            <li>Add ddH₂O to bring the total volume to 49 μL.</li>
            <li>
              Finally, add 1 μL of Phanta Super-Fidelity DNA Polymerase to each
              tube.
            </li>
            <li>Mix gently and centrifuge briefly.</li>
            <li>Place the tubes into the PCR amplifier for PCR.</li>
          </ol>

          <h4>Thermocycling conditions for PCR</h4>
          <div className="table-container">
            <table className="protocol-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Temperature</th>
                  <th>Duration</th>
                  <th>Cycles</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Initial denaturation</td>
                  <td>95°C</td>
                  <td>30s (for 8 kb fragment) or 3 min (for 11 kb fragment)</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Denaturation</td>
                  <td>95°C</td>
                  <td>10s</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Annealing</td>
                  <td>60°C</td>
                  <td>15s</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Extension</td>
                  <td>72°C</td>
                  <td>30s/kb</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Final extension</td>
                  <td>72°C</td>
                  <td>10 min</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Hold</td>
                  <td>4℃</td>
                  <td>∞</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "dna-quantification-gel",
      title: "DNA Quantification via Agarose Gel Electrophoresis",
      content: (
        <div className="protocol-content">
          <h4>Introduction</h4>
          <p>
            This process estimates the concentration of linearized vector and
            insert fragments by comparing band brightness with a DNA marker of
            known concentrations. It ensures accurate input amounts for the
            subsequent ClonExpress recombination reaction.
          </p>

          <h4>Procedure</h4>
          <h5>Agarose Gel Preparation:</h5>
          <ol>
            <li>Weigh 0.3 g agarose into a conical bottle.</li>
            <li>Add 30 mL 1×TAE and heat until completely dissolved.</li>
            <li>Cool slightly, add 3 µL Ultra GelRed, mix thoroughly.</li>
            <li>Pour into gel caster, insert comb, wait until solidified.</li>
          </ol>

          <h5>Sample Loading and Running:</h5>
          <ol>
            <li>Place gel in electrophoresis chamber; cover with 1×TAE.</li>
            <li>
              Load 1 µL original sample + 1 µL serial dilution side-by-side.
            </li>
            <li>Load 10 µL DNA quantitative marker.</li>
            <li>Run at 120 V for 20–30 min.</li>
            <li>Visualise under UV; compare band intensity with marker.</li>
            <li>Record estimated ng µL⁻¹ values for vector and insert.</li>
          </ol>
        </div>
      ),
    },
    {
      id: "clon-express",
      title: "ClonExpress Homologous Recombination Reaction",
      content: (
        <div className="protocol-content">
          <h4>Introduction</h4>
          <p>
            This step ligates the insert fragment into the linearized vector
            through 15-bp homologous ends without restriction enzymes or DNA
            ligase, generating recombinant plasmids ready for transformation.
          </p>

          <h4>Procedure</h4>
          <h5>Vector & Insert Preparation:</h5>
          <ol>
            <li>
              Calculate required amounts: Vector (ng) = 0.02 × bp; Insert (ng) =
              0.04 × bp.
            </li>
            <li>
              Adjust to 50–200 ng (vector) or 10–200 ng (insert) if calculation
              outside range.
            </li>
            <li>Dilute samples so pipetting volume ≥ 1 µL.</li>
          </ol>

          <h5>Recombination Reaction Setup (on ice):</h5>
          <ol>
            <li>
              Add to PCR tube: X µL linearized vector (calculated amount), Y µL
              insert fragment (calculated amount), 4 µL 5×CE II Buffer, 2 µL
              Exnase II, ddH₂O to 20 µL
            </li>
            <li>Mix gently by pipetting; spin briefly.</li>
            <li>Incubate 37 °C for 30 min (PCR machine).</li>
            <li>Cool to 4 °C or place on ice.</li>
            <li>Store at –20 °C ≤ 1 week or proceed to transformation.</li>
          </ol>
        </div>
      ),
    },
  ];

  // 表达实验协议
  const expressionProtocols: Protocol[] = [
    {
      id: "sds-page",
      title: "SDS-PAGE",
      content: (
        <div className="protocol-content">
          <h4>Preparation</h4>
          <h5>Bacterial Culture:</h5>
          <p>Shake the bacteria one day in advance, approximately 5 ml.</p>

          <h5>Lysis Buffer:</h5>
          <ol>
            <li>50 mM Tris (1.2114 g)</li>
            <li>200 mM NaCl (2.3376 g)</li>
            <li>Adjust pH to 8.0 (cool in an ice water bath to 4°C)</li>
            <li>Make up to a final volume of 200 ml.</li>
          </ol>

          <h4>Procedure</h4>
          <h5>Bacterial Lysis</h5>
          <ol>
            <li>
              Growth Phase: Use bacteria during logarithmic growth (OD:
              0.6–0.8).
            </li>
            <li>
              Prepare a blank control with an empty plasmid (no plasmid
              introduced) and 1 ml of the gene-introduced bacteria.
            </li>
            <li>Centrifuge the samples.</li>
            <li>Discard 900 μl of supernatant.</li>
            <li>
              Resuspend the pellet in: 60 μl lysis buffer and 40 μl 5x SDS
              loading buffer
            </li>
            <li>
              Incubate in a 100°C metal bath for 10 min (open the lid after 1
              min to release pressure).
            </li>
            <li>Centrifuge at 14,000 x g for 5 min (at 4°C).</li>
          </ol>

          <h5>Sample Preparation</h5>
          <ol>
            <li>
              Take 15 μl of the supernatant for loading onto the gel (precast
              gel).
            </li>
            <li>
              When adding the comb, wrap it with a paper towel to avoid
              splashes.
            </li>
          </ol>

          <h5>Electrophoresis</h5>
          <ol>
            <li>
              Run the gel at 80 V for 30 min (until bromophenol blue runs off
              the stacking gel).
            </li>
            <li>
              Then increase to 120 V for 1 h (stop when bromophenol blue is 2 mm
              from the bottom of the gel).
            </li>
            <li>
              Follow the manufacturer's instructions for running the precast
              gel.
            </li>
          </ol>

          <h5>SDS-PAGE</h5>
          <ol>
            <li>Remove the fixing solution and add G-250 stain.</li>
            <li>Stain for 0.5 h on a shaker.</li>
            <li>Discard the staining solution and add destaining solution.</li>
            <li>
              Place on a destaining shaker, changing the solution until the blue
              background is removed.
            </li>
            <li>
              Store the gel in deionized water, then scan and save the image.
            </li>
          </ol>
        </div>
      ),
    },
  ];

  const renderProtocolSection = (
    title: string,
    protocols: Protocol[],
    icon: string
  ) => (
    <div className="protocol-section">
      <div className="section-header">
        <div className="section-icon">{icon}</div>
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="protocols-grid">
        {protocols.map((protocol, index) => (
          <div key={protocol.id} className="protocol-item">
            <button
              className={`protocol-button ${expandedProtocols.has(protocol.id) ? "expanded" : ""}`}
              onClick={() => toggleProtocol(protocol.id)}
            >
              <span className="protocol-number">{index + 1}.</span>
              <span className="protocol-title">{protocol.title}</span>
              <span className="protocol-arrow">▼</span>
            </button>
            {expandedProtocols.has(protocol.id) && (
              <div className="protocol-details">{protocol.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="experiments-page">
      <div className="page-header">
        <h1>Experiments</h1>
      </div>

      <div className="protocols-container">
        {renderProtocolSection("Culture Medium", mediumProtocols, "🧪")}
        {renderProtocolSection(
          "Cultivation Experiment",
          cultivationProtocols,
          "🦠"
        )}
        {renderProtocolSection(
          "Molecular Experiment",
          molecularProtocols,
          "🧬"
        )}
        {renderProtocolSection("Expression", expressionProtocols, "⚗️")}
      </div>
      <ScrollToTop />
    </div>
  );
}
