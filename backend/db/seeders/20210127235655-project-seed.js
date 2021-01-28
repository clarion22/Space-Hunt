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
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Projects', {})
  }
};
