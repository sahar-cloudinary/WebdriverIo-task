import AbstractPage from "./AbstractPage";

class MediaLibrary extends AbstractPage{
    public get UploadButton(){
     return $('[data-test="upload-btn"]')
    }
    public async clickUploadButton(){
        await browser.pause(3000);
        await this.UploadButton.waitForClickable();
        await this.UploadButton.click()
    }
}
export default new MediaLibrary()
