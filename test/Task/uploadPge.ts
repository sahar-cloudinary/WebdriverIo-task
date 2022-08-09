import AbstractPage from "./AbstractPage";

class uploadPager extends AbstractPage{
    public get AdvancedButton(){
        return $('Element inside cross-origin iframe. Copy Selectors by right click on element or open iframe src url in new tab.')
    }
    public get publicIdInput(){
        return $('[data-test="public-id"]')
    }

    public async AdvanceAndupload(Text:string){
        await this.AdvancedButton.click()
        await this.publicIdInput.setValue(Text)
    }


}
export default new uploadPager()
