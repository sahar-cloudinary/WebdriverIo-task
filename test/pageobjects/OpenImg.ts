class OpenImg{
    public get titleOfImg(){
        return $('[data-test="item-title"]')
    }
    public async assertImgIsVisible(){
        await (await this.titleOfImg).waitForDisplayed()
    }
}
export default new OpenImg()