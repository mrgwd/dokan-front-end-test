"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import Eye from "@/components/ui/eye";
import Spinner from "@/components/ui/spinner";

const SignInFormSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export function SignInForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  function onSubmit(data: z.infer<typeof SignInFormSchema>) {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    form.reset();
    setIsLoading(false);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-sm space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-normal">Email</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:text-placeholder mt-2 h-12 rounded-lg pl-4 md:text-lg"
                  placeholder="Enter your email"
                  {...field}
                />
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
              <FormLabel className="text-md font-normal">Password</FormLabel>
              <FormControl>
                <div className="relative z-10">
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="placeholder:text-placeholder mt-2 h-12 rounded-lg pr-12 pl-4 md:text-lg"
                    placeholder="Enter your password"
                    {...field}
                  />
                  <Button
                    variant="ghost"
                    className="absolute top-1/2 right-2 -translate-y-1/2 p-0 hover:bg-transparent"
                    onClick={handleShowPassword}
                    type="button"
                  >
                    <Eye showPassword={showPassword} />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size="lg"
          className="sshadow-accent2 hover:none to-primary from-primary/75 mb-3 h-12 w-full overflow-hidden bg-gradient-to-b p-0.5 shadow-[0_1px_2px_1px_rgba(37,122,130),0_0_0px_1px_rgba(37,122,130)]"
          type="submit"
        >
          <div className="from-primary/45 to-primary flex size-full items-center justify-center gap-2 rounded-sm bg-gradient-to-b px-6 text-[18px]">
            {isLoading && <Spinner />}
            {isLoading ? "Loggin in..." : "Login"}
          </div>
        </Button>
        <p className="mb-3 text-center">or</p>
        <Button
          size="lg"
          variant="outline"
          className="h-12 w-full text-center md:text-lg"
          type="button"
          onClick={() => {
            console.log("Google login");
          }}
        >
          <Image src={"/google.svg"} alt="Google" width={18} height={18} />
          Continue with Google
        </Button>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link className="underline" href="/sign-up">
            Register
          </Link>
        </p>
      </form>
    </Form>
  );
}
