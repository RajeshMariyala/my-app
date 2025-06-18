import React from 'react';
import Image from 'next/image';

import Card from './Cards';
import FAQPage from './FAQs';
import ValidationForm from './ValidationForm';
import OptionsSection from './OptionsSelection';
import ReviewPage from './ReviewsPage';

const HomePage = () => {
    return (
        <>
            <div className="MainPage mb-7 bg-white">
                <div className="relative min-h-screen w-full overflow-hidden">
                    <div className="absolute top-0 right-0 left-10 bottom-0 z-0 flex justify-end ">
                        <Image
                            src="/main.png"
                            alt="Design"
                            width={750}
                            height={350}
                            className="object-contain max-w-full h-auto"
                            data-aos="flip-right"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/80 via-white/40 to-transparent blur-sm pointer-events-none" />
                    </div>

                    <div
                        className="absolute top-0 left-0 z-10 p-6 sm:p-10 flex items-center w-full h-full bg-white"
                        style={{
                            clipPath:
                                'polygon(0 0, 71% 0, 52% 100%, 0% 100%)',
                        }}
                    >
                        <div className="z-20 w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:ml-20">

                            <h1
                                className="text-[74px] md:text-5xl font-extrabold mb-4 font-roboto-condensed  font-[Roboto_Condensed]"
                                data-aos="fade-down-right"
                            >
                                Lorem ipsum dolor<br />sit amet
                            </h1>

                            <p
                                className="text-sm sm:text-base font-nter leading-relaxed"
                                data-aos="fade-up-right"
                            >
                                Lorem ipsum dolor sit amet consectetue. Enim netus cras congue quis elit<br />
                                sociis. Sen mi rhoncus id habitant. In urna tellus nisi platea morbi libero<br />
                                imperdiet neque. Justo suspendisse tristique posuere quis eget viverra.<br />
                                Nunc euismod ultrices etiam nulla habitasse.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4" data-aos="zoom-out-up">
                                <input
                                    type="text"
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"

                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
                                    Submit
                                    <img src="/right-arrow.png" alt="Right arrow" className="ml-2 w-4 h-4 object-contain" />
                                </button>
                            </div>

                            <div className="mt-4 flex items-center gap-2" data-aos="zoom-out-up">
                                <img src="/down-chevron.png" alt="Chevron" className="w-4 h-4 object-contain" data-aos="zoom-out-left" />
                                <span className="text-sm">No credit card required!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className='SecondPage mt-5 mb-7 h-[850px] pb-10 ' data-aos="fade-up" data-aos-duration="3000">
                <div className="min-h-screen bg-white flex justify-end p-0 -mt-5">
                    <div className="bg-white z-10 relative shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex flex-col md:flex-row-reverse w-full max-w-[88rem] overflow-hidden h-[54rem]">


                        <div className="md:w-1/2 relative pl-10 pt-10 pb-10 p-10" data-aos="fade-left">
                            <Image src="/secondpagebikes.png" alt="Feature preview" width={800} height={500} className="object-cover w-full h-full" />
                        </div>

                        <div className="md:w-1/2 p-8 ml-8 pb-16">
                            <p className='text-[#0546D2] text-[24px] font-bold'>Lorem ipsum dolor sit</p>
                            <br />
                            <h2 className="text-[42px] font-extrabold mb-2 font-[Roboto_Condensed] leading-tight">
                                LOREM IPSUM<br />DOLOR SIT AMET
                            </h2>

                            <p className="text-black-700 mb-6">
                                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis<br />
                                donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in<br />
                                nam, Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                            </p>

                            <div className="flex items-center mb-4">
                                <img src="/bullet.png" alt="Feature 1" className="w-30 h-30 mr-10" data-aos="fade-right" />
                                <span className="text-black font-medium">Lorem ipsum dolor sit amet consectetur.<br />Vestibulum ornare fermentum feugiat.</span>
                            </div>

                            <div className="flex items-center mb-4">
                                <img src="/hand1.png" alt="Feature 2" className="w-30 h-30 mr-10" data-aos="fade-right" />
                                <span className="text-black font-medium">Lorem ipsum dolor sit amet consectetur.<br />Dictum at ac tellus faucibus urna<br />ullamcorper id dui cursus. Venenatis.</span>
                            </div>

                            <div className="flex items-center mb-4">
                                <img src="/hand2.png" alt="Feature 3" className="w-30 h-30 mr-10" data-aos="fade-right" />
                                <span className="text-black font-medium">Lorem ipsum dolor sit amet consectetur.<br />Vestibulum nisl morbi metus gravida eu<br />facilisi enim. Ut diam auctor tortor tincidunt.</span>
                            </div>
                            <div className="flex items-center space-x-4 mt-10" data-aos="fade-right">
                                <button className="bg-[#1959AC] text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
                                    Loerum Ipsum
                                    <img src="/right-arrow.png" alt="Right arrow" className="ml-2 w-4 h-4 object-contain" />
                                </button>

                                <div className="flex items-center">
                                    <img src="/telephone.png" alt="Phone icon" className="w-4 h-4 object-contain mr-2" />
                                    <span className="text-[#043898]">123456789</span>
                                </div>
                            </div>

                        </div>

                        <div className="absolute bottom-0 left-0 w-[95%] h-4 bg-[linear-gradient(to_right,_#043898,_#079902,_#170041)] z-0" data-aos="zoom-in-down"></div>

                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className='ThirdPage'>
                <div className="min-h-screen bg-white flex justify-end p-0 -mt-5">
                    <div className="bg-white  flex flex-col md:flex-row-reverse w-full max-w-[88rem] overflow-hidden h-[48rem] relative">

                        <div className="md:w-1/2 relative pl-10 pt-10 pb-10 p-10 m-8" data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <Image src="/Talking.png" alt="Feature preview" width={500} height={400} className="object-cover" />
                        </div>

                        <div className="md:w-1/2 p-8 ml-8" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <p className='text-[#0546D2] font-bold text-[24px]'>Lorem ipsum dolor sit amet</p>
                            <br />
                            <p className="text-3xl font-bold mb-4 font-roboto-condensed tracking-tight">
                                LOREM IPSUM DOLOR SIT <br />AMET CONSECTETUR. EU<br />ELIT.
                            </p>

                            <p className="text-black-700 mb-4">
                                Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend<br />
                                condimentum in vitae faucibus. Amet massa malesuada sit pretium.Donec<br />
                                pharetra erat lacus suspendisse ornare.
                            </p>

                            <div className="flex items-center mb-4">
                                <img src="/safety.png" alt="Feature 1" className="w-10 h-10 mr-5 mb-15" />
                                <span className="text-gray-800 font-medium">
                                    <span className='font-bold'>Lorem ipsum dolor sit amet consectetur.Volutpat hac morbi egests.</span>
                                    <br />Lorem ipsum dolor sit amet consectetur.Eros egestas et arcu eu non<br />viverra.Risus quam mattis senectus vitae interdum odio ornare gravida<br />vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</span>
                            </div>

                            <div className="flex items-center mb-4">
                                <img src="/safety.png" alt="Feature 1" className="w-10 h-10 mr-5 mb-15" />
                                <span className="text-gray-800 font-medium"><span className='font-bold'>Lorem ipsum dolor sit amet consectetur.Volutpat hac morbi egests.</span><br />Lorem ipsum dolor sit amet consectetur.Eros egestas et arcu eu non<br />viverra.Risus quam mattis senectus vitae interdum odio ornare gravida<br />vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</span>
                            </div>

                            <div className="flex items-center mb-4">
                                <img src="/safety.png" alt="Feature 1" className="w-10 h-10 mr-5 mb-15" />
                                <span className="text-gray-800 font-medium"><span className='font-bold'>Lorem ipsum dolor sit amet consectetur.Volutpat hac morbi egests.</span><br />Lorem ipsum dolor sit amet consectetur.Eros egestas et arcu eu non<br />viverra.Risus quam mattis senectus vitae interdum odio ornare gravida<br />vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</span>
                            </div>

                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-4 bg-[linear-gradient(to_right,_#043898,_#079902,_#170041)]" data-aos="zoom-out-left"></div>
                    </div>
                </div>
            </div>

            <br />

            <div className="FourthPage relative w-full h-screen overflow-hidden">
                <Image
                    src="/Bikers.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-0"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

                <div className="absolute top-0 left-0 w-full h-full z-20 text-white" >
                    <div className="text-2xl font-extrabold bg-gray-300 text-black px-4 py-1 p-6 w-26 m-16 font-robotoCondensed -mb-15">
                        LOGO
                    </div>

                    <div className="flex items-center justify-center h-full px-4" data-aos="zoom-in-down">
                        <div className="text-center font-nter font-bold px-6 max-w-4xl">
                            <h1 className="text-4xl font-nter mb-4">
                                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS<br />
                                ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
                            </h1>
                            <p className="text-lg">
                                Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum<br />
                                nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id <br />
                                sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam <br />
                                condimentum nulla quam.
                            </p>
                            <p className="text-lg">
                                Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum <br />
                                ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra<br />
                                quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt<br />
                                morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="FifthPage py-16 px-6 bg-white text-center">
                <h2 className="text-3xl font-bold mb-12 text-black font-roboto-condensed tracking-tighter">LOREM IPSUM DOLOR SIT AMET<br />CONSECTETUR. COMMODO LEO AMET.</h2>

                <div className="space-y-12">

                    <div className="flex justify-center items-center gap-25 flex-wrap" data-aos="zoom-in-right">
                        <div className="h-20 w-36 flex items-center justify-center">
                            <img src="/logo1.png" alt="Logo 1" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-20 w-36 flex items-center justify-center">
                            <img src="/logo2.png" alt="Logo 2" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-20 w-36 flex items-center justify-center">
                            <img src="/logo3.png" alt="Logo 3" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-20 w-36 flex items-center justify-center">
                            <img src="/logo4.png" alt="Logo 4" className="h-full w-full object-contain" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-25 flex-wrap" data-aos="zoom-in-left">
                        <div className="h-28 w-44 flex items-center justify-center">
                            <img src="/logo5.png" alt="Logo 5" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-28 w-44 flex items-center justify-center">
                            <img src="/logo6.png" alt="Logo 6" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-28 w-44 flex items-center justify-center">
                            <img src="/logo7.png" alt="Logo 7" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-28 w-44 flex items-center justify-center">
                            <img src="/logo8.jpg" alt="Logo 8" className="h-full w-full object-contain" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-25 flex-wrap -mt-15" data-aos="zoom-in">
                        <div className="h-30 w-50 flex items-center justify-center">
                            <img src="/logo9.png" alt="Logo 9" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-20 w-36 flex items-center justify-center">
                            <img src="/logo10.png" alt="Logo 10" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-50 w-45 flex items-center justify-center">
                            <img src="/logo11.jpg" alt="Logo 11" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-40 w-40 flex items-center justify-center">
                            <img src="/logo12.jpg" alt="Logo 12" className="h-full w-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className='SixthPage py-16 px-6 bg-white text-center -mt-17'>
                <div className='text-left ml-15' data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <p className='text-[#0546D2] font-bold mb-2 text-[24px] tracking-tighter'>Lorem ipsum dolor sit amet</p>
                    <p className='font-roboto-condensed font-bold text-3xl tracking-tight'>LOREM IPSUM DOLOR SIT</p><br />
                    <p className='mb-12 text-lg font-nter'>
                        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi<br />
                        porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis<br />
                        aliquet. Hendrerit tellus at purus lectus.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row justify-center gap-20'>

                    <div className='w-full md:w-1/3 bg-white shadow-md  rounded-2xl' data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src="/image1.png" alt="Card 1" className='w-full h-80 object-cover object-center rounded-t-xl ' />
                        <div className='mt-4 text-left  p-5' >
                            <p className='text-lg font-semibold mb-1'>Lorem ipsum dolor sit amet</p>
                            <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit amet consectetur. Nunc<br />gravida consequat faucibus cursus nisi. Nunc<br />montes molestie a vitae vulputate. Phasellus in<br />pulvinar et vitae. Mi eget lectus nec et. Libero<br />iaculis diam nam mauris a eget. Quam nibh<br />rhoncus enim venenatis bibendum.</p>
                            <a href="#" className='text-blue-600 font-medium hover:underline'>Learn More </a>
                        </div>
                    </div>


                    <div className='w-full md:w-1/3 bg-white shadow-md  rounded-2xl' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src="/image2.png" alt="Card 2" className='w-full h-80 object-cover object-center rounded-t-xl ' />
                        <div className='mt-4 text-left  p-5' >
                            <p className='text-lg font-semibold mb-1'>Lorem ipsum dolor sit amet</p>
                            <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit amet consectetur. Nunc<br />gravida consequat faucibus cursus nisi. Nunc<br />montes molestie a vitae vulputate. Phasellus in<br />pulvinar et vitae. Mi eget lectus nec et. Libero<br />iaculis diam nam mauris a eget. Quam nibh<br />rhoncus enim venenatis bibendum.</p>
                            <a href="#" className='text-blue-600 font-medium hover:underline'>Learn More </a>
                        </div>
                    </div>
                </div>.
                <div className='flex flex-col md:flex-row justify-center gap-20'>

                    <div className='w-full md:w-1/3 bg-white shadow-md  rounded-2xl' data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src="/image3.png" alt="Card 1" className='w-full h-80 object-cover rounded-t-xl' />
                        <div className='mt-4 text-left  p-5' >
                            <p className='text-lg font-semibold mb-1'>Lorem ipsum dolor sit amet</p>
                            <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit amet consectetur. Nunc<br />gravida consequat faucibus cursus nisi. Nunc<br />montes molestie a vitae vulputate. Phasellus in<br />pulvinar et vitae. Mi eget lectus nec et. Libero<br />iaculis diam nam mauris a eget. Quam nibh<br />rhoncus enim venenatis bibendum.</p>
                            <a href="#" className='text-blue-600 font-medium hover:underline'>Learn More </a>
                        </div>
                    </div>


                    <div className='w-full md:w-1/3 bg-white shadow-md  rounded-2xl' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src="/image4.png" alt="Card 2" className='w-full h-80 object-cover rounded-t-xl' />
                        <div className='mt-4 text-left  p-5' >
                            <p className='text-lg font-semibold mb-1'>Lorem ipsum dolor sit amet</p>
                            <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit amet consectetur. Nunc<br />gravida consequat faucibus cursus nisi. Nunc<br />montes molestie a vitae vulputate. Phasellus in<br />pulvinar et vitae. Mi eget lectus nec et. Libero<br />iaculis diam nam mauris a eget. Quam nibh<br />rhoncus enim venenatis bibendum.</p>
                            <a href="#" className='text-blue-600 font-medium hover:underline'>Learn More </a>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="SeventhPage relative w-full h-[605px]">

                <Image
                    src="/seventhmain.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                    unoptimized
                    className="z-0"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>


                <div className="absolute top-0 left-0 w-full h-full z-10 text-white">
                    <div className="text-2xl font-extrabold bg-gray-300 text-black px-4 py-1 p-6 w-26 m-16 font-robotoCondensed -mb-15" data-aos="fade-right">
                        LOGO
                    </div>

                    <div className="flex items-center justify-center h-full" data-aos="fade-down-right">
                        <div className="text-center font-nter font-bold px-6">
                            <h1 className="text-4xl font-nter mb-0 leading-snug">
                                DOLOR SIT AMET CONSECTETUR. QUIS<br />ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA<br />MI. DOLOR SIT AMET CONSECTETUR. QUIS<br />ADIPISCING
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="EighthPage px-6 py-16 bg-white text-gray-800">
                <ValidationForm />
            </div>

            <br />

            <div className="NinthPage h-[500px] bg-[#F3F3F3] px-10 py-10 flex items-center pl-20">

                <div className="w-1/2 space-y-4">

                    <h2 className="text-xl font-nter font-bold text-[#0546D2]">Lorem Ipsum</h2>

                    <p className="text-3xl font-extrabold tracking-tight">Lorem Ipsum Dolor<br /> Sit Amet</p>

                    <div className="space-y-1 font-roboto-condensed text-base text-black">
                        <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet</p>
                        <p>aliquet morbi suspendisse convallis. Urna a urna lectus donec</p>
                        <p>felis risus duis pellentesque. Pellentesque ultricies ispum.</p>
                    </div>

                    <div className="flex gap-4 mt-15" data-aos="zoom-in-right">
                        <img
                            src="/playstore.png"
                            alt="Download on Google Play"
                            className="h-12 object-contain"
                        />
                        <img
                            src="/Appstore.png"
                            alt="Download on Apple Store"
                            className="h-12 object-contain"
                        />
                    </div>
                </div>

                <div className="w-1/2 flex justify-center" data-aos="zoom-in-up">
                    <img
                        src="/hand.png"
                        alt="Phone"
                        className="h-[450px] object-contain"
                    />
                </div>
            </div>

            <br /><br /><br />

            <div className="TenthPage h-[700px] bg-[#F1F5F9] flex px-10 py-12 pl-18 -pr-10 overflow-hidden">
                <div className="w-1/2 flex flex-col justify-between">
                    <div className='flex'>
                        <div className="space-y-5 ">
                            <h3 className="text-xl text-[#475569] font-Inter font-bold">NO LIMITS</h3>
                            <h2 className="text-3xl font-bold text-gray-900 font-[Roboto_Condensed]">LOREM IPSUM DOLOR SIT<br />AMET</h2>
                            <div className="text-base text-black-600 space-y-1">
                                <p>Lorem ipsum dolor sit amet consectetur. Nisl faucibus</p>
                                <p>vitae porttitor tempor quis arcu. Ipsum</p>
                                <p>nullam.</p>
                            </div>
                            <button className="mt-4 bg-[#1959AC] text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition flex items-center">
                                Loerum Ipsum &nbsp;
                                <img src="/right-arrow.png" alt="Right arrow" className="ml-2 w-4 h-4 object-contain" />
                            </button>
                        </div>
                        <img src="/bike1.png" alt="bike1" className="w-[135.07px] h-[241px] object-cover  ml-41 mt-37" data-aos="zoom-in" />
                    </div>
                    <div className="flex gap-5 mt-6 ml-17">
                        <img src="/bike8.png" alt="bike8" className="w-[135px] h-[210px] object-cover mt-17 " data-aos="zoom-in" />
                        <img src="/bike5.png" alt="bike5" className="w-[459px] h-[239px] object-cover " data-aos="zoom-in" />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-5 pl-6">
                    <div className="flex gap-5">
                        <img src="/bike2.png" alt="bike2" className="w-[135px] h-[210px] object-cover mt-7" data-aos="zoom-in" />
                        <img src="/bike3.png" alt="bike3" className="w-[470px] h-[240px] object-cover" data-aos="zoom-in" />
                    </div>

                    <img src="/bike4.png" alt="bike4" className="w-[624px] h-[312px] object-cover" data-aos="zoom-in" />

                    <div className="flex gap-5">
                        <img src="/bike6.png" alt="bike6" className="w-[135px] h-[231px] object-cover" data-aos="zoom-in" />
                        <img src="/bike7.png" alt="bike7" className="w-[470px] h-[240px] object-cover" data-aos="zoom-in" />

                    </div>
                </div>
            </div>

            <br /><br /><br />

            <div className='EleventhPage h-[600px] bg-[#F8F8F8] flex overflow-visible relative mt-30 mr-13 ml-1'>

                <div className="relative w-[550px] h-[550px]" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img
                        src="/2bikers.png"
                        alt='bikers'
                        className='absolute  -top-18 w-[550px] h-[550px] object-contain z-10'
                    />
                </div>

                <div className='ml-30 mt-15' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <p className='text-lg text-[#0546D2] font-bold'>Lorem ipsum</p>
                    <br />
                    <div className='font-[Roboto_Condensed] text-3xl font-bold'>
                        <p><span className='text-[#1959AC]'>LOREM</span> IPSUM DOLOR SIT</p>
                        <p>AMET CONSECTETUR. ENIM</p>
                        <p>DONEC.</p>
                    </div><br />
                    <p>Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim<br />amet non.</p>
                    <br />
                    <div className='flex font-bold'>
                        <div className='w-1/2'>
                            <p>Lorem Ipsum</p><br />
                            <p>Lorem Ipsum</p><br />
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className='w-1/2'>
                            <p>Lorem Ipsum</p><br />
                            <p>Lorem Ipsum</p><br />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <br /><br />
                    <button className="mt-4 bg-[#1959AC] text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition flex items-center h-[35px]">
                        Loerum Ipsum &nbsp;
                        <img src="/right-arrow.png" alt="Right arrow" className="ml-2 w-4 h-4 object-contain" />
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 w-[95%] h-4 bg-[linear-gradient(to_right,_#043898,_#079902,_#170041)]" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"></div>
            </div>

            <br /> <br /><br /> <br />

            <div className="TwelfthPage h-[830px] bg-[#155ADA] text-[#ffffff] px-12 py-10 relative">
                <ReviewPage />
            </div>

            <br />

            <div className="ThirteenthPage flex flex-col lg:flex-row bg-white px-10 py-16 text-gray-800 mb-35">
                <OptionsSection />
            </div>

            <br />

            <div className='FourteenthPage relative h-[624px] bg-[#F1F1F1] flex items-center px-15 pt-50'>
                <div className='w-1/2 space-y-6' >
                    <h1 className='text-[#1959AC] font-bold font-[Roboto_Condensed] text-3xl leading-snug'>
                        LOREM IPSUM DOLOR SIT<br />AMET CONSECTETUR.<br />DIGNISSM TELLUS.
                    </h1>
                    <p className="text-black leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit<br />
                        laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt<br />
                        ultricies feugiat mauris. Aliquam platea turpis porta nisl feils. Massa in <br />
                        facilisi semper libero eget eu quisque bibendum platea. Tortor fames.
                    </p>

                    <button className="bg-[#1959AC] text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
                        Loerum Ipsum
                        <img src="/right-arrow.png" alt="Right arrow" className="ml-2 w-4 h-4 object-contain" />
                    </button>

                    <div className='h-[330px] w-[460px] bg-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)] p-4 pl-9 z-10 relative'>
                        <p className='font-bold mt-3'>Lorem ipsum dolor sit</p><br />
                        <p className='pb-2'>Lorem ipsum dolor sit amet consectetur. Habitant<br />vestibulum vitae amet habitasse semper.</p>
                        <p className='pb-2'>Lorem ipsum dolor sit amet consectetur. Egestas <br />congum mattis ut placerat vitae amet suspendisse<br />fermentum velit. Nibh dolor nunc id tristique sit.</p>
                        <p className='pb-2'>Lorem ipsum dolor sit amet consectetur. Hac netus<br /> consectetur amet quisque scelerisque facilisi. Ultrices <br />lectus viverra pharetra commondo.</p>
                    </div>
                </div>

                <div className='w-1/2 flex justify-end overflow-visible'>
                    <img src="/delivery.png" alt="Descriptive Alt" className='absolute top-[-80px] right-0 h-[500px] w-auto object-contain z-20' data-aos="fade-down-left"/>
                </div>

                <div className="absolute bottom-0 left-0 w-[95%] h-4 z-0 bg-[linear-gradient(to_right,_#043898,_#079902,_#170041)] overflow-hidden"></div>
            </div>

            <br />
            <br /><br /><br /><br /><br /><br />

            <div className='FifteenthPage font-black h-[650px]  justify-center  text-center px-6'>
                <div className='w-[80%] mx-auto'>
                    <h2 className='text-3xl mb-4 font-[Roboto_Condensed]'>LOREM IPSUM DOLOR SIT AMET</h2>
                    <p className='text-base font-normal'>
                        Aliquet sed nulla tincidunt pulvinar sed fames sit dictumst. Ornare faucibus quis velit fringilla aliquam ultrices.
                        Malesuada ut aliquam at ac est<br /> nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare.
                        Risus elit et fringilla habitant ut facilisi.
                    </p>
                </div>
                <div className='flex mt-5 justify-center'>
                    <Card />
                </div>
            </div>

            <br />

            <div className='SixteenthPage h-[700px] bg-[#FBFBFB]'>
                <FAQPage />
            </div>



            <div className="SeventeenthPage flex flex-col items-center text-center px-4 py-10 space-y-6">

                <div className="text-2xl font-extrabold bg-gray-300 text-black px-5 py-2 p-6 w-29 m-6 font-robotoCondensed">
                    LOGO
                </div>

                <h1 className="font-bold font-[Roboto_Condensed] text-3xl leading-snug">
                    LOREM IPSUM DOLOR SIT AMET
                    <br />
                    CONSECTETUR. DUI.
                </h1>

                <p className="font-[Inter] text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Nisl faucibus
                    <br />
                    vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
                </p>

                <button className="mt-4 bg-[#1959AC] text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition flex items-center justify-center h-[40px]">
                    Loerum Ipsum
                    <img
                        src="/right-arrow.png"
                        alt="Right arrow"
                        className="ml-2 w-4 h-4 object-contain"
                    />
                </button>
            </div>
            <br />
            <br />
            <br />

        </>
    );
};

export default HomePage;
