import './App.css';
import ChatBoard from './Components/ChatBoard';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className='bg-gray-950'>
      <Navbar />
      <div className='flex w-[80%] mx-auto gap-3'>
        <div className='w-[20%] hidden lg:block'>
          <SideBar />
        </div>
        <div className='lg:w-[70%]'>
          <ChatBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
