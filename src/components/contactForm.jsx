
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Alert from './alert';


const Contact = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleName = (e) => { setFullName(e.target.value) }
  const handleEmail = (e) => { setEmail(e.target.value) }
  const handleMessage = (e) => { setMessage(e.target.value) }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 2000); // 3 seconds

      return () => clearTimeout(timer); // cleanup
    }
  }, [success]);


  const form = useRef();


  const sendEmail = (e) => {


    e.preventDefault();

    emailjs
      .sendForm('service_pdi7f85', 'template_xtgvrb6', form.current, {
        publicKey: 'rf8gjE1l6nw0JB_f9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(!success)

          setFullName('')
          setEmail('')
          setMessage('')

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }
  return (

    <main className="relative py-38 bg-[#000000] ">
      <div>{success && <Alert />

      }</div>
     <div className=" relative z-10 max-w-screen-xl mx-auto px-6 sm:px-6 md:px-8 text-gray-300">

        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-white font-semibold text-5xl text-center">GET IN TOUCH</h3>

          <p className="text-gray-400 text-center">
            We'd love to hear from you!
          </p>
        </div>

        {/* Dark styled form */}
        <div className="mt-12 mx-auto px-4 p-8 bg-gray-800/80 backdrop-blur-md sm:max-w-lg sm:px-8 sm:rounded-xl border border-gray-700">
          <form
            onSubmit={sendEmail} ref={form}

            className="space-y-5 text-gray-300">
            <div>
              <label className="font-medium text-gray-200">Full name</label>
              <input
                name='from_name'
                type="text"
                value={fullName}
                onChange={handleName}
                required
                className="w-full mt-2 px-3 py-2 bg-gray-900 text-white outline-none border border-gray-700 focus:border-cyan-500 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium text-gray-200">Email</label>
              <input
                name='from_email'
                type="email"
                value={email}
                onChange={handleEmail}
                required
                className="w-full mt-2 px-3 py-2 bg-gray-900 text-white outline-none border border-gray-700 focus:border-cyan-500 shadow-sm rounded-lg"
              />
            </div>



            <div>
              <label className="font-medium text-gray-200">Message</label>
              <textarea
                name='message'
                value={message}
                onChange={handleMessage}
                required
                className="w-full mt-2 h-36 px-3 py-2 bg-gray-900 text-white resize-none outline-none border border-gray-700 focus:border-cyan-500 shadow-sm rounded-lg"
              ></textarea>
            </div>

            <button
              className=" cursor-pointer w-full px-4 py-2 text-white font-medium bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 rounded-lg duration-150 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Background Blur Gradient */}
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </main>

  )


}

export default Contact