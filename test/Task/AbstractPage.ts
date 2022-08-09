export default class AbstractPage{
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
        await $('//iframe[@data-test="uw-iframe"]').waitForDisplayed()
        browser.switchToFrame($('//iframe[@data-test="uw-iframe"]'))
        
    }
}