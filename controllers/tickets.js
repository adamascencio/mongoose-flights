const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
}

function newTicket(req, res) {
  res.render('tickets/new', {flightId: req.params.id});
}

function create(req, res) {
  console.log(req.body)
  req.body.flight = req.params.id;
  console.log(req.body)
  Ticket.create(req.body, function(err, ticket) {
    console.log(ticket)
    res.redirect(`/flights/${req.params.id}`);
  });
}