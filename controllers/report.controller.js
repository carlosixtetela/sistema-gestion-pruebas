const { Sequelize } = require('sequelize');
const Project = require('../models/project.model');
const Test = require('../models/test.model');
const Defect = require('../models/defect.model');

const generateReport = async (req, res) => {
  try {
    const totalProjects = await Project.count();
    const totalTests = await Test.count();

    const testsByStatus = await Test.findAll({
      attributes: ['status', [Sequelize.fn('COUNT', Sequelize.col('status')), 'count']],
      group: ['status'],
    });

    const defectsByStatus = await Defect.findAll({
      attributes: ['status', [Sequelize.fn('COUNT', Sequelize.col('status')), 'count']],
      group: ['status'],
    });

    res.json({
      totalProjects,
      totalTests,
      testsByStatus,
      defectsByStatus,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { generateReport };
