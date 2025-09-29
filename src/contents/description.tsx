import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";

// 定义侧边栏链接
const sidebarLinks = [
  { id: "overview", title: "Overview" },
  { id: "background", title: "Background" },
  { id: "design", title: "Design" },
  { id: "theory", title: "Theory Basis" },
];

// 定义组件
export function Description() {
  return (
    <ProjectPageLayout title="Description" sidebarLinks={sidebarLinks}>
      <section id="overview">
        <h2>Overview</h2>
        <hr className="heading-divider" />
        <p>
          Our project focuses on developing an innovative solution for harmful
          algal blooms (HABs) using synthetic biology and machine learning
          technologies. We aim to create a comprehensive system that can
          predict, monitor, and control HABs through the natural production of
          biosurfactants from engineered Bacillus subtilis strains.
        </p>
        <p>
          This approach combines optogenetic control systems with advanced
          predictive modeling to provide an effective, safe, and controllable
          method for HAB prevention and management, addressing critical
          environmental and economic challenges in marine ecosystems.
        </p>
      </section>

      <section id="background">
        <h2>Background</h2>
        <hr className="heading-divider" />
        <p>
          Harmful algal blooms (HABs), also known as red tides, occur when algae
          explosively grow under favorable environmental conditions. HABs
          displace marine ecosystems, lower dissolved oxygen, release toxin
          materials, and invoke large kills of fish and shellfish. HABs also
          inflict large losses on aquaculture, tourism, and public health.
          Monitoring and early response remain central issues because satellite
          imagery is often blanketed by clouds, causing blind spots for
          observations. Prior to HABs' visibility above water surfaces,
          ecosystem as well as economic damage may already be at their point of
          no return.
        </p>
        <p>
          Traditional HAB control measures are minimal. Quick but hazardous
          chemical treatments such as copper sulfate are normally feasible.
          Biological control such as microbial or fish-based algae control also
          remains experimental with poor stability and use. Moreover, preseason
          monitoring often does not provide good predictive potential. Thus, an
          effective, safe, and controllable approach that integrates prediction
          with selective biological intervention is crucial.
        </p>
      </section>

      <section id="design">
        <h2>Design</h2>
        <hr className="heading-divider" />
        <p>
          Our proposal entails the natural production of the biosurfactant
          Surfactin C14 from
          <em> Bacillus subtilis</em>. Using optogenetically governed expression
          plasmids, we aim at applying machine learning towards HABs prediction
          as well as prevention. Specifically, we implement OI-SwinUnet model
          with a fully connected NN towards approximating the probability of HAB
          occurrence from environment variables such as nutrient concentrations,
          temperature, and dissolved oxygen concentrations.
        </p>
        <p>
          When the predictive probability exceeds a given cut-off, optically
          controlled signals are used to activate expression of Surfactin C14
          from <em>Bacillus subtilis</em>. Two optogenetic plasmids were
          employed for strain engineering: pdawn (blue-light inducible) and
          pREDawn (red-light inducible). The <em>sfp</em> gene that drives
          Surfactin production is placed under blue-light control by the pdawn
          system. The red-light-inducible plasmid is also used as a kill switch
          such that engineered bacteria will undergo programmed cell death upon
          possible escape into the environment and will thus not infect native
          microbial populations.
        </p>
      </section>

      <section id="theory">
        <h2>Theory Basis</h2>
        <hr className="heading-divider" />
        <div>
          <h3>Surfactin Mechanism</h3>
          <p>
            Surfactin, a secondary metabolite produced by{" "}
            <em>Bacillus subtilis</em>, is an amphiphilic cyclic lipopeptide
            with potent algicidal activity against algal cell membranes. As a
            biosurfactant, it significantly enhances the bioavailability of
            hydrophobic organic compounds. The algicidal mechanisms of surfactin
            primarily involve three pathways: disruption of algal cell
            membranes, induction of oxidative stress, and interference with
            cellular signal transduction. Its advantages include high algicidal
            efficacy, low toxicity, and good biodegradability. Additionally,
            studies have shown that surfactin can inhibit the lipolytic
            efficiency of lipase, thereby preventing excessive enzyme
            accumulation at the lipid/water interface.
          </p>
        </div>

        <div>
          <h3>YonE Kill Switch Mechanism</h3>
          <p>
            YonE is a phage-encoded portal protein from temperate phage SPβ,
            playing an essential role in DNA packaging during infection. In{" "}
            <em>Bacillus subtilis</em>, YonE activates the host's anti-phage
            defense protein SpbK, which carries a TIR (Toll/Interleukin-1
            Receptor-like) domain. This interaction triggers SpbK's NADase
            activity, leading to rapid depletion of intracellular NAD⁺. The loss
            of NAD⁺ results in growth arrest and programmed cell death of the
            bacterial cell, functioning as an abortive infection mechanism that
            effectively prevents phage propagation.
          </p>
        </div>
      </section>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
