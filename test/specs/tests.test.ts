import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import MediaLibrary from '../pageobjects/MediaLibrary'
import OpenImg from '../pageobjects/OpenImg'
import OpenList from '../pageobjects/OpenList'
describe('Firs Task',()=>{
    it('uplod page and log in',async()=>{
        await LoginPage.visit('https://staging.cloudinary.com/users/login')
        await LoginPage.assertLoginPageIsVisible()
        await LoginPage.login('sahar.abureesh@cloudinary.com','Sa316257211#')
        await LoginPage.waitForSeconds(3)
    })
    it('Open MediaLibrary and Click with right-click on the image ',async()=>{
        await HomePage.clickOnmediaLibraryButton()
        await MediaLibrary.getImg('//*[@id="main-content-wrapper"]/div/div[2]/div/div/div[1]/div/div/div[8]/article/div[2]/div/div/div')
        await LoginPage.waitForSeconds(3)
        })
    it('Choose the manage option and make sure the title is approptiate',async()=>{
        await OpenList.clickManageOption()
        await OpenImg.assertImgIsVisible()
        await LoginPage.waitForSeconds(3)
    })
})