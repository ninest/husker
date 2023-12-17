"use client";

import { contributeAction } from "@/app/contribute/_actions/contribute";
import { Spacer } from "@/components/spacer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { celebrate } from "@/utils/confetti";
import { cn } from "@/utils/style";
import { sleep } from "@/utils/time";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@radix-ui/react-toast";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFieldArray, useForm } from "react-hook-form";
import { LuImage, LuUpload } from "react-icons/lu";
import { z } from "zod";

export const contributeFormSchema = z.object({
  name: z.string().optional(),
  content: z.string().min(15, "The content is too short! Please add a little more!"),
  credit: z.string().optional(),
  images: z.array(z.object({ url: z.string().url() })),
});

export type ContributeFormType = z.infer<typeof contributeFormSchema>;

interface ContributeFormProps {
  pageTitle?: string;
}

export function ContributeForm({ pageTitle }: ContributeFormProps) {
  const form = useForm<ContributeFormType>({
    resolver: zodResolver(contributeFormSchema),
    defaultValues: {
      name: pageTitle ?? "",
      content: "",
      credit: "",
      images: [],
    },
  });
  const imageUrlsField = useFieldArray({ control: form.control, name: "images" });

  const allowEditTitle = !pageTitle;
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

  const [imageIsLoading, setImageIsLoading] = useState(false);
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    for await (const file of acceptedFiles) {
      if (!file.type.includes("image")) {
        toast({
          title: `${file.name} is not an image`,
          description: "Only images can be uploaded",
          key: Math.random(),
        });
        continue;
      }

      // To prevent loading UI from flashing on and off
      // Show loading for at least 1 second
      setImageIsLoading(true);
      const startUploadTime = new Date();

      const url = await uploadToImgBB(file);

      const endUploadTime = new Date();
      const difference = endUploadTime.getTime() - startUploadTime.getTime();

      if (difference < 1250) {
        await sleep(1250 - difference);
      }

      const prevImages = form.getValues("images");
      form.setValue("images", [{ url }, ...prevImages]);
      setImageIsLoading(false);
      toast({ title: `Image added successfully!`, description: "Thanks for adding an image" });
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
                <FormLabel>Page title</FormLabel>
                {allowEditTitle && (
                  <FormDescription>
                    Enter the title or URL of the page you want to contribute to. If you are suggesting a new page, feel
                    free to leave this field blank.
                  </FormDescription>
                )}
                <FormControl>
                  <Input disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>

                  <FormDescription>
                    {isDragActive ? "Yup, drag those images here!" : "Drag 'n' drop images here."}
                  </FormDescription>

                  <FormControl>
                    <Textarea
                      rows={7}
                      {...field}
                      className={cn("[--border-pulse-color:--accent]", { "animate-border-color-pulse": isDragActive })}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Spacer className="h-2" />

            <div className="space-y-2">
              {/* Loading placeholder */}
              {imageIsLoading && (
                <>
                  <div className="border rounded-md overflow-hidden flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-[3rem] h-[3rem] animate-pulse dark:bg-gray-900 bg-gray-50" />
                      <div className="text-sm">Loading ...</div>
                    </div>
                  </div>
                </>
              )}

              {/* Actual images */}
              {imageUrlsField.fields.map((field, index) => (
                <div key={field.id} className="border rounded-md overflow-hidden flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src={field.url} height={10} width={10} className="w-[3rem] h-[3rem]" />
                    <div className="text-sm">Uploaded image</div>
                  </div>
                  <Button
                    onClick={() => imageUrlsField.remove(index)}
                    className="mr-2"
                    size={"sm"}
                    variant={"secondary"}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>

            <Spacer className="h-2" />

            <Button type="button" onClick={open} variant={"outline"} size={"sm"}>
              <LuUpload className="mr-1" />
              <LuImage className="mr-2" />
              Upload image
            </Button>
          </div>
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
