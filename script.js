// Category codes double as filter-tab values; badges are derived from them
// below so a card's badge always matches the filter tabs it appears under.
const categoryLabels = {
  academic: 'Academic',
  hbrs: 'HBRS',
  dfki: 'DFKI',
  stegen: 'Stegen',
  festo: 'Festo',
};

// Tool/tag links (DFKI software tools that aren't widely known).
const MARS_URL = 'https://robotik.dfki-bremen.de/en/research/softwaretools/mars';
const BOLERO_URL = 'https://robotik.dfki-bremen.de/en/research/softwaretools/bolero';
const BAGEL_URL = 'https://robotik.dfki-bremen.de/de/forschung/softwaretools/bagel';

const projects = [
  // ── Thesis ──────────────────────────────────────────────────────────────
  {
    id: 'thesis',
    category: ['hbrs', 'dfki', 'academic'],
    duration: 'May 2025 – Dec 2025',
    location: 'Bremen, Germany',
    icon: '🦿',
    title: 'Adaptive Motion Control of Legged Robots via Predictive Force Modeling',
    shortDesc: 'LSTM-based force prediction with a phase-aware PID controller for adaptive foot placement on uneven terrain.',
    fullDesc: [
      '<strong>Abstract:</strong> Legged robots are well-suited for navigating complex and uneven terrains, but maintaining stable locomotion in such environments remains a critical challenge. Vision-based systems like cameras and LiDAR often face issues such as noise, occlusion, and latency, which can lead to misinterpretation of terrain and instability during movement. Drawing inspiration from human tactile feedback while walking, this project explores the use of force-based feedback to improve adaptability in legged robots. It introduces a control strategy that combines a force prediction model with real-time feedback to dynamically adjust foot placement. By anticipating expected force patterns and detecting deviations in real time, the system aims to enhance stability without relying heavily on visual perception.',
      '<strong>Approach:</strong> An <strong>LSTM force-prediction model</strong> learns the expected leg forces from a rolling window of past force and desired foot-position signals. A <strong>phase-aware PID controller</strong> compares predicted vs. measured forces and applies corrective foot offsets, only during the right stance/swing phase to avoid inter-leg interference. Trained and validated in <strong>MARS simulation</strong> across terrain inclinations, then deployed on the real <strong>CREX six-legged robot</strong>.',
      { img: 'assets/011_thesis/system_architecture.png', caption: 'AdaptiveLegController architecture: the LSTM force prediction feeds the phase-aware PID, which applies per-leg foot-placement offsets.' },
      '<strong>Results:</strong> The adaptive controller significantly reduced body tilt and recovered faster from unexpected foot-contact forces. The obstacle-traversal experiments make the difference clear: without control the body tilts sharply; with control it stays stable.',
      { video: 'https://drive.google.com/file/d/18mPS2sS9o2-IUT-KFhnDsfM2HCAWQFJR/preview', ratio: '1868/1066', caption: 'Simulation: live force plots and control offsets during an obstacle traversal, showing the controller correcting foot placement in real time.' },
      { img: 'assets/011_thesis/body_orientation_comparison.png', caption: 'Body orientation across an obstacle traversal (orange: no adaptive control, green: with adaptive control, blue: baseline with no obstacle).' },
      { video: 'https://drive.google.com/file/d/1pbXB6qHVTHuQH08Qq8qOgqq7_5LJ8mvn/preview', ratio: '6120/1560', caption: 'Real six-legged robot (CREX), side-by-side: without adaptive control (left) vs with adaptive control (right), an obstacle introduced mid-walk.' },
    ],
    images: ['assets/011_thesis/thumbnail.png'],
    tags: ['Python', 'C++', 'TensorFlow', 'ONNX', { label: 'MARS', url: MARS_URL }, 'PyQt5'],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1yFGM4T35UzVHh3ak8GYPqcuE9I-uvyPh/view' },
      { label: 'Presentation', url: 'https://docs.google.com/presentation/d/1QqHGz9MVVNbB1X-my14RSOwZVX3n03y5BX4vyzJlOMc/edit' },
      { label: 'CREX Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/crex' },
    ],
  },

  // ── R&D ─────────────────────────────────────────────────────────────────
  {
    id: 'rnd',
    category: ['hbrs', 'dfki', 'academic'],
    duration: 'Jun 2023 – Jan 2024',
    location: 'Bremen, Germany',
    icon: '🧬',
    title: 'Black-Box Optimization of the Ground Interaction Model for Legged Robots',
    shortDesc: 'Evolutionary optimization of a NeuralSoil ground interaction model using only robot trajectory similarity (no terrain measurements).',
    fullDesc: [
      '<strong>Abstract:</strong> Mobile robots, particularly legged ones, are invaluable tools for navigating challenging terrains. The complexity of the interaction between the legs and the ground results in significant disparities between simulations and real-world execution, thereby impacting overall performance. The utilization of simulators is crucial for the development of legged robots, not only for safety reasons but also to ensure a robust and realistic recreation of physical properties. Accurately modeling ground interaction in the simulation remains a challenge. Conventional ground interaction models require an in-depth understanding of the terrain properties. While these models excel in predictable environments where the terrain\'s physical properties are known, they struggle in situations with inherently unpredictable terrains. Neural network-based models provide a promising alternative, as they can learn complex relationships without detailed terrain knowledge. However, acquiring the necessary labeled data for training poses a significant challenge. This project introduces a novel approach, exploring the possibility of optimizing a neural network-based ground interaction model by comparing robot trajectories, circumventing the need for extensive terrain data. The implementation of this approach involves the development of an evaluation function and a learning architecture to optimize the ground interaction model. This approach demonstrates its potential to reduce the simulation-to-simulation gap and enhance the robot\'s stability and adaptability, marking a substantial advancement in the legged robot\'s performance.',
      '<strong>Approach:</strong> A ground-truth trajectory is taken from a target simulation (or the real robot). The ground-interaction model is designed as a neural network, where its inputs are the depth and load at each leg and its outputs are the contact parameters (the ODE error-reduction (ERP) and constraint-force-mixing (CFM) values, plus the friction coefficient). The node weights of this model are randomly initialized and then optimized so that the trajectory produced in simulation with the model matches the ground-truth trajectory; the <strong>trajectory similarity</strong> between the two (DTW or Curve Length) is the fitness value driving the optimizer. Optimization uses <strong>Particle Swarm Optimization (PSO)</strong> via BOLeRo, evaluated across multiple gait configurations: tripod, four-legged, and five-legged walking.',
      { img: 'assets/012_rnd/bolero_architecture.png', caption: 'BOLeRo optimization loop: the evolutionary optimizer tunes NeuralSoil weights, scoring each candidate by how closely its trajectory matches the ground truth.' },
      '<strong>Results:</strong> The optimization converged across all gait configurations, with the optimized model producing trajectories that closely matched the ground truth. <strong>DTW</strong> proved a more effective fitness metric than Curve Length. Overall, the results validate that the ground-interaction parameters can be recovered purely from trajectory comparison, without any terrain measurements or labeled data.',
      { video: 'https://drive.google.com/file/d/1uzv3M4PKGhx8iW876SAfrR0CKvg7S0rT/preview', ratio: '1600/1080', caption: 'Before optimization, ground truth (top) vs the unoptimized model (bottom): the legs interact with the terrain differently.' },
      { video: 'https://drive.google.com/file/d/1jZ2zVI1l9qCyc1nHvq8YMKWEjPysuTwE/preview', ratio: '1600/1080', caption: 'After optimization, ground truth (top) vs the optimized model (bottom): the trajectories closely match.' },
      { img: 'assets/012_rnd/positional_error_comparison.png', caption: 'Positional error across gait configurations and fitness metrics, before vs after optimization.' },
    ],
    images: ['assets/012_rnd/thumbnail.png'],
    tags: ['Python', 'C++', 'PSO', 'CMA-ES', { label: 'MARS', url: MARS_URL }, { label: 'BOLeRo', url: BOLERO_URL }, { label: 'Bagel', url: BAGEL_URL }],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1A-c0LXvLBCRzy3RhI7E-0RtdxnZAHhBF/view' },
      { label: 'Presentation', url: 'https://docs.google.com/presentation/d/1HkocqDiPhmA3u18srROdfiQwLdKUqOco-iSeopUUfHc/edit' },
      { label: 'CREX Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/crex' },
    ],
  },

  // ── DFKI ─────────────────────────────────────────────────────────────────
  {
    id: 'fieldcobots',
    category: ['dfki'],
    duration: 'May 2025 – Present',
    location: 'Bremen, Germany',
    icon: '🤖',
    title: 'FieldCoBots: LLM Agents for Human-Robot Coordination',
    shortDesc: 'LangGraph-based tool-calling agents embedded in an agricultural robot for natural language task coordination.',
    fullDesc: [
      '<strong>Project Goal:</strong> FieldCoBots builds a coordination system for a hybrid team of humans and robots working together in a strawberry field, making it easy to assign and coordinate tasks across the many agents (human workers and autonomous picking and transport robots), supported by a digital field infrastructure.',
      { img: 'assets/021_dfki_fieldcobots/infographic.png', caption: 'FieldCoBots concept: coordinated human-robot team with digital field management and shared task blackboard' },
      '<strong>My Contribution:</strong> Responsible for <strong>LLM integration</strong> within the project\'s human-robot coordination system. Developed two <strong>LangGraph tool-calling agents</strong>: one embedded in the robot (<strong>SHIVAA</strong>) that interprets natural language instructions and triggers robot actions (gripper control, operation modes) via tool calls; another that interfaces with the shared <strong>task blackboard</strong>, converting natural language requests into structured task entries and asking for missing information when needed. Designed the codebase modularly so subagents are reusable across both agents. Started with local LLMs, then switched to the <strong>OpenAI API</strong> after local models proved too slow for the required responsiveness.',
      { img: 'assets/021_dfki_fieldcobots/llm_agent_ui.png', caption: 'LLM Blackboard Agent UI: voice/text conversation with the tool-calling agent, live tool-call trace, and blackboard connection status' },
    ],
    images: ['assets/021_dfki_fieldcobots/thumbnail.png'],
    tags: ['LangGraph', 'LangChain', 'OpenAI API', 'Python', 'Voice I/O'],
    links: [
      { label: 'FieldCoBots Project', url: 'https://robotik.dfki-bremen.de/de/forschung/projekte/fieldcobots' },
      { label: 'SHIVAA Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/shivaa' },
    ],
  },
  {
    id: 'nostrandamust',
    category: ['dfki'],
    duration: 'Aug 2023 – Apr 2025',
    location: 'Bremen, Germany',
    icon: '🌍',
    title: 'NoStrandAMust: Terrain Classification via Probing Behaviors',
    shortDesc: 'Designed probing behaviors and used parameter optimizers to maximize terrain discriminability across soil, gravel, and concrete.',
    fullDesc: [
      '<strong>Project Goal:</strong> NoStrandAMust experimentally investigates how different robots interact with the ground and builds AI-based models of that interaction. Integrated into simulation, these models increase the autonomy, safety, and efficiency of mobile robots by letting them adapt their path planning and locomotion to varying soil conditions.',
      '<strong>My Contribution:</strong> Contributed to designing <strong>probing behaviors</strong> for both wheeled and legged robots: a probing behavior is an action the robot performs to produce a distinct, terrain-dependent signal that is then used to classify the terrain. The parameters of this action are what get optimized (for example, wheel braking factor for wheeled robots, or leg penetration depth for legged robots). Using the <strong>CMA-ES</strong> optimizer, ran parallel simulations across different terrains (with varying soil and contact properties) to find the parameter set that most separates them. Also supported the software development, ran experiments on the real robot, and collected and processed the experiment data (resolving issues in the logs) for dataset preparation, and is credited on the published dataset.',
      { video: 'https://drive.google.com/file/d/10Vd0QuVeDhTWV7VudAQNanF0xvqdRcMP/preview', ratio: '1864/1170', caption: 'Parallel simulation of the ARTEMIS robot across multiple terrains with varying properties, one episode of the optimizer running all simulations together' },
    ],
    images: ['assets/022_dfki_nostrand/thumbnail.jpg'],
    tags: ['Python', 'Parameter Optimization', 'Terrain Classification', 'Simulation'],
    links: [
      { label: 'NoStrandAMust Project', url: 'https://robotik.dfki-bremen.de/de/forschung/projekte/nostrandamust' },
      { label: 'Dataset (Zenodo)', url: 'https://doi.org/10.5281/zenodo.15277294' },
      { label: 'ARTEMIS Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/artemis' },
      { label: 'CREX Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/crex' },
    ],
  },
  {
    id: 'persim',
    category: ['dfki'],
    duration: 'Oct 2022 – Jul 2023',
    location: 'Bremen, Germany',
    icon: '📊',
    title: 'PerSim: Iterative Simulation-to-Real Validation with SOGPR',
    shortDesc: 'SOGPR-based active learning loop to efficiently validate simulation behavior maps on a real robot with minimal evaluations.',
    fullDesc: [
      '<strong>Project Goal:</strong> PerSim develops software that builds a virtual, highly realistic representation of a robot\'s environment from sensor data, improving autonomous navigation and material and resource identification for space robots operating on the Moon and Mars.',
      '<strong>My Contribution:</strong> A simulation-generated behavior map provides, across a large space of parameter sets, an estimated performance for each. Because these estimates cannot be trusted directly on the real robot, and evaluating every parameter set on hardware is infeasible, they need to be validated efficiently on the robot. Designed an iterative validation workflow using <strong>SOGPR</strong> (Sparse Online Gaussian Process Regression) as an <strong>active learner</strong>: at each step it selects the parameter set with highest uncertainty, evaluates it on the robot, measures the actual performance, and updates the confidence model, propagating confidence to neighboring points in the parameter space. Evaluation runs via a <strong>behavior-tree loop</strong>: the robot traverses three waypoints (A→B→C), switching the active parameter set at each waypoint by selectively restarting <strong>ROCK middleware</strong> components (no full robot restart required).',
      { video: 'https://drive.google.com/file/d/1lRrSGs5BvbSA3-68xxps6PwyCwhVqp43/preview', ratio: '2496/1354', caption: 'Simulation of the robot navigating through the evaluation waypoints in sequence, one parameter set active per segment' },
    ],
    images: ['assets/023_dfki_persim/thumbnail.jpg'],
    tags: ['Python', 'SOGPR', 'Gaussian Process', 'BehaviorTree.CPP', 'ROCK', { label: 'MARS', url: MARS_URL }],
    links: [
      { label: 'PerSim Project', url: 'https://robotik.dfki-bremen.de/de/forschung/projekte/persim' },
      { label: 'ASGUARD IV Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/asguard-iv' },
    ],
  },
  {
    id: 'robdekon',
    category: ['dfki'],
    duration: 'Apr 2022 – Sep 2022',
    location: 'Bremen, Germany',
    icon: '🦾',
    title: 'ROBDEKON: Behavior Trees for Hazardous Environment Robotics',
    shortDesc: 'Wrapped ROS nodes as behavior tree nodes and built navigation and arm control subtrees for a decontamination robot.',
    fullDesc: [
      '<strong>Project Goal:</strong> ROBDEKON develops autonomous and semi-autonomous robot systems for decontamination and decommissioning in hazardous environments, enabling close human-robot cooperation through both on-site collaboration and remote teleoperation.',
      '<strong>My Contribution:</strong> Wrapped ROS nodes as <strong>BehaviorTree.CPP nodes</strong> and built complete subtrees for <strong>ARTER</strong>, an excavator robot with a robot arm: a navigation subtree (path planning node + path execution node) and an arm subtree (<strong>MoveIt</strong> trajectory planning + execution). The resulting nodes hide the ROS stack; missions are composed by connecting nodes in the <strong>BT GUI</strong>, with per-node success/failure visible at runtime. Also set up <strong>Gazebo</strong> simulation environments for development and testing.',
      { img: 'assets/024_dfki_robdekon/behavior_tree.png', caption: 'Mission behavior tree: main sequence dispatches guarded tasks via the Task subtree, which falls back to planning and execution through PlanExec' },
    ],
    images: ['assets/024_dfki_robdekon/thumbnail.jpg'],
    tags: ['ROS', 'BehaviorTree.CPP', 'MoveIt', 'C++', 'Python', 'Gazebo'],
    links: [
      { label: 'ROBDEKON Project', url: 'https://robotik.dfki-bremen.de/de/forschung/projekte/robdekon' },
      { label: 'ARTER Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/arter' },
    ],
  },
  {
    id: 'corobx',
    category: ['dfki'],
    duration: 'Nov 2021 – Mar 2022',
    location: 'Bremen, Germany',
    icon: '🪐',
    title: 'CoRob-X: State Machine for Planetary Exploration Robot',
    shortDesc: 'Implemented a mission state machine for a rappelling robot descending into a crater skylight in a multi-robot planetary mission.',
    fullDesc: [
      '<strong>Project Goal:</strong> CoRob-X designs and demonstrates an Advanced Robotic Exploration System that lets cooperative multi-robot teams reach hard-to-access planetary areas, advancing locomotion, perception, and autonomous decision-making to explore environments such as lunar lava tubes that a single robot cannot reach efficiently.',
      '<strong>My Contribution:</strong> Implemented a state machine for the rappelling robot (Coyote III) covering all mission phases (approaching the crater, transition to rappel mode, active descent, reaching the ground), each with phase-specific configurations such as reduced descent speed. Also assisted with simulation setup and testing.',
      { img: 'assets/025_dfki_corobx/state_machine.png', caption: 'Mission state machine for the rappelling robot, sequencing the phases from approaching the crater through to reaching the ground' },
      { video: 'https://drive.google.com/file/d/1IE-43-MvhJJk9w-EfEGsqIy6N98p86tk/preview', ratio: '1562/944', caption: 'Simulation: Coyote III tethered descent into crater skylight, executing the mission state machine phases' },
    ],
    images: ['assets/025_dfki_corobx/thumbnail.jpg'],
    tags: ['ROS', 'Python', 'State Machine', 'Simulation', 'ROCK'],
    links: [
      { label: 'CoRob-X Project', url: 'https://robotik.dfki-bremen.de/en/research/projects/corob-x' },
      { label: 'SherpaTT Robot', url: 'https://robotik.dfki-bremen.de/en/research/robot-systems/sherpatt' },
      { label: 'Coyote III Robot', url: 'https://robotik.dfki-bremen.de/en/research/robot-systems/coyote-iii' },
    ],
  },

  // ── Stegen ───────────────────────────────────────────────────────────────
  {
    id: 'stegen',
    category: ['stegen'],
    duration: 'Apr 2026 – Present',
    location: 'Bremen, Germany',
    icon: '✈️',
    title: 'UAV Software Development',
    shortDesc: 'Motion tracking, geofencing, and a simulation-based safety monitor for a drone platform at a robotics startup.',
    fullDesc: [
      'Developing software components for a UAV platform, running on the drone\'s onboard Raspberry Pi on top of its existing flight controller. Implemented a <strong>Vicon-based motion capture system</strong> for precise indoor tracking of the drone, and developed <strong>geofencing</strong> to enforce operational boundaries. Currently building a <strong>simulation / digital twin</strong> (Gazebo with ArduPilot SITL) to validate flight scripts before deploying them to the real drone.',
      { video: 'https://drive.google.com/file/d/1PENmI7xMuvOrq8H5OyLg0Osvz5LW5-fj/preview', ratio: '1920/1080', caption: 'Gazebo + ArduPilot SITL simulation: waypoint navigation script arming and flying the drone within the RViz geofence, alongside the satellite map view' },
    ],
    images: ['assets/031_uav_stegen/thumbnail.png'],
    tags: ['Python', 'ROS2', 'MAVROS', 'Raspberry Pi', 'Vicon', 'Gazebo', 'OpenSCAD', 'Simulation'],
    links: [],
  },

  // ── Festo ────────────────────────────────────────────────────────────────
  {
    id: 'festo',
    category: ['festo'],
    duration: 'Jan 2019 – Mar 2019',
    location: 'Bangalore, India',
    icon: '⚙️',
    title: 'Converting the DXF file to G-Codes in CODESYS',
    shortDesc: 'PLC software module with an HMI that converts DXF files into G-code tool paths for automated execution on a three-axis Cartesian robot.',
    fullDesc: [
      'During an internship at Festo, developed a PLC software module in <strong>CODESYS (Structured Text)</strong> that converts a <strong>DXF</strong> design file into <strong>G-code</strong> tool paths for a three-axis Cartesian robot. The module reads a DXF file from a USB or SD card connected to the PLC, converts its geometry into G-codes, and stores the generated G-code on the PLC for execution. An accompanying <strong>HMI</strong> lets an operator load the file, trigger execution, and monitor the end-effector position in real time on the running system.',
      { video: 'https://drive.google.com/file/d/1OuBqCLsnA2asx56dQH-sYA42_RHz9PFG/preview', caption: 'Demo: DXF-to-G-code execution on the three-axis Cartesian robot' },
    ],
    images: ['assets/032_festo_internship/thumbnail.jpg'],
    tags: ['CODESYS', 'Structured Text (ST)', 'PLC', 'HMI', 'G-code'],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1g-Yob4OHI7EHkVE982foIIkbo5Sf4vwP/view' },
    ],
  },

  // ── Academic ──────────────────────────────────────────────────────────────
  {
    id: 'spore',
    category: ['hbrs', 'academic'],
    duration: 'Oct 2021 – Jan 2022',
    location: 'Bonn, Germany',
    icon: '🔬',
    title: 'Spore Recognition in Microscopic Digital Images',
    shortDesc: 'Two-stage pipeline using blob detection for localization and a CNN for four-class microbial classification.',
    fullDesc: [
      '<strong>Problem:</strong> A coursework project to automate the recognition of spores in microscopic digital images, classifying each into one of four classes (single-spore and agglomerate forms of Chaetomium and Stachybotrys), from a provided labeled dataset. The main challenge is that the images are not clean: alongside the spores, they contain a lot of dirt particles (background objects), which makes reliable detection difficult.',
      { img: 'assets/041_spore_recognition/background_objects.jpg', caption: 'A microscopic image: spores appear alongside many dirt particles (background objects) that the pipeline has to ignore' },
      '<strong>Approach:</strong> A two-stage pipeline. In <strong>spore detection</strong>, each image is pre-processed with <strong>Otsu thresholding</strong> and binary inversion, then spores are located with the <strong>Determinant of Hessian</strong> blob detector (chosen over Laplacian and Difference of Gaussian for capturing both single spores and larger agglomerates), with blob-size limits to filter out dirt particles and a bounding region cropped around each spore. In <strong>spore identification</strong>, the cropped spores are binarized and padded to a common size, then classified into the four classes by a <strong>CNN</strong>, which also counts the spores in each class.',
      { img: 'assets/041_spore_recognition/blob_detection.jpg', caption: 'Determinant of Hessian (DoH) blob detection: localizing candidate spore regions in the microscope image' },
      { img: 'assets/041_spore_recognition/cropped_padded_spores.jpg', caption: 'Detected regions cropped, binarized, and padded before classification, shown for two different microbial spore types' },
      '<strong>Conclusion:</strong> The CNN classifier reached about 89% accuracy across the four classes, with most confusion between the two agglomerate types due to their similar shape. The main limitation was in detection: blob detection captured most spores but also picked up dirt particles of similar size, inflating the count. The report outlines improvements such as stronger preprocessing or training the dirt particles as a separate class.',
    ],
    images: ['assets/041_spore_recognition/thumbnail.jpg'],
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Blob Detection', 'CNN'],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1vTfAOxfWjRQL2lwwcMnqC1RH8FA-zOAc/view' },
    ],
  },
  {
    id: 'trajectory-gui',
    category: ['hbrs', 'academic'],
    duration: 'May 2021 – Aug 2021',
    location: 'Bonn, Germany',
    icon: '📍',
    title: 'GUI for Trajectory Benchmarking with Indoor GPS',
    shortDesc: 'Desktop tool for tracking, visualizing, and comparing mobile robot trajectories using indoor GPS beacons.',
    fullDesc: [
      '<strong>Requirement:</strong> Record the trajectory of a mobile platform and evaluate its repeatability in executing a path. Indoor GPS beacons provide the position data; the task was to build a tool that receives this data and handles trajectory recording, waypoint capture, and run-to-run comparison to support the benchmarking.',
      '<strong>Solution:</strong> Built a <strong>PyQt5</strong> desktop application (Python) that reads live position data from a <strong>Marvelmind indoor GPS</strong> mobile beacon over a serial link. It is organized into tabs: a live position view, Set Origin to define a custom reference frame, Waypoint Record to capture discrete points, Trajectory Record to continuously log the full path, and Compare to overlay multiple runs and compute the difference between corresponding waypoints for repeatability.',
      { img: 'assets/042_gui_benchmarking/trajectory.png', caption: 'Trajectory Record tab: live visualization of the robot path as GPS data streams in' },
      { img: 'assets/042_gui_benchmarking/compare.png', caption: 'Compare tab: overlay of multiple recorded runs for repeatability evaluation' },
    ],
    images: ['assets/042_gui_benchmarking/waypoint.png'],
    tags: ['Python', 'PyQt5', 'Indoor GPS'],
    links: [
      { label: 'Repository', url: 'https://github.com/Kabilan-T/GUI_for_Trajectory_Benchmarking_with_Indoor_GPS' },
    ],
  },
  /*
  {
    id: 'sentiment',
    category: ['hbrs', 'academic'],
    icon: '💬',
    title: 'Tweet Sentiment Analysis',
    shortDesc: 'LSTM models with Word2Vec and FastText embeddings for topic-based tweet sentiment classification.',
    fullDesc: [
      '<strong>Problem:</strong> Understanding public sentiment on a specific topic requires collecting and classifying a large number of tweets, a time-consuming task if done manually.',
      '<strong>Approach:</strong> Built a pipeline that fetches tweets via the Twitter API, preprocesses text (tokenization, normalization), and classifies sentiment using LSTM models trained with Word2Vec and FastText embeddings.',
      '<strong>Conclusion:</strong> Achieved competitive sentiment classification accuracy across topic-based tweet datasets, with FastText embeddings outperforming Word2Vec on short, informal text.',
    ],
    images: [],
    tags: ['Python', 'Keras', 'NLTK', 'Gensim', 'Tweepy', 'Word2Vec', 'FastText'],
    links: [
      { label: 'Presentation', url: 'https://drive.google.com/file/d/14lK7ob9VuOvDR203nMSL8E0Ou7xkpO8R/view' },
    ],
  },
  */
  {
    id: 'snake-robot',
    category: ['academic'],
    duration: 'Jun 2018 – Nov 2018',
    location: 'Erode, India',
    icon: '🐍',
    title: 'Snake Robot for Rescue Operations',
    shortDesc: 'Modular snake robot with inchworm and sidewinding motions, Bluetooth controlled with a camera and gripper for confined-space navigation.',
    fullDesc: [
      'A six-segment snake robot, programmed through an embedded <strong>Arduino</strong> system, with a Bluetooth module (HC-05) for sending movement commands from a mobile phone and a camera and gripper for remote vision and manipulation in confined-space rescue scenarios. The body segments can be rearranged into two configurations, each producing a different type of locomotion: <strong>inchworm</strong>, where an arch travels along the body to push it through tight gaps, and <strong>sidewinding</strong>, where alternating segments drive the body sideways. Both configurations were built and tested.',
      { video: 'https://drive.google.com/file/d/1DlqQKp5wM7AEHyRcJIS1NxDxvsJ48NR1/preview', ratio: '1920/1080', caption: 'Demo: inchworm and sidewinding locomotion modes, Bluetooth-controlled with camera and gripper' },
    ],
    images: ['assets/043_snake_robot/thumbnail.png'],
    tags: ['Arduino', 'C/C++', 'Embedded Systems', 'Bluetooth', 'Mechanical Design'],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1DmEJvWWk7uycOyEG1CIUGfLFL3zUOKaM/view' },
    ],
  },

  // ── Personal ──────────────────────────────────────────────────────────────
  {
    id: 'discord-bots',
    category: [],
    icon: '🎮',
    title: 'Discord Bots',
    shortDesc: 'Collection of Python bots for a personal Discord server with custom features, external API integrations, and LLM tools.',
    fullDesc: [
      'A fun personal project: a set of custom Discord bots I built for a small private server I run with friends. There are several bots, each named after a character and handling its own features, such as web scraping, LLM chat, and text-to-speech in voice chats. Rather than using off-the-shelf bots, I wrote my own to fit whatever we needed, and I still add new features whenever an idea comes up.',
    ],
    images: ['assets/051_discord_bots/thumbnail.png'],
    tags: ['Python', 'Discord.py', 'APIs', 'LLM Integration'],
    links: [
      { label: 'Repository', url: 'https://github.com/Kabilan-T/discord_bots' },
    ],
  },
];

projects.forEach(p => {
  p.badge = p.category.map(c => categoryLabels[c]).join(' · ');
});

// A tag is either a plain string or { label, url } for tools worth linking.
const renderTag = t => typeof t === 'string'
  ? `<span class="tag">${t}</span>`
  : `<a class="tag tag-link" href="${t.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${t.label}</a>`;

// ── Render Cards ─────────────────────────────────────────────────────────────
// Divider labels shown (in "All" view only) right after the given project id,
// naming the group of cards that follows.
const groupDividers = {
  rnd: 'DFKI Research Contributions',
  corobx: 'Other Professional Projects',
  festo: 'Other Academic Projects',
  'snake-robot': 'Personal Projects',
};

function renderCards() {
  const grid = document.getElementById('project-grid');
  grid.innerHTML = '';

  const firstDivider = document.createElement('div');
  firstDivider.className = 'group-divider';
  firstDivider.innerHTML = `<span class="group-divider-label">Master's Projects</span>`;
  grid.appendChild(firstDivider);

  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = p.category.join(' ');

    const thumb = p.images.length > 0
      ? `<img class="card-thumb" src="${p.images[0]}" alt="${p.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" /><div class="card-thumb-placeholder" style="display:none">${p.icon}</div>`
      : `<div class="card-thumb-placeholder">${p.icon}</div>`;

    const badgeHtml = p.badge ? `<span class="card-badge">${p.badge}</span>` : '';
    const metaHtml = (p.duration || p.location)
      ? `<div class="card-meta">${[p.duration, p.location].filter(Boolean).join(' · ')}</div>`
      : '';

    card.innerHTML = `
      ${thumb}
      <div class="card-body">
        ${badgeHtml}
        ${metaHtml}
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.shortDesc}</div>
        <div class="card-tags">${p.tags.slice(0, 4).map(renderTag).join('')}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);

    if (groupDividers[p.id]) {
      const divider = document.createElement('div');
      divider.className = 'group-divider';
      divider.innerHTML = `<span class="group-divider-label">${groupDividers[p.id]}</span>`;
      grid.appendChild(divider);
    }
  });
}

// ── Filter ────────────────────────────────────────────────────────────────────
function initFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.card').forEach(card => {
        const categories = card.dataset.category.split(' ');
        card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
      });
      document.querySelectorAll('.group-divider').forEach(divider => {
        divider.classList.toggle('hidden', filter !== 'all');
      });
    });
  });
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function openModal(p) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  const links = p.links.length > 0
    ? `<div class="modal-section-label">Links</div><div class="modal-links">${p.links.map(l => `<a class="modal-link-btn" href="${l.url}" target="_blank">↗ ${l.label}</a>`).join('')}</div>`
    : '';

  const descHtml = p.fullDesc.map(item => {
    if (typeof item === 'string') return `<p>${item}</p>`;
    if (item.video) return `<figure class="modal-inline-video"><iframe src="${item.video}" style="aspect-ratio:${item.ratio || '1360/696'}" allow="autoplay" allowfullscreen></iframe>${item.caption ? `<figcaption>${item.caption}</figcaption>` : ''}</figure>`;
    return `<figure class="modal-inline-img"><img src="${item.img}" alt="${item.caption || ''}" />${item.caption ? `<figcaption>${item.caption}</figcaption>` : ''}</figure>`;
  }).join('');

  const badgeHtml = p.badge ? `<span class="modal-badge">${p.badge}</span>` : '';
  const metaHtml = (p.duration || p.location)
    ? `<div class="modal-meta">${[p.duration, p.location].filter(Boolean).join(' · ')}</div>`
    : '';

  content.innerHTML = `
    ${badgeHtml}
    ${metaHtml}
    <div class="modal-title">${p.title}</div>
    <div class="modal-section-label">Stack</div>
    <div class="modal-tags">${p.tags.map(renderTag).join('')}</div>
    ${links}
    <div class="modal-section-label">About</div>
    <div class="modal-desc">${descHtml}</div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ── Init ──────────────────────────────────────────────────────────────────────
renderCards();
initFilter();
initModal();
