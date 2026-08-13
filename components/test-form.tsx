import { sendMessage } from "@/lib/action";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Textarea } from "./ui/textarea";

export const TestForm = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-xs border p-4 rounded-md">
      <form action={sendMessage} className="flex flex-col gap-4">
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                name="username"
                type="text"
                defaultValue={userId}
                placeholder="Max Leiter"
              />
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Feedback</FieldLabel>
              <Textarea
                id="message"
                name="message"
                defaultValue={"Sent Message to user 1"}
                placeholder="Your Message"
                rows={4}
              />
              <FieldDescription>
                Share your thoughts about our service.
              </FieldDescription>
            </Field>
            <Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
};
