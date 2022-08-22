import './App.css';
import { Forecast } from './components/Forecast';

function App() {
  return (
    <Forecast />
  );
}

// function Display() {
//   return (
//     <div className='flex'>
//       <div className='w-full'>
//         <DisplayCurrentCast></DisplayCurrentCast>
//       </div>
//       <div className='w-72'>
//         <DisplayGraph></DisplayGraph>
//         <DisplayWeek></DisplayWeek>
//       </div>
//     </div>
//   ); 
// }

// function DisplayCurrentCast() {
//   return (
//     <div className='w-72 px-5 mt-16 mr-20'>
//       
//       <div>
//       
//         <span className=' text-4xl font-bold'>72°F</span>
//         <p className='text-center text-lg font-bold mb-5'>Cloudy</p>
//         <div className='flex'>
//           <DisplayState heading='Humidity' data='45' extention='%'></DisplayState>
//           <DisplayState heading='Wind speed' data='19.2' extention=' km/j'></DisplayState>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DisplayState(props) {
//   return (
//     <div className='w-full'>
//       <h1 className='text-center text-xs text-gray-400 mb-2'>{props.heading}</h1>
//       <p className='text-center text-sm font-medium'>{props.data}{props.extention}</p>
//     </div>
//   );
// }

// function DisplayGraph() {
//   return (
//     <div className='mt-10 mb-5'>
//       <h1 className='text-gray-400'>Temperature</h1>
//       <div className='bg-black'></div>
//     </div>
//   );
// }

// function DisplayWeek() {
//   return ( 
//     <div className='flex justify-between'>
//       <Day day='Today' amount='30'></Day>
//       <Day day='Nov 24' amount='36'></Day>
//       <Day day='Nov 25' amount='20'></Day>
//       <Day day='Nov 26' amount='15'></Day>
//     </div>
//   );
// }

// function Day(props) {
//   return (
//     <div className='p-10 rounded-md'>
//       <h1 className='text-gray-500 font-bold text-center text-sm'>{props.day}</h1>
//       <img alt='clouds'>{props.icon}</img>
//       <p className='font-light text-center text-xs'>Humidity</p>
//       <p className='font-medium text-center text-sm'>{props.amount}%</p>
//     </div>
//   );
// }

export default App;
