module.exports = {

before(browser) {
	browser.windowMaximize();
	browser.url(browser.globals.GOOGLE_URL);
 },

after(browser){
    browser.end();
 },


	'@tags' : ['Google'],
	'Demo 02' : function (browser) {
		browser
		.assert.title("Google")
		.waitForElementVisible('body', 25000)
		.setValue('input[title=Buscar]', 'Hello')
		.assert.containsText('.erkvQe:first-child', 'hello')
	},

};