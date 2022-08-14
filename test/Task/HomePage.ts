import AbstractPage from "./AbstractPage";

const MEDIA_LIBRARY_BUTTON='[data-balloon="Media Library"]';
class HomePage extends AbstractPage{

    public async clickOnmediaLibraryButton(){
        await $(MEDIA_LIBRARY_BUTTON).waitForDisplayed();
        await $(MEDIA_LIBRARY_BUTTON).click();
    }

}
export default new HomePage()
