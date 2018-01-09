const { expect } = require('chai');
const puppeteer = require('./puppeteer');

describe('My account tests', () => {
	beforeEach(async () => {
		await puppeteer.setup();
	});

	it('should update position label when edited', async () => {
		await puppeteer.myAccount();
		const text = await puppeteer.editPosition();
		expect(text).to.contain('Politician/Government Minister');
	});

	afterEach(async () => {
		await puppeteer.teardown();
	});
});