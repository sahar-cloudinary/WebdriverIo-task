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
}