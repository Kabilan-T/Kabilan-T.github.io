const projects = [
  // ── Thesis ──────────────────────────────────────────────────────────────
  {
    id: 'thesis',
    category: 'hbrs',
    badge: 'HBRS · DFKI',
    icon: '🦿',
    title: 'Adaptive Motion Control of Legged Robots via Predictive Force Modeling',
    shortDesc: 'LSTM-based force prediction with a phase-aware PID controller for adaptive foot placement on uneven terrain.',
    fullDesc: [
      '<strong>Problem:</strong> Vision-based perception is unreliable on uneven terrain — noise, occlusions, and latency cause discrepancies between planned and actual foot contact. Instead of vision, the system uses force-based feedback: predict the expected force profile during walking, then correct foot placement when measured forces deviate.',
      '<strong>Approach:</strong> An LSTM model predicts expected leg forces from a rolling window of past force and desired foot position signals. A phase-aware PID controller compares predicted vs. measured forces and applies corrective offsets to foot placement — only during appropriate stance/swing phases to avoid inter-leg interference. Trained and validated in MARS simulation across multiple terrain inclinations, then deployed on the real CREX hexapod robot.',
      { img: 'assets/thesis/system_architecture.png', caption: 'AdaptiveLegController system architecture — LSTM force prediction feeds into phase-aware PID for per-leg foot offset correction' },
      '<strong>Conclusion:</strong> The adaptive controller significantly reduced body tilt and recovered faster from unexpected foot contact forces. The obstacle traversal experiments clearly show the difference — without control the body tilts sharply; with control it stays stable.',
      { video: 'https://drive.google.com/file/d/1pbXB6qHVTHuQH08Qq8qOgqq7_5LJ8mvn/preview', ratio: '6120/1560', caption: 'Real robot — side-by-side comparison: without adaptive control (left) vs with adaptive control (right), obstacle introduced during walking' },
      { video: 'https://drive.google.com/file/d/18mPS2sS9o2-IUT-KFhnDsfM2HCAWQFJR/preview', ratio: '1868/1066', caption: 'Simulation — live force plots and control offsets during obstacle traversal, showing how the controller corrects foot placement in real time' },
      { img: 'assets/thesis/body_orientation_comparison.png', caption: 'Body orientation — orange: no adaptive control (obstacle), green: with adaptive control, blue: baseline (no obstacle)' },
    ],
    images: ['assets/thesis/thumbnail.png'],
    tags: ['Python', 'C++', 'TensorFlow', 'ONNX', 'MARS', 'PyQt5'],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1yFGM4T35UzVHh3ak8GYPqcuE9I-uvyPh/view' },
      { label: 'Presentation', url: 'https://docs.google.com/presentation/d/1QqHGz9MVVNbB1X-my14RSOwZVX3n03y5BX4vyzJlOMc/edit' },
      { label: 'CREX Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/crex' },
    ],
  },

  // ── R&D ─────────────────────────────────────────────────────────────────
  {
    id: 'rnd',
    category: 'hbrs',
    badge: 'HBRS · DFKI',
    icon: '🧬',
    title: 'Black-Box Optimization of the Ground Interaction Model for Legged Robots',
    shortDesc: 'Evolutionary optimization of a NeuralSoil ground interaction model using only robot trajectory similarity — no terrain measurements.',
    fullDesc: [
      '<strong>Problem:</strong> Physics-based ground interaction models require detailed terrain properties (stiffness, friction, sinkage) that are hard to measure and generalize. Can a NeuralSoil ground interaction model be optimized purely by comparing robot trajectory outcomes, with no terrain measurements or labeled data?',
      '<strong>Approach:</strong> Evolutionary optimization (via BOLeRo) iteratively tunes NeuralSoil neural network weights. Ground truth trajectories are generated in MARS using an existing trained model; a randomly initialized model is optimized to match them. Trajectory similarity — using DTW or Curve Length as fitness metrics — drives the loop. Evaluated across multiple gait configurations (tripod, four-legged, five-legged walking).',
      { img: 'assets/rnd/bolero_architecture.png', caption: 'BOLeRo optimization loop — evolutionary optimizer tunes NeuralSoil weights using trajectory similarity as fitness' },
      '<strong>Conclusion:</strong> The optimization loop converged successfully across gait configurations. DTW proved a more effective fitness metric than Curve Length. The approach validates that ground interaction model parameters can be recovered without terrain measurements, using only trajectory comparison.',
      { video: 'https://drive.google.com/file/d/1uzv3M4PKGhx8iW876SAfrR0CKvg7S0rT/preview', ratio: '1600/1080', caption: 'Before optimization — ground truth (top) vs unoptimized GIM (bottom): legs interact differently with the terrain' },
      { video: 'https://drive.google.com/file/d/1jZ2zVI1l9qCyc1nHvq8YMKWEjPysuTwE/preview', ratio: '1600/1080', caption: 'After optimization — ground truth (top) vs optimized GIM (bottom): trajectories closely match' },
      { img: 'assets/rnd/positional_error_comparison.png', caption: 'Positional error comparison across gait configurations and fitness metrics' },
    ],
    images: ['assets/rnd/thumbnail.png'],
    tags: ['Python', 'C++', 'PSO', 'CMA-ES', 'MARS', 'BOLeRo', 'Bagel'],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1A-c0LXvLBCRzy3RhI7E-0RtdxnZAHhBF/view' },
      { label: 'Presentation', url: 'https://docs.google.com/presentation/d/1HkocqDiPhmA3u18srROdfiQwLdKUqOco-iSeopUUfHc/edit' },
      { label: 'CREX Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/crex' },
    ],
  },

  // ── DFKI ─────────────────────────────────────────────────────────────────
  {
    id: 'fieldcobots',
    category: 'dfki',
    badge: 'DFKI',
    icon: '🤖',
    title: 'FieldCoBots — LLM Agents for Human-Robot Coordination',
    shortDesc: 'LangGraph-based tool-calling agents embedded in an agricultural robot for natural language task coordination.',
    fullDesc: [
      '<strong>Problem:</strong> Agricultural human-robot teams need a natural language interface for task coordination — operators should be able to instruct and query robots without programming expertise or structured command interfaces.',
      '<strong>Approach:</strong> Developed two LangGraph tool-calling agents. The first is embedded in the robot: it receives natural language instructions, interprets them, and triggers robot actions (gripper control, operation modes) via tool calls. The second interfaces with the project\'s shared task blackboard: it converts natural language requests into structured task entries, asks for missing information when needed, posts tasks, and notifies the user of status updates. Subagents were designed to be reusable across both. Switched from local LLMs to OpenAI API after local models proved too slow for the required responsiveness.',
      '<strong>Conclusion:</strong> The agents were integrated into the SHIVAA agricultural robot, enabling operators to coordinate with the robot using spoken or typed natural language — reducing task entry friction in mixed human-robot teams.',
      { img: 'assets/fieldcobots/infographic.png', caption: 'FieldCoBots concept — coordinated human-robot team with digital field management and shared task blackboard' },
    ],
    images: ['assets/fieldcobots/thumbnail.png'],
    tags: ['LangGraph', 'LangChain', 'OpenAI API', 'Python', 'Voice I/O'],
    links: [
      { label: 'FieldCoBots Project', url: 'https://robotik.dfki-bremen.de/de/forschung/projekte/fieldcobots' },
      { label: 'SHIVAA Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/shivaa' },
    ],
  },
  {
    id: 'nostrandamust',
    category: 'dfki',
    badge: 'DFKI',
    icon: '🌍',
    title: 'NoStrandAMust — Terrain Classification via Probing Behaviors',
    shortDesc: 'Designed probing behaviors and used parameter optimizers to maximize terrain discriminability across soil, gravel, and concrete.',
    fullDesc: [
      '<strong>Problem:</strong> A terrain classifier is only as good as the sensor data it receives — and that data quality depends on how the robot interacts with the terrain. The question: what robot behavior, with what parameters, produces the most terrain-discriminative sensor signal?',
      '<strong>Approach:</strong> Designed probing behaviors for wheeled robots (a turn-around maneuver with a variable braking factor on one wheel, causing motion perturbations that encode terrain properties) and legged robots (a leg-scraping motion whose force response pattern reveals terrain type). Used parameter optimizers running parallel simulations across terrain types (soil, gravel, concrete) to find the parameter set maximizing difference in response between terrains. Validated on real robots across multiple experimental iterations. Also contributed to dataset preparation (log processing, timestamp alignment) and is named contributor on the published dataset.',
      '<strong>Conclusion:</strong> Optimized probing parameters significantly improved terrain discriminability compared to arbitrary motion. Results contributed to the NoStrandAMust dataset published on Zenodo.',
      { video: 'https://drive.google.com/file/d/10Vd0QuVeDhTWV7VudAQNanF0xvqdRcMP/preview', ratio: '1864/1170', caption: 'Parallel simulations — optimizer evaluating probing behavior parameters across terrain types simultaneously' },
    ],
    images: ['assets/nostrand/thumbnail.jpg'],
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
    category: 'dfki',
    badge: 'DFKI',
    icon: '📊',
    title: 'PerSim — Iterative Simulation-to-Real Validation with SOGPR',
    shortDesc: 'SOGPR-based active learning loop to efficiently validate simulation behavior maps on a real robot with minimal evaluations.',
    fullDesc: [
      '<strong>Problem:</strong> Simulation-learned behavior maps (parameter set → expected performance) cannot be trusted directly on a real robot, and exhaustively testing every parameter set is infeasible. How do you efficiently validate which parts of the map transfer to reality with minimal real-robot evaluations?',
      '<strong>Approach:</strong> Used SOGPR (Sparse Online Gaussian Process Regression) as an active learner — at each step it selects the parameter set with highest uncertainty, evaluates it on the robot, and updates the confidence model, propagating confidence to neighboring points in the parameter space. Evaluation runs via a behavior-tree loop: the robot traverses three waypoints (A→B→C), switching the active parameter set at each waypoint by selectively restarting ROCK middleware components — no full robot restart required. Developed and validated the full workflow in simulation.',
      '<strong>Conclusion:</strong> The active learning loop reduced the number of real-robot evaluations needed to build a confident behavior map compared to random or grid sampling. Real-robot deployment was carried out by the project team using this tool.',
      { video: 'https://drive.google.com/file/d/1lRrSGs5BvbSA3-68xxps6PwyCwhVqp43/preview', ratio: '2496/1354', caption: 'Simulation — SOGPR active learning loop: parameter updates and confidence propagation across the behavior map' },
    ],
    images: ['assets/persim/thumbnail.jpg'],
    tags: ['Python', 'SOGPR', 'Gaussian Process', 'BehaviorTree.CPP', 'ROCK', 'MARS'],
    links: [
      { label: 'PerSim Project', url: 'https://robotik.dfki-bremen.de/de/forschung/projekte/persim' },
      { label: 'ASGUARD IV Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/asguard-iv' },
    ],
  },
  {
    id: 'robdekon',
    category: 'dfki',
    badge: 'DFKI',
    icon: '🦾',
    title: 'ROBDEKON — Behavior Trees for Hazardous Environment Robotics',
    shortDesc: 'Wrapped ROS nodes as behavior tree nodes and built navigation and arm control subtrees for a decontamination robot.',
    fullDesc: [
      '<strong>Problem:</strong> Programming complex navigation and manipulation missions for a decontamination robot requires deep ROS expertise. The goal: abstract the underlying stack into composable, reusable behavior tree nodes that can be combined via GUI without modifying robot code.',
      '<strong>Approach:</strong> Wrapped ROS nodes as BehaviorTree.CPP nodes and built complete subtrees — a navigation subtree (path planning node + path execution node) and an arm subtree (MoveIt trajectory planning + execution). The resulting nodes hide the ROS stack; missions are composed by connecting nodes in the BT GUI, with per-node success/failure visible at runtime. Also set up Gazebo simulation environments for development and testing. ARTER is a four-wheeled platform with flexible wheel shafts and a robot arm, used for decontamination tasks in hazardous environments.',
      '<strong>Conclusion:</strong> Delivered a library of BT nodes and subtrees enabling the ROBDEKON team to compose and monitor missions via GUI without touching the underlying ROS code.',
    ],
    images: ['assets/robdekon/thumbnail.jpg'],
    tags: ['ROS', 'BehaviorTree.CPP', 'MoveIt', 'C++', 'Python', 'Gazebo'],
    links: [
      { label: 'ROBDEKON Project', url: 'https://robotik.dfki-bremen.de/de/forschung/projekte/robdekon' },
      { label: 'ARTER Robot', url: 'https://robotik.dfki-bremen.de/de/forschung/robotersysteme/arter' },
    ],
  },
  {
    id: 'corobx',
    category: 'dfki',
    badge: 'DFKI',
    icon: '🪐',
    title: 'CoRob-X — State Machine for Planetary Exploration Robot',
    shortDesc: 'Implemented a mission state machine for a rappelling robot descending into a crater skylight in a multi-robot planetary mission.',
    fullDesc: [
      '<strong>Problem:</strong> In a multi-robot planetary exploration scenario, a rappelling robot must execute a complex mission sequence — approach, transition to rappel mode, active descent, landing — each phase with different speed limits and configuration requirements.',
      '<strong>Approach:</strong> Implemented a state machine for the rappelling robot (Coyote III) covering all mission phases with phase-specific configurations such as reduced descent speed. Assisted with simulation setup and testing. This was the first project at DFKI (~4–5 months), providing foundational experience with the ROS/ROCK development environment.',
      '<strong>Conclusion:</strong> The state machine was integrated into the Coyote III robot and demonstrated in simulation as part of the CoRob-X multi-robot planetary exploration scenario alongside the surface robot SherpaTT.',
      { video: 'https://drive.google.com/file/d/1IE-43-MvhJJk9w-EfEGsqIy6N98p86tk/preview', ratio: '1562/944', caption: 'Simulation — Coyote III tethered descent into crater skylight, executing the mission state machine phases' },
    ],
    images: ['assets/corobx/thumbnail.jpg'],
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
    category: 'stegen',
    badge: 'Stegen Technology',
    icon: '✈️',
    title: 'UAV Software Platform',
    shortDesc: 'Motion tracking, geofencing, and a simulation-based safety monitor for a drone platform at a robotics startup.',
    fullDesc: [
      '<strong>Problem:</strong> A robotics startup needed software for their UAV platform to enable safe, monitored operation — position tracking, operational boundary enforcement, and a way to validate flight scripts without risking the drone.',
      '<strong>Approach:</strong> As sole software developer, implemented Vicon motion capture-based position tracking on a Raspberry Pi flight stack for precise indoor feedback. Developed geofencing to enforce operational boundaries. Building a simulation / digital twin to validate scripts before deployment, with a safety monitor layer that can intervene to prevent unsafe maneuvers. Drones run existing flight controllers; all software sits on top of the flight stack.',
      '<strong>Conclusion:</strong> Delivered a modular software stack enabling monitored drone operation with real-time position awareness and boundary enforcement, reducing risk during early-stage flight testing.',
    ],
    images: [],
    tags: ['Python', 'Raspberry Pi', 'Vicon', 'ROS', 'Simulation'],
    links: [],
  },

  // ── Festo ────────────────────────────────────────────────────────────────
  {
    id: 'festo',
    category: 'festo',
    badge: 'Festo',
    icon: '⚙️',
    title: 'PLC/HMI for CAD-to-G-code Cartesian Robot',
    shortDesc: 'PLC software module with HMI to convert CAD files into G-code tool paths for automated execution on a three-axis Cartesian robot.',
    fullDesc: [
      '<strong>Problem:</strong> A three-axis Cartesian robot had no user interface for CAD-to-motion execution — operators needed a way to load designs and monitor execution without manual G-code authoring.',
      '<strong>Approach:</strong> Developed a PLC module in CODESYS (Structured Text) that parses CAD files, converts geometry to G-code tool paths, and drives the robot through the path. Built an HMI for operators to load files, trigger execution, and monitor end-effector position in real time on the deployed system.',
      '<strong>Conclusion:</strong> Delivered a working PLC/HMI system enabling CAD-to-motion automation on the Cartesian robot.',
      { video: 'https://drive.google.com/file/d/1OuBqCLsnA2asx56dQH-sYA42_RHz9PFG/preview', caption: 'Demo — CAD-to-G-code execution on the three-axis Cartesian robot' },
    ],
    images: [],
    tags: ['CODESYS', 'Structured Text (ST)', 'PLC', 'HMI', 'G-code'],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1g-Yob4OHI7EHkVE982foIIkbo5Sf4vwP/view' },
      { label: 'Demo Video', url: 'https://drive.google.com/file/d/1OuBqCLsnA2asx56dQH-sYA42_RHz9PFG/view' },
    ],
  },

  // ── Pixtech ───────────────────────────────────────────────────────────────
  {
    id: 'pixtech',
    category: 'pixtech',
    badge: 'Pixtech Labs',
    icon: '🔭',
    title: 'Machine Vision Solutions for Manufacturing',
    shortDesc: 'Delivered 2D/3D machine vision systems for part inspection, identification, dimensional measurement, and robot guidance across manufacturing industries.',
    fullDesc: [
      'Delivered machine vision solutions using 2D and 3D vision systems across diverse manufacturing industries, covering applications in part inspection, identification, dimensional measurement, and robot guidance.',
      'Handled the full project lifecycle from solution design through on-site installation, system integration, and post-deployment support.',
    ],
    images: [],
    tags: ['COGNEX', 'Machine Vision', 'Industrial Automation', 'System Integration'],
    links: [],
  },

  // ── Academic ──────────────────────────────────────────────────────────────
  {
    id: 'spore',
    category: 'academic',
    badge: 'Academic Project',
    icon: '🔬',
    title: 'Spore Recognition in Microscopic Digital Images',
    shortDesc: 'Two-stage pipeline using blob detection for localization and a CNN for four-class microbial classification.',
    fullDesc: [
      '<strong>Problem:</strong> Manual spore counting in microscopic images is tedious and error-prone. The challenge: detect individual spores in cluttered microscope images and classify them by microbial type.',
      '<strong>Approach:</strong> Two-stage pipeline — blob detection for spore localization, followed by a CNN trained on detected regions for four-class microbial classification.',
      '<strong>Conclusion:</strong> The pipeline automated spore detection and classification, reducing the need for manual microscopy review across four microbial classes.',
    ],
    images: [],
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Blob Detection', 'CNN'],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1vTfAOxfWjRQL2lwwcMnqC1RH8FA-zOAc/view' },
    ],
  },
  {
    id: 'trajectory-gui',
    category: 'academic',
    badge: 'Academic Project',
    icon: '📍',
    title: 'GUI for Trajectory Benchmarking with Indoor GPS',
    shortDesc: 'Desktop tool for tracking, visualizing, and comparing mobile robot trajectories using indoor GPS beacons.',
    fullDesc: [
      '<strong>Problem:</strong> Evaluating trajectory repeatability for a mobile robot required manually collecting, saving, and comparing GPS data across multiple runs — no dedicated tool existed.',
      '<strong>Approach:</strong> Built a PyQt5 desktop application that receives position data from indoor GPS beacons mounted on a mobile robot, visualizes the trajectory live, and supports saving and overlaying multiple runs for repeatability comparison.',
      '<strong>Conclusion:</strong> The tool simplified trajectory benchmarking, enabling systematic evaluation of mobile robot path repeatability across multiple experimental runs.',
      { img: 'assets/traj/trajectory.png', caption: 'Trajectory Record tab — live visualization of the robot path as GPS data streams in' },
      { img: 'assets/traj/compare.png', caption: 'Compare tab — overlay of multiple recorded runs for repeatability evaluation' },
    ],
    images: ['assets/traj/waypoint.png'],
    tags: ['Python', 'PyQt5', 'Indoor GPS'],
    links: [
      { label: 'Repository', url: 'https://github.com/Kabilan-T/GUI_for_Trajectory_Benchmarking_with_Indoor_GPS' },
    ],
  },
  {
    id: 'sentiment',
    category: 'academic',
    badge: 'Academic Project',
    icon: '💬',
    title: 'Tweet Sentiment Analysis',
    shortDesc: 'LSTM models with Word2Vec and FastText embeddings for topic-based tweet sentiment classification.',
    fullDesc: [
      '<strong>Problem:</strong> Understanding public sentiment on a specific topic requires collecting and classifying a large number of tweets — a time-consuming task if done manually.',
      '<strong>Approach:</strong> Built a pipeline that fetches tweets via the Twitter API, preprocesses text (tokenization, normalization), and classifies sentiment using LSTM models trained with Word2Vec and FastText embeddings.',
      '<strong>Conclusion:</strong> Achieved competitive sentiment classification accuracy across topic-based tweet datasets, with FastText embeddings outperforming Word2Vec on short, informal text.',
    ],
    images: [],
    tags: ['Python', 'Keras', 'NLTK', 'Gensim', 'Tweepy', 'Word2Vec', 'FastText'],
    links: [
      { label: 'Presentation', url: 'https://drive.google.com/file/d/14lK7ob9VuOvDR203nMSL8E0Ou7xkpO8R/view' },
    ],
  },
  {
    id: 'snake-robot',
    category: 'academic',
    badge: 'Academic Project',
    icon: '🐍',
    title: 'Snake Robot for Rescue Operations',
    shortDesc: 'Modular snake robot with inchworm and sidewinding motions, Bluetooth controlled with a camera and gripper for confined-space navigation.',
    fullDesc: [
      '<strong>Problem:</strong> Search-and-rescue operations in confined spaces — rubble, pipes, collapsed structures — are inaccessible to conventional wheeled or legged robots.',
      '<strong>Approach:</strong> Designed and built a modular snake robot capable of inchworm and sidewinding locomotion. Controlled via Arduino Uno over Bluetooth, with a camera for remote vision and a gripper for manipulation in rescue scenarios.',
      '<strong>Conclusion:</strong> Demonstrated functional locomotion modes and remote-controlled operation in confined test environments, validating the design as a low-cost rescue robot prototype.',
      { video: 'https://drive.google.com/file/d/1DlqQKp5wM7AEHyRcJIS1NxDxvsJ48NR1/preview', ratio: '1920/1080', caption: 'Demo — inchworm and sidewinding locomotion modes, Bluetooth-controlled with camera and gripper' },
    ],
    images: [],
    tags: ['Arduino', 'C/C++', 'Embedded Systems', 'Bluetooth', 'Mechanical Design'],
    links: [
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1DmEJvWWk7AEHyRcJIS1NxDxvsJ48NR1/view' },
      { label: 'Demo Video', url: 'https://drive.google.com/file/d/1DlqQKp5wM7AEHyRcJIS1NxDxvsJ48NR1/view' },
    ],
  },

  // ── Personal ──────────────────────────────────────────────────────────────
  {
    id: 'discord-bots',
    category: 'personal',
    badge: 'Personal Project',
    icon: '🎮',
    title: 'Discord Bots',
    shortDesc: 'Collection of Python bots for a personal Discord server with custom features, external API integrations, and LLM tools.',
    fullDesc: [
      '<strong>Problem:</strong> A personal Discord server lacked useful automation — no tools for content management, API-driven features, or AI-assisted interactions.',
      '<strong>Approach:</strong> Developed a collection of Python bots using discord.py, integrating external APIs (weather, media, utilities) and LLM tools for intelligent responses and task automation.',
      '<strong>Conclusion:</strong> Active bots running on the server, regularly extended with new features as a personal project for learning and experimentation.',
    ],
    images: [],
    tags: ['Python', 'Discord.py', 'APIs', 'LLM Integration'],
    links: [
      { label: 'Repository', url: 'https://github.com/Kabilan-T/discord_bots' },
    ],
  },
];

// ── Render Cards ─────────────────────────────────────────────────────────────
function renderCards() {
  const grid = document.getElementById('project-grid');
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = p.category;

    const thumb = p.images.length > 0
      ? `<img class="card-thumb" src="${p.images[0]}" alt="${p.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" /><div class="card-thumb-placeholder" style="display:none">${p.icon}</div>`
      : `<div class="card-thumb-placeholder">${p.icon}</div>`;

    card.innerHTML = `
      ${thumb}
      <div class="card-body">
        <span class="card-badge">${p.badge}</span>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.shortDesc}</div>
        <div class="card-tags">${p.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
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
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
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

  content.innerHTML = `
    <span class="modal-badge">${p.badge}</span>
    <div class="modal-title">${p.title}</div>
    <div class="modal-section-label">Stack</div>
    <div class="modal-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
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
