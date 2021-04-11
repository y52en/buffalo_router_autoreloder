from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.binary_location = '/usr/bin/google-chrome'
options.add_argument('--headless')
options.add_argument('--window-size=1280,1024')

driver = webdriver.Chrome('chromedriver', options=options)

driver.get('https://ja.wikipedia.org/wiki/Google_Chrome')
driver.save_screenshot('./screenshot.png')
driver.quit()
