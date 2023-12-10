"use client";

import { ContributeForm } from "@/app/contribute/contribute-form";
import { Spacer } from "@/components/spacer";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LuPen } from "react-icons/lu";

interface ContributeSheetButtonProps {
  pageTitle: string;
}

export function ContributeSheetButton({ pageTitle }: ContributeSheetButtonProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"}>
            <LuPen className="mr-2" />
            Edit
          </Button>
        </SheetTrigger>
        <SheetContent>
          <p className="text-muted-foreground">
            To contribute to the {pageTitle} page, please fill out this form. Add content you'd like to see in the
            "Content" field below.
          </p>
          <Spacer className="h-3" />
          <ContributeForm pageTitle={pageTitle} />
        </SheetContent>
      </Sheet>
    </>
  );
}
