const events = [];

module.exports = {
    index: (req, res) => {

        const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));
        res.json(sortedEvents);
    },

    show: (req, res) => {
        const eventId = req.params.id;
        const event = events.find(event => event.id === eventId);

        if (!event) {
            res.status(404).json({ error: 'Event not found' });
        } else {
            res.json(event);
        }
    },

    create: (req, res) => {
        const newEvent = req.body;
        events.push(newEvent);
        res.status(201).json(newEvent);
    },

    update: (req, res) => {
        const eventId = req.params.id;
        const updatedEvent = req.body;
        const eventIndex = events.findIndex(event => event.id === eventId);

        if (eventIndex === -1) {
            res.status(404).json({ error: 'Event not found' });
        } else {
            events[eventIndex] = updatedEvent;
            res.json(updatedEvent);
        }
    },

    delete: (req, res) => {
        const eventId = req.params.id;
        const eventIndex = events.findIndex(event => event.id === eventId);

        if (eventIndex === -1) {
            res.status(404).json({ error: 'Event not found' });
        } else {
            events.splice(eventIndex, 1);
            res.status(204).send();
        }
    },
};