import AbstractPage from "./AbstractPage";

class uploadPager extends AbstractPage{
    public get AdvancedButton(){
        return $('[data-test="btn-advanced"]')
    }
    public get publicIdInput(){
        return $('[data-test="public-id"]')
    }

    public async AdvanceAndupload(Text:string){
        await this.AdvancedButton.waitForClickable()
        await this.AdvancedButton.click()
        await this.publicIdInput.setValue(Text)
    }


}
export default new uploadPager()
