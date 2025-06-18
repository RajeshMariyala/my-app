"use client";

import { useFormik } from 'formik';
import * as Yup from 'yup';

const ValidationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      timeframe: '',
      size: '',
      quantity: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().required('Required'),
      timeframe: Yup.string().required('Required'),
      size: Yup.string().required('Required'),
      quantity: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);
      alert("Form submitted!");
    },
  });

  const inputClass = (field: keyof typeof formik.values) =>
    `w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F4F4F4] ${formik.touched[field] && formik.errors[field] ? 'border-red-500' : ''
    }`;

  return (
    <div className="EighthPage px-6 py-16 bg-white text-gray-800 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12">REQUEST A QUOTE</h2>
      <form className="max-w-5xl mx-auto space-y-6" onSubmit={formik.handleSubmit}>
       
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1" data-aos="fade-right">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={inputClass('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className="flex-1" data-aos="fade-left">
            <label className="block mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={inputClass('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6" data-aos="fade-right">
          <div className="flex-1">
            <label className="block mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={inputClass('phone')}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>
          <div className="flex-1" data-aos="fade-left">
            <label className="block mb-1">Timeframe <span className="text-red-600">*</span></label>
            <select
              name="timeframe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.timeframe}
              className={inputClass('timeframe')}
            >
              <option value="">Choose Time Frame</option>
              <option>1-2 weeks</option>
              <option>1 month</option>
              <option>3+ months</option>
            </select>
            {formik.touched.timeframe && formik.errors.timeframe && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.timeframe}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6" data-aos="fade-right">
          <div className="flex-1">
            <label className="block mb-1">Size <span className="text-red-600">*</span></label>
            <select
              name="size"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.size}
              className={inputClass('size')}
            >
              <option value="">Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            {formik.touched.size && formik.errors.size && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.size}</p>
            )}
          </div>
          <div className="flex-1" data-aos="fade-left">
            <label className="block mb-1">Quantity <span className="text-red-600">*</span></label>
            <select
              name="quantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quantity}
              className={inputClass('quantity')}
            >
              <option value="">Choose Quantity</option>
              <option>1-10</option>
              <option>10-50</option>
              <option>50+</option>
            </select>
            {formik.touched.quantity && formik.errors.quantity && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.quantity}</p>
            )}
          </div>
        </div>

        <div data-aos="zoom-in-right">
          <label className="block mb-1">Please Describe Your Project<span className="text-red-600">*</span></label>
          <textarea
            name="message"
            rows={6}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`${inputClass('message')} resize-none`}
            placeholder="Choose a project type"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>

        <p className="text-sm text-center text-gray-600 mt-6">
          By submitting this form you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
        </p>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition flex items-center"
          >
            Loerum Ipsum&nbsp;
            <img
              src="/right-arrow.png"
              alt="Right arrow"
              className="ml-2 w-4 h-4 object-contain"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ValidationForm;
