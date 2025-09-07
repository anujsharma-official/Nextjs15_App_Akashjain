'use client'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import Logo from '@/public/assets/images/logo-black.png'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { zSchema } from '@/lib/zodSchema'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import ButtonLoading from '@/components/Application/ButtonLoading'
import Link from 'next/link'
import { WEBSITE_LOGIN } from '@/routes/WebsiteRoute'
import axios from 'axios'
import { showToast } from '@/lib/showToast'
import OTPVerification from '@/components/Application/OTPVerification'
import UpdatePassword from '@/components/Application/UpdatePassword'

const ResetPassword = () => {
    const [emailVerificationLoading, setEmailVerificationLoading] = useState(false)
    const [otpVerificationLoading, setOtpVerificationLoading] = useState(false)
    const [otpEmail, setOtpEmail] = useState()
    const [isOtpVerified, setIsOtpVerified] = useState(false)
    const formSchema = zSchema.pick({
        email: true
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })

    const handleEmailVerification = async (values) => {
        try {
            setEmailVerificationLoading(true)
            const { data: sendOtpResponse } = await axios.post('/api/auth/reset-password/send-otp', values)
            if (!sendOtpResponse.success) {
                throw new Error(sendOtpResponse.message)
            }
            setOtpEmail(values.email)
            showToast('success', sendOtpResponse.message)
        } catch (error) {
            showToast('error', error.message)
        } finally {
            setEmailVerificationLoading(false)
        }
    }

    // otp verification  
    const handleOtpVerification = async (values) => {
        try {
            setOtpVerificationLoading(true)
            const { data: otpResponse } = await axios.post('/api/auth/reset-password/verify-otp', values)
            if (!otpResponse.success) {
                throw new Error(otpResponse.message)
            }
            showToast('success', otpResponse.message)
            setIsOtpVerified(true)
        } catch (error) {
            showToast('error', error.message)
        } finally {
            setOtpVerificationLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 lg:p-8 bg-gray-50">
            <Card className="w-full max-w-md sm:max-w-lg lg:max-w-xl shadow-xl rounded-2xl">
                <CardContent className="p-6 sm:p-8">
                    <div className='flex justify-center mb-6'>
                        <Image
                            src={Logo.src}
                            width={150}
                            height={60}
                            alt='logo'
                            className='w-32 sm:w-40 lg:w-44'
                        />
                    </div>

                    {!otpEmail ? (
                        <>
                            <div className='text-center mb-6'>
                                <h1 className='text-2xl sm:text-3xl font-bold'>Reset Password</h1>
                                <p className="text-sm sm:text-base text-gray-600">
                                    Enter your email for password reset.
                                </p>
                            </div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(handleEmailVerification)} className="space-y-5">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="example@gmail.com"
                                                        {...field}
                                                        className="w-full"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <ButtonLoading
                                        loading={emailVerificationLoading}
                                        type="submit"
                                        text="Send OTP"
                                        className="w-full cursor-pointer"
                                    />

                                    <div className='text-center text-sm sm:text-base'>
                                        <Link href={WEBSITE_LOGIN} className='text-primary underline'>
                                            Back To Login
                                        </Link>
                                    </div>
                                </form>
                            </Form>
                        </>
                    ) : (
                        <>
                            {!isOtpVerified ? (
                                <OTPVerification
                                    email={otpEmail}
                                    onSubmit={handleOtpVerification}
                                    loading={otpVerificationLoading}
                                />
                            ) : (
                                <UpdatePassword email={otpEmail} />
                            )}
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default ResetPassword
