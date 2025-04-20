
import './App.css'
import HeaderNav from './Components/Header/header.jsx'
import dog from './assets/imgs/dog.png'
import safe from './assets/imgs/safe.png'
import PetCategories from './Components/Categories/Categories.jsx'
import FooterComponent from './Components/Footer/Footer.jsx'
import CardSkeleton from './Components/Card/card.jsx'
import Cat1 from './assets/imgs/cat1.png'
import Fluffy from './assets/imgs/fluffy.png'
import New from './assets/imgs/new.png'
import Orange from './assets/imgs/orange.png'
import AuthorCard from './Components/Card/AuthorCard';


function App() {
  return (
    <div className="w-full">
      <nav className='pt-5 pr-10 bg-[#575CEE] h-20'>
        <HeaderNav />
      </nav>

      <section>
        <div className='p-10'>
          <div className='grid grid-cols-3 bg-[#575CEE] w-full rounded-4xl p-10 relative'>
            <div className='flex  flex-col justify-center'>
              <h1 className='text-6xl font-bold text-white '>
                Paw Care

              </h1>
              <span className='block text-white text-xl text-md font-normal'>
                  <p>Check out our new font generator  <br /> and level upyour social bios. <br />Need more?</p>
                </span>
            </div>

         <div className=' flex  flex-col justify-center'>
          <img className=' h-16 object-contain' src={safe} alt="" />
         </div>

            <div className='flex justify-center'>
              <img className='h-64 object-contain' src={dog} alt="Dog" />
            </div>
          </div>
        </div>
      </section>

      <section >
        <PetCategories />
      </section>


<div class="my-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300  before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">More</div>

<div className='flex justify-center gap-5 '>
<CardSkeleton   Pic={Cat1} Title={' British short-hair  '} Description={'British short hair is a cat breed '}/>
<CardSkeleton  Pic={Fluffy} Title={'Fluffy'} Description={'Fluffy wooof is a dog breed  '}/>
<CardSkeleton  Pic={New} Title={'Dotted dog'} Description={'Dotted dog is a dog breed'}/>
<CardSkeleton  Pic={Orange} Title={'Orange punched face'} Description={'Orange punched face is a cat breed'}/>
</div>

<h1 className='text-center text-3xl font-bold pt-10 '>General Guide</h1>
<div className='flex justify-center gap-5 pt-10 pl-10 pr-10'>

<AuthorCard authorName='Atif Afridi' backgroundImage='https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600' title='The Queen'  />
<AuthorCard  backgroundImage='https://images.pexels.com/photos/31661820/pexels-photo-31661820/free-photo-of-majestic-gray-wolf-in-snowy-montana-wilderness.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
<AuthorCard backgroundImage='https://images.pexels.com/photos/106689/pexels-photo-106689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
<AuthorCard backgroundImage='https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
</div>


      <footer className='pt-20'>
       <FooterComponent/>
      </footer>
    </div>

  )
}

export default App









