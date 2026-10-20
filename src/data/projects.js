// All project content lives here. To add a project, copy one entry and edit it.
// Images and videos go in public/images and public/videos.

export const projects = [
  {
    slug: 'moteus-n1-interface-pcb',
    title: 'Moteus N1 Interface PCB',
    org: 'NURover',
    summary:
      'Compact Moteus N1 adapter PCB integrating MR30/JST GH power breakouts, dual thermistor sensing with comparator based selection, and PWM.',
    card: '/images/moteus-card.jpg',
    timeline: 'Jan to Feb 2026',
    tags: ['KiCad', 'PCB Design', 'Analog'],
    sections: [
      {
        label: 'Problem',
        text: 'The Moteus N1 motor controller cannot directly interpret dual thermistor outputs from the ILM motor on the rover arm, and the existing power connectors are bulky, disorganized, and inefficiently integrated.',
      },
      {
        label: 'Prototype',
        text: 'Developed a complete schematic in KiCad, incorporating op-amp comparators, an analog multiplexer, resistor voltage dividers, low-dropout regulators, JST connectors, and MR30/XT30 power interfaces, into a well-organized 4-layer PCB layout.',
      },
      {
        label: 'Current Design',
        text: 'Assembled and soldered all components onto the PCB. The op-amp operates as a comparator to determine the higher of the two motor thermistor readings, which is then scaled via a voltage divider to match the Moteus input range. An analog multiplexer routes this conditioned temperature signal to the Moteus, while MR30 and XT30 connectors handle 24 V motor power. Additional JST connectors provide regulated 5 V and 8 V PWM-capable outputs for fans and a potentiometer via onboard LDOs.',
      },
      {
        label: 'Performance',
        text: 'The PCB outputs PWM, power, and motor phase signals. The rest of the components are currently being tested.',
      },
    ],
    media: [
      { type: 'image', src: '/images/moteus-schematic.jpg', caption: 'KiCad schematic' },
      { type: 'image', src: '/images/moteus-layout.jpg', caption: '4-layer PCB layout' },
      { type: 'image', src: '/images/moteus-assembled.jpg', caption: 'Assembled board on the ILM motor' },
    ],
  },
  {
    slug: 'martian-soil-drill',
    title: 'Martian Soil Drill',
    org: 'NURover',
    summary:
      'Auger soil sampling system designed in SolidWorks and built with FDM/SLS 3D printing and CNC machining for the University Rover Challenge.',
    card: '/images/auger-card.jpg',
    timeline: 'Jan to Mar 2025',
    tags: ['SolidWorks', '3D Printing', 'CNC'],
    sections: [
      {
        label: 'Problem',
        text: 'Obtain and enclose a 5 gram soil sample 10 cm deep into simulated Martian soil. Measure temperature and humidity. Total weight below 1.5 kg.',
      },
      {
        label: 'Prototyping',
        text: 'The previous iteration, based on typical soil augers, failed to contain small, dry grains of sand. A threaded tube was 3D printed and tested, but faced the same issue. Separate tubes of varying materials (PETG, aluminum, steel) were tested for optimal weight to performance efficiency. FDM and SLS 3D prints were tested rigorously to meet weight constraints.',
      },
      {
        label: 'Current Design',
        text: 'A small diameter steel tube is driven into the ground via a lead screw housed in an aluminum extrusion mounted to the rover chassis. A brushed motor with a planetary gearbox provides linear motion, while a second motor rotates the tube to aid soil penetration.',
      },
      {
        label: 'Result',
        text: 'The system successfully collects a 5 gram sample from a 10 cm range. To ensure reliable sample collection, a servo cap seals the tube, preventing vibration induced disturbance. Dual humidity and temperature sensors measure soil moisture and temperature. Total system weight came in 200 grams under the maximum. The auger was deployed in the life detection mission at the University Rover Challenge in Utah, earning a 3rd place finish.',
      },
    ],
    media: [
      { type: 'video', src: '/videos/auger-demo.mp4', poster: '/videos/auger-demo.jpg', caption: 'Auger test run' },
      { type: 'image', src: '/images/auger-test.jpg', caption: 'Bench testing the sample collection' },
      {
        type: 'embed',
        src: 'https://docs.google.com/presentation/d/1reDm3vHrUkFBi7VBBymIzAw7wFAnuNQunYwdLdTuwRs/embed?slide=2&start=false',
        caption: 'Auger SolidWorks exploded view',
      },
    ],
  },
  {
    slug: 'hexapod',
    title: 'Hexapod Spyder Robot',
    org: 'Embedded Systems',
    summary: 'Coded and deployed FPGA and C++ firmware onto a hexapod robot for control and movement.',
    card: '/images/hexapod-card.jpg',
    timeline: 'May to June 2025',
    tags: ['FPGA', 'C++', 'Embedded Linux'],
    sections: [
      {
        label: 'Problem',
        text: 'Develop and deploy firmware onto the DE1-Nano board for the hexapod robot. Utilize servo motors to implement forward, back, left, right, and initialization functionalities.',
      },
      {
        label: 'Prototyping',
        text: 'Designed and implemented a memory-mapped FPGA servo control circuit on the DE1 FPGA platform. Leveraged the on-board processor to develop an object-oriented C++ control architecture running on embedded Linux. Validated motion performance by testing and analyzing multiple servo positions to determine optimal movement profiles.',
      },
      {
        label: 'Result',
        text: 'Successfully implemented and validated multiple servo movement functions. Later selected as a teaching assistant, instructing 90+ students in FPGA circuit design and embedded systems development.',
      },
    ],
    media: [
      { type: 'video', src: '/videos/hexapod-demo.mp4', poster: '/videos/hexapod-demo.jpg', caption: 'Hexapod Walking Student Demo' },
    ],
  },
  {
    slug: 'frc',
    title: 'FIRST Robotics Competition',
    org: 'FRC Team 2638',
    summary: 'Led mechanical, electrical, and software integration for 5 mechanisms as Team Build and Design Lead.',
    card: '/images/frc-card.jpg',
    timeline: 'Jan to Aug 2024',
    tags: ['Leadership', 'Mechanical', 'Integration'],
    sections: [
      {
        label: 'Overview',
        text: 'As Build and Design Lead of a 130+ member FIRST Robotics team, oversaw the Build, Systems, and Competition divisions, coordinating execution and technical decisions across teams. Directed the design and fabrication of a cascading elevator and disc shooter, and drove mechanical, electrical, and software integration for the 2024 robot.',
      },
      {
        label: 'Result',
        text: 'Drove competitive and leadership excellence, qualifying for 4 consecutive FIRST World Championships and earning the FIRST Dean’s List Award (top 10 of 80,000+ globally).',
      },
    ],
    media: [
      { type: 'image', src: '/images/frc-cad.jpg', caption: '2024 robot CAD' },
      { type: 'video', src: '/videos/frc-robot-1.mp4', poster: '/videos/frc-robot-1.jpg', caption: '2024 competition robot' },
      { type: 'video', src: '/videos/frc-robot-2.mp4', poster: '/videos/frc-robot-2.jpg', caption: 'Intake and shooter test' },
      { type: 'image', src: '/images/frc-robot.jpg', caption: 'Cascading elevator' },
      { type: 'image', src: '/images/frc-deans-list.jpg', caption: 'FIRST Dean’s List Award' },
    ],
  },
  {
    slug: 'daignose',
    title: 'dAIgnose',
    org: 'ML + DL',
    summary: 'Trained and validated five machine learning and deep learning models to detect early indicators of lung cancer and strokes.',
    card: '/images/daignose-card.jpg',
    timeline: 'Sept 2022 to Jan 2024',
    tags: ['TensorFlow', 'scikit-learn', 'Flask'],
    sections: [
      {
        label: 'Problem',
        text: 'Lung cancer and stroke are among the leading causes of death worldwide, with survival and recovery outcomes highly dependent on early diagnosis. Delayed detection often results in limited treatment options, increased mortality, and long term disability. Improving early detection enables timely intervention, reduces healthcare costs, and significantly increases patient survival and quality of life.',
      },
      {
        label: 'Prototyping',
        text: 'Developed and trained multiple machine learning and deep learning models on 50,000+ record clinical datasets, including K-nearest neighbor, support vector machine, decision tree, and a TensorFlow based neural network, to predict lung cancer and stroke risk. Conducted a comparative performance analysis using quantitative evaluation metrics to identify the most effective model.',
      },
      {
        label: 'Result',
        text: 'The decision tree model achieved 96.8% accuracy. Deployed the model into a user facing web application built with Flask, HTML, and CSS, enabling accessible and practical health risk prediction. Awarded $1,750 in grants from regional and national competitions.',
      },
    ],
    media: [{ type: 'image', src: '/images/daignose-poster.jpg', caption: 'Research poster' }],
    links: [
      { label: 'Lung Cancer Notebook', href: 'https://colab.research.google.com/drive/1uOsO_R9qx-ysft3MIhcM1ziwbopzJtU0?usp=sharing' },
      { label: 'Stroke Notebook', href: 'https://colab.research.google.com/drive/1Ipwe60ohc1Jr_CAn6bMYcOvDLgOVsyg5?usp=sharing' },
    ],
  },
  {
    slug: 'plant-guardian',
    title: 'Plant Guardian',
    org: 'ML + DL',
    summary: 'Autonomous system that detects plant diseases and texts farmers the crop location and treatment options.',
    card: '/images/plant-guardian-card.jpg',
    timeline: 'Sept 2023 to Aug 2024',
    tags: ['CNN', 'Jetson Nano', 'YOLOv8'],
    sections: [
      {
        label: 'Problem',
        text: 'Identified infection driven crop loss as a key contributor to food scarcity by facilitating discussions with farmers from rural India. Pests and infections are responsible for 40% of crop loss, and it is difficult for farmers in developing countries to identify and protect crops.',
      },
      {
        label: 'Prototyping',
        text: 'Utilized TensorFlow libraries to develop and train a convolutional neural network capable of classifying 5 plant diseases from a 2,600+ image dataset. Deployed onto an NVIDIA Jetson Nano for live inferencing using TensorFlow Lite and YOLOv8. Developed a CAD system containing a USB camera, a GPS and SMS module, and a battery pack.',
      },
      {
        label: 'Result',
        text: 'The neural network performed classification with 99.54% accuracy and 0.0153 loss. The system successfully identified blight in tomato crops and sent a text message with the crop location and treatment options. Awarded $600 in grants from regional competitions and received EPA Merit Award.',
      },
    ],
    media: [{ type: 'image', src: '/images/plant-guardian-poster.jpg', caption: 'Research poster' }],
  },
];
