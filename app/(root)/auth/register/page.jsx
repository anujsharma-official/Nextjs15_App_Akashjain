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
import { z } from 'zod'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import Link from 'next/link'
import { WEBSITE_LOGIN } from '@/routes/WebsiteRoute'
import axios from 'axios'
import { showToast } from '@/lib/showToast'

const RegisterPage = () => {
    const [loading, setLoading] = useState(false)
    const [isTypePassword, setIsTypePassword] = useState(true)
    const formSchema = zSchema.pick({
        name: true, email: true, password: true
    }).extend({
        confirmPassword: z.string()
    }).refine((data) => data.password === data.confirmPassword, {
        message: 'Password and confirm password must be same.',
        path: ['confirmPassword']
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    const handleRegisterSubmit = async (values) => {
        try {
            setLoading(true)
            const { data: registerResponse } = await axios.post('/api/auth/register', values)
            if (!registerResponse.success) {
                throw new Error(registerResponse.message)
            }

            form.reset()
            showToast('success', registerResponse.message)

        } catch (error) {
            showToast('error', error.message)
        } finally {
            setLoading(false)
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
                    <div className='text-center mb-6'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>Create Account!</h1>
                        <p className="text-sm sm:text-base text-gray-600">
                            Create new account by filling out the form below.
                        </p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleRegisterSubmit)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="John Doe" {...field} className="w-full" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="example@gmail.com" {...field} className="w-full" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="***********" {...field} className="w-full" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type={isTypePassword ? 'password' : 'text'}
                                                placeholder="***********"
                                                {...field}
                                                className="w-full pr-10"
                                            />
                                        </FormControl>
                                        <button
                                            className='absolute top-[38px] right-3 cursor-pointer text-gray-500'
                                            type='button'
                                            onClick={() => setIsTypePassword(!isTypePassword)}
                                        >
                                            {isTypePassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </button>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <ButtonLoading
                                loading={loading}
                                type="submit"
                                text="Create Account"
                                className="w-full cursor-pointer"
                            />

                            <div className='text-center text-sm sm:text-base'>
                                <div className='flex justify-center items-center gap-1'>
                                    <p>Already have account?</p>
                                    <Link href={WEBSITE_LOGIN} className='text-primary underline'>
                                        Login!
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default RegisterPage
