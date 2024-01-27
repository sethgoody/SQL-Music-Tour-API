const stages = [];

module.exports = {
    index: (req, res) => {

        const sortedStages = stages.sort((a, b) => new Date(a.date) - new Date(b.date));
        res.json(sorted);
    },

    show: (req, res) => {
        const stagesId = req.params.id;
        const stage = stages.find(stage => stage.id === stageId);

        if (!stage) {
            res.status(404).json({ error: 'stage not found' });
        } else {
            res.json(stage);
        }
    },

    create: (req, res) => {
        const newStage = req.body;
        stages.push(newStage);
        res.status(201).json(newStage);
    },

    update: (req, res) => {
        const stageId = req.params.id;
        const updatedstage = req.body;
        const stageIndex = stages.findIndex(stage => stage.id === stageId);

        if (stageIndex === -1) {
            res.status(404).json({ error: 'Stages not found' });
        } else {
            stages[stageIndex] = updatedStage;
            res.json(updatedStage);
        }
    },

    delete: (req, res) => {
        const stageId = req.params.id;
        const stageIndex = stages.findIndex(stage => stage.id === stageId);

        if (stageIndex === -1) {
            res.status(404).json({ error: 'stage not found' });
        } else {
            stages.splice(stageIndex, 1);
            res.status(204).send();
        }
    },
};