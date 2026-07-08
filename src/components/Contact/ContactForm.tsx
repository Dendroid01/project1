import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import Button from "../mobileButton.tsx";
import {FormField} from "./FormField";

const UserIcon = ({className = ""}: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
         className={`size-6 ${className}`}>
        <path fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"/>
    </svg>
);

const EmailIcon = ({className = ""}: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={`size-6 ${className}`}>
        <path
            d="M4.80029 5.2998H19.2007C19.6853 5.29981 20.1518 5.48486 20.5044 5.81738C20.7789 6.07638 20.9666 6.41025 21.0503 6.77344L11.9995 11.2988L2.94873 6.77344C3.03242 6.41013 3.221 6.07645 3.49561 5.81738C3.84831 5.48465 4.31541 5.29972 4.80029 5.2998Z"
            fill="#currentColor" stroke="currentColor"/>
        <path
            d="M21.5999 9.7417L11.9999 14.5417L2.3999 9.7417V16.8001C2.3999 17.4366 2.65276 18.0471 3.10285 18.4972C3.55293 18.9472 4.16338 19.2001 4.7999 19.2001H19.1999C19.8364 19.2001 20.4469 18.9472 20.897 18.4972C21.347 18.0471 21.5999 17.4366 21.5999 16.8001V9.7417Z"
            fill="#currentColor"/>
    </svg>);

const contactSchema = z.object({
    fullName: z.string().trim().min(1, 'Please fill this mandatory field'),
    email: z
        .string()
        .trim()
        .min(1, 'Please fill this mandatory field')
        .email({message: 'Please enter a valid email address'}),
    projectDesc: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isSubmitSuccessful},
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {fullName: '', email: '', projectDesc: ''},
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form submitted:', data);

            setTimeout(() => {
                reset();
            }, 2000);

        } catch (error) {
            console.error('Submit error:', error);
            reset();
        }
    };

    return (
        <div className="bg-white rounded-2xl px-1.5 py-12 w-full">
            <h2 className="text-subtitle font-semibold text-black text-center mb-9">
                Let's discuss your project
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 px-4" noValidate>
                <FormField
                    id="fullName"
                    label="Your full name"
                    required
                    error={errors.fullName?.message}
                    icon={<UserIcon className="text-grey-dark group-focus-within:text-lavender"/>}
                    disabled={isSubmitting || isSubmitSuccessful}
                >
                    <input
                        type="text"
                        placeholder="Name Surname"
                        className="w-full bg-transparent outline-none text-black text-body-2 font-regular placeholder:text-grey-dark"
                        aria-invalid={!!errors.fullName}
                        {...register('fullName')}
                        disabled={isSubmitting || isSubmitSuccessful}
                    />
                </FormField>

                <FormField
                    id="email"
                    label="Your email"
                    required
                    error={errors.email?.message}
                    icon={<EmailIcon className="text-grey-dark group-focus-within:text-lavender"/>}
                    disabled={isSubmitting || isSubmitSuccessful}
                >
                    <input
                        type="email"
                        placeholder="name@example.com"
                        className="w-full bg-transparent outline-none text-black text-body-2 font-regular placeholder:text-grey-dark"
                        aria-invalid={!!errors.email}
                        {...register('email')}
                        disabled={isSubmitting || isSubmitSuccessful}
                    />
                </FormField>

                <div className="flex flex-col gap-2">
                    <label htmlFor="projectDesc"
                           className={`text-subtitle-2 font-semibold text-black ${(isSubmitting || isSubmitSuccessful) ? 'opacity-50' : ''}`}>
                        Tell me about your project
                    </label>
                    <div
                        className={`py-3 px-5 rounded-2xl border border-grey-light bg-white ${(isSubmitting || isSubmitSuccessful) ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <textarea
                            id="projectDesc"
                            rows={4}
                            placeholder="Add here a general description of your idea and target aim"
                            className="w-full bg-transparent outline-none resize-none text-black text-body-2 font-regular placeholder:text-grey-dark"
                            disabled={isSubmitting || isSubmitSuccessful}
                            {...register('projectDesc')}
                        />
                    </div>
                </div>

                <Button disabled={isSubmitting || isSubmitSuccessful}>
                    {isSubmitting ? 'Sending...' : 'Get in touch'}
                </Button>

            </form>
        </div>
    );
};

export default ContactForm;