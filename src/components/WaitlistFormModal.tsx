import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { submitToWaitlist } from '@/api/waitlist';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

// Define form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  agreedToTerms: z.boolean().refine((value) => value === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface WaitlistFormModalProps {
  trigger: React.ReactNode;
  onSubmit?: (values: FormValues) => void;
}

const WaitlistFormModal: React.FC<WaitlistFormModalProps> = ({ 
  trigger, 
  onSubmit,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      agreedToTerms: false,
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // The form validation ensures all fields are filled and valid
      await submitToWaitlist({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        agreedToTerms: values.agreedToTerms
      });
      
      // Call the custom onSubmit handler if provided
      if (onSubmit) {
        onSubmit(values);
      }
      
      form.reset();
      setDialogOpen(false);
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
        variant: "default",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] md:max-w-[700px] bg-graviital-dark border-graviital-blue/30 text-white animate-dialog-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hidden md:block">
            <div className="relative h-full w-full overflow-hidden rounded-l-lg">
              <img 
                src="/images/register_img.png" 
                alt="GraviitalBeats" 
                className="object-cover h-full w-full animate-subtle-pulse transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-graviital-purple/80 to-graviital-blue/70 mix-blend-multiply animate-gradient"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h3 className="text-xl font-bold">Join GraviitalBeats</h3>
                <p className="text-sm opacity-90">Be part of the future of beat licensing</p>
              </div>
            </div>
          </div>

          <div>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Join the Waitlist</DialogTitle>
              <DialogDescription className="text-gray-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                Get early access, exclusive perks, and experience fiat & crypto payment options
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                      <FormLabel className="text-gray-200">First Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your first name" 
                          className="bg-white/10 border-white/20 text-white focus:border-graviital-blue-light focus:ring-1 focus:ring-graviital-blue-light/50 transition-all duration-300 hover:border-white/30" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                      <FormLabel className="text-gray-200">Last Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your last name" 
                          className="bg-white/10 border-white/20 text-white focus:border-graviital-blue-light focus:ring-1 focus:ring-graviital-blue-light/50 transition-all duration-300 hover:border-white/30" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                      <FormLabel className="text-gray-200">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email address" 
                          className="bg-white/10 border-white/20 text-white focus:border-graviital-blue-light focus:ring-1 focus:ring-graviital-blue-light/50 transition-all duration-300 hover:border-white/30" 
                          type="email"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agreedToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-white/30 data-[state=checked]:bg-graviital-blue data-[state=checked]:border-graviital-blue"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-200">
                          I agree to the <Link to="/terms" className="text-graviital-blue hover:text-graviital-purple underline" target="_blank">terms and conditions</Link>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div className="pt-2 flex justify-end space-x-2 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                  <DialogClose asChild>
                    <Button 
                      variant="outline" 
                      className="text-white border-white/20 hover:bg-white/5 transition-all duration-300"
                      type="button"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-graviital-purple to-graviital-blue text-white hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Now'} 
                    {!isSubmitting && <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistFormModal; 