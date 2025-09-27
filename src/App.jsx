
import './App.css'
import ContentPage1 from './components/page1/ContentPage1'
import ContentPage5 from './components/page5/ContentPage5'
import HeaderWeb from './components/share/HeaderWeb'




function App() {
 

  return (
    <>
      <HeaderWeb/>
     <div className='mt-[150px]'>
      <ContentPage1/>
     </div>

      <ContentPage5/>
    </>
  )
}

export default App
