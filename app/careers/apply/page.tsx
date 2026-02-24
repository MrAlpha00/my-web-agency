'use client';

import { Suspense, useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { PaperClipIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['application/pdf'];

const applySchema = z.object({
    fullName: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(2, 'Subject is required'),
    portfolioUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
    coverMessage: z.string().min(10, 'Cover message must be at least 10 characters'),
    resume: z.any().refine((fileList) => fileList?.length === 1, 'Resume is required.')
        .refine((fileList) => fileList?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
        .refine((fileList) => ACCEPTED_FILE_TYPES.includes(fileList?.[0]?.type), 'Only .pdf format is supported.'),
});

type ApplyFormValues = z.infer<typeof applySchema>;

function ApplyForm() {
    const searchParams = useSearchParams();
    const role = searchParams.get('role');
    const formattedRole = role ? role.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'General Application';

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState('');
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

    const turnstileRef = useRef<TurnstileInstance>(null);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<ApplyFormValues>({
        resolver: zodResolver(applySchema),
        defaultValues: {
            subject: `Application for ${formattedRole}`,
        },
    });

    const resumeFile = watch('resume');
    const selectedFileName = resumeFile?.[0]?.name;

    // Re-sync subject if query param takes a moment to load
    useEffect(() => {
        if (role) {
            setValue('subject', `Application for ${formattedRole}`);
        }
    }, [role, formattedRole, setValue]);


    const onSubmit = async (data: ApplyFormValues) => {
        if (!turnstileToken) {
            setServerError('Please complete the security check.');
            return;
        }

        setIsSubmitting(true);
        setServerError('');

        try {
            const formData = new FormData();
            formData.append('fullName', data.fullName);
            formData.append('email', data.email);
            formData.append('subject', data.subject);
            formData.append('portfolioUrl', data.portfolioUrl || '');
            formData.append('coverMessage', data.coverMessage);
            formData.append('resume', data.resume[0]);
            formData.append('turnstileToken', turnstileToken);

            const response = await fetch('/api/apply', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit application.');
            }

            setIsSuccess(true);
        } catch (error: any) {
            setServerError(error.message || 'Something went wrong. Please try again later.');
            turnstileRef.current?.reset();
            setTurnstileToken(null);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence mode="wait">
            {isSuccess ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-900/40 border border-emerald-500/30 rounded-3xl p-12 text-center backdrop-blur-md"
                >
                    <div className="mx-auto w-16 h-16 bg-emerald-500/10 flex items-center justify-center rounded-full mb-6">
                        <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Application Sent Successfully</h2>
                    <p className="text-zinc-400">
                        Thank you for applying. We will review your application and respond soon.
                    </p>
                </motion.div>
            ) : (
                <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                            Join PUREONS
                        </h1>
                        <p className="text-zinc-400">
                            Submit your application for <span className="text-indigo-400 font-medium">{formattedRole}</span>.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-zinc-900/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">

                        {/* Full Name & Email */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-zinc-300">
                                    Full Name <span className="text-rose-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="fullName"
                                        {...register('fullName')}
                                        className={`block w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white shadow-sm ring-1 ring-inset ${errors.fullName ? 'ring-rose-500/50 focus:ring-rose-500' : 'ring-white/10 focus:ring-indigo-500'} sm:text-sm sm:leading-6 transition-all duration-200`}
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <p className="mt-2 text-sm text-rose-400">{errors.fullName.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-300">
                                    Email address <span className="text-rose-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        id="email"
                                        {...register('email')}
                                        className={`block w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white shadow-sm ring-1 ring-inset ${errors.email ? 'ring-rose-500/50 focus:ring-rose-500' : 'ring-white/10 focus:ring-indigo-500'} sm:text-sm sm:leading-6 transition-all duration-200`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="mt-2 text-sm text-rose-400">{errors.email.message}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Subject & Portfolio */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium leading-6 text-zinc-300">
                                    Subject <span className="text-rose-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="subject"
                                        {...register('subject')}
                                        className={`block w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white shadow-sm ring-1 ring-inset ${errors.subject ? 'ring-rose-500/50 focus:ring-rose-500' : 'ring-white/10 focus:ring-indigo-500'} sm:text-sm sm:leading-6 transition-all duration-200`}
                                    />
                                    {errors.subject && <p className="mt-2 text-sm text-rose-400">{errors.subject.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="portfolioUrl" className="block text-sm font-medium leading-6 text-zinc-300">
                                    Portfolio URL <span className="text-zinc-500 font-normal">(Optional)</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="url"
                                        id="portfolioUrl"
                                        {...register('portfolioUrl')}
                                        className={`block w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white shadow-sm ring-1 ring-inset ${errors.portfolioUrl ? 'ring-rose-500/50 focus:ring-rose-500' : 'ring-white/10 focus:ring-indigo-500'} sm:text-sm sm:leading-6 transition-all duration-200`}
                                        placeholder="https://yourportfolio.com"
                                    />
                                    {errors.portfolioUrl && <p className="mt-2 text-sm text-rose-400">{errors.portfolioUrl.message}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label className="block text-sm font-medium leading-6 text-zinc-300 mb-2">
                                Resume (PDF Only) <span className="text-rose-500">*</span>
                            </label>

                            <div className={`mt-2 flex justify-center rounded-xl border border-dashed px-6 py-8 transition-colors duration-200 ${errors.resume ? 'border-rose-500/50 bg-rose-500/5' : 'border-white/20 hover:border-indigo-400/50 hover:bg-white/5 bg-white/5'}`}>
                                <div className="text-center">
                                    <PaperClipIcon className="mx-auto h-8 w-8 text-zinc-500" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-zinc-400 justify-center">
                                        <label
                                            htmlFor="resume"
                                            className="relative cursor-pointer rounded-md font-semibold text-indigo-400 hover:text-indigo-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-900"
                                        >
                                            <span>Upload a file</span>
                                            <input id="resume" type="file" className="sr-only" accept=".pdf" {...register('resume')} />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-zinc-500 mt-2">PDF up to 5MB</p>

                                    {selectedFileName && (
                                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 text-indigo-300 text-sm rounded-lg border border-indigo-500/20">
                                            <span className="truncate max-w-[200px]">{selectedFileName}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {errors.resume && <p className="mt-2 text-sm text-rose-400">{errors.resume.message as string}</p>}
                        </div>

                        {/* Cover Message */}
                        <div>
                            <label htmlFor="coverMessage" className="block text-sm font-medium leading-6 text-zinc-300">
                                Short Cover Message <span className="text-rose-500">*</span>
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="coverMessage"
                                    rows={4}
                                    {...register('coverMessage')}
                                    className={`block w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white shadow-sm ring-1 ring-inset ${errors.coverMessage ? 'ring-rose-500/50 focus:ring-rose-500' : 'ring-white/10 focus:ring-indigo-500'} sm:text-sm sm:leading-6 transition-all duration-200`}
                                    placeholder="Tell us why you're a great fit..."
                                />
                                {errors.coverMessage && <p className="mt-2 text-sm text-rose-400">{errors.coverMessage.message}</p>}
                            </div>
                        </div>

                        {/* Turnstile & Errors */}
                        <div className="pt-2">
                            <Turnstile
                                ref={turnstileRef}
                                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                                onSuccess={(token) => setTurnstileToken(token)}
                                options={{ theme: 'dark' }}
                            />
                            {serverError && (
                                <div className="mt-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-start">
                                    <XMarkIcon className="w-5 h-5 text-rose-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <p className="text-sm text-rose-400">{serverError}</p>
                                </div>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="pt-4 border-t border-white/5">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-xl bg-indigo-500 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                {isSubmitting ? 'Sending Application...' : 'Send Application'}
                            </button>
                        </div>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


export default function ApplyPage() {

    return (
        <div className="bg-black min-h-screen py-24 sm:py-32 text-white selection:bg-indigo-500/30">
            <div className="mx-auto max-w-2xl px-6 lg:px-8 relative z-10">

                {/* Background Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 -z-10">
                    <div className="w-[600px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full" />
                </div>

                <Suspense fallback={<div className="min-h-screen py-32 text-center text-zinc-400 flex items-center justify-center">Loading application...</div>}>
                    <ApplyForm />
                </Suspense>

            </div>
        </div>
    );
}
