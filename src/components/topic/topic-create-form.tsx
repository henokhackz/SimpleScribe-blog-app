"use client";
import React from "react";
import { useFormState } from "react-dom";

import * as actions from "@/actions";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Textarea,
} from "@nextui-org/react";

import FormButton from "../ui/form-button";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">create a new topic </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3>create a topic </h3>
            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              name="name"
              isInvalid={!!formState.errors?.name}
              errorMessage={formState.errors?.name}
            />
            <Textarea
              name="description"
              type="text"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe you topic"
              isInvalid={!!formState.errors?.description}
              errorMessage={formState.errors?.description}
            />
            {formState.errors._form ? (
              <div className="p-5 border-red-400 bg-red-200 ">
                {formState.errors._form}
              </div>
            ) : null}
            <FormButton>create a topic </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
