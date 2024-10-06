// import React, { useRef, useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// // import Footer from '../Components/Footer';

// const Contact = () => {
//   const contactForm = useRef();
//   const [message, setMessage] = useState('');
//   const [messageColor, setMessageColor] = useState('');
//   const [timeoutId, setTimeoutId] = useState(null);

//   const sendEmail = (e) => {
//     e.preventDefault();
    
//     const contactName = e.target.user_name.value;
//     const contactEmail = e.target.user_email.value;
//     const contactProject = e.target.user_project.value;

//     if (!contactName || !contactEmail || !contactProject) {
//       setMessage('Please fill in all fields 📩');
//       setMessageColor('text-red-500');
//       return;
//     }

//     emailjs.sendForm('service_7twnwfk', 'template_h3eecqp', contactForm.current, 'z5t0uz6DK3e1YDUbg')
//       .then(() => {
//         setMessage('Message sent ✅');
//         setMessageColor('text-blue-500');
//         e.target.reset(); // Clear the form
//       })
//       .catch(() => {
//         setMessage('OOPS! Something went wrong ❌');
//         setMessageColor('text-red-500');
//       });

//     // Clear message after three seconds
//     const id = setTimeout(() => {
//       setMessage('');
//     }, 5000);
//     setTimeoutId(id);
//   };

//   // Cleanup timeout on component unmount or on new submission
//   useEffect(() => {
//     return () => {
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//     };
//   }, [timeoutId]);

//   return (
//     <div className="max-w-lg mx-auto p-8 bg-blue-100 rounded-lg shadow-lg  " style={{marginTop:"140px"}}>
//       <h2 className="text-2xl font-semibold text-center mb-6">PLAN YOUR TRIP</h2>
   
//       <form ref={contactForm} onSubmit={sendEmail} className="space-y-4">
//         <div className="flex flex-col space-y-2">
//           <input 
//             type="text" 
//             name="user_name" 
//             required 
//             placeholder="YourName" 
//             className="contact_input contact_form-input p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input 
//             type="email" 
//             name="user_email" 
//             required 
//             placeholder="Your Email Address" 
//             className="contact_input contact_form-input p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex flex-col space-y-2">
//           <input 
//             type="text" 
//             name="person" 
//             placeholder="No. of Person" 
//             className="contact_input contact_form-input p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input 
//             type="number" 
//             name="user_number" 
//             placeholder="Mobile Number"
//             // img src="https://m.media-amazon.com/images/I/51kuJKg-ExL._UF1000,1000_QL80_.jpg"
//             className="contact_input contact_form-input p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <p className={`contact_message text-center ${messageColor}`}>{message}</p>

//         <textarea 
//           name="user_message" 
//           placeholder="Message" 
//           className="contact_input contact_form-input p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//           required 
//         ></textarea>

//         <button 
//           type="submit" 
//           className="w-full py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           Submit <i className="ri-arrow-right-up-line"></i>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>hfhuf</h1>
    </div>
  )
}

export default Contact

