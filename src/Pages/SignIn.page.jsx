import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import { Label } from "../components/ui/label.jsx";
import { Input } from "../components/ui/input.jsx";
import { Button } from "../components/ui/button.jsx";
import { Formik, Form } from "formik";

const SignIn = () => {
  const nav = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    console.log("hello");
  };
  return (
    <div className=" w-3/5 mx-auto bg-red-600 h-full flex justify-center items-center">
      <Card className=" basis-2/4">
        <CardHeader className="flex-row justify-between mb-3 ">
          <CardTitle>Sign In</CardTitle>
          <CardDescription className="text-basic">
            I don't have an accout
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValue}
            className="w-full"
            onSubmit={handleSubmit}
          >
            {({handleBlur,handleChange,values}) => (
              <>
                <Form className="flex gap-4 flex-col">
                  <Label htmlFor="email">Email Address</Label>
                  <Input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" name="email" id="email" />
                  <Label htmlFor="password">password </Label>
                  <Input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" name="password" id="password" />
                  <Button type="submit" className="mt-5 w-full">
                    Sign In
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
