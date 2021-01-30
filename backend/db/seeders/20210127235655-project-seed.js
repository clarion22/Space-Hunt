'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
        name: "BEAM",
        description: "The Bigelow Expandable Activity Module (BEAM) project is a NASA-industry partnership with Bigelow Aerospace (BA) that developed the first human-rated expandable space habitat for demonstration on the International Space Station (ISS). The partnership offers NASA substantial cost savings for technology development and for future exploration missions that could use commercially-provided expandable structures and habitats.",
        subheading: "Bigelow Expandable Activity Module Project",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ASO",
        description: "The AES Autonomous Systems and Operations (ASO) project will develop an understanding of the impacts of increasing communication time delays on mission operations, develop autonomy technologies to mitigate the impacts, and infuse them into Human Exploration and Operations systems. The technologies are expected to reduce operations costs as well. This technology has been tested on ISS in FY14-16 as part of the AES Autonomous Mission Operations project; testing continues in FY20-21 under ASO. This technology has also been tested in the Integrated Power, Avionics and Software (IPAS) facility at JSC, and in a testing facility during Exploration Flight Test 1 (EFT-1); tests continue under ASO with ISS and Orion systems and also target infusion into the Artemis-2 mission.",
        subheading: "Autonomous Systems and Operations",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "LR-UWMS",
        description: "The objective of the Advanced Exploration Systems (AES) Logistics Reduction (LR) project's Universal Waste Management System (UWMS) task is to develop a compact toilet system that can be used across multiple future crewed vehicles and habitats. The UWMS effort will result in a toilet with reduced mass and volume that provides increased crew comfort and performance. A key feature of the UWMS is the urine pretreatment dose pump/pretreatment quality indication device which enables water recovery from urine. The UWMS core hardware is primarily funded by the AES LR project, with cost sharing from the Orion (MultiPurpose Crew Vehicle (MPCV)) Program for a second flight unit, and the ISS Program for ISS-unique hardware and integration hardware for flying the first UWMS unit on ISS.",
        subheading: "Logistics Reduction: Universal Waste Management System",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOXIE",
        description: "The Mars Oxygen In-Situ Resource Utilization Experiment (MOXIE) will be the first in-situ resource utilization (ISRU) technology demonstration on Mars. Competitively selected in 2014, MOXIE will fly on the Mars 2020 rover in 2020, to land on Mars in 2021. Sponsored by HEOMD and the Space Technology Mission Directorate (STMD), MOXIE will utilize solid oxide electrolysis to process Mars’ CO2 atmosphere to produce O2.  MOXIE will be a critical first step in long-duration mission architectures that would require use of local resources to reduce risk and control cost. By partnering with Science Mission Directorate on the Mars 2020 mission, human exploration leverages existing investments in the Mars program while advancing a key technology for NASA.",
        subheading: "Mars Oxygen In-Situ Resource Utilization Experiment",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
{
        name: "NEA Scout",
        description: "Near-Earth Asteroid Scout, or NEA Scout, is a 6U CubeSat developed jointly between NASA's Marshall Space Flight Center and the Jet Propulsion Laboratory. NASA selected NEA Scout as a candidate secondary payload for Artemis 1, the first integrated (uncrewed) flight test of the Space Launch System and Orion Crewed Spacecraft. The NEA Scout mission is funded by the Advanced Exploration Systems Division of the Human Exploration and Operations Mission Directorate. NEA Scout is a robotic reconnaissance mission that will fly by and return data from a near Earth asteroid.   NEA Scout will deploy its main propulsion system, a solar sail, that will be used in conjunction with its other on-board systems to provide stable pointing for both science and optical navigation as well as for slewing and navigating the spacecraft to its predetermined destination.",
        subheading: "Near Earth Asteroid Scout",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

{
        name: "BioSentinel",
        description: "he Advanced Exploration Systems' (AES) BioSentinel project will develop, prototype, integrate, test, and prepare for the first spaceflight mission of a broadly applicable small satellite-based instrument platform to autonomously perform a range of human-exploration-relevant life-science studies of biological consequences of the space environment beyond Low Earth Orbit (LEO).  The small, autonomous, low-power payload (a 6 unit CubeSat) will support biological/radiation testing on uncrewed missions such as Space Launch System (SLS) Exploration Mission-1 (EM-1).Radiation damage studies will be conducted using the yeast Saccharomyces cerevisiae and will report  DNA damage in response to ambient space radiation.  The results will be critical for improving interpretation of the biological effects of space radiation exposure, and to reduce risk associated with long-duration human exploration. ",
        subheading: "The Advanced Exploration Systems' (AES) BioSentinel project",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

{
        name: "LCRD",
        description: "LCRD is a minimum two year flight demonstration in geosynchronous Earth orbit to advance optical communications technology toward infusion into Deep Space and Near Earth operational systems, while growing the capabilities of industry sources. LCRD will validate the essential operational elements of an optical communication network and establish the initial operational capability for the next generation of satellites. The LCRD mission will provide a minimum of two years of continuous high rate optical communications in an operational environment and demonstrate a viable operational architecture for laser communication. Optical communications will enable NASA to undertake future complex missions that would require large increases in data volume with minimum impact to the user for accommodation of the communication system. LCRD will demonstrate the modulation and coding suitable for very high rate links. The LCRD architecture enables it to serve as a test bed to demonstrate advanced networking concepts and protocols that will enable full potential operational optical communications for future missions.",
        subheading: "Laser Communications Relay Demonstration",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

{
        name: "AMPS",
        description: "The Advanced Modular Power Systems (AMPS) project will infuse new technology into power systems and components and prove their capabilities through exploration-based ground demonstrations. AMPS will explore technologies that enable the development of modular power units which, when combined with standardized interfaces, will provide commonality across a variety of exploration vehicles for future NASA missions. Additionally, AMPS will assess and provide recommendations for improvements and/or further design concept refinements of proposed power systems for other Advanced Exploration Systems (AES) Projects and Human Exploration and Operations Mission Directorate (HEOMD) Programs. ",
        subheading: "Advanced Modular Power Systems",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
{
        name: "Veggie",
        description: "The Vegetable Production System (Veggie) was developed to be a simple, easily stowed, high growth volume, low resource facility capable of producing fresh vegetables on the International Space Station (ISS) for flight crew consumption and for scientists to conduct experiments to learn how to grow food plants in space.  In addition to growing vegetables in space, Veggie has supported a variety of experiments used to determine how plants respond to microgravity, provide real-time psychological benefits for the crew, and conduct outreach activities.  Veggie is a deployable plant growth unit that provides salad-type crops to the crew for a palatable, nutritious, and safe source of fresh food, in addition to supporting relaxation and recreation.  Veggie provides lighting, water and nutrient delivery for efficient plant growth, utilizing the cabin environment for temperature and relative humidity control and a source of carbon dioxide for photosynthesis.  Veggie contains a large adjustable LED light bank that makes this system an ideal facility for experiments requiring a light source.  To grow plants, a reservoir supplies water via capillary action to root pillows containing substrate, nutrients and seeds.  Water is administered on-orbit to initiate seed germination and periodically added throughout the growth cycle to provide a continuous water supply until the vegetables are harvested. ",
        subheading: "Vegetable Production System",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
{
        name: "RadWorks",
        description: "RadWorks technology is categorized as a hardware system for other applications.  Since its inception in FY12, the RadWorks project has had as its overarching objective to mature and demonstrate affordable, enabling solutions to mitigate the radiation-related challenges of human space exploration.  This has been done through the maturation and demonstration of system-level monitoring and design solutions.  Since FY12, the project has continued to develop and deliver affordable, prototype and flight caliber element-integrated monitoring and alert/warning subsystems capable of enabling both ground-supported and autonomous architectural operations.  In addition, the project has been doing comparative assessments of data collected utilizing radiation modeling programs, as well as producing advancements of modeling capability to enable protection and operational efficiencies for radiation shielding. ",
        subheading: "Protect crew health through compact, low mass, low power radiation monitoring",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Projects', {})
  }
};
