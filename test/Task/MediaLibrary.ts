import AbstractPage from "./AbstractPage";

class MediaLibrary extends AbstractPage{
    public get UploadButton(){
     return $('[data-test="upload-btn"]')
    }
    public async clickUploadButton(){
        await this.UploadButton.click()
    }
}
export default new MediaLibrary()