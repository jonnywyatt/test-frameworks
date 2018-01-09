'use strict';

const puppeteer = require('puppeteer');
const path = require('path');
const dotEnvPath = path.resolve('./.env');
require('dotenv').config({ path: dotEnvPath});

let browser;
let page;

module.exports = {
	setup: async ()  => {
		browser = await puppeteer.launch({ headless: false });
		page = await browser.newPage();
		await page.goto('https://www.ft.com');
		await page.setCookie({
			name: "FTSession",
			value: process.env.FTSESSION,
			domain: ".ft.com",
			path: '/'
		});
	},

	teardown: async () => {
		await browser.close();
	},

	myAccount: async (url='https://myaccount.ft.com') => {
		await page.goto(url);
		const passwordSelector = '#password';
		await page.waitForSelector(passwordSelector, {visible: true});
		await page.type(passwordSelector, 'password');
		await page.click('#authentication-submit');
	},

	editPosition: async () => {
		const editSelector = '#viewUserDetails-Button';
		await page.waitForSelector(editSelector, {visible: true});
		await page.click(editSelector);
		await page.waitFor(3000);
		const positionSelector = '#position';
		await page.waitForSelector(positionSelector, {visible: true});
		await page.select(positionSelector, 'PO');
		await page.waitForSelector('#btn-saveUserDetails', {visible: true});
		await page.click('#btn-saveUserDetails');
		const positionLabelSelector = '#position-section';
		await page.waitForSelector(positionLabelSelector, {visible: true});
		return page.evaluate(() => document.querySelector('#position-section').innerText);
	}

};