module.exports = [
	// Missing stance
	{
		type: 'MissingDuringCombat',
		target: 'Self',
		abnormalities: [100100, 100101, 100102, 100103, 100200, 100201, 100202, 100203],
		message: 'Missing Stance',
		rewarn_timeout: 10
	},

	// Blade Draw Reset
	// {
	// 	type: 'Reset',
	// 	skills: [290100, 370100], // normal & deadly gamble version of blade draw
	// 	message: '{icon} {violet}Reset '
	// },

	{
		type: 'expiring',
		target: 'MyBoss',
		abnormalities:  101210,
		message: '{icon} {duration}',
		time_remaining:[10,5]
	},

	// Deadly Gamble is coming off cooldown in 10 seconds
	{
		type: 'Expiring',
		skills: 200100,
		message: '{icon} {duration}',
		time_remaining: [1,2,3,4,5]
	},
	
	//Boss Enrage With DG OFF CD
	{
		type: 'ReadyDuringEnrage',
		target: 'MyBoss',
		skills: 200100,
		message: '{icon} Use Deadly Gamble',
		rewarn_timeout: 5
	},

	//Shadow Of Tempest 2
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 103104,
		message: '{icon} TA2 Active'
	},

	//Shadow Tempest 2 Expiring
	{
		type: 'Expiring',
		target: 'Self',
		abnormalities: 103104,
		message: '{icon} TA2: {duration}',
		time_remaining: [1,2,3,4,5]
	},

	//Shadow Of Tempest
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 103130,
		message: '{icon} TA2 Active'
	},

	//Shadow Tempest Expiring
	{
		type: 'Expiring',
		target: 'Self',
		abnormalities: 103130,
		message: '{icon} TA: {duration}',
		time_remaining: [1,2,3,4,5]
	},

	//Glyph Of Swift Applied
	/*{
		type: 'Added',
		target: 'Self',
		abnormalities: [21010, 21070],
		message: '{icon} Swift Applied'
	},*/
	/*
	//Glyph Of Swift Expiring
	{
		type: 'Expiring',
		target: 'Self',
		abnormalities: [21010, 21070],
		message: '{icon} {duration}',
		time_remaining: [1,2,3,4,5]
	}
	
*/
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

]
