"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface CompanionFormValues {
  icon: FileList | null;
  name: string;
  subject: string;
  topic: string;
  voiceType: string;
  speakingStyle: string;
  language: string;
}

const defaultValues: CompanionFormValues = {
  icon: null,
  name: "",
  subject: "",
  topic: "",
  voiceType: "Female",
  speakingStyle: "Formal",
  language: "English",
};

const CompanionBuilderForm = () => {
  const form = useForm<CompanionFormValues>({
    defaultValues,
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<CompanionFormValues> = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className='max-w-xl mx-auto py-12'>
      <h1 className='text-2xl font-bold mb-8 text-center'>Companion Builder</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 bg-white p-8 rounded-xl shadow-md'
        >
          {/* Companion Icon */}
          <FormField
            name='icon'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companion icon</FormLabel>
                <FormControl>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={(e) => field.onChange(e.target.files)}
                    className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200'
                  />
                </FormControl>
                <FormDescription>
                  Upload an image for your companion.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Companion Name */}
          <FormField
            name='name'
            control={form.control}
            rules={{ required: "Companion name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companion name</FormLabel>
                <FormControl>
                  <input
                    type='text'
                    placeholder='Enter the companion name - ex: Calculus King'
                    className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject */}
          <FormField
            name='subject'
            control={form.control}
            rules={{ required: "Subject is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <input
                    type='text'
                    placeholder='Enter the subject - ex: Math'
                    className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Topic */}
          <FormField
            name='topic'
            control={form.control}
            rules={{ required: "Topic is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>What should this companion teach?</FormLabel>
                <FormControl>
                  <input
                    type='text'
                    placeholder='Enter the topic you want to learn - ex: Derivatives'
                    className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Voice Type */}
          <FormField
            name='voiceType'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voice Type</FormLabel>
                <FormControl>
                  <select
                    className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                    {...field}
                  >
                    <option value='Female'>Female</option>
                    <option value='Male'>Male</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Speaking Style */}
          <FormField
            name='speakingStyle'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Speaking Style</FormLabel>
                <FormControl>
                  <select
                    className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                    {...field}
                  >
                    <option value='Formal'>Formal</option>
                    <option value='Casual'>Casual</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Language */}
          <FormField
            name='language'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>
                <FormControl>
                  <select
                    className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                    {...field}
                  >
                    <option value='English'>English</option>
                    <option value='Spanish'>Spanish</option>
                    <option value='French'>French</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type='submit'
            className='w-full bg-[#FF5C2A] hover:bg-[#ff7a4d] text-white text-lg font-bold py-3 rounded-2xl mt-4'
          >
            Build Companion
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CompanionBuilderForm;
