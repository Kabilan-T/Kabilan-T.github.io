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
      '<strong>Approach:</strong> An LSTM model predicts expected leg forces from a rolling window of past force and desired foot position signals. A phase-aware PID controller compares predicted vs. measured forces and applies corrective offsets to foot placement — only during appropriate stance/swing phases to avoid inter-leg interference. Trained and validated in MARS simulation, then tested on the real CREX robot.',
    ],
    images: [],
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
      '<strong>Problem:</strong> Physics-based ground interaction models require detailed terrain properties (stiffness, friction, sinkage) — hard to generalize. The goal: can a NeuralSoil ground interaction model be optimized purely by comparing robot trajectory outcomes, with no terrain measurements or labeled data?',
      '<strong>Approach:</strong> Evolutionary optimization (via BOLeRo) iteratively tunes the NeuralSoil neural network weights. Ground truth trajectories are generated in MARS using an existing trained model; a randomly initialized model is optimized to match them. Trajectory similarity — using DTW or Curve Length as fitness metrics — drives the optimization loop. Evaluated across multiple gait configurations (tripod, four-legged, five-legged walking).',
    ],
    images: [],
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
      'Responsible for LLM integration within the project\'s hybrid team coordination system — a platform for planning, coordination, and communication between human workers and robots in agricultural environments.',
      'Developed a LangGraph-based tool-calling agent embedded in the robot — a human gives it natural language instructions and it interprets commands and triggers robot actions (gripper control, operation modes) via tool calls.',
      'Developed a second LangGraph-based agent that interfaces with the project\'s shared task blackboard — takes natural language requests, converts them into structured task entries, posts them to the blackboard, asks for missing information when needed, and notifies the user of task status updates.',
      'Designed the codebase modularly so that subagents are reusable across both agents. Started with local LLMs for on-device inference; switched to OpenAI API after local models proved too slow for the required responsiveness.',
    ],
    images: [],
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
      'Contributed to dataset preparation: processed experiment log files, resolved timestamp mismatches between video recordings and logs. Named contributor on the published dataset.',
      '<strong>Probing behaviors:</strong> For wheeled robots — a turn-around maneuver with a variable braking factor on one wheel, causing motion perturbations that encode terrain properties. For legged robots — a leg-scraping motion whose force/response pattern reveals terrain type.',
      'Used parameter optimizers to find the best version of these behaviors: ran parallel simulations across terrain types (soil, gravel, concrete) and optimized for the parameter set that maximizes difference between terrain responses. Validated resulting parameters on real robots over several experimental iterations.',
    ],
    images: [],
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
      'A behavior map (simulation-learned: parameter set → expected performance) is available, but cannot be trusted directly for the real robot, and testing every parameter set is infeasible.',
      '<strong>Approach:</strong> SOGPR (Sparse Online Gaussian Process Regression) selects the parameter set with highest uncertainty at each step, evaluates it on the robot, and updates the model — which propagates confidence to neighboring points in the parameter space. Initially all points have equal uncertainty; confidence builds globally with each evaluation.',
      'Evaluation runs via a behavior-tree loop: the robot traverses three waypoints (A→B→C) in a triangle, with one parameter set active per segment. At each waypoint, the parameter set is switched by selectively stopping and restarting the relevant ROCK middleware components, with no full robot restart required.',
      'Developed and validated the full workflow in simulation. Real-robot deployment was carried out by the project team using this tool.',
    ],
    images: [],
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
      'ARTER is a four-wheeled platform with flexible wheel shafts and a robot arm, used for decontamination tasks in hazardous environments.',
      'Wrapped ROS nodes as behavior tree nodes and built subtrees for complete tasks: a navigation subtree with a planning node (plans path to the target waypoint) and an execution node (follows the planned path); an arm subtree with a planning node (plans the arm trajectory to the target end-effector position) and an execution node (executes the trajectory). Used MoveIt for arm trajectory planning.',
      'The resulting BT nodes and subtrees abstract the underlying ROS stack — missions can be composed via the BT GUI by connecting nodes, setting values, and monitoring per-node success/failure during execution. Also set up simulation environments for development and testing.',
    ],
    images: [],
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
      'Multi-robot planetary exploration mission: one robot remains on the surface while another rappels into a crater skylight.',
      'Implemented a state machine for the rappelling robot covering distinct mission phases — approaching the crater, transition to rappel, active descent, reaching the ground — each with phase-specific configurations such as reduced speed. Also assisted with testing and simulation setup.',
      'This was the first project at DFKI (~4–5 months), providing foundational experience with the development environment and workflows.',
    ],
    images: [],
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
      'Small startup team operating within the DFKI building. Sole developer on the software side; drones run existing flight controllers. Software runs on Raspberry Pi on top of the flight stack.',
      'Implemented motion tracking using the Vicon motion capture system available in the DFKI lab.',
      'Developed geofencing to enforce operational boundaries during flight.',
      'Ongoing: building a simulation / digital twin to validate scripts before deploying to the real drone, acting as a safety monitor that continuously enforces operational constraints and can intervene to prevent unsafe maneuvers.',
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
      'Developed a PLC-based software module with an HMI for a three-axis Cartesian robot to convert CAD files into robot-executable G-codes for automated tool path execution.',
      'The HMI enables operators to load a CAD file, trigger execution, and monitor the end effector position in real time on the deployed system.',
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
      'Developed a two-stage approach to detect and classify spores in microscopic digital images.',
      'The first stage uses blob detection for spore localization, while the second stage applies a CNN to classify detected spores into four microbial classes.',
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
      'Developed a GUI-based tool that receives position data from indoor GPS beacons mounted on a mobile robot to track its trajectory.',
      'The interface supports visualization, saving, and comparison of repeated runs to evaluate trajectory repeatability.',
    ],
    images: [],
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
      'Built a tool to fetch tweets on a given topic, pre-process the text, and analyze sentiment using LSTM models with Word2Vec and FastText embeddings.',
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
      'Developed a modular snake robot capable of inchworm and sidewinding motions to navigate through confined spaces.',
      'Controlled via Arduino Uno and Bluetooth, with a camera and gripper integrated for sensing and manipulation in rescue scenarios.',
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
      'Developed multiple Python bots for a personal Discord server, implementing custom features, integrating external APIs and LLM tools to improve functionality and enhance coding skills.',
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

  const gallery = p.images.length > 0
    ? `<div class="modal-gallery">${p.images.map(src => `<img src="${src}" alt="${p.title}" />`).join('')}</div>`
    : `<div class="modal-gallery-placeholder">${p.icon}</div>`;

  const links = p.links.length > 0
    ? `<div class="modal-section-label">Links</div><div class="modal-links">${p.links.map(l => `<a class="modal-link-btn" href="${l.url}" target="_blank">↗ ${l.label}</a>`).join('')}</div>`
    : '';

  content.innerHTML = `
    <span class="modal-badge">${p.badge}</span>
    <div class="modal-title">${p.title}</div>
    ${gallery}
    <div class="modal-section-label">About</div>
    <div class="modal-desc">${p.fullDesc.map(para => `<p>${para}</p>`).join('')}</div>
    <div class="modal-section-label">Stack</div>
    <div class="modal-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    ${links}
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
