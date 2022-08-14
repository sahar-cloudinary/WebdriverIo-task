export default class AbstractPage{
    private IFRAME_SELECTOR='//iframe[@data-test="uw-iframe"]'
    public async visit(Url:string){
        await browser.url(Url)
    }
    public async waitForSeconds(seconds:number){
        await browser.pause(seconds*1000)
    }
    public getImg(img:string){
       return $(img).click({ button: 'right' })
    }
    public async switchToFrame(){
        await $(this.IFRAME_SELECTOR).waitForDisplayed()
        browser.switchToFrame(await $(this.IFRAME_SELECTOR));

    }
}
