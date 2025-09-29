import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import OptimizedImage from "../components/OptimizedImage";
import ImagePreloader from "../components/ImagePreloader";
import ScrollToTop from "../components/ScrollToTop";
import { criticalImages, secondaryImages } from "../utils/imageOptimization";
import "../components/OptimizedImage.css";

// 定义侧边栏链接
const sidebarLinks = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "iteration",
    title: "Iteration",
    subsections: [
      { id: "initial-design", title: "Initial Design" },
      { id: "iterated-design", title: "Iterated Design" },
    ],
  },
  {
    id: "hardware-introduction",
    title: "Hardware Introduction",
    subsections: [
      { id: "sensor-group", title: "Sensor Group" },
      { id: "transmission-module", title: "Long-distance Transmission Module" },
      { id: "microbial-culture", title: "Microbial Culture Module" },
      { id: "power-management", title: "Power Management Module" },
    ],
  },
  {
    id: "integrate-modeling-work",
    title: "Integrate Modeling Work",
    subsections: [
      { id: "modeling-integration", title: "Modeling Integration" },
    ],
  },
  {
    id: "for-demonstration",
    title: "For Demonstration",
    subsections: [
      { id: "custom-housing", title: "Custom Housing" },
      { id: "usability-features", title: "Usability Features" },
      { id: "visual-appeal", title: "Visual Appeal" },
    ],
  },
  {
    id: "in-the-future",
    title: "In the Future",
    subsections: [
      { id: "automated-cultivation", title: "Automated Cultivation" },
      { id: "pump-module", title: "Pump and L9110 Module" },
      { id: "biosafety-control", title: "WS2812 Light Strip - Biosafety" },
    ],
  },
];

// 定义组件
export function Hardware() {
  return (
    <ProjectPageLayout title="Hardware" sidebarLinks={sidebarLinks}>
      {/* 预加载关键图片 */}
      <ImagePreloader
        images={criticalImages}
        onAllLoaded={() => console.log("Critical images preloaded")}
      />
      {/* 延迟加载次要图片 */}
      <ImagePreloader
        images={secondaryImages}
        onAllLoaded={() => console.log("Secondary images preloaded")}
      />
      <section id="overview">
        <h2>Overview</h2>
        <hr className="heading-divider" />
        <p>
          Hardware has connected the innovative achievements of the model group
          with those of the wetlab group, leading to the creation of a
          functional prototype of the entire system. We also designed and
          manufactured user-friendly demonstration equipment, which includes a
          sensor group, a long-distance transmission module, a microbial culture
          module, and a power management module.
        </p>
        <p>
          This device is capable of measuring key seawater
          parameters—temperature, turbidity, dissolved oxygen, and pH—and
          transmitting the data via the long-distance communication module to a
          PC. On the PC, a machine learning model developed in our Model work is
          executed to predict chlorophyll levels. The prediction result is then
          sent back to the device through the same path. Based on the predicted
          value, the device controls the release of Surfactin C14—prepared in
          the Wetlab work and stored in the equipment—to monitor and mitigate
          red tide events.
        </p>

        <div className="image-gallery" style={{ margin: "30px 0" }}>
          <div
            className="image-row"
            style={{ display: "flex", gap: "20px", marginBottom: "20px" }}
          >
            <div className="image-item" style={{ flex: 1 }}>
              <OptimizedImage
                src="/sustechocean/static/hardware/1_rendering.png"
                alt="Figure 1: Rendering"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                loading="eager"
              />
              <p
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontWeight: "500",
                  color: "#666",
                }}
              >
                Figure 1: Rendering
              </p>
            </div>
            <div className="image-item" style={{ flex: 1 }}>
              <img
                src="/sustechocean/static/hardware/2_Hardware_Schematic_Diagram.jpeg"
                alt="Figure 2: Hardware Schematic Diagram"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontWeight: "500",
                  color: "#666",
                }}
              >
                Figure 2: Hardware Schematic Diagram
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="iteration">
        <h2>Iteration</h2>
        <hr className="heading-divider" />
        <p>
          During the initial phase of development, we used low-fidelity sketches
          for rapid conceptualization and iteration.
        </p>

        <div id="initial-design">
          <h3>Initial Design — Complete Device Concept</h3>
          <p>
            The early design envisioned an integrated system comprising a sensor
            group, a B. subtilis chamber, a controller, a power module, and an
            engine cabin, enabling the device to position itself and navigate in
            the ocean. This functionality allows for continuous monitoring of a
            designated sea area and timely response to emergency situations.
          </p>
          <div
            className="image-container"
            style={{ margin: "20px 0", textAlign: "center" }}
          >
            <img
              src="/sustechocean/static/hardware/3_Initial_design.jpeg"
              alt="Figure 3: Initial design"
              style={{
                maxWidth: "80%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <p style={{ marginTop: "10px", fontWeight: "500", color: "#666" }}>
              Figure 3: Initial design
            </p>
          </div>
        </div>

        <div id="iterated-design">
          <h3>Iterated Design — Into the Real World</h3>
          <p>
            Through further research, we aimed to base our hardware work on an
            existing red tide control equipment—unmanned surface vessels
            (USVs)—by adding new modules or functions. This approach allows
            better integration with current technologies and reduces unnecessary
            hardware development effort. As a result, we removed the engine
            cabin, reconceptualizing the entire device as a functional module
            that can be mounted on a USV.
          </p>
          <p>
            Considering the challenges of automated bacterial cultivation in the
            marine environment, our device is pre-loaded with a
            laboratory-prepared Surfactin solution and enables controlled,
            quantitative release of the solution.
          </p>
          <div
            className="image-container"
            style={{ margin: "20px 0", textAlign: "center" }}
          >
            <img
              src="/sustechocean/static/hardware/4_Iterated_design.jpeg"
              alt="Figure 4: Iterated design"
              style={{
                maxWidth: "80%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <p style={{ marginTop: "10px", fontWeight: "500", color: "#666" }}>
              Figure 4: Iterated design
            </p>
          </div>
        </div>
      </section>

      <section id="hardware-introduction">
        <h2>Hardware Introduction</h2>
        <hr className="heading-divider" />

        {/* Sensor Group */}
        <div id="sensor-group">
          <h3>2.1 Sensor Group</h3>
          <div style={{ marginBottom: "30px" }}>
            <h4>Sensor Introduction</h4>
            <p>
              The monitoring system designed by us includes four key sensors:
              temperature, pH, turbidity, and dissolved oxygen sensors. Each
              sensor is carefully selected for its accuracy, reliability, and
              suitability for integration into a comprehensive water quality
              analysis platform. Together, they provide essential data for
              real-time monitoring and predictive modeling of water conditions,
              particularly in the context of red tide early warning.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "20px",
              padding: "20px 0",
              scrollbarWidth: "thin",
            }}
          >
            {/* Temperature Sensor */}
            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/5_Temperature_Sensor_Module.jpeg"
                alt="Temperature Sensor Module"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 5: The Temperature Sensor Module
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Temperature Sensor (DS18B20)
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                The temperature sensor model is DS18B20, a commonly used digital
                temperature sensor featuring small size, strong
                anti-interference capability, and high accuracy. It supports a
                wide temperature range from -55 °C to +125 °C with an accuracy
                of ±0.5 °C. At its core, it is a high-precision semiconductor
                temperature sensor that senses temperature by measuring the
                frequency change of the internal oscillator.
              </p>
            </div>

            {/* pH Sensor */}
            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/6_The_pH_Electrode_Sensor_Module.jpeg"
                alt="pH Electrode Sensor Module"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 6: The pH Electrode & The Sensor Module
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>pH Sensor</h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                We selected a pH sensor module that is easy to use, offers high
                measurement accuracy, and can directly output an analog voltage.
                The core circuit of this module mainly amplifies the weak
                millivolt signal output by the electrode and shifts the bipolar
                signal to a unipolar signal. The pH sensor has a measurement
                range of 0–14 pH and an accuracy of ±0.01 pH at 20 °C.
              </p>
            </div>

            {/* Turbidity Sensor */}
            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/7_The_Turbidity_Sensor_1.jpeg"
                alt="Turbidity Sensor"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 7: The Turbidity Sensor
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Turbidity Sensor (TSW-30)
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                The turbidity sensor model is TSW-30, which works based on
                optical principles. It determines turbidity by evaluating both
                the transmittance and scattering of light in the solution.
                Inside the sensor is an infrared diode pair. When light passes
                through a certain amount of water, the amount of transmitted
                light depends on the water's turbidity.
              </p>
            </div>

            {/* Dissolved Oxygen Sensor */}
            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/8_The_Dissolved_Oxygen_Electrode_Transmitter_Module.jpeg"
                alt="Dissolved Oxygen Sensor Module"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 8: The Dissolved Oxygen Electrode & The Transmitter
                Module
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Dissolved Oxygen Sensor (DOLE6211)
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                The dissolved oxygen sensor model is DOLE6211. It features good
                repeatability, short response time, strong anti-interference
                capability, low residual current, and does not require replacing
                the permeable membrane or electrolyte. It has a measurement
                range of 0–20 mg/L and an accuracy of 0.01 mg/L.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <h4>Reason for Choosing These Four Sensors</h4>
            <p>
              There are two reasons for selecting these four types of sensors.
              Firstly, the values measured by the pH sensor, turbidity sensor,
              and dissolved oxygen sensor must all be corrected based on the
              measured temperature. Furthermore, our modeling is built upon
              these four parameters to simulate the environment, estimate the
              chlorophyll content in the water, and thus predict whether there
              are signs of a red tide outbreak.
            </p>
          </div>
        </div>

        {/* Long-distance Transmission Module */}
        <div id="transmission-module">
          <h3>2.2 Long-distance Transmission Module</h3>
          <div style={{ marginBottom: "20px" }}>
            <h4>Signal Transmission Module</h4>
            <p>
              For our project's long-distance communication needs, we chose the
              APC220 radio communication module after considering alternatives
              like LoRa and the HC-12. Standard options such as Wi-Fi and
              Bluetooth were unsuitable due to their limited range and power
              consumption.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "20px",
              padding: "20px 0",
              scrollbarWidth: "thin",
            }}
          >
            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/9_APC_220-to-PC.jpeg"
                alt="APC 220-to-PC"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 9: APC 220-to-PC
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Module Selection and Rationale
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                The key advantage of the APC220 is its direct PC integration.
                Unlike other modules that require a bridging microcontroller,
                the APC220 connects to a computer's USB port via a simple
                USB-to-TTL converter. This design streamlines the hardware at
                the receiving end, making the overall system simpler and more
                cost-effective.
              </p>
            </div>

            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/10_APC_220-to-Arduino_UNO.jpeg"
                alt="APC 220-to-Arduino UNO"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 10: APC 220-to-Arduino UNO
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Working Principle
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                The APC220 operates as a transparent wireless serial port,
                effectively creating a "virtual wire" for data. It uses the UART
                protocol for communication and GFSK modulation for wireless
                transmission. Data sent to one module's TX pin is automatically
                packaged and wirelessly sent.
              </p>
            </div>
          </div>
        </div>

        {/* Microbial Culture Module */}
        <div id="microbial-culture">
          <h3>2.3 Microbial Culture Module</h3>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "20px",
              padding: "20px 0",
              scrollbarWidth: "thin",
            }}
          >
            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/11_Solenoid_Valve.jpeg"
                alt="Solenoid Valve and Flow Meter"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 11: Solenoid Valve and Flow Meter
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Solenoid Valve and Flow Meter
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                A 12V normally closed solenoid valve and a YF-S401 flow meter
                are used. The solenoid valve is controlled by high/low level
                signals. The flow meter has a measurement range of 0.3–6 L/min
                and is connected to an external interrupt pin of the Arduino Uno
                to calculate the amount of Surfactin solution released by the
                device.
              </p>
            </div>

            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/12_Acrylic_liquid_container.jpeg"
                alt="Acrylic liquid container"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 12: Acrylic liquid container
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Acrylic Liquid Container
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                The acrylic liquid container is used to store the Surfactin
                solution. It is designed to be transparent for easy monitoring
                of the liquid level and is made from durable acrylic material
                suitable for marine environments.
              </p>
            </div>
          </div>
        </div>

        {/* Power Management Module */}
        <div id="power-management">
          <h3>2.4 Power Management Module</h3>
          <p style={{ marginBottom: "20px" }}>
            The Power Management Module is the central power hub for our system.
            Its core function is to efficiently convert power from a single 24V
            battery to the different voltage levels required by the system's
            components, and to safely control high-power devices.
          </p>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "20px",
              padding: "20px 0",
              scrollbarWidth: "thin",
            }}
          >
            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/13_24V_Lithium_Battery.jpeg"
                alt="24V Lithium Battery"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 13a: 24V Lithium Battery
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                24V Lithium Battery
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                This is the primary power source, selected for its high capacity
                and reliability, making it ideal for sustained, off-grid
                operation.
              </p>
            </div>

            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/sustechocean/static/hardware/13_12V_Relay.jpeg"
                alt="12V Relay Module"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 13b: 1-Channel 12V Relay Module
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                1-Channel 12V Relay Module
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                The relay functions as an electrically isolated switch. It
                enables the low-power microcontroller to control high-power
                devices, such as a 12V water pump, without direct electrical
                contact. This protects the control electronics from potentially
                damaging high currents.
              </p>
            </div>

            <div
              style={{
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                  fontSize: "0.9rem",
                }}
              >
                DC-DC Buck Converters
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Figure 13c: DC-DC Buck Converters
              </p>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                DC-DC Buck Converters
              </h4>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}
              >
                These crucial components step down the 24V from the battery to a
                stable 5V. This 5V supply is used to power the main
                microcontroller and all the sensitive water quality sensors.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <p>
              In summary, this module uses a single high-capacity battery to
              safely and efficiently power a multi-voltage system.
            </p>
          </div>
        </div>

        {/* Circuit Diagram */}
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <h3>2.5 Circuit Diagram</h3>
          <p style={{ fontStyle: "italic", color: "#666" }}>
            (To be added later)
          </p>
        </div>
      </section>

      <section id="integrate-modeling-work">
        <h2>3. Integrate Modeling Work</h2>
        <hr className="heading-divider" />
        <div id="modeling-integration">
          <h3>Modeling Integration</h3>
          <p>(Real videos, images and text descriptions will be added later)</p>
        </div>
      </section>

      <section id="for-demonstration">
        <h2>4. For Demonstration</h2>
        <hr className="heading-divider" />

        <div id="custom-housing">
          <h3>Custom Housing</h3>
          <p>
            Building upon the functional prototype, we designed a customized
            housing using SolidWorks and manufactured it via 3D printing to
            improve portability and presentation.
          </p>
        </div>

        <div id="usability-features">
          <h3>Usability Features</h3>
          <p>
            To enhance usability, a magnetic access panel was integrated for
            easy battery replacement, and the bacterial culturing module was
            equipped with a transparent, flip-open surface for convenient
            observation and operation.
          </p>
        </div>

        <div id="visual-appeal">
          <h3>Visual Appeal</h3>
          <p>
            For visual appeal, different sections of the enclosure received
            distinct surface finishes. A 0.96-inch display was also incorporated
            to show predicted chlorophyll values in an intuitive dial format.
          </p>
        </div>
      </section>

      <section id="in-the-future">
        <h2>5. In the Future</h2>
        <hr className="heading-divider" />

        <div id="automated-cultivation">
          <h3>Automated Cultivation</h3>
          <p>
            We are exploring methods to enable the device to perform automated
            bacterial cultivation, allowing surfactin to be produced on-demand
            without the need for regular reloading of the surfactant solution,
            thereby significantly enhancing the level of automation.
          </p>
          <p>
            The figure below shows our preliminary design, along with component
            selection recommendations and their justifications. In addition, we
            have listed the required components and the corresponding circuit
            diagrams. Interested developers are welcome to refer to or directly
            use these resources.
          </p>

          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src="/sustechocean/static/hardware/14_ Future_prospect.jpeg"
              alt="Future prospect"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <p
              style={{ fontStyle: "italic", marginTop: "10px", color: "#666" }}
            >
              Figure 14: Future prospect
            </p>
          </div>
        </div>

        <div id="pump-module">
          <h3>Pump and L9110 Module</h3>
          <p>
            A horizontal water pump is used to introduce seawater into the
            bacterial culture chamber, operating at 3–5V. The L9110 driver
            module, compatible with a voltage range of 2.5–12V, is employed to
            control the pump.
          </p>

          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src="/sustechocean/static/hardware/15_Pump_and_L9110_module.jpeg"
              alt="Pump and L9110 module"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <p
              style={{ fontStyle: "italic", marginTop: "10px", color: "#666" }}
            >
              Figure 15: Pump and L9110 module
            </p>
          </div>
        </div>

        <div id="biosafety-control">
          <h3>WS2812 Light Strip - Biosafety</h3>
          <p>
            For biosafety considerations, and since the engineered bacteria
            cannot independently sense and respond to changing marine conditions
            to regulate surfactin gene expression, our hardware device employs
            optical signals for precise control: blue light induces expression,
            while red light suppresses it.
          </p>

          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src="/sustechocean/static/hardware/16_WS2812_light_strip.jpeg"
              alt="WS2812 light strip"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <p
              style={{ fontStyle: "italic", marginTop: "10px", color: "#666" }}
            >
              Figure 16: WS2812 light strip
            </p>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
