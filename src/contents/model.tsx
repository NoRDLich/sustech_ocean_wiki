import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import MathFormula from "../components/MathFormula";
import InteractiveChart from "../components/InteractiveChart";
import ImageSequenceViewer from "../components/ImageSequenceViewer";
import ScrollToTop from "../components/ScrollToTop";
import { getChartUrl } from "../config/charts";
import { getImageUrl } from "../config/images";

// 定义侧边栏链接
const sidebarLinks = [
  {
    id: "satellite-remote-sensing",
    title: "Satellite Remote Sensing Prediction",
    subsections: [
      { id: "background-challenge", title: "Background & Challenge" },
      { id: "phase-one-unet", title: "Phase One: UNet" },
      { id: "phase-two-convlstm", title: "Phase Two: ConvLSTM" },
      { id: "model-architecture", title: "Model Architecture" },
      { id: "training-results", title: "Training Results" },
    ],
  },
  {
    id: "water-quality-prediction",
    title: "Water Quality Parameter Prediction",
    subsections: [
      { id: "seasonal-variation", title: "Seasonal Variation" },
      { id: "environmental-drivers", title: "Environmental Drivers" },
      { id: "distribution-analysis", title: "Distribution Analysis" },
    ],
  },
  {
    id: "protein-solubility-analysis",
    title: "Protein Solubility Analysis",
    subsections: [
      { id: "motivation-background", title: "Motivation & Background" },
      { id: "strategy-tool", title: "Strategy & Tool" },
      { id: "actionable-insights", title: "Actionable Insights" },
      { id: "conclusion", title: "Conclusion" },
    ],
  },
];

// 定义组件
export function Model() {
  return (
    <ProjectPageLayout title="Model" sidebarLinks={sidebarLinks}>
      <section id="satellite-remote-sensing">
        <h2>Satellite Remote Sensing Prediction</h2>
        <hr className="heading-divider" />

        <div id="background-challenge">
          <h3>Background & Challenge</h3>
          <p>
            The ocean, covering 70% of our planet's surface, serves as the
            climate regulator and the foundation of the life system on Earth.
            Within this blue frontier, phytoplankton act as the producers of the
            food web, and the spatiotemporal distribution of their biomass—often
            measured by chlorophyll-a concentration—represents one of the most
            vital "heartbeat" signals of ocean health. However, monitoring this
            "blue heart" has long faced a significant challenge: clouds in the
            sky act like curtains, obstructing our view of the ocean.
          </p>

          <p>
            Traditional satellite remote sensing data suffer from extensive gaps
            due to clouds, fog, or sun glint. These gaps are not merely
            "mosaics" in the imagery—they represent blind spots in our
            understanding of marine ecosystems. A silently developing harmful
            algal bloom (red tide) could be lurking beneath a layer of clouds,
            and by the time it is observed, it may have already caused
            irreversible damage to aquaculture and marine ecology.
          </p>

          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <img
              src={getImageUrl("model1", "1_hurricane")}
              alt="A hurricane approaching and causing large blank areas"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              Figure 1: A hurricane approaching and causing large blank areas
            </p>
          </div>

          <p>
            We, the modeling team at SUSTech-Ocean, aim to leverage cutting-edge
            artificial intelligence technologies to clear away the clouds and
            create a clear, continuous, and predictive "digital twin" for marine
            ecosystems—transforming ocean monitoring from a reactive effort into
            a proactive early-warning system.
          </p>
        </div>

        <div id="phase-one-unet">
          <h3>
            Phase One: Training an "Expert Interpolation Assistant" (UNet)
          </h3>
          <p>
            First, we selected continuous, clear, cloud-free image sequences
            from the JAXA satellite data. Using these continuous cloud-free
            sequences, we trained a self-supervised UNet model for cloud gap
            filling. The goal of this UNet model is to thoroughly learn the
            spatial distribution, concentration correlations, and other
            relationships between satellite images on adjacent dates. This
            enables it to reconstruct data missing due to cloud cover—to a
            certain extent—based on clear and complete data from neighboring
            dates, thereby providing a relatively complete dataset for our
            subsequent time-series prediction model.
          </p>

          <p>
            During training, we applied random masks to the continuous sequence
            image data to serve as the model's input. The original continuous
            sequence images were then used as labels to guide the model in
            calculating the loss. After training on date sequences with a length
            of 127, the model acquired the capability to reconstruct heavily
            corrupted image data into more complete data that reflects
            fundamental spatial features.
          </p>

          <p>
            The architecture of the UNet model follows a typical U-shaped
            design, achieving high efficiency in learning the intrinsic spatial
            distribution patterns of chlorophyll-a concentration maps. It
            predicts values beneath cloud layers in a manner consistent with
            natural laws, thereby accomplishing the goal of image restoration
            and mitigating the impact of clouds.
          </p>

          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <img
              src={getImageUrl("model1", "2_UNet_model_sturcture_gap_filling")}
              alt="UNet model structure designed for gap filling"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              Figure 2: UNet model structure designed for gap filling
            </p>
          </div>

          <p>
            The core of the UNet model is implemented through an Encoder-Decoder
            architecture. The encoder progressively extracts deep spatial
            features of the image via a series of convolution and max-pooling
            operations. The decoder then gradually restores these features into
            a high-resolution reconstructed image through up-sampling and
            concatenation operations.
          </p>

          <p>
            Our training objective is to minimize the discrepancy between the
            model's reconstructed image and the original cloud-free image. We
            adopt the L1 loss function (also known as the MAE) to quantify this
            difference. For each pixel in the image, the loss function is
            defined as follows:
          </p>

          <MathFormula formula="\mathcal{L}_{L1} = \frac{1}{H \times W \times C} \sum_{i=1}^{H} \sum_{j=1}^{W} \sum_{k=1}^{C} |Y_{(i,j,k)} - \hat{Y}_{(i,j,k)}|" />

          <p>Where:</p>
          <ul>
            <li>
              <MathFormula formula="Y" inline /> is the original cloud-free
              ground truth image
            </li>
            <li>
              <MathFormula formula="\hat{Y}" inline /> is the reconstructed
              image output by the UNet model
            </li>
            <li>
              <MathFormula formula="H, W, C" inline /> denote the height, width,
              and number of channels of the image, respectively
            </li>
          </ul>

          <p>
            This loss function effectively drives the model to learn and
            generate images that align with the distribution of the real data.
          </p>

          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <img
              src={getImageUrl("model1", "3_Original_Daily_Overview_JAXA")}
              alt="Original Daily Overview of JAXA (September)"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              Figure 3: Original Daily Overview of JAXA (September)
            </p>
          </div>

          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <img
              src={getImageUrl("model1", "4_Fixed_Version_Daily_Overview_JAXA")}
              alt="Fixed Version of Daily Overview JAXA (September)"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              Figure 4: Fixed Version of Daily Overview JAXA (September)
            </p>
          </div>

          <p>
            Figure 3 displays the original JAXA data images from September,
            while Figure 4 presents the data sequence reconstructed using our
            UNet model. Through comparison, it is evident that the model's
            reconstruction performance is highly effective, capable of restoring
            complete spatial features even in regions with large-scale data
            gaps.
          </p>
        </div>

        <div id="phase-two-convlstm">
          <h3>
            Phase Two: Training a Temporally Predictive Model: ConvLSTM Based on
            an Encoder-Decoder Architecture
          </h3>

          <div id="model-architecture">
            <h4>Model Architecture</h4>

            <p>
              <strong>Encoder:</strong> Composed of two stacked ConvLSTM
              blocks—Encoder1 and Encoder2—its task is to "observe" and process
              the input historical image sequence. It reads the images frame by
              frame, continuously updating its internal hidden states. After the
              last frame of the historical sequence is input, the final hidden
              state of the encoder becomes a highly condensed "memory vector,"
              which encapsulates the spatiotemporal dynamics of the entire
              historical sequence.
            </p>

            <p>
              <strong>Decoder:</strong> Consisting of Decoder1 and Decoder2, it
              takes the final "memory vector" output by the encoder as its
              initial input and begins making predictions. Instead of generating
              all results at once, it operates iteratively, producing each
              future frame step by step.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "30px 0",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
                <img
                  src={getImageUrl("model1", "5_General_Structure_ConvLSTM")}
                  alt="General Structure of ConvLSTM"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginTop: "10px",
                  }}
                >
                  Figure 5: General Structure of ConvLSTM
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "30px 0",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "250px", textAlign: "center" }}>
                <img
                  src={getImageUrl("model1", "6_Transforming_2D_3D_tensor")}
                  alt="Transforming 2D image into 3D tensor"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginTop: "10px",
                  }}
                >
                  Figure 6: Transforming 2D image into 3D tensor
                </p>
              </div>
              <div style={{ flex: 1, minWidth: "250px", textAlign: "center" }}>
                <img
                  src={getImageUrl("model1", "7_Inner_structure_ConvLSTM")}
                  alt="Inner structure of ConvLSTM"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginTop: "10px",
                  }}
                >
                  Figure 7: Inner structure of ConvLSTM
                </p>
              </div>
            </div>

            <h4>Spatial Understanding Through Convolution</h4>
            <p>
              Similar to a standard UNet structure, the "Conv" (convolutional
              layers) components in our model act as its eyes. For each daily
              image, these layers scan and extract spatial features—such as
              sharp coastal edges, the complex textures of algal blooms, and the
              distinct shapes of high-concentration regions. This capability
              forms the foundation for our model to process and generate
              high-resolution, detailed images.
            </p>

            <h4>Mathematical Core: The ConvLSTM Cell</h4>
            <p>
              The key innovation of the ConvLSTM lies in its unique cell
              structure. While a traditional LSTM processes one-dimensional
              vectors, the ConvLSTM replaces the internal matrix multiplications
              with convolution operations, enabling it to directly handle
              three-dimensional tensors like images (height × width × channels).
              Its core state transition equations are as follows:
            </p>

            <MathFormula formula="i_t = \sigma(W_{xi} * \chi_t + W_{hi} * \mathcal{H}_{t-1} + W_{ci} \odot \mathcal{C}_{t-1} + b_i)" />
            <MathFormula formula="f_t = \sigma(W_{xf} * \chi_t + W_{hf} * \mathcal{H}_{t-1} + W_{cf} \odot \mathcal{C}_{t-1} + b_f)" />
            <MathFormula formula="\mathcal{C}_t = f_t \odot \mathcal{C}_{t-1} + i_t \odot \tanh(W_{xc} * \chi_t + W_{hc} * \mathcal{H}_{t-1} + b_c)" />
            <MathFormula formula="o_t = \sigma(W_{xo} * \chi_t + W_{ho} * \mathcal{H}_{t-1} + W_{co} \odot \mathcal{C}_t + b_o)" />
            <MathFormula formula="\mathcal{H}_t = o_t \odot \tanh(\mathcal{C}_t)" />

            <p>Where:</p>
            <ul>
              <li>
                <MathFormula formula="\chi_t" inline /> is the input image
                tensor at time step t
              </li>
              <li>
                <MathFormula formula="\mathcal{H}_t" inline /> and{" "}
                <MathFormula formula="\mathcal{C}_t" inline /> represent the
                hidden state and cell state at time step t, respectively. Both
                are tensors of image size, preserving spatial information
              </li>
              <li>
                <MathFormula formula="i_t, f_t, o_t" inline /> denote the input
                gate, forget gate, and output gate, respectively
              </li>
              <li>
                <MathFormula formula="W" inline /> and{" "}
                <MathFormula formula="b" inline /> are the learnable
                convolutional kernels and bias terms
              </li>
              <li>
                <MathFormula formula="*" inline /> denotes the convolution
                operation, and
                <MathFormula formula="\odot" inline /> represents the Hadamard
                product (element-wise multiplication)
              </li>
              <li>
                <MathFormula formula="\sigma" inline /> is the Sigmoid
                activation function, and
                <MathFormula formula="\tanh" inline /> is the hyperbolic tangent
                activation function
              </li>
            </ul>

            <h4>Temporal Sequence Understanding via LSTM</h4>
            <p>
              This is the core of the model's intelligence. While a standard
              U-Net would treat five days of historical data as a single thick
              image without grasping their sequential order, the Long Short-Term
              Memory (LSTM) component in our model acts like a brain with
              memory. It processes the 5-day input sequence day by day,
              retaining memories of what was "seen" on previous days and
              comparing them with the current input.
            </p>

            <h4>Image Reconstruction via Encoder-Decoder Architecture</h4>
            <p>
              The model is built on an encoder-decoder framework, similar to the
              UNet. The encoder compresses spatiotemporal information to
              comprehend the "essence" of algal bloom evolution, while the
              decoder reconstructs this understanding into a full-resolution
              predictive map of the future. Crucially, skip connections act as
              an "information highway," directly transmitting fine-grained
              details from the input—such as coastlines and subtle textures—to
              the final output layers. This prevents the loss of details during
              compression and ensures that our final predictions are as sharp
              and detailed as the input.
            </p>

            <h4>Key Training Parameters and Loss Weight Definition</h4>
            <p>
              During multiple experiments, we observed that the model
              consistently exhibited a tendency to predict a declining trend in
              sea surface chlorophyll-a concentration (the exact reason remains
              unclear). To address this bias, we intentionally adjusted the loss
              function by implementing an asymmetric loss. Specifically, when
              the model under-predicts, we assign a higher penalty coefficient
              to encourage more balanced predictions between increasing and
              decreasing concentration trends.
            </p>

            <MathFormula formula="\mathcal{L}_{\text{asymm}}(Y, \hat{Y}) = \frac{1}{N} \sum_{i=1}^{N} w_i \cdot |Y_i - \hat{Y}_i|" />

            <p>
              Where the weight <MathFormula formula="w_i" inline /> is defined
              as:
            </p>

            <MathFormula formula="w_i = \begin{cases} p & \text{if } \hat{Y}_i < Y_i \quad \text{(under-prediction)} \\ 1 & \text{if } \hat{Y}_i \ge Y_i \quad \text{(over-prediction or correct)} \end{cases}" />

            <ul>
              <li>
                <MathFormula formula="Y_i" inline /> and{" "}
                <MathFormula formula="\hat{Y}_i" inline /> represent the true
                value and predicted value of the i-th pixel, respectively
              </li>
              <li>
                <MathFormula formula="p" inline /> represents
                underprediction_penalty, a hyperparameter greater than 1 (e.g.,
                defaulting to 1.0 in our code but adjustable to apply penalty)
              </li>
              <li>
                <MathFormula formula="N" inline /> is the total number of pixels
              </li>
            </ul>

            <h4>Training Parameters Overview</h4>
            <ul>
              <li>
                <strong>Model Input:</strong> Sequence of 5 consecutive days of
                our high-resolution, cloud-free images
              </li>
              <li>
                <strong>Model Output:</strong> A sequence of high-resolution,
                cloud-free predicted images for the next 3 days
              </li>
              <li>
                <strong>Model Training:</strong> The model was trained for over
                200 epochs on our custom-built dataset spanning multiple months.
                The training utilized an L1 loss combined with a custom
                asymmetric adjustment term to mitigate prediction bias,
                alongside a learning rate scheduler to ensure optimal
                performance.
              </li>
            </ul>
          </div>

          <div id="training-results">
            <h4>Training Results</h4>
            <p>
              Through experimentation, the model produces relatively
              high-resolution, cloud-free forecasts that intuitively display the
              movement and concentration changes of algal blooms over a
              three-day period. While it cannot perfectly predict complex
              spatial patterns and precise concentration variations, testing
              results demonstrate that the model correctly identifies the
              general direction of concentration increase. This capability
              provides valuable support for subsequent prevention and early
              warning efforts.
            </p>

            <p>Below is an example of a single prediction output:</p>

            <div style={{ textAlign: "center", margin: "30px 0" }}>
              <img
                src={getImageUrl("model1", "8_Prediction_ConvLSTM_UNet")}
                alt="Prediction Of ConvLSTM UNet Model"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
              <p
                style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}
              >
                Figure 8: Prediction Of ConvLSTM UNet Model
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "30px 0",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "400px" }}>
                <ImageSequenceViewer
                  imagePaths={[
                    getImageUrl("model1", "10_1"),
                    getImageUrl("model1", "10_2"),
                    getImageUrl("model1", "10_3"),
                    getImageUrl("model1", "10_4"),
                  ]}
                  title="Figure 9: Groundtruth Animation"
                  height="400px"
                  interval={1500}
                  autoPlay={true}
                />
              </div>
              <div style={{ flex: 1, minWidth: "400px" }}>
                <ImageSequenceViewer
                  imagePaths={[
                    getImageUrl("model1", "9_1"),
                    getImageUrl("model1", "9_2"),
                    getImageUrl("model1", "9_3"),
                    getImageUrl("model1", "9_4"),
                  ]}
                  title="Figure 10: Prediction Animation"
                  height="400px"
                  interval={1500}
                  autoPlay={true}
                />
              </div>
            </div>

            <p>Some other test cases with less accuracy than above:</p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "30px 0",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "250px", textAlign: "center" }}>
                <img
                  src={getImageUrl("model1", "11_a")}
                  alt="Other test cases with less accuracy - Case A"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginTop: "10px",
                  }}
                >
                  Figure 11a: Other test cases with varying accuracy
                </p>
              </div>
              <div style={{ flex: 1, minWidth: "250px", textAlign: "center" }}>
                <img
                  src={getImageUrl("model1", "11_b")}
                  alt="Other test cases with less accuracy - Case B"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginTop: "10px",
                  }}
                >
                  Figure 11b: Additional test cases with varying accuracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="water-quality-prediction">
        <h2>Water Quality Parameter Prediction</h2>
        <hr className="heading-divider" />

        <div id="seasonal-variation">
          <h3>Seasonal Variation in Chlorophyll-a Concentration</h3>
          <p>
            The seasonal variation in Chlorophyll-a concentration was analyzed
            by aggregating data into 10-day bins across the calendar year and
            fitting a sinusoidal model to the resulting mean values.
            Mathematically, this sinusoidal model takes the form:
          </p>

          <MathFormula formula="y(x) = A \sin\left(\frac{2\pi x}{365} + \phi\right) + C" />

          <p>
            where <MathFormula formula="A" inline /> represents the amplitude of
            seasonal fluctuation, <MathFormula formula="\phi" inline /> is the
            phase shift (in radians), and <MathFormula formula="C" inline />{" "}
            denotes the vertical offset capturing the annual mean level. This
            functional form assumes a smooth, periodic response to seasonal
            forcing, which is a reasonable approximation for phytoplankton
            dynamics driven by solar radiation and temperature.
          </p>

          <p>
            The fitted curve revealed an amplitude of{" "}
            <MathFormula formula="A = -2.846" inline />, indicating a
            peak-to-trough variation of approximately 5.7 μg/L in Chlorophyll-a
            concentrations over the year. The negative sign of the amplitude
            simply reflects the orientation of the sinusoid and does not affect
            the physical interpretation of magnitude. The estimated phase shift{" "}
            <MathFormula formula="\phi = 1.15 \, \text{rad}" inline /> suggests
            that the peak concentration occurs around early July (approximately
            Day 182), consistent with empirical peaks observed in the raw data.
            The offset value{" "}
            <MathFormula formula="C = 4.582 \, \mu\text{g/L}" inline />{" "}
            represents the baseline chlorophyll concentration averaged across
            the year.
          </p>

          <p>
            Ecologically, the observed seasonal peak in Chlorophyll-a
            corresponds to summer phytoplankton blooms, which are promoted by
            favorable thermal stratification, increased solar irradiance, and
            nutrient recycling. The alignment of the sinusoidal fit with
            empirical peaks supports the hypothesis that red tide risk—closely
            linked to Chlorophyll-a as a proxy for algal biomass—is seasonally
            modulated and likely to intensify in mid-summer. This seasonal
            component provides a foundational basis for incorporating temporal
            predictors into red tide forecasting models.
          </p>

          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <img
              src={getImageUrl("model2", "12_")}
              alt="Seasonal variation in Chlorophyll-a concentration"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              Figure 12: Seasonal variation in Chlorophyll-a concentration
            </p>
          </div>
        </div>

        <div id="environmental-drivers">
          <h3>Environmental Driver of Chlorophyll-a Concentration</h3>
          <p>
            To identify the environmental drivers of Chlorophyll-a
            concentration, we trained an XGBoost regression model and applied
            SHAP (SHapley Additive exPlanations) to interpret the model's
            output. SHAP provides a mathematically grounded method for
            explaining complex, non-linear models by decomposing the prediction{" "}
            <MathFormula formula="f(x)" inline /> for a given sample into the
            sum of a baseline and individual feature contributions:
          </p>

          <MathFormula formula="f(x) = \phi_0 + \sum_{i=1}^M \phi_i" />

          <p>
            Here, <MathFormula formula="\phi_0" inline /> is the expected model
            output (the mean prediction across all samples), and{" "}
            <MathFormula formula="\phi_i" inline /> is the SHAP value of feature{" "}
            <MathFormula formula="i" inline />, representing its marginal
            contribution to the prediction. These values are computed by
            averaging over all possible permutations of feature inputs, ensuring
            fairness based on cooperative game theory.
          </p>

          <p>
            In our results, the mean absolute SHAP values reveal that salinity
            had the highest average impact on the model, followed by silica,
            orthophosphate phosphorus, and nitrite nitrogen. The beeswarm plot
            further shows that high values of these variables (in red) tend to
            increase predicted Chlorophyll-a, consistent with ecological
            understanding: high salinity may promote stratification and light
            availability, while elevated silica and phosphate support diatom and
            general algal productivity. The SHAP framework thus not only ranks
            features by importance but also provides a rigorous additive
            decomposition that connects model predictions to mechanistic
            environmental drivers of phytoplankton biomass.
          </p>

          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <img
              src={getImageUrl("model2", "13_")}
              alt="SHAP feature importance for environmental drivers"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              Figure 13: SHAP feature importance for environmental drivers
            </p>
          </div>

          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <img
              src={getImageUrl("model2", "14_")}
              alt="SHAP beeswarm plot showing feature contributions"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              Figure 14: SHAP beeswarm plot showing feature contributions
            </p>
          </div>
        </div>

        <div id="distribution-analysis">
          <h3>Chlorophyll-a Distribution Along Key Environmental Axes</h3>
          <p>
            To further explore the environmental conditions underpinning red
            tide events, we plotted Chlorophyll-a concentrations against four
            key variables: temperature, salinity, dissolved oxygen, and the
            nitrogen-to-phosphorus (N:P) ratio. These scatterplots reveal that
            red tide samples (highlighted in red) are non-randomly distributed
            and tend to cluster within specific environmental ranges. For
            instance, high Chlorophyll-a values primarily occur at temperatures
            above 26 °C, suggesting that thermal conditions play a facilitating
            role in bloom development, likely by enhancing metabolic rates and
            stratification. Red tide cases also tend to appear at lower salinity
            levels (&lt;30 psu), consistent with the influence of freshwater
            inflow or estuarine mixing zones where stratification can trap
            nutrients in surface layers. Dissolved oxygen during red tides shows
            a wide spread but is generally elevated, possibly due to active
            photosynthesis before eventual oxygen depletion in later bloom
            stages.
          </p>

          <p>
            The N:P ratio, a widely used ecological indicator of nutrient
            balance, provides deeper insight into nutrient limitation dynamics.
            According to the Redfield ratio (N:P = 16:1 molar), deviations from
            this benchmark suggest potential limitations that favor certain
            phytoplankton. In our dataset, red tide samples are mostly clustered
            at N:P ratios below ~30 (mass-based), indicating either phosphorus
            sufficiency or relative nitrogen excess. A lower N:P may create
            conditions where fast-growing or opportunistic species, including
            harmful algae, outcompete others. This observation aligns with the
            hypothesis that nutrient imbalance, not just absolute nutrient
            levels, can modulate bloom composition and severity. From a modeling
            standpoint, this suggests the inclusion of N:P ratio as a composite
            feature may capture second-order effects not evident in
            single-nutrient regressions. The scatterplots thus provide not only
            visual evidence of threshold effects but also ecological
            justification for incorporating nutrient stoichiometry into red tide
            prediction models.
          </p>

          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <img
              src={getImageUrl("model2", "15_")}
              alt="Chlorophyll-a distribution along key environmental axes"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              Figure 15: Chlorophyll-a distribution along key environmental axes
            </p>
          </div>

          <h4>Red Tide Thresholds and Predictive Modeling</h4>
          <p>
            To define red tide events in a statistically and ecologically sound
            manner, we examined the distribution of Chlorophyll-a
            concentrations, a proxy for algal biomass. The data showed a highly
            right-skewed pattern, with most values below 10 μg/L and a long tail
            of high concentrations. After comparing several thresholds—including
            the 95th percentile, IQR rule (
            <MathFormula formula="Q3 + 1.5 \times \text{IQR}" inline />
            ), and z-score cutoff (
            <MathFormula formula="\mu + 2\sigma" inline />
            )—we selected the 90th percentile (12.00 μg/L) as the red tide
            threshold. This strikes a balance between sensitivity and
            specificity, labeling 8.9% of samples as red tide events and
            providing a robust basis for classification.
          </p>

          <p>
            To identify key predictors, we fit a logistic regression model using
            standardized environmental variables. Statistically significant
            predictors (p &lt; 0.05) included silica, temperature, dissolved
            oxygen, salinity, orthophosphate phosphorus, and total nitrogen. For
            example, silica and orthophosphate phosphorus showed negative
            coefficients (ORs ≈ 0.28), indicating that higher concentrations of
            these nutrients were associated with reduced odds of red tide
            events—possibly reflecting nutrient depletion following bloom onset
            or species-specific nutrient preferences. Conversely, total nitrogen
            and temperature exhibited positive coefficients, suggesting that
            warm, nitrogen-rich waters increase bloom likelihood.
          </p>

          <p>
            The model assumes a linear relationship between predictors and the
            log-odds of red tide:
          </p>

          <MathFormula formula="\log \left( \frac{p}{1 - p} \right) = \beta_0 + \sum_i \beta_i x_i" />

          <p>
            where <MathFormula formula="p" inline /> is the red tide probability
            and <MathFormula formula="x_i" inline /> are standardized variables.
            These findings align with SHAP-based feature importance, reinforcing
            the roles of temperature, salinity, and nutrients in shaping bloom
            dynamics.
          </p>

          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <img
              src={getImageUrl("model2", "table1")}
              alt="Logistic regression results for red tide prediction"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              Table 1: Logistic regression results for red tide prediction
            </p>
          </div>
        </div>
      </section>

      <section id="protein-solubility-analysis">
        <h2>Protein Solubility Analysis</h2>
        <hr className="heading-divider" />

        <div id="motivation-background">
          <h3>Motivation and Background</h3>
          <p>
            Our iGEM project relies on the successful production of functional
            proteins including yonE and sfp. However, protein expression and
            purification are often plagued by low solubility and aggregation,
            leading to weeks of frustrating trial-and-error experiments. To
            address this challenge, our Dry Lab team developed a computational
            model that predicts our protein's solubility under different lab
            conditions. This isn't just a theoretical exercise, our model
            provides relatively specific and actionable recommendations for the
            Wet Lab, helping them choose appropriate buffers, salt
            concentrations, and temperatures from the very start. By simulating
            experiments on a computer first, we save valuable time, reduce
            waste, and significantly increase our project's chances of success.
          </p>
        </div>

        <div id="strategy-tool">
          <h3>Our Strategy: Building a "Dry Lab" Predictive Tool</h3>
          <p>
            To build our predictive tool, we chose an approach that went back to
            basics. Instead of a "black box" machine learning model, we built
            our tool from the ground up using fundamental biophysical
            principles, allowing us to understand why the protein behaves the
            way it does. Our model calculates a final "solubility score" by
            multiplying several key factors together, ensuring that if any one
            factor is bad, the whole score drops—just like in a real experiment!
            We carefully modeled the most critical factors influencing
            solubility. This included calculating the protein's surface charge
            at every pH to find its "danger zone" around the isoelectric point
            (pI) modeling the two-faced nature of salt, which helps at low
            concentrations ("salting in") but hinders at high concentrations
            ("salting out"), and accounting for temperature stability,
            programming the model to know that proteins have an optimal
            temperature and will unfold if it gets too hot. We also added
            features to test special conditions including the stabilizing effect
            of cofactors such as Zinc ions.
          </p>

          <p>
            We carefully modeled the most critical factors influencing
            solubility:
          </p>

          <ul>
            <li>
              <strong>Surface Charge (The pH Effect):</strong> Using the
              calculate_net_charge function, we applied the
              Henderson-Hasselbalch equation to calculate the protein's net
              charge at different pH values based on the pKa of each ionizable
              amino acid. This helped us precisely identify the "danger zone"
              around its isoelectric point (pI).
            </li>
            <li>
              <strong>The Salt Effect ("Salting In & Out"):</strong> We
              simulated the dual role of salt using the f_salting_in and
              f_salting_out factors. At low concentrations, salt ions help
              dissolve the protein; at high concentrations, they lead to
              aggregation.
            </li>
            <li>
              <strong>Temperature Stability:</strong> In the
              calculate_temperature_effect function, we combined a Gaussian
              distribution to model the optimal temperature with a sharp
              exponential decay above the denaturation temperature, reflecting
              the protein's irreversible denaturation.
            </li>
            <li>
              <strong>Special Conditions:</strong> We even incorporated
              additional features, such as the calculate_metal_binding function,
              to test the potential positive impact of cofactors (like zinc
              ions) on protein stability.
            </li>
          </ul>
        </div>

        <div id="actionable-insights">
          <h3>Actionable Insights: A New Strategy to Boost Yield</h3>
          <p>
            The true power of our model lies in its ability to translate complex
            biophysical simulations into a clear set of actionable
            recommendations for our Wet Lab team. It provides a new, systematic
            approach to solving the protein yield and activity problem. The
            primary output is a "feasibility map" for pH and salt conditions,
            visualized as a heatmap. This map immediately highlights the "danger
            zones" (white and light-blue areas) where our protein is predicted
            to precipitate out of solution. From this, our first and most
            critical recommendation emerged: avoid using buffers with a pH
            between 5.0 and 6.5 at all costs, as this is the protein's predicted
            isoelectric point.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              margin: "30px 0",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl("YonE", "interactive_solubility_heatmap")}
                title="yonE Interactive Solubility Heatmap"
                height="400px"
              />
            </div>
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl("SFP", "interactive_solubility_heatmap")}
                title="sfp Interactive Solubility Heatmap"
                height="400px"
              />
            </div>
          </div>

          <p>
            Further line plots that magnify the pH effect confirmed the results
            from the heatmap, providing more detailed trend for the solubility
            of certain proteins.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              margin: "30px 0",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl("YonE", "solubility_vs_ph_lines")}
                title="yonE Solubility vs pH Lines"
                height="350px"
              />
            </div>
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl("SFP", "solubility_vs_ph_lines")}
                title="sfp Solubility vs pH Lines"
                height="350px"
              />
            </div>
          </div>

          <p>
            Similarly, we analyzed the effect of salt concentration. Our results
            show that in our studied range of salt concentration, the solubility
            rises as the salt concentration increase, but this result maybe
            inaccurate due to limited parameters of the model. This led us to
            recommend using 150-200 mM salt concentration for long-term storage
            and to be cautious with high-salt elution buffers.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              margin: "30px 0",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl("YonE", "solubility_vs_salt_lines")}
                title="yonE Solubility vs Salt Lines"
                height="350px"
              />
            </div>
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl("SFP", "solubility_vs_salt_lines")}
                title="sfp Solubility vs Salt Lines"
                height="350px"
              />
            </div>
          </div>

          <p>
            Next, our model provided a clear warning about temperature
            stability, showing a sharp drop in solubility after 65°C. This
            emphasizes the necessity of performing all purification steps on ice
            or in a cold room.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              margin: "30px 0",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl("YonE", "solubility_vs_temperature")}
                title="yonE Solubility vs Temperature"
                height="350px"
              />
            </div>
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl("SFP", "solubility_vs_temperature")}
                title="sfp Solubility vs Temperature"
                height="350px"
              />
            </div>
          </div>

          <p>
            Finally, as a potential optimization step, our model indicated that
            adding a small amount of zinc could provide a helpful boost to
            stability, giving the Wet Lab a clear path for further improvements
            if needed.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              margin: "30px 0",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl(
                  "YonE",
                  "solubility_with_vs_without_metal"
                )}
                title="yonE Solubility with vs without Metal"
                height="350px"
              />
            </div>
            <div style={{ flex: 1, minWidth: "400px" }}>
              <InteractiveChart
                htmlPath={getChartUrl(
                  "SFP",
                  "solubility_with_vs_without_metal"
                )}
                title="sfp Solubility with vs without Metal"
                height="350px"
              />
            </div>
          </div>
        </div>

        <div id="conclusion">
          <h3>
            Conclusion: A Novel Solution for Protein Characterization and
            Production
          </h3>
          <p>
            Our predictive solubility model offers a novel solution to the
            pervasive challenge of low protein yield, especially for
            under-researched proteins. It moves beyond simple optimization and
            provides a foundational, systematic strategy for both
            characterization and production. By first gaining a deep
            understanding of our protein's fundamental biophysical properties,
            we have developed a clear plan to maximize its soluble expression,
            directly providing a new solution to our project's core bottleneck.
            Our work serves as a powerful example of how targeted modeling can
            provide innovative solutions and accelerate the study of novel
            proteins in synthetic biology.
          </p>
        </div>
      </section>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
