import React from 'react'
import { useForm} from "react-hook-form"





function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitSuccessful,isSubmitting}
  }= useForm()

  async function onSubmit(data) {
    const formData = {
      access_key: 'c1d7a506-24d8-4ae7-ba16-315620fe0962', 
      name: data.name,
      email: data.email,
      message: data.message,
     
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert('Form submitted  successfully!');

      reset(); // clear form after success
    } else {
      console.error('Form submission error:', result);
    }
  }
  
  return (
    <section id="contact">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[600px] flex md:gap-18 gap-5 justify-center md:mt-10 mt-36 flex-col md:flex-row items-center"
      >
        {/* Left */}
        <div className="md:w-[400px]">
          <h1 className="text-4xl md:text-start text-center">
            About <span className="text-purple-600 font-semibold">Me</span>
          </h1>
          <h1 className="text-xl px-4 py-4">
            Aspiring software developer with hands-on experience from a 6-month internship at Sqilco.Passionate about coding, problem-solving, and building innovative solutions. Currently in Bca 6th Sem, continuously learning and exploring new technologies to shape the future of software development.
          </h1>
        </div>

        {/* Right */}
        <div className="w-[400px] flex flex-col gap-2">
          <h1 className="text-xl font-bold">Let's connect!</h1>

          <input
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 3, message: 'Min 3 characters' },
            })}
            className={`border-2 w-full rounded-[15px] h-[40px] p-2 focus:outline-none focus:border-purple-500 ${
              errors.name ? 'border-red-600' : ''
            }`}
            placeholder="Your Name..."
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            className={`border-2 rounded-[15px] h-[40px] p-2 focus:outline-none focus:border-purple-500 ${
              errors.email ? 'border-red-600' : ''
            }`}
            placeholder="Your Email..."
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}

          <textarea
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Min 10 characters' },
            })}
            className={`border-2 rounded-[15px] h-[130px] p-2 focus:outline-none focus:border-purple-500 ${
              errors.message ? 'border-red-600' : ''
            }`}
            placeholder="Your Message..."
          />
          {errors.message && <p className="text-red-600">{errors.message.message}</p>}

          <button 
            type="submit"
            disabled={isSubmitting||isSubmitSuccessful}
            className="border-2 bg-purple-500 text-white h-[60px] font-bold text-xl rounded-[8px] cursor-pointer" 
          >{isSubmitting ? 'Sending...' : isSubmitSuccessful ? 'Sent!' : 'Send Message'}
            
          </button>
          
        </div>
      </form>
    </section>
  );
}

export default Contact;