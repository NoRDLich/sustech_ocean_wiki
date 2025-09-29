import { useState } from "react";
import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";
import "./Parts.css";

// 定义侧边栏链接
const sidebarLinks = [
  { id: "overview", title: "Overview" },
  { id: "basic-parts", title: "Basic Parts" },
  { id: "composite-parts", title: "Composite Parts" },
];

// 定义Part数据类型
interface Part {
  number: string;
  shortDescription: string;
  longDescription: string;
}

// 定义组件
export function Parts() {
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  // Basic Parts数据
  const basicParts: Part[] = [
    {
      number: "BBa_K592004",
      shortDescription: "YF1",
      longDescription:
        "A gene encoding the light-sensitive histidine kinase YF1 (LOV-HK) from Bradyrhizobium sp.",
    },
    {
      number: "BBa_K592005",
      shortDescription: "FixJ",
      longDescription:
        "A gene encoding the response regulator FixJ that is phosphorylated by YF1 and activates pFixK2.",
    },
    {
      number: "BBa_K592006",
      shortDescription: "pFixK2",
      longDescription:
        "A promoter activated by phosphorylated FixJ; used for blue-light-repressed gene expression.",
    },
    {
      number: "BBa_R0051",
      shortDescription: "pR",
      longDescription:
        "A lambda phage promoter (pR) commonly employed in temperature or CI-repressed circuits.",
    },
    {
      number: "BBa_C0051",
      shortDescription: "Cl",
      longDescription:
        "A gene encoding the lambda CI repressor that binds to pR and shuts off transcription.",
    },
    {
      number: "BBa_K1736300",
      shortDescription: "Laclq",
      longDescription:
        "A high-level repressor variant of LacI; stronger than wild-type LacI and useful for tight control.",
    },
    {
      number: "BBa_25X7HKST",
      shortDescription: "YonE NADase",
      longDescription:
        "A gene from Bacillus subtilis encoding the NADase toxin YonE; induces cell death by NAD⁺ depletion.",
    },
    {
      number: "BBa_Y1002",
      shortDescription: "AmpR",
      longDescription:
        "A basic part encoding the β-lactamase (bla) gene that confers resistance to ampicillin and related penicillin-derived antibiotics; commonly used as a selectable marker in E. coli cloning vectors.",
    },
    {
      number: "BBa_K4643004",
      shortDescription: "RepB",
      longDescription:
        "A basic part encoding the RepB replication protein required for the initiation and maintenance of the pSW200-family theta-replicating plasmid in Gram-positive bacteria such as Bacillus subtilis; used to confer plasmid replication and stability in composite cloning vectors.",
    },
    {
      number: "BBa_B0034",
      shortDescription: "RBS",
      longDescription:
        "A basic part encoding a strong ribosome-binding site (RBS) optimized for high-level translation initiation in E. coli; commonly used to tune protein expression levels in synthetic circuits.",
    },
    {
      number: "BBa_K3257021",
      shortDescription: "T1 terminator",
      longDescription:
        "A basic part encoding the bacteriophage λ T1 rho-independent terminator; reduces read-through transcription and serves as a robust insulator between consecutive transcriptional units in both E. coli and B. subtilis shuttle constructs.",
    },
    {
      number: "BBa_K2259010",
      shortDescription: "Rop",
      longDescription:
        'A basic part encoding the ColE1 Rop protein (7.5 kDa dimer); binds the RNA I–RNA II "kissing-loop" complex to globally lower plasmid copy number and can be exploited in multi-plasmid SynORI systems for broad-host copy control.',
    },
    {
      number: "BBa_K5119015",
      shortDescription: "KanR",
      longDescription:
        "A basic part encoding the aminoglycoside phosphotransferase (aph(3')-Ia) gene; confers resistance to kanamycin and related aminoglycoside antibiotics and is widely used as a selectable marker in both Gram-negative and Gram-positive cloning vectors.",
    },
    {
      number: "BBa_K4274009",
      shortDescription: "Sfp",
      longDescription:
        "A basic part encoding the Sfp phosphopantetheinyl transferase from Bacillus subtilis; post-translationally primes the phosphopantetheine arm of surfactin synthetase and other NRPS/PKS enzymes, essential for surfactin, fengycin and bacillibactin biosynthesis.",
    },
  ];

  // Composite Parts数据
  const compositeParts: Part[] = [
    {
      number: "BBa_K5920XXX",
      shortDescription: "YF1-FixJ-pFixK2",
      longDescription:
        "A composite part combining the YF1 light sensor, FixJ response regulator, and pFixK2 promoter for blue-light-repressed gene expression. This is our first composite part currently being registered on the iGEM Parts Registry.",
    },
    {
      number: "BBa_K5920YYY",
      shortDescription: "YonE-mazF-Sfp",
      longDescription:
        "A composite part containing the dual-toxin suicide module (YonE-mazF) and Sfp phosphopantetheinyl transferase for controlled cell death and surfactin production. This is our second composite part currently being registered on the iGEM Parts Registry.",
    },
  ];

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell({ row, col });
  };

  const handleCellDoubleClick = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ProjectPageLayout title="Parts" sidebarLinks={sidebarLinks}>
      <div className="parts-container">
        <section id="overview">
          <h2>Overview</h2>
          <hr className="heading-divider" />
          <p>
            Sustech-Ocean 2025's iGEM collection delivers 14 basic and 2
            composite parts that form a red-light-driven, biosafe surfactin C14
            toolkit. Centered on the YF1/FixJ blue-light OFF switch and a
            dual-toxin (YonE-mazF) suicide module, every promoter, RBS,
            terminator, resistance marker and replication component has been
            sequence-verified and activity-tested under both E. coli and B.
            subtilis backgrounds. All parts conform to RFC[10]/RFC[1000], are
            inter-compatible, and are released for immediate re-use and further
            expansion by the iGEM community.
          </p>
        </section>

        <section id="basic-parts">
          <h2>Basic Parts</h2>
          <hr className="heading-divider" />
          <div className="table-container">
            <table className="parts-table">
              <thead>
                <tr>
                  <th className="number-col">Number</th>
                  <th className="short-col">Short Description</th>
                  <th className="long-col">Long Description</th>
                </tr>
              </thead>
              <tbody>
                {basicParts.map((part, index) => (
                  <tr key={part.number}>
                    <td
                      className={`number-col ${selectedCell?.row === index && selectedCell?.col === 0 ? "selected" : ""}`}
                      onClick={() => handleCellClick(index, 0)}
                      onDoubleClick={() => handleCellDoubleClick(part.number)}
                    >
                      {part.number}
                    </td>
                    <td
                      className={`short-col ${selectedCell?.row === index && selectedCell?.col === 1 ? "selected" : ""}`}
                      onClick={() => handleCellClick(index, 1)}
                      onDoubleClick={() =>
                        handleCellDoubleClick(part.shortDescription)
                      }
                    >
                      {part.shortDescription}
                    </td>
                    <td
                      className={`long-col ${selectedCell?.row === index && selectedCell?.col === 2 ? "selected" : ""}`}
                      onClick={() => handleCellClick(index, 2)}
                      onDoubleClick={() =>
                        handleCellDoubleClick(part.longDescription)
                      }
                    >
                      {part.longDescription}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="composite-parts">
          <h2>Composite Parts</h2>
          <hr className="heading-divider" />
          <div className="table-container">
            <table className="parts-table">
              <thead>
                <tr>
                  <th className="number-col">Number</th>
                  <th className="short-col">Short Description</th>
                  <th className="long-col">Long Description</th>
                </tr>
              </thead>
              <tbody>
                {compositeParts.map((part, index) => (
                  <tr key={part.number}>
                    <td
                      className={`number-col ${selectedCell?.row === index + basicParts.length && selectedCell?.col === 0 ? "selected" : ""}`}
                      onClick={() =>
                        handleCellClick(index + basicParts.length, 0)
                      }
                      onDoubleClick={() => handleCellDoubleClick(part.number)}
                    >
                      {part.number}
                    </td>
                    <td
                      className={`short-col ${selectedCell?.row === index + basicParts.length && selectedCell?.col === 1 ? "selected" : ""}`}
                      onClick={() =>
                        handleCellClick(index + basicParts.length, 1)
                      }
                      onDoubleClick={() =>
                        handleCellDoubleClick(part.shortDescription)
                      }
                    >
                      {part.shortDescription}
                    </td>
                    <td
                      className={`long-col ${selectedCell?.row === index + basicParts.length && selectedCell?.col === 2 ? "selected" : ""}`}
                      onClick={() =>
                        handleCellClick(index + basicParts.length, 2)
                      }
                      onDoubleClick={() =>
                        handleCellDoubleClick(part.longDescription)
                      }
                    >
                      {part.longDescription}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="registration-notice">
            <p>
              <strong>Note:</strong> Our two composite parts are currently being
              registered on the iGEM Parts Registry. These are our first
              composite parts and will be available for community use once
              registration is complete.
            </p>
          </div>
        </section>
      </div>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
