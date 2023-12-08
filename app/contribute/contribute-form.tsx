"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contributeAction } from "@/app/contribute/_actions/contribute";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import Link from "next/link";
import { useEffect } from "react";
import { celebrate } from "@/utils/confetti";

export const contributeFormSchema = z.object({
  name: z.string().optional(),
  content: z.string().min(15, "The content is too short! Please add a little more!"),
  credit: z.string().optional(),
});

export type ContributeFormType = z.infer<typeof contributeFormSchema>;

interface ContributeFormProps {}

export function ContributeForm() {
  const form = useForm<ContributeFormType>({
    resolver: zodResolver(contributeFormSchema),
    defaultValues: {
      name: "",
      content: "",
      credit: "",
    },
  });
  const { toast } = useToast();

  const onSubmit = form.handleSubmit(async (data) => {
    const response = await contributeAction(data);
    console.log(response);
    if (response.type === "error") {
      const submitUrl = response.submitUrl;
      toast({
        title: "Error",
        description: "There was an error in submitting the form!",
        action: (
          <ToastAction altText="Manually submit" asChild>
            <Button asChild>
              <Link href={submitUrl!} target="_blank">
                Manually submit form
              </Link>
            </Button>
          </ToastAction>
        ),
      });
      return;
    }

    toast({ title: "Thank you!", description: "We'll take a look at your contribution soon!" });
    form.reset();
    celebrate();
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormDescription>
                  Enter the title of the page you want to contribute to. If you are suggesting a new page, feel free to
                  leave this field blank.
                </FormDescription>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormDescription>
                  Please use Imgur links to submit images.{" "}
                  <a href="https://imgur.com/upload" target="_blank" className="underline">
                    Click here to upload images on Imgur
                  </a>
                  . Make sure the link never expires!
                </FormDescription>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="credit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Credit</FormLabel>
                <FormDescription>
                  If you would like to be credited, leave your Reddit/Discord username or website.
                </FormDescription>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Submit</Button>
        </form>
      </Form>
    </>
  );
}
