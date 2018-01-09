const { expect } = require('chai');
const puppeteer = require('./puppeteer');

describe('sample test', function () {
	it('should update position label when edited', async function () {
		await puppeteer.setup();
		await puppeteer.myAccount();
		const text = await puppeteer.editPosition();
		expect(text).to.contain('Politician/Government Minister');
	});

});