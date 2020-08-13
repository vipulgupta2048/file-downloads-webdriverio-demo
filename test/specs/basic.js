describe('Testing file downloads in headless browser', () => {
    it('should have the right title', () => {
        // Open the URL
        browser.url('http://www.fileformatcommons.com/txt-file-format/')
        
        // Set the download behavior of the page right before the download
        browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: '/home/vipulgupta2048/webd',
        });
        
        // Clicking the download button
        $('.wp-image-36').click()
        
        // Give enough time to let the file download
        browser.pause(5000)
    })
})
