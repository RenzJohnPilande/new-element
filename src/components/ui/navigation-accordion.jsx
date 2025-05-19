import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationAccordion = AccordionPrimitive.Root;

const NavigationAccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
NavigationAccordionItem.displayName = "AccordionItem";

const NavigationAccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between font-medium no-underline transition-all [&[data-state=open]>svg]:rotate-90",
          className
        )}
        {...props}
      >
        {children}
        <ChevronRight className="h-6 w-6 shrink-0 text-zinc-600 transition-transform duration-100" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
NavigationAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const NavigationAccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

NavigationAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  NavigationAccordion,
  NavigationAccordionItem,
  NavigationAccordionTrigger,
  NavigationAccordionContent,
};
