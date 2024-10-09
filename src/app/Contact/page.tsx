'use client'

import {FC} from 'react'
import Profile from '@/assets/contact-profile.svg'
import Image from 'next/image'
import Header from '@/components/Header'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact:FC = () => {
    return (
        <div className='mb-[100px]'>
            <Header></Header>
            <div className='grid grid-cols-2 font-neue-montreal text-[27px] pt-[140px] pr-[85px] pl-[80px]'>
                <div className='flex flex-col gap-10'>
                    <div>
                        <Image src={Profile} alt='profile-pic' width={297}/>
                    </div>
                    <div>
                        <p className='text-[18px]'>Contact details</p>
                        <h2>ayush.barnwal@brightscout.com</h2>
                        <h2>+91 8651447521</h2>
                    </div>
                    <div>
                        <p className='text-[18px]'>Socials</p>
                        <h2>LinkedIn</h2>
                        <h2>Instagram</h2>
                        <h2>Twitter</h2>
                        <h2>Webflow</h2>
                        <h2>Figma</h2>
                    </div>
                </div>
                <div className='flex flex-col items-left'>
                    <h1 className='text-[60px]'>Let’s build something</h1>
                    <h1 className='text-[60px] mb-[30px]'>cool together</h1>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            subject: '',
                            message: ''
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().required('Required !'),
                            email: Yup.string().email('Invalid email address !').required('Required !'),
                            subject: Yup.string().required('Required !'),
                            message: Yup.string().required('Required !')
                        })}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(()=> {
                                alert(JSON.stringify(values,null, 2));
                                setSubmitting(false);
                            },400);
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form className='text-[27px] space-y-[30px]'>
                                <div className='flex flex-col'>
                                    <label htmlFor='name' className='text-[18px]'>Name</label>
                                    <div className='flex justify-between'>
                                        <Field name='name' type='text' placeholder='James Robert' className='flex-grow'></Field>
                                        <ErrorMessage name='name' component='div' className='text-red-600'></ErrorMessage>
                                    </div>
                                    
                                    <hr className="border-t-2"></hr>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="email" className='text-[18px]'>Email</label>
                                    <div className='flex justify-between'>
                                        <Field name="email" type="email" placeholder="ayush.barnwal@brightscout.com"  className='flex-grow'/>
                                        <ErrorMessage name="email" component="div" className='text-red-600'/>
                                    </div>
                                    <hr className="border-t-2"></hr>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='subject' className='text-[18px]'>Subject</label>
                                    <div className='flex justify-between'>
                                        <Field name='subject' type='text' placeholder='For web design work Enquire' className='flex-grow'></Field>
                                        <ErrorMessage name='subject' component='div' className='text-red-600'></ErrorMessage>
                                    </div>
                                    <hr className="border-t-2"></hr>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='message' className='text-[18px]'>Message</label>
                                    <div className='flex justify-between h-[158px]'>
                                        <Field name='message' type='textarea' placeholder='Type your Message' className='flex-grow'></Field>
                                        <ErrorMessage name='message' component='div' className='text-red-600 text-center'></ErrorMessage>
                                    </div>
                                    <hr className="border-t-2"></hr>
                                </div>
                                <button type="submit" disabled={isSubmitting} className='bg-black text-white mt-[32px] w-[193px] h-[70px] rounded-[170px]'>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Contact