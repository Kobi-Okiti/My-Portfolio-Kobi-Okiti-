import './App.css'
import '@/public/portfolio.css'

function App() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#00347D4A]'>
      <div className='w-full flex flex-col items-center gap-[10px] max-sm:px-[10px]'>
        <i className="code-icon size-[150px] text-black" />
        <p className='font-medium text-[36px] text-center max-sm:text-[20px] uppercase'>My New Portfolio site is currently under development</p>
        <a href='https://kobi-okiti-portfolio.netlify.app/' className='hover:underline'>Click this link to my former/active portfolio</a>
      </div>
    </div>
  )
}

export default App
