import React, { useState } from "react";
import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";
import "./Notebook.css";

// 定义侧边栏链接
const sidebarLinks = [
  { id: "wetlab", title: "Wetlab" },
  { id: "model", title: "Model" },
  { id: "hardware", title: "Hardware" },
  { id: "hp", title: "HP" },
];

// 定义实验条目类型
interface ExperimentEntry {
  id: string;
  title: string;
  content: React.ReactNode;
  expanded?: boolean;
}

// 定义实验组类型
interface ExperimentGroup {
  id: string;
  title: string;
  description: string;
  entries: ExperimentEntry[];
}

// 定义组件
export function Notebook() {
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(
    new Set()
  );

  const toggleEntry = (entryId: string) => {
    const newExpanded = new Set(expandedEntries);
    if (newExpanded.has(entryId)) {
      newExpanded.delete(entryId);
    } else {
      newExpanded.add(entryId);
    }
    setExpandedEntries(newExpanded);
  };

  // Wetlab experimental records
  const wetlabEntries: ExperimentEntry[] = [
    {
      id: "june-week3",
      title: "Week 3 | 6.15–6.21",
      content: (
        <div className="experiment-content">
          <p>
            This week we launched the Bacillus subtilis 168 screening pipeline
            to identify the optimal parental strain for downstream engineering.
          </p>
          <ol>
            <li>
              Screen BS168 colonies on selective LB agar, verify genotype by
              colony PCR, and store glycerol stocks of the best performers.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "june-week4",
      title: "Week 4 | 6.22–6.28",
      content: (
        <div className="experiment-content">
          <p>
            No wet-lab activity; group meeting to align on cloning strategy and
            order reagents.
          </p>
        </div>
      ),
    },
    {
      id: "july-week1",
      title: "Week 1 | 6.27–7.5",
      content: (
        <div className="experiment-content">
          <p>Focus shifted to vector preparation and part procurement.</p>
          <ol>
            <li>
              Expand Pdawn and Predawn plasmids in DH5α, midi-prep, and quantify
              on NanoDrop.
            </li>
            <li>
              Place commercial order for the custom yonE expression fragment
              with flanking homology arms (expected delivery 7 d).
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "july-week2",
      title: "Week 2 | 7.6–7.12",
      content: (
        <div className="experiment-content">
          <p>Assembled the yonE donor cassette into the Pdawn backbone.</p>
          <ol>
            <li>
              Gibson reaction between SwaI-linearized Pdawn and yonE fragment;
              incubate 50 °C 1 h.
            </li>
            <li>
              Clean-up reaction mix and store at –20 °C ready for
              transformation.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "july-week3",
      title: "Week 3 | 7.13–7.19",
      content: (
        <div className="experiment-content">
          <p>
            Transformed the recombinant construct into a cloning host and
            performed initial validation.
          </p>
          <ol>
            <li>
              Heat-shock 2 µL Gibson product into chemically competent DH10B;
              plate on ampicillin LB.
            </li>
            <li>
              Pick 8 colonies, boil-lyse, and run diagnostic PCR with M13
              primers; six amplicons of correct size observed.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "july-week4",
      title: "Week 4 | 7.20–7.26",
      content: (
        <div className="experiment-content">
          <p>
            Verified the yonE sequence and prepared high-quality plasmid stocks.
          </p>
          <ol>
            <li>
              Sanger-seq the positive PCR products; confirm 100 % match to
              in-silico yonE.
            </li>
            <li>
              Midi-prep the validated clone, quantify, and generate glycerol
              stocks of sfp & yonE double-plasmid strain.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "august-week1",
      title: "Week 1 | 7.27–8.2",
      content: (
        <div className="experiment-content">
          <p>
            Attempted to introduce the sfp helper plasmid into the BS168 chassis
            via electroporation.
          </p>
          <ol>
            <li>Revive BS168 from –80 °C, inoculate 5 mL LB overnight.</li>
            <li>
              Prepare electrocompetent cells (0.2 cm cuvette, 1.8 kV); recover 3
              h, plate on spectinomycin. No colonies obtained—first
              electroporation failure.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "august-week2",
      title: "Week 2 | 8.3–8.9",
      content: (
        <div className="experiment-content">
          <p>Repeated the electroporation with modified parameters.</p>
          <ol>
            <li>
              Increase post-pulse recovery to 4 h and add 0.5 M sorbitol to
              recovery medium; still no transformants—second failure.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "august-week3",
      title: "Week 3 | 8.10–8.16",
      content: (
        <div className="experiment-content">
          <p>
            Switched strategy to clone a native Bacillus promoter upstream of
            yonE.
          </p>
          <ol>
            <li>
              Design primer pair to amplify the Pgrac promoter region from BS168
              genomic DNA.
            </li>
            <li>High-fidelity PCR, gel-purify 300 bp band, and quantify.</li>
          </ol>
        </div>
      ),
    },
    {
      id: "august-week4",
      title: "Week 4 | 8.17–8.23",
      content: (
        <div className="experiment-content">
          <p>
            Rebuilt the promoter-bearing construct and re-attempted DH10B
            transformation.
          </p>
          <ol>
            <li>
              Golden-Gate assembly of Pgrac-yonE into Predawn backbone;
              transform 1 µL ligation into DH10B.
            </li>
            <li>
              Plate on kanamycin LB; no colonies after 16 h—transformation
              failed.
            </li>
          </ol>
        </div>
      ),
    },
  ];

  // Model experimental records
  const modelEntries: ExperimentEntry[] = [
    {
      id: "weeks-1-2",
      title: "Weeks 1-2 | Project Initiation and Framework Formation",
      content: (
        <div className="experiment-content">
          <p>
            <strong>Overall Goal:</strong> Explore predictive and optimization
            capabilities through modeling at different levels:
          </p>
          <ol>
            <li>
              <strong>Satellite Remote Sensing Modeling:</strong> Address
              missing data and prediction issues caused by cloud coverage in
              remote sensing images.
            </li>
            <li>
              <strong>
                Water Quality Parameters and HAB Prediction (Biogeochemical NN):
              </strong>{" "}
              Utilize measured physicochemical parameters to predict HAB
              occurrence probability.
            </li>
            <li>
              <strong>Protein Solubility Modeling:</strong> In synthetic biology
              projects, predict protein solubility and provide optimization
              conditions for wet lab experiments.
            </li>
          </ol>
          <p>
            <strong>Main Tasks:</strong> Research related methods (UNet,
            ConvLSTM, neural networks, physicochemical-based models), clarify
            data requirements, and establish preliminary research framework.
          </p>
        </div>
      ),
    },
    {
      id: "weeks-3-4",
      title: "Weeks 3-4 | Data Collection and Cleaning",
      content: (
        <div className="experiment-content">
          <p>
            <strong>1. Satellite Remote Sensing Modeling:</strong>
          </p>
          <ul>
            <li>
              Collect continuous cloud-free JAXA satellite images to build
              dataset.
            </li>
            <li>
              Conduct random occlusion experiments to simulate cloud coverage
              gaps.
            </li>
          </ul>

          <p>
            <strong>2. HAB Prediction Model:</strong>
          </p>
          <ul>
            <li>
              Organize ocean observation data including temperature, salinity,
              dissolved oxygen, nutrients, and chlorophyll.
            </li>
            <li>Fill missing values and perform unified standardization.</li>
          </ul>

          <p>
            <strong>3. Protein Solubility Modeling:</strong>
          </p>
          <ul>
            <li>
              Collect target protein sequences and basic physicochemical
              properties.
            </li>
            <li>
              Organize experimental environment parameters (pH, salt
              concentration, temperature) to provide input conditions for
              modeling.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "weeks-5-6",
      title: "Weeks 5-6 | Model Design and Initial Implementation",
      content: (
        <div className="experiment-content">
          <p>
            <strong>1. Satellite Remote Sensing Modeling:</strong>
          </p>
          <ul>
            <li>Train UNet model to complete missing image reconstruction.</li>
            <li>
              Build ConvLSTM structure for time series prediction, input 5-day
              images, output 3-day prediction results.
            </li>
          </ul>

          <p>
            <strong>2. HAB Prediction Model:</strong>
          </p>
          <ul>
            <li>
              Build deep feedforward neural network based on Keras/TensorFlow
              (two layers with 128 neurons + ReLU).
            </li>
            <li>Introduce XGBoost as benchmark comparison model.</li>
          </ul>

          <p>
            <strong>3. Protein Solubility Modeling:</strong>
          </p>
          <ul>
            <li>
              Establish model based on biophysical principles, decomposing
              factors such as pH, charge, salt concentration, and temperature.
            </li>
            <li>
              Construct solubility scoring function with visualizable heatmap
              output.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "weeks-7-8",
      title: "Weeks 7-8 | Model Training and Optimization",
      content: (
        <div className="experiment-content">
          <p>
            <strong>1. Satellite Remote Sensing Modeling:</strong>
          </p>
          <ul>
            <li>
              UNet successfully reconstructed large-scale cloud coverage gaps.
            </li>
            <li>
              ConvLSTM trained over 200 epochs, initially achieving 3-day
              chlorophyll concentration prediction.
            </li>
          </ul>

          <p>
            <strong>2. HAB Prediction Model:</strong>
          </p>
          <ul>
            <li>
              Neural network model achieved ~87% accuracy on validation set.
            </li>
            <li>
              XGBoost model performed well on imbalanced data but validation
              accuracy declined.
            </li>
          </ul>

          <p>
            <strong>3. Protein Solubility Modeling:</strong>
          </p>
          <ul>
            <li>Preliminary results obtained for pH range.</li>
            <li>
              Salt concentration simulation identified concentration ranges
              favorable for long-term storage.
            </li>
            <li>
              Temperature curve indicated temperature ranges where solubility
              drops sharply.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "weeks-9-10",
      title: "Weeks 9-10 | Result Validation and Optimization",
      content: (
        <div className="experiment-content">
          <p>
            <strong>1. Satellite Remote Sensing Modeling:</strong>
          </p>
          <ul>
            <li>
              Addressed ConvLSTM prediction bias by introducing asymmetric loss
              function.
            </li>
            <li>
              Model successfully captured movement trends in high chlorophyll
              regions.
            </li>
          </ul>

          <p>
            <strong>2. HAB Prediction Model:</strong>
          </p>
          <ul>
            <li>
              Evaluated using multiple metrics including confusion matrix, ROC
              curve, and F1-score.
            </li>
            <li>
              Explored precision-recall trade-offs in threshold selection,
              balancing "missed alarms" and "false alarms".
            </li>
          </ul>

          <p>
            <strong>3. Protein Solubility Modeling:</strong>
          </p>
          <ul>
            <li>
              Proposed specific experimental recommendations: avoid buffer
              solutions near isoelectric point, select appropriate salt
              concentration, and operate under low temperature conditions.
            </li>
            <li>Suggested that cofactors like Zn²⁺ may enhance stability.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "weeks-11-12",
      title: "Weeks 11-12 | Integration and Results Summary",
      content: (
        <div className="experiment-content">
          <p>
            <strong>1. Satellite Remote Sensing Modeling:</strong>
          </p>
          <ul>
            <li>
              Completed integrated model for cloud gap filling and short-term
              prediction, serving as core module for digital ocean early warning
              system.
            </li>
          </ul>

          <p>
            <strong>2. HAB Prediction Model:</strong>
          </p>
          <ul>
            <li>
              Established early warning model with biogeochemical parameters as
              input, results consistent with known ecological patterns.
            </li>
          </ul>

          <p>
            <strong>3. Protein Solubility Modeling:</strong>
          </p>
          <ul>
            <li>
              Formed systematic prediction and recommendation mechanism,
              providing clear guidance for experiments.
            </li>
          </ul>

          <p>
            <strong>Overall Achievement:</strong> The three models complement
            each other from macro (remote sensing), meso (environmental
            parameters), and micro (molecular level) perspectives, constructing
            a cross-scale modeling system.
          </p>
        </div>
      ),
    },
  ];

  // Hardware experimental records
  const hardwareEntries: ExperimentEntry[] = [
    {
      id: "may-3",
      title: "May 3 | Task Allocation and Hardware Assignment",
      content: (
        <div className="experiment-content">
          <p>
            <strong>Section I Experimental Log:</strong>
          </p>
          <p>
            The group meeting allocated tasks and assigned the purchased
            hardware.
          </p>
        </div>
      ),
    },
    {
      id: "may-14",
      title: "May 14 | Sensor Testing and Transmission Setup",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Sensor】</strong> Completed primary program coding and
            circuit connection, and conducted initial testing: The turbidity
            sensor is functioning properly, while the temperature sensor and
            dissolved oxygen sensor do not produce any output.
          </p>

          <p>
            <strong>【Transmission】</strong>
          </p>
          <ol>
            <li>
              Assembled the antenna: Fixed the antenna onto the APC220 module.
            </li>
            <li>
              Connected to the computer: Connected the APC220 to the computer
              via the USB to TTL module.
            </li>
            <li>
              Configured radio frequency parameters: Opened the "RF-Magic"
              software, configured the parameters, and wrote the parameters into
              the APC220 module.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "may-15",
      title: "May 15 | Sensor Troubleshooting",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Sensor】</strong> Reconnected the circuit, encountered the
            same issue as the previous day. Sent the sensor back for inspection.
          </p>
        </div>
      ),
    },
    {
      id: "may-30",
      title: "May 30 | Sensor Calibration and Performance",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Sensor】</strong> The temperature sensor readings were
            normal. Calibrated the turbidity sensor based on temperature data.
          </p>

          <p>
            <strong>【Sensor】</strong> Calibrated the pH sensor using standard
            pH solutions and Excel, achieving performance fitting. Obtained the
            key calibration formula: pH = -6.376 × Arduino analog reading +
            22.514. The sensor can successfully detect pH values.
          </p>

          <p>
            <strong>【Transmission】</strong> Routine tests were successful:
            achieved data transmission from the PC to the Arduino, as well as
            transmission in the reverse direction.
          </p>
        </div>
      ),
    },
    {
      id: "june-12",
      title: "June 12 | Dissolved Oxygen Sensor Replacement",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Sensor】</strong> The dissolved oxygen sensor produced
            readings but was extremely unstable, suspected to be damaged during
            earlier debugging. A new dissolved oxygen sensor was purchased and
            successfully debugged.
          </p>
        </div>
      ),
    },
    {
      id: "june-22",
      title: "June 22 | Display and Surfactin System",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Display】</strong> Newly added OLED display screen and
            buzzer are used for output display.
          </p>

          <p>
            <strong>【Surfactin】</strong> The water pump and flow meter were
            connected in series, enabling quantitative liquid discharge.
          </p>
        </div>
      ),
    },
    {
      id: "july-3",
      title: "July 3 | System Integration and Power Issues",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Integration】</strong> Integrated the wireless
            transmission module with the sensor group. The OLED display failed
            to operate, likely due to insufficient power supply. Attempted to
            integrate a power module.
          </p>
        </div>
      ),
    },
    {
      id: "august-1-4",
      title: "August 1-4 | Product Design and Component Selection",
      content: (
        <div className="experiment-content">
          <p>
            <strong>August 1:</strong> <strong>【Integration】</strong>{" "}
            Discussed and finalized the overall product concept, confirming the
            Iterated Design version as described earlier.
          </p>

          <p>
            <strong>August 2:</strong> <strong>【Surfactin】</strong> Purchased
            solenoid valves and relays.
          </p>

          <p>
            <strong>August 4:</strong> <strong>【Power】</strong> Completed the
            selection of the battery and power module.{" "}
            <strong>【Surfactin】</strong> Successfully controlled the solenoid
            valve.
          </p>
        </div>
      ),
    },
    {
      id: "august-10",
      title: "August 10 | Circuit Design and Planning",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Integration】</strong> Planned overall pin assignments and
            component layout, and drew the circuit diagram.
          </p>
        </div>
      ),
    },
    {
      id: "august-20",
      title: "August 20 | 3D Modeling Initiation",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Demonstration】</strong> Began 3D modeling using
            SolidWorks.
          </p>
        </div>
      ),
    },
    {
      id: "september-3",
      title: "September 3 | Model Integration Attempt",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【+Model】</strong> Explored the possibility of directly
            deploying the modeling team's algorithm on the hardware. This was
            ultimately unsuccessful due to insufficient mainboard memory.
          </p>
        </div>
      ),
    },
    {
      id: "september-11",
      title: "September 11 | Housing and Component Assembly",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Demonstration】</strong> Conducted 3D printing of the
            housing and purchased required non-electronic parts such as hinges
            and magnets.
          </p>
        </div>
      ),
    },
    {
      id: "september-15",
      title: "September 15 | Housing Finishing",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Demonstration】</strong> Completed surface treatment and
            spray painting of the housing.
          </p>
        </div>
      ),
    },
    {
      id: "september-16",
      title: "September 16 | Component Installation and Debugging",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Integration】</strong> Installed all components and began
            comprehensive debugging.
          </p>
        </div>
      ),
    },
    {
      id: "september-19",
      title: "September 19 | Model Integration Success",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【+Model】</strong> Explored the feasibility of having the
            hardware send data to the PC, where the modeling team's algorithm
            would process it and return results to the hardware. Successfully
            established data transmission and the prediction model integration
            using JSON format.
          </p>
        </div>
      ),
    },
    {
      id: "september-25",
      title: "September 25 | Code Integration Completion",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Integration】</strong> Completed code integration.
          </p>
        </div>
      ),
    },
    {
      id: "september-27",
      title: "September 27 | Documentation and Promotion",
      content: (
        <div className="experiment-content">
          <p>
            <strong>【Integration】</strong> Recorded videos and took
            promotional photos.
          </p>
        </div>
      ),
    },
  ];

  // HP experimental records
  const hpEntries: ExperimentEntry[] = [
    {
      id: "stakeholder-interviews",
      title: "Stakeholder Interviews | June-July",
      content: (
        <div className="experiment-content">
          <p>
            Conducted interviews with marine environmental protection experts,
            aquaculture practitioners, and policymakers.
          </p>
          <ol>
            <li>
              Understanding the actual impact of red tides on marine ecosystems
            </li>
            <li>Assessing acceptance of synthetic biology solutions</li>
            <li>
              Identifying potential safety and environmental considerations
            </li>
            <li>Collecting feedback and suggestions for project direction</li>
          </ol>
        </div>
      ),
    },
    {
      id: "public-engagement",
      title: "Public Engagement Activities | July-August",
      content: (
        <div className="experiment-content">
          <p>
            Organized a series of public education and engagement activities.
          </p>
          <ol>
            <li>
              Marine environmental protection science popularization lectures
            </li>
            <li>Synthetic biology technology demonstrations</li>
            <li>Public opinion collection and feedback</li>
            <li>Collaborative projects with local communities</li>
          </ol>
        </div>
      ),
    },
  ];

  const experimentGroups: ExperimentGroup[] = [
    {
      id: "wetlab",
      title: "Wetlab",
      description:
        "Laboratory experiments focused on genetic engineering of Bacillus subtilis, plasmid construction, and optogenetic control system development.",
      entries: wetlabEntries,
    },
    {
      id: "model",
      title: "Model",
      description:
        "Computational modeling and machine learning development for HAB prediction, including OI-SwinUnet model training and environmental variable analysis.",
      entries: modelEntries,
    },
    {
      id: "hardware",
      title: "Hardware",
      description:
        "Hardware development and integration including environmental sensors, wireless communication systems, and optogenetic control devices.",
      entries: hardwareEntries,
    },
    {
      id: "hp",
      title: "HP",
      description:
        "Human practices and public engagement activities, ensuring social responsibility and sustainable development of the project.",
      entries: hpEntries,
    },
  ];

  return (
    <ProjectPageLayout title="Notebook" sidebarLinks={sidebarLinks}>
      <div className="notebook-container">
        {experimentGroups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="experiment-group"
            data-group={group.id}
          >
            <h2 className="group-title">{group.title}</h2>
            <hr className="heading-divider" />
            <p className="group-description">{group.description}</p>

            {group.entries.map((entry) => (
              <div key={entry.id} className="experiment-entry">
                <div
                  className={`experiment-header ${expandedEntries.has(entry.id) ? "expanded" : ""}`}
                  onClick={() => toggleEntry(entry.id)}
                >
                  <span className="experiment-title">{entry.title}</span>
                  <span className="expand-icon">
                    {expandedEntries.has(entry.id) ? "▲" : "▼"}
                  </span>
                </div>
                {expandedEntries.has(entry.id) && (
                  <div className="experiment-body">{entry.content}</div>
                )}
              </div>
            ))}
          </section>
        ))}
      </div>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
