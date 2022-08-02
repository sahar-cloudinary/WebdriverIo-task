import AbstractPage from "./AbstractPage";

class HomePage extends AbstractPage{
    public get mediaLibraryButton(){
        return $('[data-balloon="Media Library"]')
    }
    public async clickOnmediaLibraryButton(){
        await this.mediaLibraryButton.click()
    }

}
export default new HomePage()