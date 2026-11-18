import {test,expect} from '@playwright/test'

test('Basic Actions Test Cases',async({page})=>{

    await page.goto("https://techwithsuresh.lovable.app/test")

    // Click Actions - Using  click method

    await page.locator('#test-click-button').click();
    await page.locator('#test-double-click-button').dblclick()
    await page.getByTestId('test-context-area').click({button:'right'});

    // Input Actions

    await page.getByTestId('test-input-text').fill("Suresh");

    // Type Character by Character

    await page.getByTestId("test-input-email").pressSequentially('Suresh@gmail.com');


    // Clear Text


    await page.getByTestId("test-input-email").clear();



    // Keyboard Actions

    await page.getByTestId('test-keyboard-input').press('Enter')
    await page.getByTestId('test-keyboard-input').press('Tab')
    await page.getByTestId('test-keyboard-input').press('Delete')
    await page.getByTestId('test-keyboard-input').press('Shift')
    await page.getByTestId('test-keyboard-input').press("Control+A")


    // Check Box and Un Check Box and Radio Buttons

    await page.getByTestId("test-reg-gender-male").check();
    await page.getByTestId('test-reg-skill-javascript').check();
    await page.getByTestId('test-reg-skill-javascript').uncheck();


    // Mouse Hover Actions

    await page.locator("#test-hover-card").hover()

    // Focus

    await page.locator("#test-hover-card").focus()

    // Upload File


    await page.getByTestId("test-file-upload").setInputFiles('Test-Data/Test.txt');

    // Drag and Drop

    await page.getByTestId("test-drag-source").dragTo(page.getByTestId("test-drop-target"));

    // Scroll

    await page.getByTestId("test-forgot-password").scrollIntoViewIfNeeded();

    // DownLoad File

    const downloadPromise = page.waitForEvent('download');

    await page.getByTestId("test-download-txt").click();

    const download = await downloadPromise;

    await download.saveAs('downloads/sample.txt')

    
















})