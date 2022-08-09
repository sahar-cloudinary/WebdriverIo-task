import HomePage from '../Task/HomePage'
import LoginPage from '../Task/LoginPage'
import MediaLibrary from '../Task/MediaLibrary'
import OpenImg from '../Task/OpenImg'
import OpenList from '../Task/OpenList'
import uploadPge from '../Task/uploadPge'
describe('Firs Task',()=>{
    before(async()=>{
        await LoginPage.visit('https://staging.cloudinary.com/users/login')
        await LoginPage.assertLoginPageIsVisible()
        await LoginPage.login('sahar.abureesh@cloudinary.com','Sa316257211#')
        await LoginPage.waitForSeconds(3)
        await HomePage.clickOnmediaLibraryButton()
    })
    it('Open MediaLibrary and Click with right-click on the image ',async()=>{
        await MediaLibrary.getImg('//*[@id="main-content-wrapper"]/div/div[2]/div/div/div[1]/div/div/div[8]/article/div[2]/div/div/div')
        await MediaLibrary.waitForSeconds(3)
        })
    it('Choose the manage option and make sure the title is approptiate',async()=>{
        await OpenList.clickManageOption()
        await OpenImg.assertImgIsVisible()
        await OpenImg.waitForSeconds(3)
    })
    it.only('click upload button and upload file ',async()=>{
        await MediaLibrary.clickUploadButton()
        await MediaLibrary.waitForSeconds(1)
        await MediaLibrary.switchToFrame()
        await uploadPge.AdvanceAndupload("first time")

    })
})