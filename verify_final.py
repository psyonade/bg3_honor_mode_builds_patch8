import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Test Desktop Gear
        await page.set_viewport_size({"width": 1280, "height": 800})
        await page.goto("http://localhost:3000")

        # Switch to Gear tab
        await page.click("button.tab-btn:has-text('Gear')")
        await page.wait_for_timeout(1000)

        # Take screenshot of gear
        await page.screenshot(path="verify_gear_final.png")
        print("Desktop Gear screenshot saved.")

        # Test Mobile
        await page.set_viewport_size({"width": 375, "height": 667})
        await page.reload()
        await page.click("button.tab-btn:has-text('Gear')")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verify_gear_mobile_final.png")
        print("Mobile Gear screenshot saved.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
