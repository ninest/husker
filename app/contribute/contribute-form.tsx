"use client";

import { contributeAction } from "@/app/contribute/_actions/contribute";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { celebrate } from "@/utils/confetti";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@radix-ui/react-toast";
import Link from "next/link";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { LuImage, LuUpload } from "react-icons/lu";
import { z } from "zod";

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

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    for await (const file of acceptedFiles) {
      if (!file.type.includes("image")) {
        toast({ title: `${file.name} is not an image`, description: "Only images can be uploaded", key: Math.random() });
        continue;
      }
      const url = await uploadToImgBB(file);

      const newContentValue = (form.getValues("content").trim() + `\n\n${url}`).trim();
      form.setValue("content", newContentValue);
      toast({ title: `${file.name} added successfully!`, description: "Thanks for adding an image" });
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop, noClick: true });

  const uploadToImgBB = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      const url = data.data.url;
      console.log(url);
      return url;
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({ variant: "destructive", description: "An error ocurred in uploading the image" });
    }
  };

  return (
    <>
      <Form {...form}>
        <input type="file" {...getInputProps()} />
        <form {...getRootProps()} onSubmit={onSubmit} className="space-y-4">
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
                  {isDragActive ? "Yup, drag those images here!" : "Drag 'n' drop images here."}
                  {/* Please use Imgur links to submit images.{" "}
                  <a href="https://imgur.com/upload" target="_blank" className="underline">
                  Click here to upload images on Imgur
                  </a>
                . Make sure the link never expires! */}
                </FormDescription>

                <FormControl>
                  <Textarea rows={7} {...field} />
                </FormControl>
                <FormMessage />
                <Button type="button" onClick={open} variant={"outline"} size={"sm"}>
                  <LuUpload className="mr-1" />
                  <LuImage className="mr-2" />
                  Upload image
                </Button>
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
