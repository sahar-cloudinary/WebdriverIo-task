class OpenList{
    public get ManageOption(){
        return $('[data-test="action-manage-btn"]')
    } 
    public async clickManageOption(){
        await (await this.ManageOption).click()
    }

}
export default new OpenList()