import SingleServicePageHeader from '../Single service page components/Single service Header/SingleServicePageHeader'
import './Seo.scss'
import ServicesImageSectionLeft from '../Single service page components/Left image section/ServicesImageSectionLeft'
import SingleServiceRightImage from '../Single service page components/Right image section/SingleServiceRightImage'
function SeoPage() {
  return (
    <div className='seo-container'>
        {/* header section */}
        <SingleServicePageHeader/>
        {/* left image section */}
        <ServicesImageSectionLeft/>
        {/* right image section */}
        <SingleServiceRightImage/>
    </div>
  )
}

export default SeoPage;