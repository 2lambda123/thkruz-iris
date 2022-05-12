/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('transmitter').del()
  await knex('transmitter').insert([
    {id: 1, server_id: 1, team_id: 1, unit: 1, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 2, server_id: 1, team_id: 1, unit: 1, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 3, server_id: 1, team_id: 1, unit: 1, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 4, server_id: 1, team_id: 1, unit: 1, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 5, server_id: 1, team_id: 1, unit: 2, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 6, server_id: 1, team_id: 1, unit: 2, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 7, server_id: 1, team_id: 1, unit: 2, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 8, server_id: 1, team_id: 1, unit: 2, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 9, server_id: 1, team_id: 1, unit: 3, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 10, server_id: 1, team_id: 1, unit: 3, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 11, server_id: 1, team_id: 1, unit: 3, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 12, server_id: 1, team_id: 1, unit: 3, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 13, server_id: 1, team_id: 1, unit: 4, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 14, server_id: 1, team_id: 1, unit: 4, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 15, server_id: 1, team_id: 1, unit: 4, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 16, server_id: 1, team_id: 1, unit: 4, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 17, server_id: 1, team_id: 2, unit: 1, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 18, server_id: 1, team_id: 2, unit: 1, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 19, server_id: 1, team_id: 2, unit: 1, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 20, server_id: 1, team_id: 2, unit: 1, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 21, server_id: 1, team_id: 2, unit: 2, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 22, server_id: 1, team_id: 2, unit: 2, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 23, server_id: 1, team_id: 2, unit: 2, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 24, server_id: 1, team_id: 2, unit: 2, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 25, server_id: 1, team_id: 2, unit: 3, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 26, server_id: 1, team_id: 2, unit: 3, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 27, server_id: 1, team_id: 2, unit: 3, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 28, server_id: 1, team_id: 2, unit: 3, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 29, server_id: 1, team_id: 2, unit: 4, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 30, server_id: 1, team_id: 2, unit: 4, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 31, server_id: 1, team_id: 2, unit: 4, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 32, server_id: 1, team_id: 2, unit: 4, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 33, server_id: 1, team_id: 3, unit: 1, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 34, server_id: 1, team_id: 3, unit: 1, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 35, server_id: 1, team_id: 3, unit: 1, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 36, server_id: 1, team_id: 3, unit: 1, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 37, server_id: 1, team_id: 3, unit: 2, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 38, server_id: 1, team_id: 3, unit: 2, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 39, server_id: 1, team_id: 3, unit: 2, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 40, server_id: 1, team_id: 3, unit: 2, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 41, server_id: 1, team_id: 3, unit: 3, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 42, server_id: 1, team_id: 3, unit: 3, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 43, server_id: 1, team_id: 3, unit: 3, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 44, server_id: 1, team_id: 3, unit: 3, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 45, server_id: 1, team_id: 3, unit: 4, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 46, server_id: 1, team_id: 3, unit: 4, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 47, server_id: 1, team_id: 3, unit: 4, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 48, server_id: 1, team_id: 3, unit: 4, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 49, server_id: 1, team_id: 4, unit: 1, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 50, server_id: 1, team_id: 4, unit: 1, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 51, server_id: 1, team_id: 4, unit: 1, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 52, server_id: 1, team_id: 4, unit: 1, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 53, server_id: 1, team_id: 4, unit: 2, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 54, server_id: 1, team_id: 4, unit: 2, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 55, server_id: 1, team_id: 4, unit: 2, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 56, server_id: 1, team_id: 4, unit: 2, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 57, server_id: 1, team_id: 4, unit: 3, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 58, server_id: 1, team_id: 4, unit: 3, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 59, server_id: 1, team_id: 4, unit: 3, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 60, server_id: 1, team_id: 4, unit: 3, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 61, server_id: 1, team_id: 4, unit: 4, modem_number: 1, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 62, server_id: 1, team_id: 4, unit: 4, modem_number: 2, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 63, server_id: 1, team_id: 4, unit: 4, modem_number: 3, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false},
    {id: 64, server_id: 1, team_id: 4, unit: 4, modem_number: 4, operational: true, antenna_id: 1, frequency: 1250, bandwidth: 10, power: -40, transmitting: false}
  ]);
  await knex.raw('SELECT SETVAL(pg_get_serial_sequence(\'transmitter\',\'id\'), (SELECT MAX(id) FROM transmitter) )');
}; 
