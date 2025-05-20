import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';

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
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Define form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type FormValues = z.infer<typeof formSchema>;

interface WaitlistFormModalProps {
  trigger: React.ReactNode;
  onSubmit?: (values: FormValues) => void;
}

const WaitlistFormModal: React.FC<WaitlistFormModalProps> = ({ 
  trigger, 
  onSubmit = (values) => console.log('Form submitted:', values),
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
    form.reset();
  };

  return (
    <Dialog>
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

                <div className="pt-2 flex justify-end space-x-2 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                  <DialogClose asChild>
                    <Button 
                      variant="outline" 
                      className="text-white border-white/20 hover:bg-white/5 transition-all duration-300"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-graviital-purple to-graviital-blue text-white hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                  >
                    Join Now 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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