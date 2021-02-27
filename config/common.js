module.exports = [
	// Enrage Added
	{
		type: 'added',
		target: 'MyBoss',
		abnormalities: 8888888,
		message: 'Enrage {duration}'
	},
	// Enrage Expiring, notify at 12 and 6 seconds remaining
	{
		type: 'expiring',
		target: 'MyBoss',
		abnormalities: 8888888,
		message: 'Enrage {duration}',
		time_remaining: [12, 6]
	},
	// Enrage Removed, show next enrage %
	{
		type: 'removed',
		target: 'MyBoss',
		abnormalities: 8888888,
		message: 'Enrage Ended - Next {nextEnrage}'
	},

	// Contagion Added
	{
		type: 'added',
		target: 'MyBoss',
		abnormalities: [701700, 701701],
		message: 'Contagion {duration}'
	},
/*
	// Contagion Expiring, notify 6 seconds remaining
	{
		type: 'expiring',
		target: 'MyBoss',
		abnormalities: [701700, 701701],
		message: 'Contagion {duration}',
		time_remaining: 6
	},
	// Contagion Removed
	{
		type: 'removed',
		target: 'MyBoss',
		abnormalities: [701700, 701701],
		message: 'Contagion Ended'
	},
*/

	// Hurricane Added
	{
		type: 'added',
		target: 'MyBoss',
		abnormalities: 60010,
		message: 'Hurricane {duration}'
	},
/*
	// Hurricane Expiring, notify at 6 seconds remaining
	{
		type: 'expiring',
		target: 'MyBoss',
		abnormalities: 60010,
		message: 'Hurricane {duration}',
		time_remaining: 6
	},
	// Hurricane Removed
	{
		type: 'removed',
		target: 'MyBoss',
		abnormalities: 60010,
		message: 'Hurricane Ended'
	},
*/

	// Adrenaline Rush  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [200701, 200700],
		message: 'Adrenaline Rush {duration}'
	},

	// Adrenaline Rush  Expiring, notify at 6 seconds remaining
	{
		type: 'expiring',
		target: 'Self',
		abnormalities: [200701, 200700],
		message: 'Adrenaline Rush {duration}',
		time_remaining: 6
	},
	// Adrenaline Rush Removed
	{
		type: 'removed',
		target: 'Self',
		abnormalities: [200701, 200700],
		message: 'Adrenaline Rush Ended'
	},
/*
	{
		type: 'Added',
		target: 'Self',
		abnormalities: [950064,950068],
		message: 'Red/Orange Debuff Added'
	},
	
	{
		type: 'Added',
		target: 'Self',
		abnormalities: [950065,950069],
		message: 'Black Debuff Added'
	},
*/
	// Missing Battle Solution / Nostrum
	/*{
		type: 'MissingDuringCombat',
		target: 'Self',
		abnormalities: [4030, 4031, 4020, 4021],
		message: 'Missing {icon}',
		rewarn_timeout: 15
	},*/

	//Killing Grounds Unleash Eyes
	{
		type: 'AddedOrRefreshed',
		target: 'PartyIncludingSelf',
		abnormalities: [32060024, 32060026],
		message: '{name} has {icon}'
	},

	// Vergos Aggro Debuff
   {
		type: 'AddedOrRefreshed',
		target: 'PartyIncludingSelf',
		abnormalities: 950023,
		message: '{name} has {stacks} stack(s)',
		required_stacks: 1
	},

	// Vergos Aggro Debuff Expire
   {
		type: 'Removed',
		target: 'PartyIncludingSelf',
		abnormalities: 950023,
		message: '{name}\'s stacks expired'
	},

	 // Priest steroid  Added
	 {
		type: 'added',
		target: 'Self',
		abnormalities: [805803],
		message: '{icon} {duration}'
	},

	// Mystic Wrath  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [702004],
		message: '{icon} {duration}'
	},

	// Kaia  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [800300, 800302, 800303, 800304],
		message: '{icon} on'
	},
	
	// Mystic Shield  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [702001],
		message: '{icon} on'
	},
	
	// Bahaar Laser
    {
		type: 'Added',
		target: 'PartyIncludingSelf',
		abnormalities: 90442502,
		message: '{name} has {icon}'
	},
	
	// Sea Stun
    {
		type: 'Added',
		target: 'PartyIncludingSelf',
		abnormalities: 30209101,
		message: '{name} has {icon}'
	},
	
	// Sea Fear
    {
		type: 'Added',
		target: 'PartyIncludingSelf',
		abnormalities: 30209102,
		message: '{name} has {icon}'
	},

]
